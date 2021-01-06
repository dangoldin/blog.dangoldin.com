---
date: "2019-06-15T00:00:00Z"
description: In a tightly coupled system a uniform outage has a higher impact than
  the sum of the individual parts.
meta_img: null
keywords: kafka, data outage, distributed systems
tags:
- 'code'
title: Tightly coupled data loss
---

A few months while doing some Kafka maintenance we ran into an issue that caused us to lose approximately 10% of records across all our topics over the course of an hour. It was a big screw up but what made it worse was the interaction between the records. Our records represent the life cycle of an ad from the auction, to the render, to whether it was in view, and beyond. Rather than send all the information along for each on we keep the records as lightweight as possible and rely on our backend processing to join them together to come up with an auction log.

You can probably tell where I'm going with this but since the loss was distributed uniformly across our various topics it the final effect was a much larger drop. For example knowing that a particular auction resulted in a click isn't very helpful if you don't have the other details of that auction.

It's obvious in hindsight but the general idea is if your pipeline depends on joining records from multiple streams a uniform outage will have a much higher impact than the actual number of records dropped due to the interactive nature. A simple example is if you have two Kafka topics that end up being joined during processing and you lose 10% of records for each topic you don't end up with 90% data left but rather 81% (0.9 * 0.9). This gets even worse when you move to 3 dependent topics (72.9% = 0.9 * 0.9 * 0.9). It's not as simple since some topics are more important to capture than others and they all have different cardinality but the key idea is that in any system with tightly coupled components any uniform outage the combined impact is more than the sum of the individual outages. This applies not just to Kafka but to any system that requires multiple components working together - for example a microservice architecture where 10% of requests fail over the course of an hour will have a higher failure rate than 10%.
