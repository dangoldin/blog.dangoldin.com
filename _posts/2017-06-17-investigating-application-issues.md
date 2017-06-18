---
layout: post
title: "Investigating application issues"
description: "Our applications have gotten more and more complicated with dozens of different components and debugging those requires a different skillset than debugging single application bugs."
keywords: "debugging, application issues, bugs"
image_url:
category:
tags: ["#devops"]
---
{% include setup %}
A skill that seems lacking is the ability to debug large scale applications. Most people are comfortable looking at exceptions or log files and working their way back to an issue in the code but given the complexity of modern applications that’s not enough. These days applications are hosted across dozens of cloud instances while utilizing a ton of cloud services. This makes it easier to ship applications but also makes it more difficult to isolate and identify issues since they’re no longer isolated to a single service or application. When there are dozens of instances and dozens of services talking to one another an issue in one system may manifest itself as a phantom issues in others which can lead to a significant amount of wasted investigative effort.

Exploring large system issues follows the same approach as investigating small issues but the toolset is different. They both start of by coming up with a hypothesis that may explain the situation we’re seeing and then a series of steps to either confirm or reject our conjecture. If it’s rejected hopefully we’ve picked up enough clues along the way to come up with another hypothesis. And this cycle repeats until we’ve figured out what the root problem was.

In both cases you’ll be much quicker at getting at the cause if your hypotheses are intelligent. This can only happen if you have a good understanding of the system architecture and the way the data flows from one service to another. Without this knowledge you’ll be guessing and exploring blindly.

Application bugs provide exceptions and logs that help us dig into problems but larger architectures require more. I’ve found high level metrics and charts to be incredibly helpful in coming up and exploring my guesses without even having to dig into the application itself. Using AWS, and surely other cloud providers, one can get high level metrics as to what’s happening with each instance or hosted service. This may be the CPU usage, the amount of data going in and out, the number of requests - you name it. Each of these provide a data point as well as a timeline that can quickly highlight the issue. But once again these are only useful if you know how the various pieces fit together.

While most companies have dedicated DevOps engineers making sure things are running smoothly I believe every engineer should have an understanding of the overall application and where their contributions fit in. This knowledge helps both in writing more intelligent code and digging into system-wide issues when they arise.
