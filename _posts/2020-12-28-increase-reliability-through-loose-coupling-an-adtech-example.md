---
layout: post
title: "Increase reliability through loose coupling: An adtech example"
description: "An example of how we've decoupled systems in our real time bidding system to allow for degraded functionality vs systematic failure."
keywords: "adtech, system reliability, uptime, devops, sre"
image_url: 
category: 
tags: ["#devops"]
---
{% include setup %}
A few weeks ago I [evangelized degrading functionality](/2020/12/02/degrade-functionality-instead-of-building-cross-region-availablity/) in the case of system outages as an option versus building out full regional resiliency. Someone asked me to dig into my example more so I'll share a bit of how one of our core systems at TripleLift is set up.

We run an advertising exchange handing tens of billions of ad requests each day. AdTech has a ton of different companies with each doing a bit of everything but a simple way to think of us is an "exchange" that sits in between buyers and sellers of ads and ad space. In this case, a seller would be a publisher, such as the NY Times that has ad opportunities available. The buy side would be a Demand Side Platform (DSP) that has an API integration and submits bids on behalf of advertisers.

One of the challenges in running an exchange is building a global system that can handle tens of billions of auctions per day - with each auction dispatching dozens of requests to the various integrated parties. The way we do this is by keeping our exchange focused on the minimal set of requirements to run an auction - receiving requests from a seller, sending them to buyers, and then filtering and identifying the winning response. That means these applications do not connect to any database that isn't a blocker to run an auction and instead rely on a separate service that compiles various the business rules, packages them into a protobuf message, and then uploads it to S3. Once the data is uploaded to S3 this service lets the exchanges know that an update is available and it's up to them to fetch and load them from S3.

This approach decouples the exchanges serving the outside world from the service putting together the data. If this data service or any of the systems it depends on is down it doesn't affect our ability to run auctions but it does mean that they may be running on slightly delayed data - for example new publishers launched or changes to business rules - but these would just get picked up during the next update.

In addition to resiliency this approach also leads to simpler code since it puts the responsibility of data fetching to the data service and keeps our exchanges focused on the real time bidding system. Also, the load on the various databases and services is reduced since we do not need every one of our exchanges asking for the same data from the same set of databases. In essence, we can think of the solution here as a form of a cache that's backed by S3 and updated on a specific schedule by a dedicated application.
