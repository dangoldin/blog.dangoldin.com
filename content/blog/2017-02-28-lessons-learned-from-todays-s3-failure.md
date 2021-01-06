---
date: "2017-02-28T00:00:00Z"
description: AWS S3 had a massive outage today in the US-EAST-1 zone. The silver lining
  is that it did lead to a few realizations and lessons.
meta_img: null
keywords: aws, s3, cloud provider, devops
tags:
- 'devops'
- 'code'
title: Lessons learned from today's S3 failure
---

Today was quite a day. S3, the most resilient of Amazon’s services went down for a few hours in the US-EAST-1 zone and led to a series of failures across a variety of services. There are a ton of lessons one should take away from this - ranging from running across multiple availability zones to being integrated with a variety of cloud providers. The challenge is that it’s not easy; especially when you’re small. At that point you have to prioritize building support for a 0.01% chance of massive failure versus a variety of features and product enhancements to drive your business forward.

As always, there is no black and white answer and your approach should depend on your situation. If you’re working in healthtech or finance and need resilience you should focus on resiliency. If you’re just building a proof of concept consumer app you should focus on building a useful product and not worry about dealing with zone failures. Of course there are best practices you can adopt to make your application more resilient (containerization, statelessness, etc) but they shouldn’t be the primary focus.

Yet this experience provided me with two major realizations: the importance of aggressive edge caching and the value of a loosely coupled system. An aggressive edge caching strategy won’t solve all your problems but the more data that’s cached in your user’s browsers or on a CDN the easier your system can handle internal failure. In the case of an S3 failure this meant that our CDN would be able to serve the last available assets rather than having browser make requests to failing endpoints. A loosely coupled systems buys you time which lets the kinks get worked out in the underlying system. In our case this manifested in our ability to keep collecting event data in Kafka despite our inability to persist to S3. Since Kafka is designed to be a rolling window of events we were able to just consume the events from the last uploaded time as soon as S3 came back up. The outage even gave us the opportunity to tweak some of our configs (from the wonderful [Secor](https://github.com/pinterest/secor) library) to prove that we could persist our event data to Google Cloud Storage if we needed to.

All in all, it was not the most pleasant of days but it did offer a variety of lessons that do contribute to making our systems significantly more reliable and resilient. Not all of us have the ability to test using a [Simian Army](https://github.com/Netflix/SimianArmy) so for the rest of us we get to learn through production failures.
