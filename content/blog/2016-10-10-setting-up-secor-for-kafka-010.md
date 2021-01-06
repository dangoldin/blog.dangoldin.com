---
date: "2016-10-10T00:00:00Z"
description: While upgrading our Kafka to 0.10 we ran into issues getting secor to
  scale. We did a ton of optimization but the final culprit was the version of our
  Kafka consumer.
meta_img: null
keywords: secor, kafka, 0.10, big data, streaming
tags:
- 'devops'
- 'data'
title: Setting up secor for Kafka 0.10
---

Over the past few weeks we rolled out a new data pipeline built around around Kafka 0.10. I plan on writing more about the full project but for this post I wanted to highlight how critical reading the documentation is. One of the first issues we ran into was that [secor](https://github.com/pinterest/secor), a neat application open sourced by Pinterest to allow simple saving of Kafka messages to S3, was consuming extremely slowly. I fastidiously tweaked the Kafka configuration to get as much out of it as I could to no avail. I spent hours experiment with the various secor options to see whether there was a simple solution I was missing. No matter what I tried I was unable to consume more than 50mb/min - despite the fact that both the Kafka cluster and the instance running secor could support an order of magnitude more than that. I confirmed that there was something fishy by running the same exact code on a massive c3.8xlarge instance to see how much better it would fare. And sure enough I still couldn’t get past 50mb/min.

<img src="/image/secor-new-out.png" alt="Old network in" data-width="878" data-height="426" data-layout="responsive" />
<p class="caption">The blue is an c4.xlarge and the orange is a c4.8xlarge. Clearly they should not both be consuming at the same rate. Also, the large spike in the middle is when the offsets start dropping off and secor keeps attempting to catch up.</p>

<img src="/image/secor-new-out.png" alt="Old network in" data-width="878" data-height="426" data-layout="responsive" />
<p class="caption">The flip side is that the uploads to S3 are throttled and drop of when we're behind Kafka.</p>

At this point I was extremely frustrated and figured I might as well revisted the Kafka docs and found this [wonderful gem](http://kafka.apache.org/0100/documentation.html#upgrade_10_performance_impact):

> The message format in 0.10.0 includes a new timestamp field and uses relative offsets for compressed messages. The on disk message format can be configured through log.message.format.version in the server.properties file. The default on-disk message format is 0.10.0. If a consumer client is on a version before 0.10.0.0, it only understands message formats before 0.10.0. In this case, the broker is able to convert messages from the 0.10.0 format to an earlier format before sending the response to the consumer on an older version. However, the broker can't use zero-copy transfer in this case. Reports from the Kafka community on the performance impact have shown CPU utilization going from 20% before to 100% after an upgrade, which forced an immediate upgrade of all clients to bring performance back to normal. To avoid such message conversion before consumers are upgraded to 0.10.0.0, one can set log.message.format.version to 0.8.2 or 0.9.0 when upgrading the broker to 0.10.0.0. This way, the broker can still use zero-copy transfer to send the data to the old consumers. Once consumers are upgraded, one can change the message format to 0.10.0 on the broker and enjoy the new message format that includes new timestamp and improved compression. The conversion is supported to ensure compatibility and can be useful to support a few apps that have not updated to newer clients yet, but is impractical to support all consumer traffic on even an overprovisioned cluster. Therefore it is critical to avoid the message conversion as much as possible when brokers have been upgraded but the majority of clients have not.

The light immediately went off and sure enough, secor was configured to use a Kafka 0.8 client. As soon as I [upgraded secor](https://github.com/pinterest/secor/pull/262) to use Kafka 0.10 the consumption rate shot up to over 2.5gb/min. Despite feeling incredibly stupid it felt good to finally get to the bottom of it and only wish I read the docs more thoroughly before diving in. The benefit to all this is that I have a much better understanding of how  Kafka, ZooKeeper, and secor need to be configured and the value of actually reading the documentation, something that I still haven’t internalized.

<img src="/image/secor-new-out.png" alt="Old network in" data-width="878" data-height="426" data-layout="responsive" />
<p class="caption">After the upgrade we see a healthy spike of data going in as we're trying to catch up.</p>

<img src="/image/secor-new-out.png" alt="Old network in" data-width="878" data-height="426" data-layout="responsive" />
<p class="caption">Similarly we see us writing it all out to S3.</p>
