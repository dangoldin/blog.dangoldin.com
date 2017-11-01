---
layout: post
title: "Philosophy of code"
description: ""
keywords:
image_url:
category:
tags: []
---
{% include setup %}
After writing my post on the code review pyramid I realized that I had many more thoughts on the highest level and wanted to dedicate a post digging into it.

The idea is that a well functioning team shares the same philosophy and all members have a good feel for where and how new code should be written.

For a data project: What happens upstream? In the API? In the UI?

Class hierarchy? How to handle null types/exceptions. A programming language can't prescribe every single approach to every type of problem so there's freedom by design. Unfortunately, this can get dangerous on larger projects and strong teams are able to identify the components they want to accept and the components they want to ban. Frameworks exist because they make these decisions for us. They are purposefully opinionated in order to encourage a particular usage. With this shared knowledge, every developer becomes more productive despite the fact that the framework itself limits the flexibility of the language.

The point isn’t to find the one right approach but to realize that it’s more about agreeing on an approach. The fact that engineers still debate the pros and cons of various implementations should indicate there’s no right answer and we’re better off finding something that’s right for the team.
