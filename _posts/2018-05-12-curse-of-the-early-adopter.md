---
layout: post
title: "Curse of the early adopter"
description: "If you adopt a technology early you end up running a ramshackled implementation that you will rarely, if ever, update. You likely won't even keep track of the improvements to the technology."
keywords: "early adopter, open source, tech debt"
image_url:
category:
tags: ["#meta"]
---
{% include setup %}
Yesterday I spent a bit of time getting Ansible setup for my various instances that host my various projects. There are a handful scattered across AWS and Digital Ocean and I go through a round of maintenance every few months where I upgrade everything that needs upgrading. This was rare enough that I never bothered automating it but had half an hour to spare and thought this was an opportunity to learn Ansible - something that the TripleLift DevOps team has been using.

Turns out it was surprisingly easy and I only wish I had done it sooner. The documentation is great and it’s mature enough that there are tons of examples for whatever scenario one may encounter. The fact that my use case was simple didn’t hurt but I suspect even a more complicated one would have some examples.

But the only reason it was so easy was because I was such a late adopter. Ansible was initially released in 2012 and it’s grown significantly since then. Had I adopted it when it launched I would have had to figure everything out the hard way. More importantly, once I got it working I doubt I’d revisit later versions to see the latest improvements. That’s the curse of the early adopter - it takes you a while to get everything working in a ramshackle way that it takes massive amounts of discipline to actually change your implementation once the software improves. It’s likely that you may not even know what the improvements were or how they can be applied.

This is akin to tech debt but rather than living within your own code that you’re intimately familiar with it’s with foreign code that’s rarely checked or referenced. Upgrading it carries risks and we subscribe to the policy of “if it ain’t broke, don’t fix it’ - which may very well be the correct choice but it’s important to know the tradeoffs which don’t happen with only half the information. The lesson here is if you use open source tools and libraries subscribe to their release notes and keep an open mind - it’s likely the improvements will benefit you and your code. Even better would be to contribute back to the community and build whatever needs building.
