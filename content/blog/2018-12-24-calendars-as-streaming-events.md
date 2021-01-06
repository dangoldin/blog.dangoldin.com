---
date: "2018-12-24T00:00:00Z"
description: All calendars are are event streams and I'd love to be able to interact
  with them in a way taking advantage of that.
meta_img: null
keywords: calendars, event streams
tags:
- 'meta'
title: Calendars as streaming events
---

I like calendars. They appeal to both my sense of organization and efficiency but also to the actual depth of the technical implementation. It’s not easy creating a good calendar application - you have to think about all sorts of edge cases - for example rescheduling an event that was part of a recurring series or the usual time zone nonsense. A thought I keep going back to is treating calendars as event streams. Right now I have a personal calendar as well as a few others that are shared with different groups. Using code it’s possible to collect the events across these calendars and then apply various operations on top of them - find events that overlap, find people that overlap, analyze the event frequencies, etc but this has to be done through very specific logic. I love the idea of calendars just consistent of event streams. That way you can apply transformations on top of the streams to answer any questions you have. I imagine this to be a form of lazy list expression or even something like a SQL query that would allow me to take all the events I have going on and apply a map/reduce like operation to get what I need. This still feels a bit abstract and I need to flesh out the idea a bit more but I feel there’s something here - just being able to treat your calendar as a single stream and provide a simple way to act on top of them.
