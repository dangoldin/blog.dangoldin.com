---
date: "2020-05-27T00:00:00Z"
description: Metrics, logging, and error reporting all allow you to get a better understanding
  of how your application is performing.
meta_img: null
keywords: instrumentation, metrics, logging, error reporting
tags:
- 'code'
- 'management'
title: Metrics, logging, and error reporting
---

As software engineers it’s vital to understand how our applications are performing. The more information we have the better we can address problems, improve performance, and generally better solve problems for our customers. Imagine releasing a product with nothing being collected - you'd be flying blind.

I'm a huge advocate for measuring application performance in terms of business metrics and aligning it as much with the customer experience as possible. This post does not go into that. Instead, I want to share my beliefs around measuring the technical application performance. In my mind, they're grouped into three major categories: metrics, logging, and error reporting. There is some overlap but I find it a helpful way to think about them.

### Metrics

Metrics are by far the most useful. This ranges from the business metrics but also includes the performance of the code itself. How long do things take to run? How are the instances performing? What is the distribution of status codes? Being able to surface this data visually in a way that's easy to explore is one of the most important things you can do to improve the performance of your application. Having a visual representation of what your code is doing is empowering and you will immediately see problems when an existing pattern is broken. These dashboards start simple but if you invest in instrumenting your code you will end up with the ability to debug most issues without having to look at anything else. My go to tools here are [Prometheus](https://prometheus.io/) and [Grafana](https://grafana.com/).

### Logging

I want to like logging but it's the least useful bit of instrumentation one can do. It's useful during development but once an application is deployed the other instrumentation pillars end up providing more value. There will be times when you need to add temporarily detailed logging to debug an issue but logging is difficult to get right. If you collect too little it adds very little value over metrics and if you collect too much it ends up being inaccessible and costly. Especially in a high volume and distributed system logging ends up being a burden rather than a help.

### Error reporting

This seems underrated but I'm a huge fan of tools like [Sentry](https://sentry.io/) that hook into your error/exception handling code and give you descriptive context and stack traces. Especially if you take every error seriously and work tirelessly to reduce the noise your code will become more and more robust. This also takes advantage of our ability to spot anomalies since novel errors will become obvious especially if they come after a release. We build complex systems and errors are inevitable but building a culture that takes each one seriously is not. The more a team cares about the quality of their code the more eager they are to eliminate errors.

Each of the above serves a slightly different purpose and I didn't even go into distributed tracing but if I were to rank them I would go with metrics, then error reporting, and then logging. The more accessible the tool the more helpful it will become.
