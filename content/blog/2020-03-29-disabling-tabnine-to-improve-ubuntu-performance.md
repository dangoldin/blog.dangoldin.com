---
date: "2020-03-29T00:00:00Z"
description: My computer is normally fast but occasionally slows down to a crawl.
  Turns out it's due to the TabNine VS Code extension.
meta_img: null
keywords: tabnine, ubuntu performance
tags:
- 'meta'
title: Disabling TabNine to improve Ubuntu performance
---

At the end of 2018 I switched from using a Mac to using Ubuntu on a ThinkPad. While much of the development experience is better the one thing that's noticeably worse is performance (usually first noticed in browsers) coupled with the occasional computer freeze. Back in the day when nearly everyone used Windows I remember the blue screens and the need to reboot frequently and I'm finding Ubuntu has developed the same pattern. I rarely had to reboot by Mac but find myself rebooting my current laptop at least once a week.

Lately it's gotten worse so every time the performance feels sluggish I've opened up the terminal and started identifying patterns using top and htop. They're often cryptic with either Chrome or Brave taking up nearly 100% of the CPU which doesn't give me much info other than that a browser restart will offer a temporary reprieve. But every once in a while I noticed that one of my VS Code plugins, [TabNine](https://tabnine.com/), also spiked up to 100% usage. TabNine is a language-agnostic autocomplete plugin that I've become a huge fan of yet disabling it has drastically improved the performance. There are a few issues ([1](https://github.com/codota/TabNine/issues/24), [2](https://github.com/codota/TabNine/issues/43), [3](https://github.com/codota/TabNine/issues/183)) on GitHub describing the negative performance so I'm hopeful it's resolved but until then I'm happy to sacrifice it for improved performance. The summary here is that if you're running TabNine on Ubuntu and running into performance issues try disabling it. Moreover, if you're running into any noticeable performance degradation it may very well be a random extension and the only way to find out is to debug your processes and identify the cause.
