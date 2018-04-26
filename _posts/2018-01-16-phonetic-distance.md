---
layout: post
title: "Phonetic distance"
description: "It turns out there's a series of algorithms called phonetic algorithms that allow you to compare two words but instead of looking at their spelling it examines their sound."
keywords: "phonetic distance, levenshtein, name similarity, word similarity"
image_url:
category:
tags: ["#code"]
---
{% include setup %}
Last year I [wrote](/2017/03/04/automating-admin-work-spreadsheets-to-slack/) a simple script to automate posting our On-Call schedule. It worked by reading the schedule from a Google Spreadsheet, looking up the names in Slack, and then sharing these usernames on Slack. A tiny problem I ran into was the fact that since I was using an exact match the names in the spreadsheet had to match the names in Slack. This is a trivial problem to solve since we have a finite number of engineers but it still felt a bit too sensitive. While lying in bed last night I got to thinking of ways to measure similarity between the names in order to make it a bit more fuzzy. I've used the [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) in the past but it felt a bit too clinical for what I was trying to do and I wondered whether it was possible to do a phonetic match.

After during some research I discovered, unsurprisingly, that there's a whole category of [phonetic algorithms](https://en.wikipedia.org/wiki/Phonetic_algorithm) designed to solve these problems. The original was Soundex but has been superseded by the [Metaphone](http://www.amorphics.com/index.html) family. What's interesting is that their implementation is more heuristic than anything else. They were primarily designed for the English language and have a series of rules to simplify words or names into much simpler forms that avoid confusion. For example, one of the rules says to treat the letter V the same as the letter F while another says to treat the letter Q the same as K. Using hundreds or thousands of these transformations with a litany of exceptions leads to a canonical word which can then be compared against others.

I find this approach fascinating since it's so antithetical to the modern approach of collecting a ton of data and pumping it through some machine learning algorithms. Instead this feels like a finely tweaked series of if-else statements designed for a single purpose.
