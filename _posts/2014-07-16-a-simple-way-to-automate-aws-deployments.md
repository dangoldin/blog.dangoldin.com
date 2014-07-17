---
layout: post
title: "A simple way to automate AWS deployments"
description: "A simple way to automate AWS deployments is to use the AWS CLI to retrieve information about every instance and then use the instancedata endpoint to retrieve information about the current instance."
keywords: "aws, deployment, automation, devops"
image_url:
category:
tags: ["#devops"]
---
{% include JB/setup %}
A little known feature in AWS is an endpoint that allows you to retrieve various information about about the requesting instance. If you log in to one of your EC2 instance and make a simple request to http://169.254.169.254/latest/meta-data/instance-id you will get back the id of that instance. Similarly, you can get all sorts of <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html" target="_blank">other instance information</a>, including the public hostname, the instance region, and instance type.

This can be useful when you want to automate a simple deployment where you have a few instance with a variety of roles. A lightweight approach would be to use the <a href="https://aws.amazon.com/cli/" target="_blank">AWS CLI</a> to retrieve a list of all running instances along with their tag names, make a request to the meta-data/instance-id endpoint to get the id of the current instance, and then look up that id in the instance list in order to figure out what the role of this instance should be. Then execute the appropriate set of scripts to configure the instance properly.

More advanced solutions would involve using <a href="http://www.getchef.com/chef/" target="_blank">Chef</a>, <a href="http://puppetlabs.com/" target="_blank">Puppet</a>, or <a href="https://aws.amazon.com/opsworks/" target="_blank">Opswork</a> but they come with a steep learning curve and overkill for a simple application. If it turns out your application is growing you can always upgrade to a more robust deployment solution.