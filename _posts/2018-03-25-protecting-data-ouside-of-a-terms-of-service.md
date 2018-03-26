---
layout: post
title: "Protecting data ouside of a Terms of Service"
description: "There's no way to truly protect data using a terms of service. Instead you need to allow third party apps to run inside your walled garden."
keywords: "data privacy, data protection, facebook, cambridge analytica"
image_url:
category:
tags: ["#meta"]
---
{% include setup %}
Since the Facebook/Cambridge Analytica news broke I’ve been thinking about how a company can make private data available without depending on a terms of service to enforce its usage or retention. As we’ve seen, terms of service are easily ignored and it may take years to notice that your data has been compromised.

The only way of securely sharing data with third parties is to not actually give it to them. That seems like a contradiction but there is a way out. Rather than shipping your data to them you instead have them provide their code to you. Their code can then run within your walls and you’re able to audit it to make sure it’s working as promised. This means giving third party developers a limited set of methods that can be used and preventing any but the most minimal data from leaving the system. That means as a developer you’re working in somewhat of a black box since even debugging gets difficult. In addition, as the platform you’re incurring the additional cost of hosting and executing these third party applications.

Maybe it can be structured in such a way that the developers pay you for the computing they use but that seems like a tough sell. As I write this it seems similar to writing a smartphone app: you’re limited to a finite set of APIs and need permissions from the users for nearly everything. In fact, our system would be even more restrictive since you would not be able to access any of the secured data. It would be akin to writing an app for the Apple App Store but not being able to use your own database - instead you would write your app to depend on a database that Apple provided that you would not be able to access.

This is a ton of hoops to jump through but unfortunately feels as if it’s the only way to have some form of data portability - at least in spirit.
