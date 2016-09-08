---
layout: post
title: "Don't build a Homer"
description: "In a Simpsons Homer's brother decides to build a car for the average man and comes to Homer for ideas. The end is that he builds a ridiculous car that no one wants. Don't do that."
keywords: "homer, product management, software"
image_url: /assets/static/images/homer-car.png
category:
tags: ["#product"]
---
{% include setup %}
Years ago, one of my projects at Yodle involved building out an automated reporting system that would consolidate all the existing reports being run via SQL queries and consolidate them into a unified application that would take care of the execution and the delivery. During the design process I spoke with existing users to see what else they’d like and it quickly morphed from a cron-job like application that just emailed CSV files based on SQL queries into a full fledged business intelligence tool that users could use to pull arbitrary data formatted in a multitude of ways. While thinking through the design of this application I spoke with the CTO and he gave me a phrase I keep going back to: “To get the expressiveness of SQL you have to write SQL.”

<a href="http://simpsons.wikia.com/wiki/The_Homer">
  <amp-img src="{{ IMG_PATH }}homer-car.png" alt="The Homer" style="float: right; margin-left: 10px; width:360px" width="413" height="356" layout="responsive"></amp-img>
</a>

While simple and glib I like how relevant this statement is to building software. When asked users will push for the most flexible and powerful system that comes with all the bells and whistles but at that point it’s equivalent to them just writing the code themselves. We have to know where to draw the line and understand what the use cases our product needs to support and not just everyone’s wishes. Otherwise we run the risk of building a [Homer](http://simpsons.wikia.com/wiki/The_Homer).
