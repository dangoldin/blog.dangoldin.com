---
layout: post
title: "Engineering management: Measuring the unmeasurable"
description: "As managers we need to make our teams as productive as we can be. To do that we need to figure out what to measure since that's a clear way of improving. But how can we find the appropriate metrics?"
keywords: "engineering measurement, metrics, productivity"
image_url:
category:
tags: ["#management"]
---
{% include setup %}
A key part of management is getting out of the way and building out processes that help your team be as productive as possible. At the same time, you can’t change what you can’t measure. Combining these two makes it clear that to improve, whether people or process, you need to start measuring and tracking the appropriate metrics.

In software engineering, some things are easy to track: how many bugs there are, how quickly they’re resolved, how much code are written - but rarely tell the whole story and may lead to perverse incentives. The common example is measuring developer productivity through number of lines of code written: a smart developer would purposefully write verbose and long winded code to get their metric up.

Then there are the items that are hard to measure but actually drive productivity: improvement as an engineer, simple and expressive code, code that’s easily changed. These are incredibly difficult to measure, especially at scale, but if you’re able to focus on improving these you’ve found the holy grail.

By being creative it’s possible to come up with proxy metrics and approximations despite not being able to find easy ways of measuring the actual performance drivers. Think of these as traits that productive teams have and should be encouraged. There will always be exceptions and many are susceptible to gaming but they’re much better than nothing.

Besides the usual suspects (velocity, bugs, test coverage), I plan on tracking the following proxy metrics. Individually they don’t tell the whole story but taken together I hope they’ll be a good way to help improve the productivity of an engineering team. Note that a requirement for these was that they would be easy to collect, ideally automated.

- Pull request size: I believe pull requests should be as small as they can be. Larger pull requests are harder to code review and carry more risk.
- Pull request file variance: Not a 100% sure about this one but I suspect there’s a difference in pull requests that are isolated to a small set of files rather than dozens. It may indicate that our code is not as cleanly laid out or architected as it should be and may be worth cleaning up.
- Pull request activity: Another soft one but I want to see whether the amount of comments and changes a pull request has carries any meaning. I think junior engineers tend to have more feedback on their code versus more senior developers and measuring this may be a good way of discovering that. The challenge is that this one is easily gamed and we should all want to encourage discussion of code in order to come up with as high quality code as we can.
- Deploy frequency: The more we deploy the more useful code makes it out into the real world and we should strive to deploy as often as we can while maintaining a high quality bar. We’re not at continuous deployment yet but hopefully this will help us get there.
