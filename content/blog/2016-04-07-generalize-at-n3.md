---
date: "2016-04-07T00:00:00Z"
description: Engineers always have to balance the quick and dirty work with something
  more elegant that will take longer. Using a rule of generalizing when n=3 strikes
  the right balance.
meta_img: null
keywords: coding, management, short term, long term, programming, program design
tags:
- 'management'
- 'code'
title: Generalize at n=3
---

Engineers strive to write code that’s general and flexible enough to adapt to support a variety of cases with minimal changes. Unfortunately, writing general code isn’t easy and requires significant thought, effort, and experimentation. The challenge is figuring out the appropriate time to generalize your code.

If you do it too early you may spend unnecessary time writing generalized code that will never be used again. Even worse you may write code that you think is generalizable but ends up collapsing under its own weight under future scenarios. In this case writing minimal code would have served you better since it would have been much easier to adapt or throw away to support the new case.

If you do it too late you most likely spent time doing repetitive work that could have been better spent building a scalable solution that you may end up doing anyway.

My rule of thumb is to generalize at n=3. The first two times I have to support a new scenario or process I'll just do it manually or hacked together. But as soon as I need to do it for the third time I'll start looking for a more generalized solution. At this point it's likely that the third is not the last time I'm going to have to do it and I also have 3 cases to base and test my solution on.

This isn’t a trivial approach but works surprisingly well. It’s incredibly difficult to predict whether a simple script will morph into something more or end up being used once. The easiest way to predict whether it will be repetitive is to wait until it is repetitive - for me that magic number is 3. High enough to weed out the edge cases but low enough to get enough value from being generalized.
