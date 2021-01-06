---
date: "2018-04-12T00:00:00Z"
description: It's important to load test our applications but it's surprising how
  difficult it is to do it right.
meta_img: null
keywords: load testing, coordinated ommission, gil tene
tags:
- 'devops'
title: Load testing
---

I started writing this post about using Siege to do load testing but got carried away and ended up discovering how much I don’t know. In particular, I ended up stumbling unto Gil Tene’s talk on measuring latency and how nearly every tool gets it wrong due to the bias in the tools themselves. The general idea is that most tools measure service time rather than request time. Service time is how long it takes your application to handle a request while request time is the time it takes for the user to receive a response. The former is from the perspective of the application but the latter is from the perspective of the caller.

A good way to think about it is to imagine your application can handle 10 requests a second but also comes with an infinite request queue. If the queue is empty 10 requests will be handled immediately, otherwise the queue will start to fill up. Service time will measure how long it takes your application to handle a task once it’s off the queue but the request time is measured from the time the task was put on the queue - with no load they’re the same but as soon as load increases the request time blows up.

It’s a fascinating talk and if you’re at all interested in load testing your applications it’s well worth watching:

<amp-youtube data-videoid="lJ8ydIuPFeU" layout="responsive" width="640" height="480"></amp-youtube>
