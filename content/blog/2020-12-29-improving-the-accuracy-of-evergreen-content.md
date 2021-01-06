---
date: "2020-12-29T00:00:00Z"
description: Some of my evergreen posts get a decent amount of traffic but are out
  of date. These should be backed by a script that runs on a schedule and refreshes
  the data, similar to the way ec2instances.info works.
meta_img: /image/google-analytics-evergreen-posts.png
keywords: null
tags:
- 'code'
title: Improving the accuracy of evergreen content
---
![Google Analytics highlighting my evergreen posts](/image/google-analytics-evergreen-posts.png)

While looking through my blog's analytics I noticed that I have a few posts that have views despite being written years ago. Some of these are still relevant while others are woefully out of date. For example, the difference between yyyy and YYYY in Java's SimpleDateFormat is still relevant but how to scrape web pages has changed significantly since 2013 and anything that has pricing or performance information is likely wrong.

Clearly people want this information and I should update it but how should I go about it? There are two types of information here. One is akin to a how-to guide that describes the way to solve a particular problem. The other is simply a data table that sources, aggregates, and summarizes information. The former is difficult to automate and does require constant updating and refreshing to stay relevant. The latter, on the other hand, is something that can be automated.

A site that does this well is [ec2instances.info](https://www.ec2instances.info/) which contains everything you'd want to know about EC2 instances. The way it's managed is through a [script](https://github.com/powdahound/ec2instances.info) that uses the AWS API to fetch all the data, dumps into JSON, and then displays it as a table on a static site. This is a great approach for this type of tabular information. It's extremely cheap to operate since you can run the script whenever you want and the content itself is static. And if the scraping fails you just don't upload the content until it's fixed.

I'm tempted to apply this model to my evergreen data-heavy posts. One of the posts that gets decent traffic compares [EMR and Databricks pricing](/2018/12/10/emr-vs-databricks-costs/). That's something that can be done through this approach. The AWS side can be automated using the API but Databricks would unfortunately require scraping. In any case once the data is combined it becomes trivial to display it as a table on a static site. A more complex example is a visualization of [Jersey City's parking zones](/2015/09/24/mapping-the-jersey-city-parking-zones-ii/) which involved scraping a PDF, geocoding the addresses, and then drawing them on a map. That is more difficult to automate but also doable if the zones were frequently updated.
