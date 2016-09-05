---
layout: post
title: "Have consistent development environments"
description: "One of the most effective ways to reduce risk is to make sure that your development environments mirror production as closely as possible."
keywords: "dev ops, production, development, deployment"
image_url:
category:
tags: ["#devops"]
---
{% include setup %}
An important lesson I’ve picked up is to have a consistent development environment across your computers. These days it’s common to have a home computer, a work computer, as well as a series of VPSs that we use for development. The more similar they are the easier life gets. Having the same code and libraries reduces the risk of an application working on one machine but not the other and avoid the hassle of upgrading esoteric libraries. I’ve run into numerous issues where small version difference led to weird behaviors that ended up taking a long time to debug. Consistent tools help as well - using emacs on one machine but vim on another slows you down when you have to context switch and figure out which one you’re using. By committing to one you become more efficient as you develop the shortcuts and flows that are possible. Using virtual environments and containers helps get at this point - they’re both ways to ensure that the code you’re writing and testing is going to be the same code that’s running on production. Without this every time you deploy new code you’re risking failure. More often than not it will work as expected but it’s those rare cases that will be problematic and anything that can be done to avoid them should be done. One of the simplest ways is to align your development environments with your production ones.
