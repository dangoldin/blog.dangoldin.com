---
date: "2020-02-07T00:00:00Z"
description: Despite the wealth of open source applications out there it's still difficult
  to find a good resource for optimal configurations.
meta_img: null
keywords: open source software, devops, kafka
tags:
- 'devops'
title: Repository of configurations
---

While tuning Kafka yet another time I started thinking of how useful a repository of configuration files would be. Very often we install an open-source project and default to the standard options. This works great when you're starting out but as you grow you realize the deployment is no longer cutting it. So you go back to the documentation and do a few searches to see how others have it tuned. This gives you a bit of breathing and lets you keep going until the next scaling bottleneck. Throughout you're likely scaling up, out, or both and yet very few of us actually know whether we're properly configured.

I suspect most of us do a pretty crappy job at configuring our software and instead rely on the scaling to solve our problems. That is a perfectly reasonable solution when the scaling cost is low but as you grow that cost becomes more and more significant and would benefit from some knowledgeable optimization. If it truly is a critical component you end up either building up the knowledge in house through experience, hiring someone to manage it, or paying a vendor to have it managed.

I wish there was an online repository of configurations that would allow one to quickly see production configurations and setups for various open source applications as well as the resulting performance. Using Kafka as an example, I'd love to see the number and type of brokers people are running, the configuration they're using across brokers, consumers, and producers, as well as the metrics themselves - number of topics, partitions, messages in addition to the cluster performance in terms of network IO and resource usage.

One challenge is that the information is proprietary and unlikely to be shared. It's possible having an anonymous submission option would solve this. Another challenge is the difficulty of the UX itself. These applications are all different and each have their own nuance that it would be difficult to come up with an approach that's both abstract enough to support any application while being useful enough for any single one.

Just writing this post is motivating me to get started building this out so if you've stumbled onto this post and find the idea interesting please reach out - blogname without the .com @ Google's email service.
