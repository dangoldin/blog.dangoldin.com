---
date: "2020-07-08T00:00:00Z"
description: AWS gives a variety of ways to buy reservations and there are massive
  savings if you can understand your business.
meta_img: null
keywords: aws, compute reservations, engineering cost management
tags:
- 'aws'
- 'devops'
title: Optimizing AWS reservations
---

The Information has [an article](https://www.theinformation.com/articles/uber-ceo-wants-to-shift-more-engineering-jobs-to-india-sparking-internal-debate) making the case that Uber was better off having their own data centers versus relying on the cloud given the impact of COVID but that would depend on their reservation strategy. Sure if they reserved AWS capacity then they would be on the hook. Alternatively, if they had no reservations and were running everything on demand they would have incurred higher previous costs but would immediately be able to shut things down. This got me thinking about the optimal reservation strategy - the reality is that this depends very much on your business and the ability to forecast but this is an interesting exercise in speculation.

The best thing is to use spot instances if you can. They can give you up to a 90% (usually around 75%) discount versus the on demand price. That's an incredible deal since a 3 year fully upfront reservation will give you a 65% discount. It may not be easy to have your application run off of spot instances but if compute costs are a significant factor then it may be a worthwhile endeavour.

If spot instances are not doable you then get into the complex world of reservations. AWS gives you a few dimensions to play with - reservation duration (1 or 3 years), payment method (no upfront payment, partial upfront payment, or an entirely upfront payment), and the [convertible vs standard distinction](https://docs.aws.amazon.com/whitepapers/latest/cost-optimization-reservation-models/standard-vs.-convertible-offering-classes.html).

Those that can forecast their workload perfectly can choose the optimal reservation for them but for the rest of us it's not that simple. On one extreme you can go on demand and pay a fairly significant premium (~33% above the standard, 1 year, no upfront option) for the flexibility but that's a large price to pay.

A worthwhile option is to use the existing marketplace where you buy partially used reservations from other companies and not Amazon. This gives you the ability to buy non-standard durations and craft a strategy that makes sense for your workload. One idea might be to stagger your reservations over the course of a year so you're reserving a twelfth of your desired capacity every month. That gives you flexibility in your reservations and gives you the option to not renew in increments - a useful ability these days. Of course you then have to manage a much more complicated policy but nothing comes easy.

The summary is that reservations can be made as complex as you want and the more you can forecast and understand your risks the more power you will have in finding an approach that works. AWS gives a variety of levers to play with but you need to know your business to take advantage.
