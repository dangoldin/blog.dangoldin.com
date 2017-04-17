---
layout: post
title: "AMP and subscription paywalls"
description: "AMP is meant to improve the performance of mobile sites but there's a big hole that allows one to bypass paywalls."
keywords: "AMP, accelerated mobile pages, subscriptions, paywalls, advertising, wall street journal"
image_url: "/assets/static/images/wsj-amp-blocked-access.png"
category:
tags: ["#product"]
---
{% include setup %}
A variety of publishers are adopting [Accelerated Mobile Pages](https://www.ampproject.org/) (AMP) to speed up the performance of their sites on mobile. In fact, I’m using AMP to power my entire blog on both desktop and mobile and it’s significantly faster than my old, heavyweight site. But I’m a small time blogger and to get real publishers on board AMP needs to support a variety of monetization options - including ads and subscriptions -  that are able to generate the same revenue they’re getting without AMP.

While browsing the Wall Street Journal I came across an AMP article page and saw that AMP had introduced a subscription paywall feature so I was curious to see how it worked. Looking through the source and network calls it’s powered by a small JavaScript snippet called amp-access-0.1.js. This controls whether the page throws a paywall overlay or the full article. It turns out that by messing with the network calls and blocking “amp-access” from loading it’s possible to get access to the full content.

Blocking ads is one thing but being able to bypass a subscription paywall is quite another. It’s already possible to get access to the paid Wall Street Journal articles by reaching them through Google but that doesn’t always work and the Wall Street Journal can stop that any time. Being able to bypass AMP’s subscription functionality, on the other hand, is something that AMP needs to address in order to get wider adoption - especially by the premier publishers.

<ul class="thumbnails">
    <li class="span8">
        <div class="thumbnail">
            <amp-img src="{{ IMG_PATH }}wsj-amp-orig.png" width="622" height="853" alt="WSJ AMP with paywall" layout="responsive" />
            <p class="caption">Original WSJ AMP article with a paywall access blocker.</p>
        </div>
    </li>
    <li class="span8">
        <div class="thumbnail">
            <amp-img src="{{ IMG_PATH }}wsj-amp-blocked-access.png" width="1348" height="927" alt="WSJ AMP blocking amp-access" layout="responsive" />
            <p class="caption">The entire article is accessible if amp-access is blocked.</p>
        </div>
    </li>
</ul>
