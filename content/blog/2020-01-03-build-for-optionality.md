---
date: "2020-01-03T00:00:00Z"
description: I wrote a company wide email describing how our engineering team thinks
  about writing code and thought it would be helpful to post a modified version publicly.
meta_img: null
keywords: software engineering, design
tags:
- 'management'
- 'product'
title: Build for optionality
---

I wrote a company wide email back in September titled "Building for optionality" that describes how our engineering team maintains its impact despite the growing complexity of the business. There are a few TripleLift-specific concepts that I stripped away to make it more approachable but the theme is the same.

<hr/>

For a company that’s growing and changing as quickly as TripleLift, it’s critical to make sure our code is as impactful as possible. One way we do this is by building for optionality.

The idea here is that the future is uncertain and we strive to design our solutions in ways that allow us to pivot and leverage them to support domains and problems that we may not yet be aware of. When faced with choices, rather than focusing on an individual feature we endeavor to think of ways to extend our overall platform that can then be used to support a variety of evolving business cases.

This approach can be seen by the types of building blocks we create. Rather than solve the immediate problem it's useful to take a step back and see whether there's a pattern here and whether introducing intermediary concepts will give us a springboard into another potential opportunity. Unfortunately, this can easily lead to overengineering and solving problems you don't yet have which results in a codebase that’s more and more difficult to rein in and manage.

The ideal is to build in these layers of optionality when you’re building something new and uncertain but as the business evolves and you develop crisp business cases you invest in tighter and more optimal solutions. The challenge is finding that optimal point where the complexity and risk outweigh the value of this optionality.
