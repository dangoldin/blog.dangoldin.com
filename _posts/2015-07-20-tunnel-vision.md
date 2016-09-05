---
layout: post
title: "Tunnel vision"
description: "It's easy to get so obsessed with a technical problem that by solving it you introduce a litany of new ones."
keywords: "programming, coding, software engineering"
image_url:
category:
tags: ["#meta"]
---
{% include setup %}
A common behavior when solving a coding problem is focusing too much on the solution and not enough on the general context. If this is a software problem this may manifest itself as a very quick turnaround on a task that inadvertantly breaks an existing behavior or even something that ends up causing a headache months from now when a slightly more nuanced use case needs to be supported. Experienced developers will not only solve the task at hand but will also understand the limitations of their solution and are able to identify the areas that will be adversely affected by their solution. Nearly every software decision comes with tradeoffs and strong developers can think through this maze and pick the most appropriate one given the situation.

Part is experience and learning from our mistakes and part is knowing our applications and how the various components interact and fit together. A big driver of this is curiosity - some developers will stop as soon as they find a library that solves a particular problem and will maybe even read the docs but great developers will step through the actual code to understand how it works. Imagine two people working on the same tasks for a year - one who’s curious enough to read through the source code of open source libraries they used and one who doesn’t. I’d bet that the one who was curious enough to read through third party source code learned and retained significantly more than the one who didn’t. Another one is relentlessly thinking in abstractions - thinking at a higher level makes it much easier to spot patterns and identify code that needs to be refactored. This ends up paying massive dividends in the long term when massive scopes of work can be eliminated. One way to get better at this is to constantly reevaluate your work and identify code that’s been duplicated since it may be a sign you chose the wrong level of abstraction. Another one is thinking through what you’d have to do if you needed to make some tweaks in the future - would you be able to reuse the code in a clean way? Which part would be the easiest to modify? Which parts are too coupled to separate easily? The simplest way may be to just look and the code and see if it’s ugly - that may be a sign that you did something wrong.
