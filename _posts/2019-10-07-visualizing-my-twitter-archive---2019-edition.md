---
layout: post
title: "Visualizing my Twitter archive - 2019 edition"
description: "One of my most popular GitHub repos is a script that visualizes your Twitter archive. I just upgraded it to support Twitter's new archive format."
keywords: "/assets/static/images/2019-by-hour.png"
image_url:
category:
tags: ["#code", "#dataviz"]
---
{% include setup %}
GitHub sent me an alert this past weekend that a bunch of my repos were using old libraries that had security vulnerabilities. Nearly all of them were due to my usage of an old version of the [requests](https://pypi.org/project/requests/) library. Updating those was as simple as updating the requirements.txt file to the new version.

One of these repos, [twitter-archive-analysis](https://github.com/dangoldin/twitter-archive-analysis), is my most popular project on GitHub so I thought I might as well revisit it and see if I could both address the vulnerabilities and get it running again. Upgrading the packages was straightforward but there are very few things more humbling than looking at the code you've written years ago. Twitter changed the format of the archive from JSON to CSV since the last time I ran the code and as part of the upgrade I did a little bit of cleanup. The [code](https://github.com/dangoldin/twitter-archive-analysis/blob/master/analyze.py) is up on GitHub and I've included the visualizations it generated below highlighting my Twitter behavior over the years.

<ul class="thumbnails">
  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}2019-by-hour.png" alt="Tweets sent by hour" width="800" height="600" layout="responsive"></amp-img>
      <p>I tweet late in the evenings and nights.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}2019-by-dow.png" alt="Tweets sent by day of week" width="800" height="600" layout="responsive"></amp-img>
      <p>Weekends, but especially Sundays, are my busiest Twitter time.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}2019-by-month.png" alt="Tweets sent by month" width="800" height="600" layout="responsive"></amp-img>
      <p>Not a ton here other than I haven't been tweeting as much recently.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}2019-by-month-dow.png" alt="Tweets sent by month and day of week" width="800" height="600" layout="responsive"></amp-img>
      <p>Not much here but a cool visualization.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}2019-by-month-length.png" alt="Average length of a tweet by month" width="800" height="600" layout="responsive"></amp-img>
      <p>My tweets have gotten longer over the years but I'm still not hitting the 280 character limit.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}2019-by-month-type.png" alt="Type of tweet sent by month" width="1200" height="600" layout="responsive"></amp-img>
      <p>Tough to tell what's going on here but I'm trying to look at the ways I engage with Twitter over time.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}2019-by-month-type-stacked.png" alt="Type of tweet sent by month - normalized" width="800" height="600" layout="responsive"></amp-img>
      <p>This is a much nicer way of seeing that lately I've been much more about replying than tweeting.</p>
    </div>
  </li>
</ul>
