---
layout: post
title: "Phonetic distance"
description: ""
keywords:
image_url:
category:
tags: []
---
{% include setup %}
Last year I wrote a simple script to automate posting our On-Call schedule. It worked by reading the schedule from a Google Spreadsheet, looking up the names in Slack, and then sharing these usernames on Slack. A tiny problem I ran into was the fact that since I was using an exact match the names in the spreadsheet had to match the names in Slack. This is a trivial problem to solve since we have a finite number of engineers but it still felt a bit too sensitive. While lying in bed last night I got to thinking of ways to measure similarity between the names in order to make it a bit more fuzzy. I've used the Levenshtein distance in the past but it felt a bit too clinical for what I was trying to do and I wondered whether it was possible to do a phonetic match.

After during some research I discovered, unsurprisingly, that this category already exists with the major ones being Soundex and the Metaphone family.

http://dangoldin.com/2017/03/04/automating-admin-work-spreadsheets-to-slack/

https://en.wikipedia.org/wiki/Phonetic_algorithm

https://en.wikipedia.org/wiki/Levenshtein_distance

http://www.amorphics.com/index.html
