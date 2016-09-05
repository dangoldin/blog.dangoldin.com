---
layout: post
title: "An eBay design rant: timezone support"
description: "How can eBay still not allow people to choose the timezone for a start time? It's currently stuck in PDT."
keywords: "design, ebay, user experience"
image_url: "/assets/static/images/ebay-start-time.png"
category:
tags: ["#design"]
---
{% include setup %}

<img src="{{ IMG_PATH }}ebay-start-time.png" alt="eBay start time" />

I recently needed to sell something on eBay and encountered an issue I thought they would have taken care of by now. Apparently you can pick the start time for an auction but it has to be in PDT - there’s no way to choose another time zone. The change is trivial and one would think that a $60B company would be able to support multiple time zones in their core product. Someone brought this up in <a href="http://community.ebay.com/t5/My-eBay/HOW-DO-I-CHANGE-THE-TIMEZONE/td-p/2675835" target="_blank">the forums</a> in 2012 and it turns out that time zone support is only present in the forum to allow users to see posts with a local time.

Whenever I see seemingly obvious UX anti-patterns it makes me think there must have been an ulterior motive. In this case, I suspect not having a time zone may lead to a smoother distribution of auction end times which keeps product demand high and can distributes bids more evenly throughout the day. Another reason may be the desire to reduce risk - time zones are difficult to get right and it’s possible that eBay doesn’t want to expose themselves to the liability. The most likely reason may be that they are just not investing heavily in the use experience. They’re already the market leaders and it may make more sense to focus on marketing and selling rather than on making it easy to list a product. If someone’s already started to list a product it’s unlikely that the lack of a timezone will cause him to change his mind - it didn’t in my case.