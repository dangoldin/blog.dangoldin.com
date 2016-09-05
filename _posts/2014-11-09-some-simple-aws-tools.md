---
layout: post
title: "Some simple AWS tools"
description: "To make it easier to connect to an AWS instance I had an old bash script that I've improved in Python."
keywords: "aws, ec2, python, ssh"
image_url:
category:
tags: ["#code"]
---
{% include setup %}
Last night I took an old bash script I wrote that simplified connecting to an EC2 instance in an AWS account and implemented the same code in Python. The old code worked by listing a set of AWS instances and then prompting to pick a single one to connect to. The problem was that it wasn’t always easy to find the index of the desired instance and the code took a bit of time to run.

The new code leverages the Python AWS library to pull down the list of instances for a given region and then filters it down based on the name, IP address, or public DNS. If it turns out there’s a match then it will only return the public IP address which makes it easy to connect using ssh. For example, to list all servers containing the name “web server” you would run the following:

{% highlight sh %}python list_hosts.py --region=us-east-1 --filter="web server"
{% endhighlight %}

And if you know there will only be one you can connect to it directly by using ssh and running the script inside two backticks:
{% highlight sh %}ssh `python list_hosts.py --region=us-east-1 --filter="web server"`
{% endhighlight %}

The code’s up on <a href="https://github.com/dangoldin/aws-tools" target="_blank">GitHub</a> but at the moment there’s just this single script. I’ll keep adding more as I run into various issues working with AWS.
