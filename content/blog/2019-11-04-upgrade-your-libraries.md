---
date: "2019-11-04T00:00:00Z"
description: Simply upgrading Jekyll to a new version led to a significant speed up
  in my blog's build time. Upgrade your libraries!
meta_img: null
keywords: jekyll, amp, website speed, performance
tags:
- 'code'
title: Upgrade your libraries
---

This blog is [hosted](https://github.com/dangoldin/blog.dangoldin.com) on GitHub and built using [Jekyll](https://jekyllrb.com/). Jekyll is a simple static site generator that's been working well for me and was flexible enough to allow me to switch the entire site over to [AMP](https://amp.dev/). Unfortunately, the switch to AMP led to the site generation becoming significant slower due to the CSS-inlining requirement. Two years ago I started profiling and [dropped the site generation time](http://dangoldin.com/2017/11/23/improving-jekyll-generation-speed-for-amp-pages/) down to about 15 seconds from over 4 minutes by generating the CSS once and then reusing it for all future pages.

Earlier this year I noticed that my build times dropped even further, down to 4 seconds. Part of the drop was the switch to a new computer but the primarily driver was upgrading each of the libraries. Jekyll improved significantly over the past 2 years and coupled with the improved hardware caused a nearly 4x improvement in speed.

We often fall into the trap of installing some open source code, getting it set up, and then promptly forgetting about it. In the meantime, that code has a life of its own and continues to grow and evolve. If you don't have a process in place to audit and upgrade your libraries it's well worth introducing one. Sometimes you have to deal with breaking changes and sometimes the code is slower but most upgrades are smooth and often lead to improvements in speed and functionality.
