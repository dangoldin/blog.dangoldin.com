---
layout: post
title: "Use the DB Luke"
description: ""
keywords:
image_url:
category:
tags: []
---
{% include JB/setup %}
I’m convinced that the best way to ramp us a newly hired engineer is to go through the database. Rather than relying on outdated documentation or discovering undocumented features the database is the actual source of truth and defines both the limits and the capabilities of the application. You can examine the relationships between the various objects as well as the litany of features and options that are supported. It’s definitely more difficult to get up to speed on a database rather than documentation or a demo of the UI but the knowledge gained is significantly deeper. Especially when you’re going to be working on features that depend on the database it’s incredibly useful to know how the database is laid out and set up. On its own a walk through of the UI provides a high level overview of how it works but coupling that with the database allows you to internalize the connections and actually understand how the user interactions feed the data and vice versa.

One of the most interesting benefits is seeing the progression of a company’s products and features. A typical database will contain a litany of fields and tables that stick around after the underlying feature or product is antiquated. These features have no documentation and the only way to know what they’re used for is to spend hours going through version control history or talk to someone who was actually around. And despite those fields and tables no longer being useful they’re valuable for the context they provide.
