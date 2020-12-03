---
layout: post
title: "Degrade functionality instead of building cross region availablity"
description: "The recent AWS outage is a good reminder to audit your applications for failure modes but rather than support a cross regional deployment it's likely easier and better to design your application for degraded performance."
keywords: "aws, regional availability, failover"
image_url: 
category: 
tags: ["#devops"]
---
{% include setup %}
AWS had a large multi-hour Kinesis [outage](https://aws.amazon.com/message/11201/) last Wednesday that affected a variety of dependent services, including Cloudwatch, Lambda, ECS, and EKS. These systems are complicated and highlight the scale and complexity of modern cloud computing.

It's impossible to be perfect but it's a reminder for all of us to think through our applications and identify their failure cases. Just because there was a major AWS failure that affected your service does not mean you should drop everything and convert your application to be highly-available with regional failover. Instead try to model the probability of a particular failure, its impact, and the effort of a fix. With the above you should be able to identify some easy wins that get you fairly far.

The reality is that when it comes to availability you just want to be better than your customers. If your customers are down it's unlikely they'll even know you're down. And in fact there's strength in numbers - I recall a large [AWS S3 outage](https://aws.amazon.com/message/41926/) in 2017 that took down a large chunk of the internet and at that point everyone was just waiting for AWS to recover. A big driver is your business - if you're delivering a critical need then your SLAs and architecture should reflect it - Okta is a great example of [architecting to reduce failure](https://www.okta.com/resources/whitepaper/how-okta-builds-and-runs-scalable-infrastructure/) - but many companies don't need to go to such a degree.

One of the simpler actions to take is to design your application to run but in a degraded state. That may mean making it read-only for the duration of an issue or having all modifications waiting in a queue. A model we've had success with is using S3 as a sort of cache of business data that is used by our most critical applications. The data on S3 may not get refreshed if there's an outage on any of the feeder systems but the application itself can operate just fine using slightly out of date data.
