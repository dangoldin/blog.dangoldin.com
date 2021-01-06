---
date: "2016-10-01T00:00:00Z"
description: After getting frustrated with some meetings being booked across multiple
  rooms I decided to do something about it and wrote a quick Python script to pinpoint
  it happening.
meta_img: null
keywords: google calendar, meeting rooms, double booking
tags:
- 'code'
title: Shaming meeting room hogs
---

One of the first things felt by a fast growing company is the lack of meeting space. The first few weeks at a new office it’s wonderful to know you can find a room whenever you need it. Yet after a few months and a bunch of extra people you realize you have to book meetings days in advance. And what makes this worse is seeing more than one room booked for the same meeting.

After seeing this happening I decided to do something about it and wrote a quick script to pull the meeting calendar for every room from [Google Calendar](https://developers.google.com/google-apps/calendar/) and then flag the ones having the same start time, end time, and creator.  This isn’t foolproof since it won’t identify cases where someone books multiple rooms for the same time with different times but it's a solid start and already caught a few cases. The code is up on [GitHub](https://github.com/dangoldin/gcal-shaming) so feel free to take a look and provide suggestions.
