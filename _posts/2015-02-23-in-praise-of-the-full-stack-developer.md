---
layout: post
title: "In praise of the full stack developer"
description: "I've only been managing an engineering team for 6 months now but something that I've been trying to adopt is the idea of a full stack developer."
keywords: "full stack developer, software engineering, engineering management"
image_url:
category:
tags: ["#management"]
---
{% include JB/setup %}
I’m a pretty new engineering manager but a philosophy I’ve adopted is to try to have everyone on the team be as full stack as possible. Everyone has their strengths and weaknesses but being able to grasp the entire stack improves code quality and reduces disruption. And it goes beyond technology and into the business and user world too. Understanding how these various components fit together allow you to make smarter decisions and provide the tools to test and verify your code. The other big benefit is that you’re not waiting on anyone and avoid having your flow disrupted by others.

As an example, imagine having an ecommerce website when you get the idea that you want to start tracking the amount of time people are spending mousing over your product images. The goal is to see whether this behavior is correlated with sales which will give you more data to drive an upcoming redesign. Clearly there will be front-end JavaScript involved since that will be triggering the event but there’s also a lot going on behind the scenes. Depending on the number of events you expect to see you can have a wildly different implementation. How do you want to handle multiple mouseovers over the same image? What data do you want to capture? What kind of analysis will you want to run? How will this data be tied back to the sales data? Where will this data be stored? Will there need to be any additional processing to make the data usable? How will you test the data flow? What needs to happen for you to deploy it? How much additional load will this put on the production system?

These questions can all be answered by looping in various people but understanding the business case and the full tech stack makes you more independent and increases the likelihood that the first version will be the final version. In addition to having the necessary language skills, I’d love to see every web engineer know how to set up a VPS from scratch, be comfortable with the command line, have a basic understanding of SQL and databases, and understand the various components of the web and how they fit together.