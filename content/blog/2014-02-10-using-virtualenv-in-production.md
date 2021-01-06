---
date: "2014-02-10T00:00:00Z"
description: virtualenv is great but it requires a bit of work to get it running for
  various services. Below are the ways I've gotten it working with Nginx, Gunicorn,
  Supervisor, Celery, and Fabric.
keywords: virtualenv, python, nginx, gunicorn, supervisor, celery, fabric
tags:
- 'python'
- 'code'
title: Using virtualenv in production
---

One of my favorite things about Python is being able to use <a href="http://www.virtualenv.org/en/latest/index.html" target="_blank">virtualenv</a> to create isolated environments. It’s extremely simple to use and allows you to have different versions of Python libraries used by different projects.

The thing that's tricky is getting virtualenv set up on a production environment under different services since each one requires a slightly different configuration. I’ve gone through my projects and collected the various ways I’ve gotten it running for different services. I’m sure I could have done it differently but the following worked for me and will hopefully come in handy to others. If you have any questions or I'm not being clear enough let me know and I'll updat the post with more information.

<ul>
  <li>Nginx and Gunicorn under Supervisor.

  <p><a href="http://nginx.org/" target="_blank">Nginx</a> - The configuration isn't anything different than normal except that you may need to specify some specific paths that are within your virtualenv</p>
{{< highlight nginx >}}
  Static files needs to point to virtualenv directory
location /static/admin {
  autoindex on;
  root   /home/ubuntu/app/venv/lib/python2.7/site-packages/django/contrib/admin/;
}
{% endhighlight nginx %}

  <p><a href="http://gunicorn.org/" target="_blank">Gunicorn</a> - I have a shell script here that's used to set the various paths and options that configure Gunicorn</p>
{{< highlight bash >}}
#!/bin/bash
set -e
DJANGODIR=/home/ubuntu/app
DJANGO_SETTINGS_MODULE=app.settings.prod

LOGFILE=/var/log/gunicorn/guni-app.log
LOGDIR=$(dirname $LOGFILE)
NUM_WORKERS=2
# user/group to run as
USER=ubuntu
GROUP=ubuntu
cd /home/ubuntu/app
source /home/ubuntu/app/venv/bin/activate

export DJANGO_SETTINGS_MODULE=$DJANGO_SETTINGS_MODULE
export PYTHONPATH=$DJANGODIR:$PYTHONPATH

test -d $LOGDIR || mkdir -p $LOGDIR
exec /home/ubuntu/app/venv/bin/gunicorn_django -w $NUM_WORKERS \
  --user=$USER --group=$GROUP --log-level=debug \
  --log-file=$LOGFILE -b 0.0.0.0:8000 2>>$LOGFILE
{% endhighlight bash %}

  <p><a href="http://supervisord.org/" target="_blank">Supevisor</a> - Here we just point our configuration file to the shell script for Gunicorn</p>
{{< highlight ini >}}
[program:gunicorn-myapp]
directory = /home/ubuntu/myapp
user = ubuntu
command = /home/ubuntu/myapp/scripts/start.sh
stdout_logfile = /var/log/gunicorn/myapp-std.log
stderr_logfile = /var/log/gunicorn/myapp-err.log
{% endhighlight ini %}
  </li>

<li><a href="http://www.celeryproject.org/" target="_blank">Celery</a> under Supervisor.

<p>In this case we just configure Supervisor to start virtualenv path for celery. A cool feature is being able to specify the environment variables - in my case to pass in the Django settings module.</p>

{{< highlight ini >}}
[program:celery]
; Set full path to celery program if using virtualenv
command=/home/ubuntu/myapp/venv/bin/celery worker -A myapp --loglevel=INFO

directory=/home/ubuntu/myapp
user=nobody
numprocs=1
stdout_logfile=/var/log/celery/worker.log
stderr_logfile=/var/log/celery/worker.log
autostart=true
autorestart=true
startsecs=10

environment =
  DJANGO_SETTINGS_MODULE=myapp.settings.prod
{% endhighlight ini %}
</li>

<li><a href="http://docs.fabfile.org/en/1.8/" target="_blank">Fabric</a>.

<p>The idea here is to make sure all our remote install commands are run after activiating the virtualenv.</p>

{{< highlight python >}}
from __future__ import with_statement
from fabric.api import *
from contextlib import contextmanager as _contextmanager

env.activate = 'source /home/ubuntu/myapp/venv/bin/activate'
env.directory = '/home/ubuntu/myapp'

@_contextmanager
def virtualenv():
    with cd(env.directory):
        with prefix(env.activate):
            yield

@hosts(env.roledefs['db'])
def rebuild_index():
    with virtualenv():
        run("python manage.py rebuild_index")
{% endhighlight python %}
</li>
</ul>