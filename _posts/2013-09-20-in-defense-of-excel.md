---
layout: post
title: "In defense of Excel"
description: "Excel has a bad reputation but it's great at doing quick analysis and should be a part of everyone's tool set."
keywords: "excel, data science, quantitative engineering, tableau"
image_url: "/assets/static/images/excel-logo-2013.png"
category:
tags: ["#datascience"]
---
{% include setup %}

<amp-img src="{{ IMG_PATH }}excel-logo-2013.png" alt="Excel 2013 logo" style="float:right; width: 200px;"  width="256" height="256" layout="responsive"></amp-img>

Excel has developed a reputation of being bloated, slow, error prone and used primarily by "business people" who don't have real quantitative skills. Just like anything else, Excel is a tool that can be misused but is significantly more useful than people give it credit for.

The most important benefit Excel provides is making data approachable and fun. By making it approachable Excel opens up data analysis to a ton of new people that come into it with their own experience and knowledge. Sure they may not have data scientist skills but they're still able to run some neat analyses and derive useful insights.

The fun makes it very easy to experiment and try a lot of different ideas by making the cost of failure so low by providing quick feedback and visuals. The value of writing a formula and then dragging it down, quickly seeing the calculations is massive. This gives the quick feedback that encourages people to keep on driving their analysis. And although Excel's visualizations are simple, they provide a fast way to visualize the data and hopefully lead to more analysis. Similar to the way we use Python for a quick project instead of Java, it's much easier to run a quick analysis in Excel than in a "real" language such as R.

My typical approach to quantitative problem is to write a query to retrieve the data I want and then immediately dump it into Excel for a quick analysis. This lets me apply some pretty basic formulae and visualizations to to see if there's anything worth pursuing in more depth. Only then will I move to R or Python to do a deeper analysis. Even then, I most likely rewrite the code to make it ready for production. This approach forces me to focus on the data and dimensions I want to analyze. Excel only serves as a way to quickly explore the data before deciding whether there’s anything worth pursuing.

The only tool I can think of that comes close is <a href="http://www.tableausoftware.com/" target="_blank">Tableau</a> but my experience has been that it has a somewhat steeper learning curve and doesn’t support the flexibility to quickly add and adjust various calculations. Replacing Excel is tough. I use Google Docs for working with documents and yet for my data I use Excel rather than Google Spreadsheets.