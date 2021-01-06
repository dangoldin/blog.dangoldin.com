---
date: "2014-12-01T00:00:00Z"
description: After reading Rob Ewaschuk's post I spent some time going through our
  alerts and figuring out how they could be simplified. This led to a discovery of
  latency based alerting.
meta_img: null
keywords: aws, monitoring, alerting, devops
tags:
- 'devops'
- 'aws'
title: Symptom based monitoring
---

A month or so ago I read Rob Ewaschuk’s <a href="https://docs.google.com/document/d/199PqyG3UsyXlwieHaqbGiWVa8eMWi8zzAn0YfcApr8Q/preview?sle=true" target="_blank">philosophy on alerting</a> and since then I’ve been trying to be more aware of the alerts we have and whether any can be improved. The most actionable insight was to start thinking in terms of “symptom-based monitoring” where the alerts should reflect what the users are experiencing rather than various issues along the tech stack. This aligns your alerts with user expectations and can also simplify alerting since they will all be running at a high level. It may take longer to diagnose what the underlying problem is but it will reduce the total number of alerts required.

One of our alerts checks for faulty instances that are attached to a load balancer. We're notified whenever one goes down with the goal of investigating the cause and getting it back up and running. While serious, it's not critical since there's a fair amount of redundancy and the user won't notice any impact unless a large enough number of instances fail. Using the symptom-based monitoring approach we were able to tweak the alert to monitor the <a href="http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/US_MonitoringLoadBalancerWithCW.html" target="_blank">latency of requests</a> made by the load balancer to the instance and trigger a warning if it gets too high for too long. This reduces the number of non-critical alerts while making critical alerts more in line with customer expectations.

The larger an application gets the more essential it is to have a firm overview of the system with a solid set of alerts. Too many and you end up either missing important ones or wasting too much team dealing with false positives. Too few and you discover problems too late. Alerts are typically, and rightly, ignored on smaller projects but when you have multiple applications distributed across dozens of instances it's increasingly important, and simultaneously more difficult, to understand what's happening. Something I've started doing to identify potential improvements is tracking every single alert and tracking it's false-positive rate with the goal of finding alerts that aren't meaningful and either get rid of them or replace them with something more actionable. Over time we'll hopefully get the right balance.