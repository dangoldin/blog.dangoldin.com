---
layout: post
title: "Managing settings files in Django projects"
description: "Just a quick write up of how settings files can be handled in a Django project. Things are constnatly improving so this will be outdated soon."
keywords: "Django, python, settings files"
image_url:
category:
tags: ["#python", "#code", "#devops"]
---
{% include JB/setup %}
I was helping a friend deploy a Django project over the weekend and we chatted about the best way to manage multiple settings files in a Django project. The primary reason is that you will typically have different settings between a production and development environment and but at the same time will have a lot of options shared between them. A production environment will typically be more restrictive and optimized for performance whereas a development environment will be setup to provide as much debug information as possible.

This got me thinking of the various configurations I’ve gone through over the years and what my latest approach has been. If you have additional variations and suggestions that you’ve been happy with I’d love to hear them.

<ul>
<li>My first real project had a single settings.py file that defined a different set of options based on the hostname. The benefit here was that every configuration setting was in one file and it was pretty easy to see what the differences were between development and production. The problem is that if the hostname ever changes you may break your entire application. This also makes it difficult to share you code with a team since the hostnames will be different and you end up with a massive file full of different configuration settings.
{% highlight python %}import socket

if socket.gethostname() == 'ubuntu':
    CONFIG_OPTION = 'prod-setting'
else:
    CONFIG_OPTION = 'dev-setting'
{% endhighlight python %}
</li>

<li>A simple improvement was splitting this single file into a common settings file along with separate files for each environment that were then imported based on the hostname. The common settings file would contain the shared settings while the individual environment files would contain the settings unique to each environment. This kept the files cleaner and made it clear what setting applied to which environment.
{% highlight python %}import socket

if socket.gethostname() == 'ubuntu':
    from settings_prod import *
else:
    from settings_dev import *
{% endhighlight python %}
</li>

<li>The previous options still suffered from relying on the hostname so a simple improvement was using symbolic links to point to the appropriate file. With this approach we can still have a common file as well as the individual files but the environment-specific files are importing the shared settings. The big advantage to this approach is that the the symbolic link command only needs to be run once on each server and will always point to the correct file.
{% highlight python %}# settings_prod.py

from settings_common import *

# Now set the prod only options
CONFIG_OPTION = 'prod-setting'
{% endhighlight python %}

{% highlight sh %}ln -s settings_prod.py settings.py
{% endhighlight sh %}
</li>

<li>Another option that I started using is using the DJANGO_SETTINGS_MODULE environment variable to point to the appropriate settings file. I adopted this approach after reading <a href="http://twoscoopspress.org/collections/everything/products/two-scoops-of-django-1-6" target="_blank">Two Scoops of Django</a> which has a ton of other useful tips that improved my development approach. This approach isn’t significantly different than the symbolic link one but it feels less hacky since it’s an approach supported by the official Django documentation and it’s easier to examine environment variables than looking at the symbolic links across your directory.
{% highlight sh %}export DJANGO_SETTINGS_MODULE = project.settings.prod{% endhighlight sh %}
</li>

</ul>