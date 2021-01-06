---
date: "2020-07-27T00:00:00Z"
description: AWS offers a variety of reservation options for the EC2 instances and
  a few things stand out when you compare them.
meta_img: /image/aws-ec2-reservation-comparison.png
keywords: aws, amazon web services, ec2 reservations
tags:
- 'dataviz'
- 'devops'
title: Analyzing the AWS EC2 reservation options
---

While writing the post on AWS reservations I started thinking if there's any arbitrage opportunity in the reservations. For example - does it make sense to do a 1 year or 3 year reservation for some instance types of upgrade an instance class to get a better reservation value?

You can do this manually using ec2instances.info which provides a quick way to look at EC2 pricing info although forces you to pick the type of reservations you're interested in. To speed things up I just ran the [ec2instances.info script](https://github.com/powdahound/ec2instances.info) to scrape the data into a JSON with a [quick script](https://github.com/dangoldin/analyze-ec2instance.info) to extract the relevant details into a CSV file. After that, it was as simple as loading into [Google sheets](https://docs.google.com/spreadsheets/d/1h5H3vsZluk1_TGGMGrZq-KFiha-Bfhu4OBzyp5QynA8/edit#gid=0) for some analysis and visualization.

There are a few surprises - the biggest was how much of a variance there is by instance type. The smallest discount comes with the 1 year convertible, no up front payment option and ranges from around 21% for the i3en series but goes up to 49% for the i2 series. I'm sure most of this is a function of the age and demand for the types but it's worth auditing use cases to see whether you get more bang for the buck on a slightly older instance. The same pattern holds when you look at the 3 year full up front payment options. The i2 series gets you a 75% discount while the discount on the i3en series climbs to 62%.

Another interesting analysis is to compare the cheapest reserved option (1 year convertible, no upfront) with the most expensive (3 year standard, full upfront) to check out the outliers. As expected, they're strongly correlated but you do so see variance - for example the p2 and p3 series have a similar discount for the 1 year term term but the p2 gets you a 10% larger discount than the p3 for the 3 year term.

<img src="/image/aws-ec2-reservation-comparison.png" alt="AWS EC2 Reservation type comparison" data-width="1189" data-height="736" data-layout="responsive" />

The code is up on [GitHub](https://github.com/dangoldin/analyze-ec2instance.info) with the data available on a [Google spreadsheet](https://docs.google.com/spreadsheets/d/1h5H3vsZluk1_TGGMGrZq-KFiha-Bfhu4OBzyp5QynA8/edit#gid=0) so if there's anything else that stands out I'd love to know about it.
