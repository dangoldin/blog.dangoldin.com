---
date: "2018-08-18T00:00:00Z"
description: In what has become an annual ritual I've updated my Yahoo fantasy football
  script to work for the upcoming season
meta_img: null
keywords: yahoo fantasy football stats, fantasy football, scraper
tags:
- 'code'
title: 'Yahoo fantasy football stats: 2018-2019 edition'
---

This is much later than in previous years but hopefully that just makes the data more accurate. I updated my Yahoo fantasy football stats scraper to account for the slightly different design for the upcoming season. It still works as before and uses Selenium to open up Chrome and scrape the projected stats by week. The change this year involved shifting the columns around a tiny bit as Yahoo changed the order but other than that there were no changes. Maybe by next year I’ll update the script to be able to actually determine the column indices for each stat automatically. As usual, the script is up on [GitHub](https://github.com/dangoldin/yahoo-ffl) and the scraped data can just be downloaded [here](/assets/static/data/stats-2019.csv).
