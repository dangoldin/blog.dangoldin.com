---
date: "2019-02-09T00:00:00Z"
description: In order to avoid seeing any ad but still paying the publisher you can
  build a personal DSP that only bids on your own ad requests.
meta_img: null
keywords: adtech, dsp, ssp, real time bidding
tags:
- 'product'
title: A personal DSP
---

A common refrain from people who use adblock is that they’d be willing to pay for the content if it were an option and only use adblock to avoid the tracking and slow site speed. The desire is to have a way to see how much a website is generating from their visit and give the publisher that money directly. That way the publisher gets the equivalent amount of money as they would otherwise and the user gets to avoid ads.

There’s no solution that’s capable of doing that right now but it’s interesting to think about a solution that could make that possible. My proposal is a personal [DSP](https://en.wikipedia.org/wiki/Demand-side_platform) (Demand-side platform): the idea is that it’s a “bidder” that acts just like any other company participating in real time bidding but instead of trying to optimize towards a specific campaign all it does is bid whenever a single user is identified - you. And when it does bid it bids an absurdly high amount in order to win every single time.

The technology for this already exists but you’d need to somehow get this DSP integrated into every single [SSP](https://en.wikipedia.org/wiki/Supply-side_platform) (Supply-side platform) in order to have access to every single ad request. And then you’d need to have the ability to process hundreds of billions of ad requests a day and discard nearly all of them. In addition, you’d need to find a way to sync your user information with every information so you’d be able to identify yourself in their requests. It’s all technically doable but extremely difficult in practice.
