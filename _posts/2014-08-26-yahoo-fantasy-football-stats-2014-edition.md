---
layout: post
title: "Yahoo fantasy football stats - 2014 edition"
description: "I just updated my Yahoo fantasy football stats scraper for the 2014 season."
keywords: "yahoo, fantasy football stats, scraper"
image_url:
category:
tags: ["#data", "#code", "#python"]
---
{% include JB/setup %}
This might be too late for some but I dug up my Yahoo fantasy football stats scraper from last year and <a href="https://github.com/dangoldin/yahoo-ffl" target="_blank">updated it to work</a> for the 2014 season. The old version used the great <a href="http://scrapy.org/" target="_blank">Scrapy</a> framework but unfortunately Yahoo changed something on their end that made the login spoofing too difficult to do via a backend script. The new approach uses <a href="http://www.seleniumhq.org/" target="_blank">Selenium</a> to open up a Chrome web browser, login to Yahoo, and then iterate through each page of stats and downloads the data into a CSV file.

Note that the code was designed around my league’s settings and that the column order in Yahoo will depend on the scoring categories of your league. If that's the case you need to make sure to update the code (primarily the xpath expressions) to map to the columns in your view. Definitely feel free to submit a pull request that makes the code a bit more flexible since my goal was to get something out quick in time for a draft later this week.

And if all you care about is the data, here’s the <a href="https://raw.githubusercontent.com/dangoldin/yahoo-ffl/master/stats-2014.csv" target="_blank">projected 2014 data</a> as of August 25, 2014.