---
layout: post
title: "Shaming meeting room hogs"
description: "After getting frustrated with some meetings being booked across multiple rooms I decided to do something about it and wrote a quick Python script to pinpoint it happening."
keywords: "google calendar, meeting rooms, double booking"
image_url:
category:
tags: ["#code"]
---
{% include setup %}
One of the first things felt by a quickly growing company is the lack of meeting space. The first few weeks at a new office it’s incredibly liberating to know you can find a room at the last minute to have a meeting. Yet after a few months and a bunch of extra people you discover you have to book meetings in advance. And what makes this worse is seeing multiple rooms booked for the same meeting. After noticing this happening I decided to do something about it and wrote a quick script to pull the meeting calendar for every room in [Google Calendar](https://developers.google.com/google-apps/calendar/) and then identify the ones that have the same start time, end time, and creator. This isn’t perfect since it won’t identify cases where someone books multiple rooms for the same time if the meetings don’t have the same start and end dates but it’s a solid start and already caught this happening. The code is up on [GitHub](https://github.com/dangoldin/gcal-shaming) so feel free to take a look and provide suggestions.
