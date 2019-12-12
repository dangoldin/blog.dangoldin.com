---
layout: post
title: "Strive for linear complexity"
description: "When writing code think of ways that will allow it to grow linearly in complexity rather than multiplicatively."
keywords: "coding, software engineering, complexity"
image_url:
category:
tags: ["#meta"]
---
{% include setup %}
Good software is dynamic and evolves as the requirements grow. The code usually starts clean, elegant, and simple but inevitably grows in complexity. The challenge is to manage that growing complexity. My approach is to strive to make that complexity linear rather than multiplicative. A multiplicative approach is one where a new requirement forces you to think through other parts of your code and determine what needs to change. A linear approach is one where this additional requirement forces you to think through others in its class but not much beyond that. A simple way to visualize the difference is through if statements. A codebase with multiplicative complexity has a ton of nested ifs where writing new code requires you to understand each of the other if-else branches. A linear complexity codebase would still require you to think through a new behavior but the complexity would be limited to a flat if block.

I realize the above is a bit abstract and may not be getting the point across but the goal is to find the appropriate abstractions that let you take a complex problem and break it up into a series of independent and loosely coupled components. This requires understanding the problem domain and how to represent the various objects in a way that hides their complexity and only exposes the minimum that's necessary. None of this is simple and feels more like art than science that can be grown with experience but it's an incredibly valuable ability.
