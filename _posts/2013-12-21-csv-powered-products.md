---
layout: post
title: "CSV powered products"
description: "Just a thought exercise on a new way to build software applications. To support complicated worfklows and systems it's easier to build support for CSV file uploads rather than trying to find the optimal design."
keywords: "product management, csv, products, design, software"
category:
tags: ["#product"]
---
{% include JB/setup %}
Something that I've been thinking about ever since I worked as a product manager focused on internal tools is being able to run a product entirely through CSV file uploads. Instead of building a UX designed to handle bulk operations and complicated workflows you build support for file uploads and handle the business logic entirely on the backend. The motivation is that it’s extremely difficult to build a UI that’s going to be as powerful and flexible as a simple CSV file, especially when outside tools, such as Excel, can help generate these files.

This approach also has the nice property of decoupling the input from the core business logic. Over time, tools and interfaces can be built that are optimized for specific use cases without having to modify any of the backend. Effort can be spent on improving workflows that are already being done rather than building support for workflows that may or may not be common. Permissions and controls can also be added that make the application accessibility to a wider range of users.

Many companies spend tons of time building advanced tools that will never be as powerful as Excel paired with a simple file upload. Workflows vary significantly across users and most products impose a single approach. Why not build more general tools that take advantage of the unique work styles?
