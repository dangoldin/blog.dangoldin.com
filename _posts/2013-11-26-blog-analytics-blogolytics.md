---
layout: post
title: "Blog analytics (blogolytics?)"
description: "I'm currently using Google Analytics for my blog but am going to also start using MixPanel and a bunch of meta data to track additional info."
keywords: "blog, analytics, google analytics, mixpanel"
category: 
tags: []
---
{% include JB/setup %}
Every time I launch a new website one of the first things I do is add <a href="http://www.google.com/analytics/" target="_blank">Google Analytics</a> to start gathering data. This blog was no different but I’ve recently been wondering whether Google Analytics is the right way to measure a blog. It’s great for tracking the total number of visitors, where they’re coming from, and how long they’re staying but I wish there was something that was optimized for blogs rather than something that was designed as a general solution.

My ideal blog analytics tool would help me understand both how readers are finding my content as well as how they’re engaging with it. It would also automatically segment my blog’s readers so I’d be able to quickly tell the different types of readers I have and what each of the groups is interested in seeing. Many of my posts end up being shared but I only discover that when I look at the referrals in Google Analytics. I’d also love to get a notification whenever one of my posts is shared on another site or social networks so I can participate in the discussion as it’s happening rather than days later.

I’m not sure about the available tools but I have some experience with <a href="https://mixpanel.com" target="_blank">MixPanel</a> and am going to see if I can jerry rig it to do what I want. It’s great for doing simple funnel and segmentation analysis but it should also be flexible enough to do a ton more stuff. One thing I’ve been thinking about is generating additional meta data for each of my posts (topics, number of words, number of images) and then feeding that into MixPanel to see what impact they have. I’ll share both the source code and results once I have it up and running.
