---
layout: post
title: "Set up HTTPS on EC2 running Nginx without ELB"
description: "A quick guide on how to set up HTTPS on an EC2 instance that's running Nginx without having to upload the SSL certificate to an ELB"
keywords: "https, ssl, ec2, nginx"
image_url:
category:
tags: ["#code", "#devops"]
---
{% include setup %}
I recently needed to set up HTTPS for my side project, <a href="https://better404.com/" target="_blank">better404.com</a>. Amazon makes it easy to <a href="http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/US_UpdatingLoadBalancerSSL.html" target="_blank">set up</a> by uploading it directly to an ELB but in my case it’s hosted on a single AWS instance so I didn’t want to pay for an ELB that would be more expensive than my one instance. I’ve heard horror stories and expected the worst but it turned out surprisingly easy. Hopefully these steps can help someone else out.

<ul>
  <li>Get an HTTPS certificate. I bought three certificates from Namecheap a couple of months ago when they were running a  promotion.</li>
  <li>Go through the certificate generation process. I found <a href="http://kbeezie.com/free-ssl-with-nginx/" target="_blank">this guide</a> that explains how to do it detail and worked well for me. The only things I had to change where the  Nginx certificate configuration folder path (/opt/local/nginx/conf/certs => /etc/nginx/certs/) and replacing the filenames to be more specific (domain.* to better404.*). Note that this process is not immediate and you will need to send the contents of your CSR file to the SSL provider and they will respond back with the SSL certificate to use.</li>
  <li>Enable SSL in Nginx. The previous guide provides some information here and I’m including the relevant parts from my configuration. I chose to redirect all traffic to HTTPS rather than supporting both simultaneously.
{% highlight nginx %}#Nginx config
server {
    listen *:80;
    server_name www.better404.com;
    rewrite        ^ https://$server_name$request_uri? permanent;
}

server {
    listen *:80;
    server_name better404.com;
    rewrite        ^ https://$server_name$request_uri? permanent;
}

server {
    listen *:443 ssl;
    server_name better404.com;

    ssl on;
    ssl_certificate certs/better404.pem;
    ssl_certificate_key certs/better404.key;{% endhighlight nginx %}</li>
  <li>Allow Nginx to bind to the IP address. One thing that’s not mentioned in the guide and required a bit of digging around is that you need to allow Nginx to bind to the non local IP address - otherwise it can only access the private IP address set by AWS. There’s a <a href="http://stackoverflow.com/a/13141104/1139968" target="_blank">quick guide</a> on how to do this I found on StackOverflow.</li>
</ul>

If you have any questions feel free to leave a comment and I’ll try to help out.