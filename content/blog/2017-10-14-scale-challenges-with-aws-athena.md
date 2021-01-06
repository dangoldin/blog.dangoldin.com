---
date: "2017-10-14T00:00:00Z"
description: I really like the idea behind AWS Athena but just couldn't get it to
  handle our workload.
meta_img: null
keywords: aws athena, redshift, spectrum, big data
tags:
- 'meta'
title: Scale challenges with AWS Athena
---

Almost a year ago, AWS [launched Athena](https://aws.amazon.com/blogs/aws/amazon-athena-interactive-sql-queries-for-data-in-amazon-s3/) which allowed you to query data directly off of S3. I loved the idea since it would allow us to simplify our workflow by reducing the need for Spark and Redshift while also cutting our costs. In theory queries that were being run via Spark or Redshift could just be run on top of data stored in S3 without having to load it into any system.

I messed around with a few toy examples and was able to get up and running pretty quickly. Yet I was left disappointed when I threw a real problem at it. We have a variety of jobs that require us scanning a month’s worth of filtered impression data and I wasn’t able to get Athena to successfully complete the query no matter how many different permutations I tried. Every time I thought I had a clever workaround I ended up being disappointed when Athena failed to execute the query.

I’m optimistic that Athena will work through its kinks but at the moment we’re still sticking with our tried and true solutions in Spark and Redshift. Over the next few weeks I’m going to give [Redshift Spectrum](https://aws.amazon.com/redshift/spectrum/) a shot which seems to be the best of both worlds.
