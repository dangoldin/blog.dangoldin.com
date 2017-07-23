---
layout: post
title: "The wild world of online trackers"
description: "The digital world is full of advertiser trackers and my gut is that FreshDirect is exposing some of their audience data to their competitors."
keywords: "adtech, advertising trackers, freshdirect, whole foods"
image_url:
category:
tags: ["#meta"]
---
{% include setup %}

<div class="right10">
  <amp-img src="{{ IMG_PATH }}whole-foods-ad.png" width="250" height="445" layout="responsive" alt="Whole foods ad"></amp-img>
</div>

Working in AdTech I’m slightly more aware of how modern digital advertising works compared to the average person and get curious when I see an for a brand that I have never seen before. Just yesterday I was on Twitter and saw a Whole Foods ad for what I think was the first time. This got me thinking about what I must have done to get into their targeting list. Of course it may have just been a new campaign but I know enough to suspect it had something to do with my recent browsing behavior.

I tried thinking through what I did the previous couple of hours that could have piqued Whole Foods’ interest and the only thing I that could have been remotely relevant was that I placed a FreshDirect order. If that in fact was the case it seems a pretty big error on FreshDirect’s part. I’m a potential FreshDirect customer and they are giving my data and information away to Whole Foods, a competitor. Sure it’s all bits but it’s equivalent to a company giving their leads away to their competitors.

<div class="right10">
  <amp-img src="{{ IMG_PATH }}freshdirect-ghostery.png" width="154" height="660" layout="responsive" alt="Ghostery on FreshDirect's home page"></amp-img>
</div>

This must have been unintentional but it highlights how complicated the modern AdTech ecosystem is. There are thousands of vendors firing trackers and sending data back and forth that is then used to create some pretty advanced audience segments. By running [Ghostery](https://www.ghostery.com/) on the FreshDirect homepage one can see the different trackers used - in my case I saw 34 trackers with 3 of them being in the audience data business: Aggregate Knowledge, BlueKai, and eXelate. I suspect it was one of these companies that classified me as a potential grocery shopper and sold this data to Whole Foods.

It’s unlikely that FreshDirect would opt in to this behavior so there must be something else going on. Either they are working with these companies to retarget these users later and the data is getting leaked or these trackers are being dropped by some of the other vendors they’re using. Both cases pose a problem to FreshDirect and is something they should address. On the other hand, it may have been an intentional move by FreshDirect and they are in fact getting paid by these data companies to drop their trackers. Maybe they have enough faith in the stickiness of their product that they don’t worry about competition and will gladly share data with them for a price.

One can get deeper into this by seeing what script is dropping what other script but it’s an incredibly intricate web with tons of unexpected outcomes. I’d love to know how many companies actually understand what’s happening behind the scenes and how they’d react to this knowledge if they found out.
