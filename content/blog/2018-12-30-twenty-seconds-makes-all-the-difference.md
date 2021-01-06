---
date: "2018-12-30T00:00:00Z"
description: Upgrading my computer improved the blog's build time but also exposed
  the lack of an attention span.
meta_img: null
keywords: jekyll, blog build times, performance, attention span
tags:
- 'product'
title: Twenty seconds makes all the difference
---

I recently switched from a 2015 Macbook Pro to a new ThinkPad with Ubuntu and one of the most noticeable differences is how much faster this blog builds. A few years ago I moved this blog over to [AMP](
https://www.ampproject.org/) to improve its load times. I don’t want to go into the details of AMP but in order to get the performance wins all styling is inlined - that means that instead of linking to a CSS file the CSS rules are explicitly defined on each page. That means the build system is not simply generating an HTML page off of a template but also inlining the CSS rules onto every generated page.

The above was only meant to set the context and the primary point is that building this blog is not simple. On the Macbook the build process took close to 30 seconds but on the ThinkPad it’s almost always done within 8 seconds. While just over 20 seconds longer it’s almost 4 times as long and it makes all the difference. I find that I’m willing to just stay on the terminal and wait the 8 seconds for it to finish while if it’s over 20 seconds I decide to do something else in the meantime. Unfortunately, that break often ends up taking a few minutes before I go back and actually check the status.

It’s a bit sad that 20 seconds is enough to change my workflow but there’s a lesson here somewhere. These days there are so many distractions that unfortunately seconds do matter and it affects website behavior as much as desktop software. We’ve trained ourselves to be easily distracted that it’s something all product builders need to keep in mind.
