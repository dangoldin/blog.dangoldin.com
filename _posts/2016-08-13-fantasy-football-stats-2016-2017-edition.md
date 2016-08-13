---
layout: post
title: "Fantasy football stats: 2016-2017 edition"
description: "Updated my Yahoo fantasy football stats script to pull data for the 2016-2017 season."
keywords: "fantasy football, yahoo, fantasy sports, data"
image_url:
category:
tags: ["#code"]
---
{% include JB/setup %}
This is an annual tradition now but I just updated my old script that crawls and extracts the projected fantasy football data from Yahoo to work with the 2016-2017 season. The changes were incredibly minor: Yahoo broke the the login page into two steps and there was a minor change in the order of the columns. Both of these were trivial to implement and the code is up on [GitHub](https://github.com/dangoldin/yahoo-ffl). If all you care about is the raw data you can just download the [CSV](https://raw.githubusercontent.com/dangoldin/yahoo-ffl/master/stats-2017.csv).

Every year I intend to use the data to come up with a drafting algorithm yet I’ve failed to do anything with it over the past couple of years. I’m hoping this year is different.
