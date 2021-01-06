---
date: "2020-08-18T00:00:00Z"
description: Scraped Yahoo's fantasy football site to get stats for the upcoming season.
meta_img: null
keywords: yahoo fantasy football stats, fantasy football, scraper
tags:
- 'code'
title: 'Yahoo fantasy football stats: 2020-2021 edition'
---

For the fifth year in a row I've updated my script to fetch the projected stats for the upcoming fantasy football season. These days I'm torn on football as a whole - both due to its politics and dangers - and don't plan on watching too many games. Yet I enjoy the competition with my friends and the rote work of updating my scraping script to work every year.

This time around there haven't been too many changes: Yahoo changed the order of a few columns and introduced some minor stylistic changes but the code only needed a [few changes](https://github.com/dangoldin/yahoo-ffl/commit/764420d899ce26dae773470b9323875d702c9b41) to work - much simpler than last year which required running with an [adblocking extension to bypass a script blocker](https://github.com/dangoldin/yahoo-ffl/commit/82f1f14e84663d447cdb9db0b5738de4db64fe8c).

As usual the [code](https://github.com/dangoldin/yahoo-ffl) and [data](https://github.com/dangoldin/yahoo-ffl/blob/master/stats-2021.csv) are up on GitHub and pull requests are welcome. Every year I have ambitions to build an ML model to actually automate the draft process and every year I fail. Given everything going on I won't even try this year - that's going to be a goal for 2021.
