---
layout: post
title: "Dates in the shell"
description: "I recently discovered how powerful the date shell utility is. Definitely an improvement over a Python script for simple date logic."
keywords: "shell scripting, date, shell date"
image_url:
category:
tags: ["#code"]
---
{% include setup %}
The longer I code the more I appreciate the power of the shell. Getting familiar with common commands is a great way to improve your productivity and over time you amass a massive collection of scripts that allow you to do nearly everything. The most recent utility I discovered was “date”. As expected, it displays the current date and time but it can easily be adapted to display the current datetime in nearly any date format but also allows you to offset the current date in a variety of ways.

{% highlight sh %}
➜  ~  date
Mon Oct 19 22:35:37 EDT 2015
➜  ~  date +%Y-%m-%d
2015-10-19
➜  ~  date +"'%Y-%m-%d'"
'2015-10-19'
➜  ~  date -v+3d +%Y-%m-%d
2015-10-22
➜  ~  date -v-3d +%Y-%m-%d
2015-10-16
➜  ~  date -v-3y +%Y-%m-%d
2012-10-19
➜  ~  date -v+3y +%Y-%m-%d
2018-10-19
➜  ~  date -v+3y +"%Y-%m-%dT%H:%M:%S"
2018-10-19T22:39:18
➜  ~  date -v+3m +"%Y-%m-%dT%H:%M:%S"
2016-01-19T22:39:24
{% endhighlight sh %}

In the past I’d resort to a JavaScript utility or a quick Python script when I needed a simple date calculation but lately I’ve been able to do nearly everything solely by using the built in date utility. It’s still a bit cumbersome for generating date ranges or when requiring complicated logic but for the basic stuff it’s surprisingly powerful and expressive. It’s amazing how full featured the shell is and how often we avoid it and use more fleshed out languages. Instead of trying to find new languages it’s worth taking the time to actually explore and understand the shell - it’s one of the better investments an engineer can make.
