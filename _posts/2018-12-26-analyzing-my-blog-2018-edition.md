---
layout: post
title: "Visualizing my blog: 2018 edition"
description: "In 2017 I wrote a few scripts to visualize my blog and I reran the scripts for 2018."
keywords: "blog, data visualization"
image_url: "/assets/static/images/wordcloud_2018.png"
category:
tags: ["#dataviz", "#meta"]
---
{% include setup %}
Last year I came up with a set of scripts to analyze my blog and thought it would be interesting to rerun them this year to see what's changed. There are a ton of visualizations up on [GitHub](https://github.com/dangoldin/blog-analytics/tree/master/img/2018) but most are just a fun visual without actually telling a story. I've included the most important ones below with a bit of analysis and commentary. It also looks as if the charts are getting too messy for multiple years of data so I'll need to revisit the visualizations for 2019.

<ul class="thumbnails">
  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}date_month-plot-count-2018.png" alt="Posts over time" width="2100" height="2100" layout="responsive"></amp-img>
      <p>You can clearly see how behind I am and how aggressive I've been over the past 2 months. Definitely do not want to repeat this in 2019.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}dow-date_year-plot2-2018.png" alt="Posts by day of week and year" width="2100" height="2100" layout="responsive"></amp-img>
      <p>Previous years indicate that I've primarily been writing on weekends but this year you see a nice even distribution across every day of the week. Unfortunately this is just a function of me trying to catch up and writing multiple posts a day.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}wordcloud_2018.png" alt="2018 wordcloud" width="600" height="600" layout="responsive"></amp-img>
      <p>Word clouds do a nice job of surfacing the key topics and themes and this year there was a lot of posts about the large tech companies. Next year I want to write less about the tech companies and more about technology itself.</p>
    </div>
  </li>
</ul>
