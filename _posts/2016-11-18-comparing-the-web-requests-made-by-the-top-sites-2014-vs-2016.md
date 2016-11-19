---
layout: post
title: "Comparing the web requests made by the top sites: 2014 vs 2016"
description: "I revisted an analysis from 2014 where I looked at the HTTP requests being made by the top 100 Alexa sites in order to see what affects page speed."
keywords: "site speed, javascript, phantomjs, data analysis"
image_url: "/assets/static/images/crawl-stats-requests-vs-time_v2.png"
category:
tags: ["#datascience", "#dataviz"]
---
{% include setup %}
A [few years ago](http://dangoldin.com/2014/03/09/examining-the-requests-made-by-the-top-100-sites/) I wrote a simple PhantomJS script to hit the top 100 Alexa domains and track how long it took to load as well as the types of requests it was making. The intent was to try to understand the different factors affecting site speed and how the different sites approached the problem. I rediscovered this script while digging through my old projects this week and thought it would be an interesting analysis to redo this analysis and see how it compared against the data from 2014. The general takeaway is that sites have gotten slower in 2016 compared to 2014 which is likely due to a significant increase in the number of requests they're making.

<ul class="thumbnails">
  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}crawl-stats-times-mean_v2.png">
        <amp-img src="{{ IMG_PATH }}crawl-stats-times-mean_v2.png" alt="Mean times" width="600" height="1000" layout="responsive"></amp-img>
      </a>
      <p>
        <strong>Average load time.</strong> Pretty similar to last year with most of the top platform sites being incredibly quick. The surprising thing is that on average sites seem to have gotten slower but this can be entirely due to me having a different internet connection - something that on its own is an issue.
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}crawl-stats-times-boxplot_v2.png">
        <amp-img src="{{ IMG_PATH }}crawl-stats-times-boxplot_v2.png" alt="Time boxplot" width="600" height="1000" layout="responsive"></amp-img>
      </a>
      <p>
        <strong>Load time boxplot.</strong> Similar distribution to two years ago but so much more variance. No idea why this would be the case.
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}crawl-stats-requests-count_v2.png">
        <amp-img src="{{ IMG_PATH }}crawl-stats-requests-count_v2.png" alt="Number of requests" width="600" height="1000" layout="responsive"></amp-img>
      </a>
      <p>
        <strong>Number of requests.</strong> Many more requests being made in 2016 than in 2014. In 2014 no site made over 1000 requests but in 2016 we see it happening with 3 sites.
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}crawl-stats-requests-vs-time_v2.png">
        <amp-img src="{{ IMG_PATH }}crawl-stats-requests-vs-time_v2.png" alt="Requests vs time" width="600" height="600" layout="responsive"></amp-img>
      </a>
      <p>
        <strong>Number of request vs time to load.</strong> Expected and similar results to 2014. The more requests a site is making the longer it takes to load.
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}crawl-stats-file-types-count_v2.png">
        <amp-img src="{{ IMG_PATH }}crawl-stats-file-types-count_v2.png" alt="File type frequency" width="600" height="600" layout="responsive"></amp-img>
      </a>
      <p>
        <strong>File type frequency.</strong> Pretty similar distribution to 2014 but we do see much higher numbers across the board and a relative decrease in JavaScript and an increase in JSON and HTML.
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}crawl-stats-file-types-url_v2.png">
        <amp-img src="{{ IMG_PATH }}crawl-stats-file-types-url_v2.png" alt="File type by url" width="600" height="1000" layout="responsive"></amp-img>
      </a>
      <p>
        <strong>File types by url.</strong> Not much here but seems that there's a bit more variety of content types compared to 2014 although still heavily dominated by images.
      </p>
    </div>
  </li>
</ul>

As usual, the code’s up on <a href="https://github.com/dangoldin/site-analysis" target="_blank">GitHub</a> but you'll need to go back in the revision history to get access to the old data files.
