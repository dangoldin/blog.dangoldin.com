---
date: "2015-01-29T00:00:00Z"
description: We wrote a simple application from Node to Netty and this describes our
  migration on AWS.
meta_img: /image/load-balancer-swap.png
keywords: devops, migrating, Node.js, netty
tags:
- 'devops'
title: Migrating a simple HTTP application on AWS
---

A fun little exercise I had to do was rewrite a simple application from Node.js to Netty to fit into the rest of our stack. The rewrite took a couple of days but the deployment and testing was critical to get right so I wanted to share our approach. To provide some context, the application was an HTTP server that handled ~1,000 requests a minute with each request spawning at most three more to pull in more data.

Make it work. Make it right. Make it fast.
The statement is attributed to Kent Beck but I've become a huge fan and try to approach all projects with this mindset. In our case, having a product deployment already available made it simple to test. We would just run some production requests against our new code and compare the responses. If they matched then we knew we did the right thing. Note that if you're on AWS and running an ELB, a simple way of getting HTTP requests without touching any code is through <a href="http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/access-log-collection.html" target="_blank">access logs</a>. Amazon will store each of the requests to the ELB to a file on S3 that you can then easy download and parse.

The next step was making sure it could handle the same load as the old application. The first thing was to run a series of <a href="http://httpd.apache.org/docs/2.2/programs/ab.html" target="_blank">Apache benchmarks (ab)</a> so we can get a rough idea of the concurrency and performance on a single request. As part of this test we turned off the caching layer in our application to hobble it as much as possible since if it could handle that, it could handle anything. The final step was using a  script to simulate the requests in the ELB access against the new server and see how it behaved.

The deployment turned out to be the easy part. All we had to do was launch a new server behind a new ELB and swap the DNS record to point to it. We did this for a few short periods before swapping it back so we could do a few final checks before leaving the DNS record pointing to the new ELB. After a couple of days we eliminated the old ELB and instances completely. The chart below shows the transition between the two load balancers.

<div class="thumbnail">
  <img src="/image/load-balancer-swap.png" alt="Load balancer swap" data-width="880" data-height="426" data-layout="responsive" />
</div>