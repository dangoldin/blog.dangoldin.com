---
layout: post
title: "Ride sharing ride bailing"
description: "I've hailed rideshares where the driver canceled the ride as soon as they found my destination. There's an obvious solution here by having ride sharing companies take that into account when pricing rides to less-profitable destinations."
keywords: "ridesharing, lyft, uber, abandoned rides"
image_url:
category:
tags: ["#product", "#pricing"]
---
{% include setup %}
One of the more frustrating modern, first-world problems is booking a Lyft or an Uber ride and having the driver cancel the ride a soon as they find out where you’re going. While against policy it is a rational decision by the driver. Why agree to a trip somewhere where it'll be difficult to pick up another passenger and then have to return to where you started and incur a toll? Of course you run the risk of a complaint but I suspect most people will silently accept the misjustice so the expected value of canceling the ride is in your favor.

Given how much effort Lyft and Uber are expending on price prediction it seems there's an obvious solution here: take into account the expectation of future rides based on the destination when calculating the current trip's payout. They know how likely a driver will be to get another ride at the destination at the expected arrival time and can use that knowledge to price appropriately. This encourages drivers to take these less rewarding trips but does shift the cost to the customer. This strikes me as a fair solution though - imagine if the driver knew everyone's destination and the individuals had to bid for a ride. The drivers would take the destination and bid into account when determing who to pick up. There are obvious reasons to not make the destination visible to the driver before picking but there are ways ride sharing companies can make these less profitable trips more sustainable. This is one of the decisions that's all about finding the balance between the driver and the passenger but in this case there's room to move closer to the driver. In the end it will benefit the passenger as well who will avoid having to deal with a canceled ride, which is usually to a destination that requires punctuality, such as a train station or an airport.
