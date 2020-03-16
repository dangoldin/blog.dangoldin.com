---
layout: post
title: "Zoom's blow up and their financials"
description: "Zoom has been blowing up lately as the world moves to remote work. I'm curious what this is doing to their business, especially their margin."
keywords: "Zoom, financials, video conferencing"
image_url: "/assets/static/images/zoom-s1-financials.png"
category:
tags: ["#product"]
---
{% include setup %}
Zoom has had an incredible rise in the past few weeks as the tech world has shifted to remote work with nearly all meetings occurring over video conferencing. The stock is up 30% over the past month and it's the top app in Apple's app store - all great things! What I'm curious about is their current financial performance. Zoom makes money by charging a flat fee per user per month. And that fee was set based on both the value delivered but also some assumptions around usage. What happens to their margin if customers go from using Zoom for a few hours a week to multiple hours in day?

<amp-img src="{{ IMG_PATH }}zoom-s1-financials.png" alt="Zoom's S-1" width="848" height="349" layout="responsive"></amp-img>

From their [S-1](https://www.sec.gov/Archives/edgar/data/1585521/000119312519083351/d642624ds1.htm) it looks as if the cost of revenue has been consistently between 17% and 21% for the past 8 quarters - the bulk of this is likely the infrastructure to support the streaming product since it's incredibly correlated with their growth. This makes it seem that a 5x increase in usage would significantly eat into their margin but I suspect I'm missing something. As a bottoms-up approach I took a look at their [system requirements](https://support.zoom.us/hc/en-us/articles/201362023-System-Requirements-for-PC-Mac-and-Linux) to get a feel for their bandwidth usage. They recommend 600 kbps up/down for standard definition and 1.2 Mbps up/down for high def. If we assume someone is in a Zoom meeting 8 hours a day, 5 days a week at peak usage then over the course of 4 weeks they're consuming 10.8 gigabytes (600 * 1e3 / 8 * 60 * 60 * 8 * 5 / 1e9) in standard definition and 21.6 gigabytes in high def. Amazon's public data egress pricing (outside of Asia) is $0.045 per gigabyte so these full time Zoomers end up costing Zoom anywhere between 50 cents and a dollar per month. Of course this assumes a one-to-one feed and as the number of participants in a meeting increase the costs can go up pretty quickly although I expect Zoom made some optimizations to avoid sending the non-visible streams.

The above approaches paint a very different picture - the first makes it seem that the Zoom infrastructure is incredibly expensive to operate while the latter makes it seem that it's incredibly cheap. I suspect the reality is somewhere in between. In any case, their current usage explosion is  incredibly valuable for them - both because they're likely still profitable but also because they're able to acquire new customers that will convert to the higher margin when things get back to normal. Their next earnings report will be very interesting to follow.
