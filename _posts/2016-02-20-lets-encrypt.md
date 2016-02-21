---
layout: post
title: "Let's Encrypt"
description: "Let's Encrypt made it surprisingly simple to support HTTPS on my old projects."
keywords: "ssl, https, Let's Encrypt"
image_url:
category:
tags: ["#devops"]
---
{% include JB/setup %}
I’ve been meaning to mess around with [Let’s Encrypt](https://letsencrypt.org/) since they launched their public beta but haven’t had the chance until earlier today. As an proof of concept I had a bunch of old projects running on a Digital Ocean instance and decided to try converting them to HTTPS using the Let’s Encrypt project.

Despite the usual complexity of getting and integrating an SSL certificate Let’s Encrypt made it extremely easy. It was smart enough to go through each of my Apache configuration files and prompted me to see which domains I wanted to switch over to HTTPS. After selecting a few and continuing to the next step it generated new configuration files with the appropriate setting to enable SSL support.

The only issue I ran into was handling a WSGI configuration properly. Let’s Encrypt works by copying an existing configuration file and adding a few lines to specify the SSL certificate. This works great for simple configurations but can lead to an issue when you have the same WSGI configuration across two files. The fix was straightforward - temporarily comment out the conflict lines, run the Let’s Encrypt script, and then uncomment the lines in the new SSL version of the file.

Overall an extremely simple way to enable HTTPS on your projects. In the past I would have never set SSL up on toy projects due to both the cost of buying one as well as the cost of dealing with a bunch of esoteric commands to set it up. Let’s Encrypt makes it incredibly easy - especially if you’re running Apache.
