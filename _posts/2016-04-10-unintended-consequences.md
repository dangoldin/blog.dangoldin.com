---
layout: post
title: "Unintended consequences"
description: "MaxMind made a decision in 2002 that has led to some unfortunate unintended consequences. It's important to think about the societal impact of the code we write."
keywords: "buggy code, maxmind, geolocation"
image_url:
category:
tags: ["#code", "#society"]
---
{% include JB/setup %}
Earlier today I read an [article about MaxMind](http://fusion.net/story/287592/internet-mapping-glitch-kansas-farm/), a company that offers an IP address to geographic location mapping service, making a seemingly minor decision in 2002 that that led to unintended consequences that have been going on since then. The article goes into detail about the decision and the effect but the main idea is that it’s not a prefect system and they needed a way to approximate some IP addresses to particular locations. Lo and behold these locations are now seeing tons of harassment from law enforcement and various strangers online.

This is a perfect example of how a quick fix to a seemingly simple problem can lead to a world of problems that can impact others without you even knowing. I can imagine myself running into that problem and making the same decision. It’s unlikely I would have thought about the people that may have lived at those coordinates or that people would actually be using this information to track people down.

There’s a lesson here for everyone who’s writing software: at the end of the day all the code we write will have some effect on people and we need to be mindful of that. We’re not going to stop making mistakes but we should take the time to consider the impact of every line of code we write.
