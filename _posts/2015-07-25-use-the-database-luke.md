---
layout: post
title: "Use the DB Luke"
description: "One of the best ways to onboard as an engineer is to understand the database and how various tables and fields relate to one another."
keywords: "engineering, management, onboarding"
image_url:
category:
tags: ["#meta"]
redirect_from: "/2015/07/25/use-the-db-luke/"
---
{% include JB/setup %}
I’m convinced that the best way to ramp up as a newly hired engineer is to go through the database. Rather than relying on outdated documentation or discovering undocumented features the database is the actual source of truth and defines both the limits and the capabilities of the application. You can examine the relationships between the various objects as well as the litany of features and options that are supported. It’s definitely more difficult to get up to speed on a database rather than documentation or a demo of the UI but the knowledge gained is significantly deeper. Especially when you’re going to be working on features that depend on the database it’s incredibly useful to know how the database is laid out and set up. On its own a walk through of the UI provides a high level overview of how it works but coupling that with the database allows you to internalize the connections and actually understand how the user interactions feed the data and vice versa.

One of the most interesting benefits is seeing the progression of a company’s products and features. A typical database will contain a litany of fields and tables that stick around after the underlying feature or product is antiquated. These features have no documentation and the only way to know what they’re used for is to spend hours going through version control history or talk to someone who was actually around. Despite these fields and tables no longer being used they’re valuable for the context they provide. Seeing the evolution of a product allows you to identify what worked and what didn’t work and serve as as a springboard for new ideas.

Databases are rarely part of an engineer’s onboarding process and are mostly on a “need to know basis.” Only when you’re working on a particular feature do you have to understand the relevant schema and even then you’re not expected to go beyond what you’re working on. This is the wrong approach and there’s a ton of implicit knowledge in our databases that make the entire team more productive. Coupling this with a walkthrough of the UI and the API is a great way to learn and relate the various concepts.
