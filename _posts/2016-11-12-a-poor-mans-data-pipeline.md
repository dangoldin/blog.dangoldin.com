---
layout: post
title: "A poor man's data pipeline"
description: "Data pipelines are typically complicated and tough to build and maintain. There's a simple, serverless implementation that can be done using AWS's Elastic Load Balancers and Lambda."
keywords: "data pipeline, aws, lambda, elastic load balancer"
image_url:
category:
tags: ["#code", "#data"]
---
{% include setup %}
Building a data pipeline can be a massive undertaking that typically requires deploying and configuring a Kafka cluster and then building appropriate producers and consumers that themselves come with dozens of configuration options that need to be tweaked to get the best possible performance. Beyond that one has to set up a coordination service, typically ZooKeeper, to handle a litany of concurrency and failure issues. These days having a data pipeline is a requirement for any data driven business but building a true streaming data pipeline entails a ton of dedicated effort.

An idea I’ve been toying with is a “poor man’s data pipeline” that could be built in a serverless way and can scale to massive volumes. It turns out that a pretty simple data pipeline can be built using two AWS services: Elastic Load Balancer (ELB) and Lambda. This data pipeline doesn’t have the true streaming that Kafka provides but for simple aggregations and a tolerable 5 minute delay it’s extremely cheap and robust.

The way it works is by setting up an Elastic Load Balancer with [access logs enabled](http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/access-log-collection.html) but not actually associating it with any EC2 instances. Then every time an event is generated it would just be making a request to the ELB with the data specified as query string parameters. Note that this is extremely cheap since at this point we’re not paying for any computer and are just paying for traffic to the load balancer. Note that this is a hack since it will cause every single response to have a 503 status code but can be easily remedied with an simple web service that does no actual processing and responds with a simple 204.

Once we have access logs enabled we set up a Lambda function that gets executed every time a new S3 log file is generated. This lambda function downloads the S3 file and rolls it up via a custom function which can then be setup to export the resulting data wherever it needs to go. Note that at the moment Lambda still has a series of [limits](http://docs.aws.amazon.com/lambda/latest/dg/limits.html) that may prevent this from working at incredibly high volumes but even then one can set up Lambda to make a simple HTTP request to an external service with the log file path which can then be processed.

The [code](https://github.com/dangoldin/poor-mans-data-pipeline) is short and sweet and is up on GitHub along with a guide on getting started. If you have any questions or suggestions I’d love to hear them.
