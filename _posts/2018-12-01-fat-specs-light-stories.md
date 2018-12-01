---
layout: post
title: "Fat specs, light stories"
description: "One of the core lessons I've learned managing a team is that specs and PRDs should be kept fat while stories should be minimal."
keywords: "agile, scrum, software engineering, tech specs, stories"
image_url:
category:
tags: ["#product"]
---
{% include setup %}
Most modern software companies use some form of agile as their software development process. There are a variety of different approaches and forms out there and each company ends up with a style that works for them. One of the core beliefs I’ve developed is that stories should be kept light and that time and effort should be spent on the product requirement documents and specs. Investing in the PRDs and specs encourages everyone to understand the high level problem being solved and how the various pieces of the solutions fit together. Otherwise you run the risk of mistaking the forest for the trees where each ticket is done as written but when combined they don’t actually work to make the proper whole.

The other advantage is that it’s just easier to maintain the specs and PRDs as the scope changes. Unless you’re doing something incredibly simple (which shouldn’t incur the overhead of a spec in the first place), the implementation will likely change as you code. And when it does change you want to reflect those changes somewhere so they’re not lost to anyone searching for them in the future. By updating the original spec you’re treating it as the source of truth and prevent others from wasting time hopping around from story to story looking through comments.

There are numerous ways to approach agile and the entire point is to be flexible and find what works given your company’s culture, products, and values. In our case our product is incredibly nuanced with a ton of details that it’s more important for everyone to have the shared context of what we’re doing more than the individual details that change rapidly.
