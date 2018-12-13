---
layout: post
title: "EMR vs Databricks costs"
description: "Comparing EMR and Databricks costs is not the easiest since Databricks introduced a DBU 'currency' type but with a little bit of math it's easy to compare."
keywords: "aws emr, databricks, spark hosting"
image_url: "/assets/static/images/emr-vs-databricks.png"
category:
tags: ["#devops"]
---
{% include setup %}
It’s frustrating when vendors introduce their own currency in what seems to be a way to obfuscate pricing. The most recent example is Databricks which offers a slick Spark hosting solution on top of AWS and Azure. Unfortunately, instead of being explicit about the prices they introduced a Databricks Unit (DBU) currency type that then translates into dollars based on the type of usage - ranging from a simple Spark cluster with limited optimizations (Basic Plan) to an interactive one with all sorts of behind the scenes performance tweaks (Data Analytics Plan).

The nice thing is that [Databricks is transparent](https://databricks.com/product/aws-pricing/instance-types) about the amount of DBUs per EC2 instance and the price per DBU so it took a bit of data cleanup to dump everything into a [spreadsheet](https://docs.google.com/spreadsheets/d/1WnHBixRBXw0PhKfA0XidgNQN1sM0TEHRCxFHL6laEHY/edit#gid=0
) and then do the lookups and math to compare the [EMR](https://aws.amazon.com/emr/pricing/) vs [Databricks](https://databricks.com/product/pricing) pricing.

Turns out that the Databricks Basic plan is comparable to standard EMR - in some cases it’s more expensive and in some cases it’s significantly cheaper. For example an i2.xlarge costs $0.213/hour in AWS EMR but 1.5 DBUs (equivalent to $0.105/hour) in Databricks. At the same time an i3.16xlarge costs $0.270 in AWS EMR but 16 DBUs (equivalent to $1.120/hour) in Databricks. That’s a huge range, the i2.xlarge is less than half the cost in Databricks but the i3.16xlarge is more than 4 times as much in Databricks than in AWS. In general Databricks is more expensive for the larger instance types and cheaper for the smaller ones and I’d be curious to understand the reasoning. Also note that this is just using the Basic plan - Databricks has other plans which are never cheaper than the EMR equivalent.

I’ve included a screenshot of the analysis below but all the data is also available on a shared [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1WnHBixRBXw0PhKfA0XidgNQN1sM0TEHRCxFHL6laEHY/edit#gid=0
).

<amp-img src="{{ IMG_PATH }}emr-vs-databricks.png" alt="EMR vs Databricks costs by instance type" width="2168" height="1402" layout="responsive"></amp-img>
