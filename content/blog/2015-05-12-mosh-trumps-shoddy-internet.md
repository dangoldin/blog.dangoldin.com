---
date: "2015-05-12T00:00:00Z"
description: After getting disconnected one too many times due to crappy internet
  service and losing my SSH sessions I discovered Mosh which makes remote development
  a lot easier.
meta_img: null
keywords: mosh, shoddy internet, flaky internet
tags:
- 'meta'
- 'devops'
title: Mosh trumps shoddy internet
---

Since I do a fair amount of web development having flaky internet is a big hit to my productivity; especially when I have a half dozen open SSH sessions that bulk disconnect every few minutes. After being thwarted one too many times by spotty internet at the office I decided I had enough and started looking for alternatives. One of the tools I discovered was <a href="https://mosh.mit.edu/" target="_blank">Mosh</a>. Mosh allows you to open a remote session just like you would do with SSH but unlike SSH it’s robust enough to handle networking disruptions. In fact, I can start a Mosh session on Friday afternoon before leaving the office for the weekend, let my computer go to sleep, and then have it automatically resume as soon as I get back to the office on Monday and wake my computer up. I’m still amazed at how well it works and only wish I discovered it sooner.
