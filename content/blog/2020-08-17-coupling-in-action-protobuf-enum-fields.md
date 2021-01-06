---
date: "2020-08-17T00:00:00Z"
description: While we were designing the way we emit messages to Kafka we had to think
  through the definition to make sure the components were loosely coupled.
meta_img: null
keywords: coupling, software engineering, secor, kafka
tags:
- 'code'
title: 'Coupling in action: protobuf enum fields'
---

The next few blog posts are all topics that have come up recently in my 1-1s and serve as good examples for how I think about code and software engineering. The first post is a discussion around coupling and the tradeoffs we considered.

Our pipeline was covered in depth on the [high scalability blog](http://highscalability.com/blog/2020/6/15/how-triplelift-built-an-adtech-data-pipeline-processing-bill.html) but the important part for this post is our event collection piece which consists of the following components:

- Producers: We have a few applications that are emitting data in protobuf to Kafka. Each topic represents an event type with its own protobuf definition.
- Kafka: We run a pretty large cluster in a single region.
- [Secor](https://github.com/pinterest/secor): An open source library from Pinterest that takes events from Kafka and uploads them to a S3 in a big-data friendly format.

The overall flow is simple: producers emit protobuf messages to Kafka and then Secor reads those messages and converts them to Parquet. One question we had was how to handle enums in protobuf. Imagine the following definition for an event we'd want to emit to Kafka:

{{< highlight protobuf >}}
enum Status {
	VALID = 0;
	ERROR = 1;
}

message Test {
	required int64 id = 1;
	required string url = 2;
	required Status status = 3;
}
{{< / highlight >}}

And we had the following mapping between the Kafka topic and the protobuf definition: 

{{< highlight conf >}}
secor.protobuf.message.class.test_message=com.name.kafka.TestMessage$Test
{{< / highlight >}}

Now imagine we had to add a new value to our Status enum (eg WARN = 3). In that case, we would have to deploy Secor with the latest protobuf definition before it saw any of the actual messages - otherwise it would not be able to handle the new enum.

An alternative method is to have the following definition for the message:

{{< highlight protobuf >}}
message Test {
	required int64 id = 1;
	required string url = 2;
	required int32 status_id = 3;
}
{{< / highlight >}}

With this definition Secor is decoupled from the definition of the enum value. The producer can start sending new enum types with us having to do anything with Secor.

We chose the second route because it was better for us but others may prefer the first option. You may actually want to have that coupling to ensure stronger consistency between your components and you want it to fail fast if there are any problems. Similarly, if you have other consumers from Kafka that would need to convert the field back into an enum you'd want to enforce that safety. There's no solution that's right for everyone but it is important to understand your constraints and the tradeoffs.
