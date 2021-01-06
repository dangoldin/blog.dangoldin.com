---
date: "2017-03-12T00:00:00Z"
description: It's incredible that I have a site that's been running for the past 4
  years with virtually no maintenance.
meta_img: null
keywords: ""
tags:
- 'code'
title: In praise of long running code
---

There’s something spectacular in checking in on a project you worked on years ago and discovering it's still running years later. This past Friday I got an HTTPS alert from [Let’s Encrypt](https://letsencrypt.org/) reminding me that my SSL certificate for [https://yahnr.dangoldin.com](https://yahnr.dangoldin.com/) was set to expire. I checked it out and remarkably it's still up and running. I built that in March of 2013 as a proof of concept of what I termed a [“pseudo-static site.”](http://dangoldin.com/2013/03/12/mmmm-pseudo-static-sites/) The idea was to have a site hosted on statically on S3 but powered by a dynamic job that refreshes the underlying data.

It’s incredible that the code is still functioning as expected. Based on the [commit history](https://github.com/dangoldin/yahnr/commits/master) I did make minor tweaks in 2014 and 2015 but they didn’t alter any of the core functionality. What’s more impressive is that this was based on scraping Hacker News which implies that Hacker News itself didn’t go through a significant enough redesign that broke the page parsing. It does look as if the comment count isn’t being properly fetched but other than that everything looks perfect.

Four human years isn’t very long but in internet years it’s ancient. The fact that some throwaway code is still running four years later is a pleasant surprise and highlights the resiliency of a good design. No matter what code we’re writing it’s valuable to think about how it will stand the test of time and whether there’s a way of improving the resiliency - not for the project itself but to get into the habit of writing robust and durable code.
