---
date: "2020-04-18T00:00:00Z"
description: While optimizing code it's useful to think about the theoretical limits
  of our code to show us what's worth optimizing.
meta_img: null
keywords: performance optimization, software engineering
tags:
- 'code'
title: Optimizing code? Think theoretical limits
---

This post was inspired from a conversation with an engineer who was tasked with optimizing the performance of a heavily used static JavaScript script. This code gets loaded billions of times a day across a variety of devices and small improvements to its load time and performance can drive significant value to our customers and us.

When you start it's easy to find the low hanging fruit and get the simple wins. But as you keep working on the same problem these wins become rarer and rarer and oftentimes a win in one area may be a loss in another. Using our static JavaScript code as an example we can argue that we should split it into multiple, smaller files and load them on demand. That would make the total amount of code loaded and executed lower but, on the other hand, would increase the number of network requests. And if you then layer in caching and the variety of devices it will run on it's not at all obvious what the impact of a change will be.

In these cases it's helpful to think about the theoretical limits. This lets you identify where the opportunities actually are. Paraphrasing [Amdahl's Law](https://en.wikipedia.org/wiki/Amdahl%27s_law) - there's no point in optimizing the areas that are responsible for only a small fraction of the total execution time. Even if you make them instant they will still be drowned out by everything else.

The theoretical limits are only a starting point. Our systems are so complex with so many moving pieces that it's imperative to actually test the performance in the real world. The example above highlights how many different pieces there are when optimizing a static bit of JavaScript - only a small part is the actual code and the rest is driven by our customers' environments and network. A web app with a core set of users may be optimized by having a single giant file. On the other hand, if your code is executed once for the average user you'll likely be better off minimizing the file as much as possible and only loading the parts that are necessary. Our intuition only gets us this far and to truly optimize our code we need to see it run in the real world.
