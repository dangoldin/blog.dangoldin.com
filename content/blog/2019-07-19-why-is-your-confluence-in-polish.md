---
date: "2019-07-19T00:00:00Z"
description: In order to get proper sorting of dates I had to change my Confluence
  settings to Polish.
meta_img: /image/confluence-date-lozenge.png
keywords: confluence, dates, ux
tags:
- 'product'
title: Why is your Confluence in Polish?
---

<img src="/image/confluence-date-lozenge.png" alt="Confluence Date Lozenge settings" data-width="634" data-height="257" data-layout="responsive" />

Despite not speaking any Polish, I changed my Confluence language to Polish earlier this week to finally fix a problem that's been bugging me for years. Confluence has the concept of a "[date lozenge](https://confluence.atlassian.com/doc/configuring-time-and-date-formats-150144.html)" which allows you to add a date via a helpful calendar and gives it a nice looking format. We decided to use these lozenges to track dates in our system since it improves consistency and they do get special treatment in Confluence and lead to a few neat features - for example being able to use them as due dates in tasks.

Unfortunately, the default English settings have them formatted as "dd mmm YYYY" so June 5, 2019 would be displayed as "05 Jun 2019". In isolation this is fine but it causes a big pain if you want to sort by a date in a table since, as you can probably guess at this point, it sorts by the day of the month, then the month string, and then the year. In essence, it doesn't actually treat it as a date and instead sorts them as if they were all strings.

This is not very helpful when you have a list of documents and want to see the most recent ones first. Luckily, after poking around, I realized that Confluence had a date format that I assumed would change the lozenge formatting. Unfortunately, this only changed the formatting of internal dates - for example document data.

It turns out that the only way to change the format of the "date lozenge" is to change language settings. And in order to get something that's year, month, and then date I get to pick out of either Polish or Japanese.

I've used Confluence enough that I can navigate it by feel so the Polish doesn't bother me too much but it is ridiculous that there's no way to actually change the format of the date lozenge without changing your language setting and that sorting date objects sorts based on the date format. If either of these worked as expected my Confluence would still be in English but then I wouldn't be improving my language skills.
