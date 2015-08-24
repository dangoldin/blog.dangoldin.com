---
layout: post
title: "Learn the application architecture through AWS"
description: "In addition to undertanding a database, looking at the AWS account and understanding how the various components fit together is a great way to ramp up as an engineer."
keywords: "aws, devops, learning, application architecture"
image_url:
category:
tags: ["#devops"]
---
{% include JB/setup %}
Last month I <a href="http://dangoldin.com/2015/07/25/use-the-database-luke/">wrote</a> that one of the best ways to ramp us a new engineer is to start going through the database schema and understand how the various tables fit together and what the various values mean. That provides a great view around the engineering product - the various fields indicate the options and functionality available and the tables indicate how the components work together as well as what and how data is collected.

The flip side is that this doesn’t actually provide any view into the application architecture - what’s the hardware used? What are the applications and how do they fit together? How do the applications work? What’s the load on the various components and what’s done to address it?

If you’re on AWS or another cloud provider a neat way to answer these questions is to look at the relationship between the various components and the appropriate stats. For example you can start with Route 53 to see the subdomains used and what they’re mapped to. Some may be mapped to EC2 instances while others may be mapped to a ELB, S3 buckets, or Cloudfront. Each of these provides a view of how the application is used - if it’s on S3 then the application is going to be static HTML, CSS, and JavaScript but if it’s hitting a load balancer then you can expect the application to be under heavy load and be supported by multiple EC2 instances. Beyond this you can look at the amount of requests being made and the volume of data going in and out as well as whether there’s any pattern throughout a day or week. There’s a ton of monitoring tools in AWS and each provides an additional data point that provides insight into the application architecture. The various options and dashboards available highlight how important devops is for every engineer - and how valuable it is for every engineer to have at least read-only access to AWS. It’s tough to write good, scalable good unless you understand how it will be used and how it will fit in with the rest of the stack.
