---
layout: post
title: "Run Django under Nginx, Virtualenv and Supervisor"
description: "Most guides on deploying Django only cover the individual packages. I wanted to share the way I deploy Django using Nginx, Virtualenv, and Supervisor"
keywords: "django, nginx, virtualenv, supervisor"
category:
tags: ["#python", "#code"]
---
{% include JB/setup %}
After yet another attempt to deploy a <a href="https://www.djangoproject.com/" target="_blank">Django</a> application I decided to document the steps required to get everything up and running. The tutorials I’ve seen tend to focus on individual pieces rather than on the way all these packages work together which always led to me a lot of dead ends and StackOverflow so this will hopefully address some of those issues.

In particular, I want to focus on the configuration rather than the installation of the various packages since that’s covered in the package documentation.

I don't know if this is the best way to deploy Django but it's the approach I've been able to come up with by stumbling around and getting help from the docs, Google, and StackOverflow. If there are better ways out there please let me know.

<ul class="bulleted">
	<li>
		<p><strong>Gunicorn</strong>- /home/ubuntu/project/scripts/start.sh</p>
		<p>The nice thing here is that we define the port to serve our application on so we can serve multiple projects on a single server with each one using a different port. Note that the settings approach used here is from <a href="https://github.com/twoscoops/django-twoscoops-project/tree/develop/project_name/project_name/settings" target="_blank">Two Scoops of Django</a>.
		</p>
{% highlight bash %}
#!/bin/bash
set -e
DJANGODIR=/home/ubuntu/project
DJANGO_SETTINGS_MODULE=project.settings.prod

LOGFILE=/var/log/gunicorn/guni-project.log
LOGDIR=$(dirname $LOGFILE)
NUM_WORKERS=3
# user/group to run as
USER=ubuntu
GROUP=ubuntu
cd /home/ubuntu/project
source /home/ubuntu/project/venv/bin/activate

export DJANGO_SETTINGS_MODULE=$DJANGO_SETTINGS_MODULE
export PYTHONPATH=$DJANGODIR:$PYTHONPATH

test -d $LOGDIR || mkdir -p $LOGDIR
exec /home/ubuntu/project/venv/bin/gunicorn_django -w $NUM_WORKERS \
  --user=$USER --group=$GROUP --log-level=debug \
  --log-file=$LOGFILE -b 0.0.0.0:8001 2>>$LOGFILE{% endhighlight %}
</li>

<li>
	<p><strong>Nginx</strong> - /etc/nginx/sites-enabled/project</p>
	<p>The key parts here are that we're redirecting all www.project.com requests to project.com, serving the static files using Nginx rather than rely on Gunicorn, and passing other requests to the Gunicorn server running on the port defined in the Gunicorn start script above.
	</p>
{% highlight nginx %}
server {
    # Redirect all www.project.com requests to project.com
    listen 80;
    server_name www.project.com;
    return 301 http://project.com$request_uri;
}

server {
    listen   80;
    server_name project.com;
    # no security problem here, since / is alway passed to upstream
    root /home/ubuntu/project/;
    # serve directly - analogous for static/staticfiles
    location /media/ {
        # if asset versioning is used
        if ($query_string) {
            expires max;
        }
    }
    location /admin/media/ {
        # this changes depending on your python version
        root /home/ubuntu/project/venv/lib/python2.7/site-packages/django/contrib;
    }
    location /static/admin {
        autoindex on;
        root   /home/ubuntu/project/venv/lib/python2.7/site-packages/django/contrib/admin/;
    }
    location /static/ {
        autoindex on;
        alias   /home/ubuntu/project/assets/;
    }
    location / {
    # This section is to redirect all http traffic to https if desired
    # if ($http_x_forwarded_proto != 'https') {
    #   rewrite ^ https://$host$request_uri? permanent;
    # }

        client_max_body_size 5M;
        client_body_buffer_size 128k;
        proxy_pass_header Server;
        proxy_set_header Host $http_host;
        proxy_redirect off;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Scheme $scheme;
        proxy_connect_timeout 300;
        proxy_read_timeout 300;
        proxy_pass http://127.0.0.1:8001/;
    }
    # what to serve if upstream is not available or crashes
    error_page 500 502 503 504 /media/50x.html;{% endhighlight %}
</li>

<li>
	<p><strong>Supervisord</strong> - /etc/supervisord/gunicorn-project.conf</p>
	<p>Here we just specify the location of the Gunicorn start script so Supervisor can manage it.</p>
{% highlight ini %}
[program:gunicorn-project]
directory = /home/ubuntu/project
user = ubuntu
command = /home/ubuntu/project/scripts/start.sh
stdout_logfile = /var/log/gunicorn/project-std.log
stderr_logfile = /var/log/gunicorn/project-err.log{% endhighlight %}
</li>
</ul>