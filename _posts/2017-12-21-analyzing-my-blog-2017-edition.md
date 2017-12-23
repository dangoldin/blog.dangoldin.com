---
layout: post
title: "Analyzing my blog: 2017 edition"
description: "Similar to the blog analysis I ran in 2016 I repeated it for 2017 to see what stood out."
keywords: "data visualization, blog, analysis"
image_url: "/assets/static/images/wordcloud_2017.png"
category:
tags: ["#code", "#dataviz"]
---
{% include setup %}
I have a set of [scripts](https://github.com/dangoldin/blog-analytics) I wrote in 2016 that aimed to [analyze my posts](/2016/06/12/analyzing-my-blog/) over the years and hopefully offered up some insights. I’ve updated them for 2017 but rather than posting every single visualization I thought it would be more valuable to highlight the ones that seemed the most relevant and interesting.

<ul class="thumbnails">
  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}date_year-plot-count-2017.png" alt="Posts over time" width="2100" height="2100" layout="responsive"></amp-img>
      <p>The year is not quite over but I'm defintiely behind on my posts that I hope to power through by the end of the year.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}date_month-plot-words-2017.png" alt="Words over time" width="2100" height="2100" layout="responsive"></amp-img>
      <p>Similarly, the total word volume is lower and in addition to fewer posts it seems when I do write my posts are shorter.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}dow-date_year-plot-2017.png" alt="Posts by day of week and year" width="2100" height="2100" layout="responsive"></amp-img>
      <p>I wanted to avoid only writing on the weekend and this year has been an improvement. I strive to write during the week to keep it more balanced but it hasn't been as easy to find the time and I end up having to catch up over the weekend.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}company-mention-2017.png" alt="Company mentions over time" width="2100" height="2100" layout="responsive"></amp-img>
      <p>A somewhat interesting chart many of my posts are about tech companies and this shows the trend of companies I write about over time. Surprisingly not much has changed over the past few years and it seems I've settled on a pattern.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}wordcloud_2017.png" alt="2017 word cloud" width="600" height="600" layout="responsive"></amp-img>
      <p>I like the concept of word clouds since with a quick glance you're able to get a sense of the topic. In this case it's definitely leaning more on the tech side as well as high level software development concepts.</p>
    </div>
  </li>
</ul>
