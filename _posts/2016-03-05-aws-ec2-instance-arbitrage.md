---
layout: post
title: "AWS EC2 instance arbitrage"
description: "It seems possible to make money by buying reserved instances and then selling them at a discount on the AWS market."
keywords: "aws, ec2 instances, reserved instances, ec2 marketplace, arbitrage"
image_url:
category:
tags: ["#aws"]
---
{% include setup %}
While reserving some EC2 instances earlier this week I discovered that Amazon allows you to [sell](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-buying-guide.html) reserved instances you’re no longer using. Usually the prices the third parties are offering are very close to the fair market value but I wondered if there was an arbitrage opportunity by reserving a longer term instance and selling it for a series of shorter term leases. The [typical discount](https://aws.amazon.com/ec2/pricing/) for buying a 1 year reserved instance is 30% while buying one for 3 years can get over 60%. The idea being that if you can get an instance for a 60% discount over 3 years and then sell it for 3 one year terms at a 25% discount you end up coming out ahead. Of course the challenge is that Amazon constantly drops prices so a 60% discount now may be equivalent to something much smaller three years later. There’s also the risk of no one purchasing your instances but that seems unlikely since you can always undercut Amazon’s official price. The other factor is the discount rate since you’re paying up front for 3 years worth of an instance. During that time you could have taken that money and invested it elsewhere which could have led to a better return but which would have been unlikely when you’re getting a 30% discount over the course of a year.

Unfortunately, based on the Amazon seller [documentation](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-selling-guide.html) it looks as if you can't actually split a 3 year reservation into 3 single year reservations and you'll be charged a 12% fee. There's always the option of using an instance and then selling it at a premium for a term that Amazon is not offering but I doubt it's worth it given the risks and the restrictions placed by Amazon.
