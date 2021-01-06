---
date: "2017-07-08T00:00:00Z"
description: In what has become an annual tradition I updated my Yahoo Fantasy Football
  scraping bot for the 2017-2018 season.
meta_img: null
keywords: yahoo fantasy football stats, scraping
tags:
- 'code'
title: 'Yahoo fantasy football stats: 2017-2018 edition'
---

In what has become an annual tradition I updated my Yahoo Fantasy Football scraping bot for the 2017-2018 season. Every year Yahoo makes a few changes to their page and this year was no different. It’s always fun to cross my fingers, run the script, and see what breaks. This year the changes were surprisingly minor. For some reason Yahoo changed the name attribute of the password field from “passwd” to “password” and made a few tweaks to the table structure which required updating the XPath selectors. Other than that everything worked as expected and the 2017-2018 data is available [here](/assets/static/data/stats-2018.csv) with the code up on [GitHub](https://github.com/dangoldin/yahoo-ffl).
