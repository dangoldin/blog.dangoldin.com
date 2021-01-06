---
date: "2017-04-23T00:00:00Z"
description: We're collecting so much data at a low enough price point that there's
  a massive proliferation in open source tools to help get it under control. It's
  the golden age of big data tools.
meta_img: /image/big-data-growth.png
keywords: big data, real time stream processing, batch processing, kafka, hadoop,
  spark, storm
tags:
- 'data'
title: The golden age of big data tools
---

I really dislike using the phrase “big data” but it is catchy so I’m going with it. It really does feel we’re in the golden age of big data tools. The rise of cloud computing, distributed storage, and the proliferation of open source have led to multiple orders of magnitude more data generated now than a decade ago. It’s an impossible number to calculate but some project that between 2010 and 2020 there will be a 50 fold increase in the amount of data collected. And the rate is only increasing as more and more people around the world get smartphones and the internet of things starts becoming a part of daily life.

<amp-img src="{{ IMG_PATH }}big-data-growth.png" alt="The massive growth in data" width="1030" height="733" layout="responsive" />
<p class="caption">Source: <a href="http://www.css.ethz.ch/en/services/digital-library/articles/article.html/173004#_ftn14">IDC, EMC</a></p>

But having this data without making it accessible isn’t very helpful and it’s exciting to see the variety of tools we have our disposal to process and analyze it. This ranges from massively parallel systems that make it possible for us to run queries across terabytes of data that run in less than a minute to real time systems that are able to handle millions of events each second. In the world of real time stream processing there’s Kafka Streams, Storm, Spark Streaming, Samza, and Flink in addition to the  slew of proprietary technologies that will hopefully get open sourced. In the world of batch job processing there’s Hadoop, Spark, Impala, Presto, and Hive. The fact that there are multiple open source projects with their own unique spin is a great sign that we’re innovating and experimenting with different approaches. We have so much more to go and it’s unlikely we’ll ever have a single tool that excels at everything. Instead we’ll likely have a menu of use-case specific options that are each optimized for a unique workflow. By leveraging a combination of such tools we’ll be able to understand and handle the ever increasing data volume.
