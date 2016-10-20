---
layout: post
title: "Revisiting my Twitter activity"
description: ""
keywords:
image_url:
category:
tags: []
---
{% include setup %}
While going through my old GitHub repos I discovered that the most starred repo was [twitter-archive-analysis](https://github.com/dangoldin/twitter-archive-analysis), a Python script that would generate a view visualizations of a Twitter archive. I haven’t touched the code in over 3 years and decided to see how it was holding up and whether any of it still worked. After a few false starts getting the necessary packages playing nicely together and updating the code to support Twitter’s new archive format, I was able to get the old code working. Compared to three years ago, the results are surprisingly not that different - I definitely tweet less frequently than I used to and my activity has shifted into being more about replies rather than general tweets.

<ul class="thumbnails">
  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}by-hour-2016.png" alt="Tweets sent by hour" width="800" height="600" layout="responsive"></amp-img>
      <p>No tweets while I'm asleep but tend to be the most active in the evenings.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}by-dow-2016.png" alt="Tweets sent by day of week" width="800" height="600" layout="responsive"></amp-img>
      <p>Pretty even distribution but more active on the weekends than the weekdays.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}by-month-2016.png" alt="Tweets sent by month" width="800" height="600" layout="responsive"></amp-img>
      <p>Hit my peak in 2013 and have been declining since.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}by-month-dow-2016.png" alt="Tweets sent by month and day of week" width="800" height="600" layout="responsive"></amp-img>
      <p>I tried to get at the idea of how much I tweet over time and by day - the weekends have remianed steady but my weekday tweeting has dropped off.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}by-month-length-2016.png" alt="Average length of a tweet by month" width="800" height="600" layout="responsive"></amp-img>
      <p>Definitely not taking advantage of the full 140 characters.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}by-month-type-2016.png" alt="Type of tweet sent by month" width="1200" height="600" layout="responsive"></amp-img>
      <p>The next visualization provides a much better idea of my tweet type distribution.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}by-month-type-stacked-2016.png" alt="Type of tweet sent by month - normalized" width="800" height="600" layout="responsive"></amp-img>
      <p>A clear trend to being more about replies and engagement rather than just posting thoughts and ideas.</p>
    </div>
  </li>
</ul>
