---
layout: post
title: "Making sense of my Twitter archive"
description: "Doing some data visualizations on my Twitter archive"
keywords: "twitter data visualization matplotlib nltk quantified self"
image_url: "/assets/static/images/by-month-dow.png"
category:
tags: ["#dataviz", "#datascience", "#code"]
---
{% include JB/setup %}
I finally got access to my Twitter archive and decided to have some fun with it and also give me an excluse to play around with <a href="http://matplotlib.org/">matplotlib</a>. The first step was just seeing what the data looked like and what information was available. Turns out that Twitter included a simple HTML page to let you browse your tweets but also provided CSV files for each month. The fields were pretty self explanatory but one "gotcha" was needing to convert the timestamp to my local time. I wanted to do a few data visualizations to see what my tweeting behavior was like and also see if anything insightful came out. As I started looking at the visualizations I noticed that I'm more active than I used to be and that I have a pretty stable relationship betweet my tweets, my RTs, and my replies. In the future, I'd like to explore how my usage of Twitter has evolved and also get to play around with the <a href="http://nltk.org/">NLTK library</a>.

I've committed by ugly code to github if anyone wants to play around with it: <a href="https://github.com/dangoldin/twitter-archive-analysis">https://github.com/dangoldin/twitter-archive-analysis</a>. I know the code is ugly. I'll clean it up one of these days.

<ul class="thumbnails">
  <li class="span8">
    <div class="thumbnail">
      <img src="{{ IMG_PATH }}by-hour.png" alt="Tweets sent by hour">
      <p>Apparently, I like to tweet evenings and nights.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <img src="{{ IMG_PATH }}by-dow.png" alt="Tweets sent by day of week">
      <p>You can see I like to take my Fridays and Saturdays easy. Since I also tend to tweet more frequently at night this indicates I'll go out Friday and Saturday nights.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <img src="{{ IMG_PATH }}by-month.png" alt="Tweets sent by month">
      <p>I was pretty much quiet since I got on Twitter in 2008 but have been more consistent since 2012.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <img src="{{ IMG_PATH }}by-month-dow.png" alt="Tweets sent by month and day of week">
      <p>I must admit this one's here mostly because I wanted to do a heatmap but this does reinforce that I've been a more active on Twitter since 2012 and that I'm less active on Friday and Saturday.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <img src="{{ IMG_PATH }}by-month-length.png" alt="Average length of a tweet by month">
      <p>I started off barely saying anything but it looks as if I'm consistently around ~90 characters per tweet.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <img src="{{ IMG_PATH }}by-month-type.png" alt="Type of tweet sent by month">
      <p>I wanted to see whether my behavior around tweeting, retweeting, or replying has changed over time but this doesn't make it very clear due to the number of lines going on so I decided to normalize it - see next chart.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <img src="{{ IMG_PATH }}by-month-type-stacked.png" alt="Type of tweet sent by month - normalized">
      <p>Now we're on to something. In the beginning I was basically posting short tweets about my life but more recently I have been more involved in the community aspects.</p>
    </div>
  </li>
</ul>