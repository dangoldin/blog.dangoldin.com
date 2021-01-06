---
date: "2019-12-31T00:00:00Z"
description: Databricks has an interesting pricing model where they will run instances
  your cloud account but then charge you on a separate compute unit.
meta_img: null
keywords: databricks, cloud vendors, open source
tags:
- 'product'
title: Self hosted, externally managed
---

A couple of days ago I [wrote](/2019/12/27/whos-hosting-whos-managing/) about two questions one can ask when it comes to working with a technology vendor: who's hosting and who's managing?

I find the externally managed but self hosted one interesting. You're giving another company access to your accounts and have full visibility into what they're doing yet you still pay them. An example of this is [Databricks](https://databricks.com/). They offer a product akin to Spark-as-a-service along with a variety of bells and whistles that make it much easier to run and manage.

The primary Databricks product spins up instances in your cloud account, runs the proprietary Databricks code, and then charges you based on separate "Compute Units" that are a function of the instance type. This pricing model is interesting. Why not spin the instances up in their account and then charge you the total cost? You wouldn't need to worry about the instance type to compute unit conversion and the final cost would be transparent.

On the flipside, you wouldn't have as much visibility into the underlying hardware and the impact it has on performance. My gut is that the primary motivation is to allow customers to keep all cloud costs within their own account. This gives them the benefit of being able to manage their own cloud costs - for example by negotiating for a discount on higher spend or through instance reservations. This is a way of both passing on savings to their customers who understand their own use case better as well as making the Databricks bill lower than it actually is.

While many open source companies are struggling to compete against the cloud vendors Databricks is able to hold their own. Part of it is the uniqueness and value of the product but a large part is their pricing and billing.
