---
layout: post
title: "Hierarchy of code reviews"
description: ""
keywords:
image_url:
category:
tags: []
---
{% include setup %}
Every modern development environment contains some form of code reviews. They ensure that more than one person sees the code, improves context, increases code quality, and generally leads to a stronger team and product.

I've started to think of them as a hierarchy - starting with the simplest to the most advanced.

- **Code style**: This is the simple stuff to add comments, clean up spacing, or rename things. They're the foundation that the rest of the code rests on and are important to do. At the same time it's not about changing any of the functionality.

- **Code changes**: At this level you're actually providing feedback on the code. This includes suggesting other implementations of methods or ways that the code can be refactored to clean things up.

- **Architecture changes**: This the highest form