---
date: "2019-12-27T00:00:00Z"
description: An intersting framework to think about when working with third party
  vendors is to ask where is the software going to be deployed and who will be responsible
  for managing it?
meta_img: null
keywords: self hosted, self managed, third party hosted, third party managed, vendors,
  cloud
tags:
- 'product'
title: Who's hosting? Who's managing?
---

The end of the year is when companies get inundated with a ton of vendors trying to hit their sales goals. Given this volume comparisons start to become easier and patterns start to emerge. One that I noticed is the gamut of hosting options as well as managed options.

For hosting options, you can choose either the self-hosted option where the software is deployed to your own infrastructure. Alternatively, you can pay the vendor to deploy the code to their infrastructure and expose it through the necessary interfaces.

Managing options are similar, you can either choose to manage the software yourself which requires your team to do the deployment and configuration. On the other hand, you can pay a vendor to deploy and manage the service on your behalf.

They're not truly independent but it is useful to think about them independently. The more data-heavy products tend to fall into the self-hosted camp since you generally want customers to understand the hardware they're using. A company such as [Databricks](https://databricks.com/) falls into this camp. They will spin instances up your cloud account and will then charge a separate "Compute Cost" that varies across instance types. Companies that provide a more atomic, less customizable service, on the other hand, tend to go for the third party hosted option. Someone like [Confluent](https://www.confluent.io/) (although they do have other hosting options) falls into this camp. They offer a hosted Kafka offering that is deployed within their account. The way the product is exposed to customers is simpler (I/O bandwidth, storage, retention) and there's no need to expose the complexity of the deployment to customers.

There's no "right" approach here and this framework is still half baked but my gut is there's something deeper here I need to think more about.
