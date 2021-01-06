---
date: "2016-08-21T00:00:00Z"
description: Turo doesn't provide a way to download your ride history so I wrote a
  scraper that does it via Python, Chrome's WebDriver, and Selenium.
meta_img: null
keywords: turo, download history, car rental, relayrides
tags:
- 'code'
title: Downloading your Turo ride history
---

I've been using [Turo](https://turo.com/) to rent our car out for the past couple of months and have been using a simple spreadsheet to track the revenue. Being a lazy engineer doing this manually became a bit tiresome so I finally automated it. Unfortunately Turo does not have a simple way of downloading the data and there’s no open API so I had to resort my usual solution: [scraping](https://github.com/dangoldin/turo-automation). Luckily for me I just came off of updating my Yahoo fantasy football scraping script and was ready to do the same for Turo.

The entire process took a few hours and the [result](https://github.com/dangoldin/turo-automation) is decent - it goes through every one of your completed trips and scrapes the receipt page for the total paid, total earned, the various reimbursements, and the start and end times. As of this writing it still doesn’t handle cancelled trips or trips that have not yet been taken. Another thing I noticed when writing the script is that Turo changed the representation of a trip - some of the older receipts had reimbursements in a different section from the newer ones so that needs a bit of tweaking. I’m sure there are some other edge cases I’m not handling properly since I could only code against the data I have; if it ends up not working for you let me know and I’ll see what I can do.

The process to build the scraper was standard: use Chrome’s source inspector to examine the structure of the page and then try using a few different selectors in an interactive Python section running [Selenium](http://www.seleniumhq.org/) to see whether they worked as expected. Once I had the various selectors and code figured it out it took a little bit of refactoring to get into a somewhat clean state.
