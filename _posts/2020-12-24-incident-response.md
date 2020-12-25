---
layout: post
title: "Incident response"
description: "Incident response is a critical function of every engineering team and needs to be thought through."
keywords: "incident response, on call"
image_url: 
category: 
tags: ["#management"]
---
{% include setup %}
In honor of everyone on-call during the holidays I thought I'd share my evolving thoughts around incident response. Every company has something here and as much as we can strive for perfection it's impossible and we'll inevitably have incidents that need handling.

I'm still thinking through the exact way to approach and summarize my thoughts but I find it useful to start with goals and first principles. The ultimate goals are to resolve the issue as quickly as possible and prevent them and other similar issues from recurring. In terms of axioms, we want to align incentives and make those able to solve the problem own the problem. In addition, we need to embrace that we work on highly dynamic systems - both the systems and people change. And finally, we need to consider incident response as one of the many responsibilities engineers have.

To take care of the above, we want incident response to be shared by the team working on that specific service. Similarly, each team should build systems to train and develop their people. One model that works here is analogous to getting a pilot's license - you start flying with an instructor and only when you put in the hours can you fly solo. And even then it takes a bit of time to get a license which then needs to be built on for different plane models.
