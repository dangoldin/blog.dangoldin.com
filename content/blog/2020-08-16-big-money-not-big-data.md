---
date: "2020-08-16T00:00:00Z"
description: When people complain about big data they're just complaining about the
  cost, not the technical challenges.
meta_img: null
keywords: big data, data engineering
tags:
- 'data'
- 'product'
title: Big money, not big data
---

It's common for companies to complain about the challenges of running big data and how difficult it is. The reality is that unless you're running at massive scale (Google or Facebook) your problems are more to do with big money rather than big data. It's expensive to store, process, and expose terabytes and the difficulty is in doing it cost effectively, not in simply doing it. There are enough modern tools out there across all the cloud providers (AWS, GCP, Azure) and vendors (Snowflake, Databricks) that it's possible to do nearly everything you want but you'll just have to pay for it.

At Facebook and Google scale you run into problems that the existing set of technology tools can't solve and that's when you have to push the state of the art forward. For the rest of us the problem is solved but expensive. At the same time we are starting to see more cost-effective ways of handling big data. One of the best examples is separating storage from compute. Computation is expensive but storage is cheap. Another example is probabilistic techniques for summarizing and analyzing datasets - for example [HyperLogLog](https://en.wikipedia.org/wiki/HyperLogLog) makes it much cheaper to count values and various data science sampling techniques make it cost effective to train data science models.

What is difficult is balancing the cost of big data infrastructures with the value they provide. How much value is a query that runs a second faster? Is $5,000 in additional monthly data costs worth it? Everyone has a different answer to these questions which are becoming increasingly important as we start collecting, storing, and analyzing every data point.



