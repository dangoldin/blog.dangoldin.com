---
date: "2016-12-03T00:00:00Z"
description: Engineers love getting the latest and greatest code but it's important
  to read the release notes to make sure the new versions don't have any unintended
  consequences on your application.
meta_img: null
keywords: software engineering, upgrading versions, open source, release notes
tags:
- 'devops'
title: Read the release notes
---

I often find myself upgrading an open source to a newer version but I have a bad habit to only skim the release notes. More often than not an upgrade will work out of the box and you’ll get the immediate benefits of the newer version but every once in a while things blow up and you need to revert or scramble to get a fix out. Reading documentation tends to be dry with only a few relevant parts but when working on large systems it’s paramount to go through and understand the nuances of every upgrade. During my career I’ve run into a variety of issues that could have been avoided by a thorough reading of the release notes. There’s still a chance you’ll miss something and that’s why you should always have a sandbox environment and try to containerize as much as you can. Below are a few examples of issues I’ve run into upgrading various applications over the past few months:

- **Kafka 0.8 to 0.10**. This wasn’t a true upgrade but we wanted to spin up a parallel Kafka cluster that was a significant departure from our previous version. Kafka is a complicated application and we assumed that our code was backwards compatible. This was half-true. The code worked but it took a major performance hit that was [clearly document](http://kafka.apache.org/0100/documentation.html#upgrade_10_performance_impact) in the release notes.
- **Mongo/PHP**: This was a simple case of not reading the compatibility chart between the different versions of Mongo, PHP, and the associated drivers. If you’re running an old version of PHP you are limited to a subset of drivers that don’t support the latest version of Mongo. Once again this was discovered when messing around on our sand environment.
- **Sentry**: Sentry’s a wonderful product that collects errors from every application you’re running and consolidates them into a single, slick UI. We wanted to get the benefit of a few additional plugins and decided to upgrade it to the latest version. Lucky for us there were some significant changes that required us to install a variety of build tools, including the C compiler. Unexpected but quickly remedied.

In our desire to get the latest and greatest we should be taking a step back to weight the benefits and the risks and looking at the release notes is a great way of understanding the potential impact. Even then it’s critical to have a separate environment to test different versions and a plan to roll back since it’s impossible to know what may actually happen on your unique system and configuration.
