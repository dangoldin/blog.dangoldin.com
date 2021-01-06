---
date: "2017-08-25T00:00:00Z"
description: A Lambda architecture consists of both a batch and real time component
  yet they're implemented differently. The logic is the same and it should be moved
  further upstream in order to be kept in a single place.
meta_img: null
keywords: lambda architecture, adtech, real time data, batch data, streaming data
tags:
- 'code'
title: A unified Lambda architecture
---

Lately I’ve been thinking about the [Lambda architecture](https://en.wikipedia.org/wiki/Lambda_architecture) used in modern data pipelines. Lambda architectures are designed for systems that contain massive amounts of streaming data that needs to be processed and exposed quickly. The architecture consists of two different systems. One is  a real time pipeline that’s not perfectly accurate but is able to handle large volumes while providing a solid estimate quickly. The other is a batch process that is accurate but runs on a delay. By combining the two you get the best of both worlds - accurate historical data and reasonably correct recent data that will be corrected by the batch job when it runs.

A simple adtech example is to think of the events that are generated during a real time bidding auction. We start with an ad request which consists of everything an ad buyer would need to know before buying an ad - including the time, user agent, and location of the user. The buyer then submits a bid containing the ad they want to display along with the price they are willing to pay. If they win, the ad is rendered and there may be some follow up engagement events by the user - a mouseover and maybe even a click.

We can think of these 4 events as a sort of funnel - we have an ad request which may have a win event which may then have a mouse and then finally a click. The challenge is that there may be hundreds of these events being generated each second and it’s extremely rare that we would have all four events to join together. The likely case is that there was either a single ad request or an ad request followed by a win event. How do you build a system that’s able to handle non matched events that may arrive in random order?

In a batch system it’s straightforward - conceptually you’re doing a series of left joins while increasing the time window to make sure you capture events that may have trickled in after a cutoff. So in the case of us processing an hour’s worth of data we may want to pull in more than an hours worth of wins, mouseovers, and clicks to make sure we capture everything. The real time approach is similar but subtly different. First, we need to use a much smaller window since we can’t keep hundreds of millions of event in memory. Second, we need to build in logic to take into account the fact that the events may arrive in different order.

As engineers it’s our jobs to write code and logic that’s as reusable as possible and the Lambda architecture provides an interesting example of how difficult this can be. The batch and real time systems are doing very similar things yet the code to do each ends up being different. Something I’d love to see is some way to move the logic itself further upstream that defines the way these events should fit together and then the relevant code is generated for each subsystem. This would allow the actual join logic to be kept in a single place which would make it incredibly easy to add new events and fields as necessary.
