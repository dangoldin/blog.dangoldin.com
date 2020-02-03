---
layout: post
title: "Visualizing my 2019"
description: "I collected various data over the course of 2019 to track my behavior and generated a few simple visualizations to highlight the interesting ones."
keywords: "data visualization, quantified self"
image_url: "/assets/static/images/wordcloud-breakfast-2019.png"
category:
tags: ["#dataviz"]
---
{% include setup %}
In order to better understand myself, I've been collecting daily stats over the past few years with the idea that tracking various metrics would show me ways to improve. This happened to some degree - seeing many of the numbers leads to a sense of shame - but there hasn't been a huge insight that looks at the interaction of the various items I track. To do that, I suspect I need to dive deeper into the quantified self movement and start continually tracking my physiological metrics rather than the current approach of a daily check-in describing my mood and what I consumed.

At least that's the hope for 2020. For 2019, I modified an old script to help visualize the data I collected and while there's not a huge amount that stood out there's something about a whole year expressed through a series of data visualizations.

<ul class="thumbnails">
  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}sleep-duration-2017.png" alt="Sleep duration" width="800" height="600" layout="responsive"></amp-img>
      <p>Around 7 hours of sleep a night with a pretty tight range. A few outliers but those are primarily data tracking issues when using Sleep Cycle and multiple sleep periods.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}coffee-tea-alcohol-coke-weekly-2019.png" alt="Coffee tea alcohol coke by week" width="800" height="600" layout="responsive"></amp-img>
      <p>Week consumption of coffee, tea, alcohol, and coke (my primary soda) box plot.I'm pretty happy with the results. I'm consuming much less alcohol and soda than I used to and coffee is just under 2 cups a day.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}wordcloud-breakfast-2019.png" alt="Breakfast wordcloud" width="1000" height="1000" layout="responsive"></amp-img>
      <p>I love my eggs for breakfast. Cheese is a close second.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}wordcloud-lunch-2019.png" alt="Lunch wordcloud" width="1000" height="1000" layout="responsive"></amp-img>
      <p>A little bit more variety here than breakfast but still quite heavy on the chicken and salad. The sour cream is probably a surprise to many but as a Russian that's my salad condiment of choice. The beef burrito from the nearby burrito truck also makes an appearance in the top 10.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}wordcloud-dinner-2019.png" alt="Dinner wordcloud" width="1000" height="1000" layout="responsive"></amp-img>
      <p>Dinner is surprisingly similar to lunch.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}wordcloud-snack-2019.png" alt="Snack wordcloud" width="1000" height="1000" layout="responsive"></amp-img>
      <p>The unhealthiest of the meals. Goal for 2020 is reduce my sugar consumption.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}wordcloud-drinkslist-2019.png" alt="Drinks wordcloud" width="1000" height="1000" layout="responsive"></amp-img>
      <p>Shows my drinking distribution. Coffee is up there as well as the various alcohols.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}alcohollag-vs-sleepduration-2019.png" alt="Drinks wordcloud" width="800" height="600" layout="responsive"></amp-img>
      <p>This is one of the more interesting ones but shows the relationship between my alcohol consumption and the subsequent amount of sleep. No surprise that the nights I don't drink I sleep more but the effect is pronounced.</p>
    </div>
  </li>
</ul>

