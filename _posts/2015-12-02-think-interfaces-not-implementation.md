---
layout: post
title: "Think interfaces, not implementation"
description: "It's easy to get bogged down and focus on implementation but a nicer approach is to think about the interfaces. This leads to a  hgiher quality codebase that's easier sustain and adapt."
keywords: "coding, software engineering, development, engineering management"
image_url:
category:
tags: ["#code"]
---
{% include JB/setup %}
An idea I’ve been preaching over the past few days is to start thinking in terms of interfaces when thinking about writing code rather than the actual implementation. It’s a higher level of abstraction that leads to a higher quality and more scalable product. Rather than focusing on the details it’s better to think about the components and how they’ll interact with another - this also makes it easy to put in a crappy implementation for now while making it easy to modify and rewrite in the future. As engineers there’s a strong desire to obsess over the perfect code which can lead to a significant amount of refactors and rewrites without translating into actual business value. Thinking in terms of interfaces and components forces you to get the design and architecture right and leaving the implementation details for later. A side benefit for me has been being able to take pride in the design and flow and not worry about the code itself - allowing me to write code at a much faster place and sprinkle a series of todos for the parts of the code that I know need improving.
