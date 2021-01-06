---
date: "2019-10-01T00:00:00Z"
description: While doing some Kafka maintenance I wrote a simple way to visualize
  differences in partition assignments.
meta_img: /image/kafka-partition-diff-vis.png
keywords: kafka
tags:
- 'code'
- 'devops'
title: Visualizing Kafka partition changes
---

Earlier this week we scaled up our Kafka cluster to take advantage of more availability zones and increase the replication for some of our key topics. After making sure the new brokers joined the existing cluster we needed to redo the partitioning to take advantage of these newly available brokers.

I'm sure there are better and more modern tools out there but we've been using [SiftScience's kafka-assigner](https://github.com/SiftScience/kafka-assigner). Rather than being a naive partitioning it looks at the existing assignments and optimizes the new assignment to minimize the number of moves while striving to keep the partitions evenly distributed across all brokers.

The script is simple to run - you give it the topic and the desired replication factor and it generates the new partition assignments via JSON that can then be passed into Kafka's built in [partition reassignment tool](https://cwiki.apache.org/confluence/display/KAFKA/Replication+tools#Replicationtools-4.ReassignPartitionsTool).

As part of our testing we wanted to verify that the new assignments made sense by quickly looking at the differences but the task was made difficult since the original assignment was printed in a random order. This made a standard diff difficult to do so I ended up building a small tool to sort the JSON and then visualize the differences.

The code is up on [GitHub](https://github.com/dangoldin/js-tools) and the tool is available at [https://dangoldin.github.io/js-tools/#tab-kafka-partition-diff](https://dangoldin.github.io/js-tools/#tab-kafka-partition-diff). It's not the fanciest but is a simple solution to a simple problem. I wish the tool itself did a better job of highlighting the differences but that's another project.

<img src="/image/kafka-partition-diff-vis.png" alt="Kafka partition difference visualizer" data-width="1224" data-height="749" data-layout="responsive" />
