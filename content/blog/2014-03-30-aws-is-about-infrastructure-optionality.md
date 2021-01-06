---
date: "2014-03-30T00:00:00Z"
description: People will either argue that AWS is more expensive than the alternative
  or worth it due the ability to scale. The real value is in the options available
  and being able to use them to build the system you want.
meta_img: /image/aws-services.png
keywords: AWS, cloud computing, infrastucture
tags:
- 'aws'
title: AWS is about infrastructure optionality
---


<img src="/image/aws-services.png" alt="AWS services" data-width="1107" data-height="383" data-layout="responsive" />

Every time Amazon announces a price drop there are always people pointing out that it’s still more expensive than other cloud computing services such as Linode or Digital Ocean. The Amazon fans then respond by saying sure AWS is more expensive but the value is the ability to scale quickly when needed.

For me, the biggest value behind AWS is the ecosystem and the included optionality. When building large scale web services it’s tough to know every issue you will run into and more often than not your needs and implementation will change. AWS provides a ton of available tools that make growing and scaling easier beyond the hardware itself. You may start with using EC2 for your server and S3 for hosting your static assets but over time you may start using Cloudfront as a CDN and Redshift for your analytics and EMR to process your various logs. That’s the biggest value in AWS - not being able to launch new machines quickly but having a set of infrastructure options that can be specialized to fit your needs.

It used to be that the physical hardware was orders of magnitude more expensive than engineers but this hasn’t been true for decades now - it’s perfectly reasonable to look for ways to reduce yours costs especially if it can be done quickly but obsessing over hardware costs, especially while you’re still growing, is a red herring. Building large systems is tough and the fewer things you have to worry about the better - using AWS reduces the chance that you will run into a scenario where you’re just not able to do something without changing your host and rewriting your architecture.
