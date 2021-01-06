---
date: "2017-10-27T00:00:00Z"
description: Code reviews are often focused on style and syntax but strong teams realize
  there's a lot more to it than that.
meta_img: null
keywords: code reviews, code style
tags:
- 'code'
title: The code review pyramid
---

Every modern software development process contains some form of code reviews. They ensure that all code is looked at by someone other than the author. This improves context, increases code quality, and generally leads to a stronger team and product. Yet there’s a world of difference in code reviews and I I’ve started to think of the different types as a pyramid. The peak is at the highest level but it’s not possible to get to that without going through the lower tiers. Another observation is that the lower levels can done by an individual but the penultimate ones require a team effort.

- **Style**: This is what I suspect most people consider a code review and ranges from feedback telling the author to add comments, fix typos, or rename variables. This is important to get right since it’s the foundation that everything else rests on but at the same time it’s not going to change any of the functionality.
- **Code**: At this level the feedback is meant to change the code itself - if only ever so slightly. This includes proposing alternative implementations to methods or ways to clean up the code to make it easier to read and test. At this level an experienced engineer may also point to an existing method or library that can be reused to avoid code duplication or push for larger methods to be split into smaller, more testable ones.
- **Architecture**: If done right the architecture would have been determined before any code was written but often times an issue or idea pops during or after the code has been written. Sure it’s possible to ship the code as is but if it’s a critical or key component it’s  advantageous to clean it up - even if it forces you to redo the way the app is organized and architected.
- **Philosophy**: I’ve found that the highest functioning teams coalesce around a code philosophy. They have a shared and implicit understanding of the codebase and understand where and how features should be implement. Rather than focusing on the low level implementation details they’re thinking about where the functionality should exist to make sense given the rest of the code and how to keep things consistent. Teams that have spent a long time working together often start doing this organically but it’s something that all teams should strive for.

Most people associate code reviews with the first level of the pyramid but that’s just the beginning. To achieve the best code we need to push ourselves and our teams to think deeper about the code and not focus solely on the superficial factors.
