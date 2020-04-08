---
layout: post
title: "Gamification works"
description: "I started tracking two email metrics - number of emails in my inbox and their average age - and suddenly I find myself optimizing them."
keywords: "dataviz, quantified self, grafana, gamification"
image_url: "/assets/static/images/grafana-emails-avg-age.png"
category:
tags: ["#dataviz"]
---
{% include setup %}

<amp-img src="{{ IMG_PATH }}grafana-emails-avg-age.png" alt="Grafana dashboard for emails in inbox and the avg age" width="1840" height="943" layout="responsive"></amp-img>

Gamification works. Last week I hacked together a Grafana dashboard to measure the number of emails in my inbox and sure enough this gave me enough motivation to actually go through them. Earlier this week I added another metric to track the average age of an email and sure enough that caused me to go through the 4 and 5 year old emails.

It's quite amazing how the human mind (or at least mine) works. I've known for years that I have some very old emails floating around and I also know that I have too many emails in my inbox and yet having it visualized motivated me to actually do something. It's difficult to be introspective but I suspect the biggest factor was the quick feedback loop and knowing that by spending a bit of time I can quickly see the impact on the metrics.

The lesson here is to measure everything you want to improve, visualize it, and make looking at them a daily habit. Your human psychology will take over and you'll start optimizing against those goals.
