---
layout: post
title: "Lessons learned teaching a MySQL class"
description: "I volunteer tough a four part Intro to MySQL class and wanted to share some of the lessons I learned."
keywords: "teaching, volunteering, mysql"
image_url:
category:
tags: ["#meta"]
---
{% include setup %}
Last Thursday was the last lesson of the four part Introduction to MySQL class I’ve been teaching at <a href="http://www.c4q.nyc/" target="_blank">Coalition for Queens</a> and I wanted to summarize my thoughts while they’re still fresh.

The diversity of the class was amazing and shows how useful affordable technology programs are. You get a mix of people from different backgrounds and different ages that all want to improve themselves and can all contribute in their own ways. Everyone has a unique experience and introducing technology into it may open up new opportunities.

It’s tough to get a curriculum that works for everyone but it’s important to try. Some people grasp concepts quicker than others. Some want to see more hands-on exercises. Some want homework assignments. Some want to be able to split up into groups and work with others on more complicated assignments. The dataset itself needs to be relevant and realistic or people will lose interest. I put the <a href="http://dangoldin.com/mysql-class/" target="_blank">curriculum up on GitHub</a> for suggestions but didn’t get any - hopefully others will use it in their classes.

Tools matter. For the first two sessions I used Keynote to generate the presentation and then exported it to a PDF. This approach lacked syntax highlighting which I wanted given the technical nature of the course. I switched to the wonderful <a href="http://remarkjs.com/#1" target="_blank">Remark.js</a> which allowed me to create slideshows using GitHub flavored markdown. This allowed me to integrate exercises into the lecture while incorporating syntax-highlighted examples. One issue was that it wasn’t as straightforward to export it as a PDF and I had to print it to a PDF file via Chrome.

Volunteer teaching is a great way to “teach to fish” rather than just giving a fish while helping develop public speaking skills and meeting a ton of awesome people. If you’re in New York City, work in technology, and believe technical skills are increasingly important you should take a look and try teaching a class at Coalition for Queens.