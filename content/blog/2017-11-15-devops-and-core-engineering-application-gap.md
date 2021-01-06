---
date: "2017-11-15T00:00:00Z"
description: There's a type of application that's tough for either devops or core
  engineering to administer alone and requires effort on both sides.
meta_img: null
keywords: devops, engineering
tags:
- 'meta'
title: DevOps and Core Engineering application gap
---

Lately I’ve been pondering about applications that exist between core engineering and devops. Applications that have existed for years and have widespread adoption have best practices that many devops engineers have mastered - think of Apache or nginx. On the other extreme you have single page apps that exist solely in the browser and don’t need any support from the devops team after they’re deployed. Yet there’s a whole range of applications in the middle that don’t fall neatly into either of the camps. They have a gamut of configuration options that are heavily dependent on the workload which makes it difficult for either side to manage individually. In my limited experience these tend to be common in the big data ecosystem - Spark, Druid, and Kafka are great examples. Go through any of the documentation and you discover how complex the configuration can get and how tough it is to get it right. Without having any prior experience it’s difficult to see how one can get it immediately right. It requires understanding the use case, the expected volume, and a fair amount of experimentation to get right. This is not something that can be determined by devops or core engineering alone and is ideally a group effort.
