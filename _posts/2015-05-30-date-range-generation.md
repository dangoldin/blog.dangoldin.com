---
layout: post
title: "Date range generation"
description: "I added another tool to my JavaScript tools page that lets you generate a date range from a series of inputs."
keywords: "javascript, date range, automate date calculation, date format"
image_url: "/assets/static/images/date-range-generation.png"
category:
tags: ["#code"]
---
{% include setup %}
I finally had the chance to go back and add <a href="http://dangoldin.com/js-tools/#tab-date -generation" target="_blank">another quick tool</a> to my JavaScript arsenal. This one lets you specify a start date, an end date, a step size and interval, along with a desired date format and it will generate the dates in between. This is a surprisingly common activity for me. Every time I need to split a query into multiple date ranges or come up with a series of arguments for various jobs I end up using Excel to come up with the appropriate date ranges. By having it available via the web it makes it a lot easier to generate exactly what I need as well as provides the flexibility to keep on improving. If there are any improvements you’d like to see or if anything is unclear definitely let me know.

<div class="thumbnail">
  <amp-img src="{{ IMG_PATH }}date-range-generation.png" alt="Screenshot of date range tool in action"  width="802" height="428" layout="responsive"></amp-img>
</div>