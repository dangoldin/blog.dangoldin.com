---
layout: post
title: "Curated Twitter timelines and the tech stack"
description: "There have been rumors that Twitter will move to a curated model for the stream. I think it's interesting to see the impact this will have on their tech stack."
keywords: "twitter, curation, social media, tech stack"
image_url:
category:
tags: ["#product"]
---
{% include setup %}
Apparently Twitter is considering curation user’s timelines. A perspective people haven’t really discussed is the impact on the tech side. Right now each user has a unique timeline that needs to be presented in near-real time in case they need to see it. This results in a massive storage operation using Redis where these timelines are <a href="http://highscalability.com/blog/2014/9/8/how-twitter-uses-redis-to-scale-105tb-ram-39mm-qps-10000-ins.html" target="_blank">continuously generated and cached</a>. By moving to a model where every user can be categorized into a group that sees a particular set of tweets Twitter can drastically reduce the amount of data they need to store per user. I’m sure Twitter already has a way of categorizing users in order to support the ad product and this approach would extend it to the “stream” product. In a way it’s akin to how compression works - find repeated patterns and replace every occurrence with something shorter. Then when you want to uncompress you just reverse the process.

I doubt this is the primary driver of the curation discussion and there are clearly more important issues at stake but this may be the proverbial “cherry on top” that will get Twitter to move to the curated model.