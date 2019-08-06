---
layout: post
title: "Yahoo fantasy football stats: 2019 2020 edition"
description: "Every year I scrape Yahoo's fantasy football stats for the upcoming season and have done that for the upcoming season."
keywords: "yahoo fantasy football stats, fantasy football, scraper"
image_url: 
category: 
tags: ["#code"]
---
{% include setup %}
In what has become an annual tradition I've updated my Yahoo Fantasy Football scraping script for the 2019-2020 NFL season. The script works by logging into the Yahoo Fantasy Football site and downloading the first 4 pages of projected stats for each week. The code is up on [GitHub](https://github.com/dangoldin/yahoo-ffl) as well as the stats in a [CSV file](https://github.com/dangoldin/yahoo-ffl/blob/master/stats-2020.csv).

Every year there's been something that Yahoo did to break my script and this year was no different. The first thing I discovered was the login broke despite the HTML elements staying the same - it turns out my login "click" event was actually clicking on an ad which was opening up a new window. Changing the code from a click to an enter solved that problem.

The next problem was that after a few pages the site would just hang and timeout. Digging into it I discovered that it was always timing out with a request to a subdomain of doubleverify.com, a digital fraud vendor. My suspicion is that since I was using Selenium to automate the scrape it was rightfully flagged as fraud and rather than bail it decided to just hang my process. Since DoubleVerify is also a tracking the company the fix here was to run Chrome with the [uBlock Origin](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en) extension enabled which required a bit of research to configure but ended up solving the problem.

I haven't been defeated by Yahoo's anti-scrape systems yet but there's always next year.
