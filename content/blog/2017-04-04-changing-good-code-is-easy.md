---
date: "2017-04-04T00:00:00Z"
description: Good code is written in such a way where changes only touch a few files.
  Bad code, on the other hand, is sprawling and seemingly minor changes touch dozens
  of files.
meta_img: null
keywords: coding, software engineering, separation of concerns
tags:
- 'meta'
title: Changing good code is easy
---

I’ve done my fair share of code reviews and one of the best indicators of great code is the locality of changes. Nearly all code is taking some data, transforming it, and passing it along somewhere else. This implies that modifications change or add to this flow. It may be passing an additional variable to a function, changing the behavior of a function, or adding another step in our execution. It turns out that if the code is poorly written a seemingly minor change may require changing a series of functions since for some reason each function in the flow needs to be modified. Great code, on the other hand, is written in such a way where making a change to a single function or behavior doesn’t cause any changes upstream or downstream of the code.

Without even knowing what the code does by looking at a diff it’s easy to see how many files were changed and how insignificant the changes were. All code gets modified over time but good code remains isolated with clear separation of concerns while seemingly minor changes to poor code may end up touching every file.

When writing new code assume it will change and try to think how your code will need to be modified for different use cases. This should help guide you to an implementation that ends up standing the test of time.
