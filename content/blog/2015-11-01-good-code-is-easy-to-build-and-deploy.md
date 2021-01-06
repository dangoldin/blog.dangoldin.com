---
date: "2015-11-01T00:00:00Z"
description: My old projects are impossible to get running. Not just because the code
  is worse but because I never thought to document the deployment process or any of
  the requirements. This is an valuable habit to develop.
meta_img: null
keywords: code, code styling, devops, deployment
tags:
- 'devops'
- 'meta'
title: Good code is easy to build and deploy
---

A clear pattern emerged as I was digging through my old projects. Other than the code quality and approach improving over time what stood out was the way I approached deployment. My earliest projects didn’t have a set of requirements and the configuration was all over the place. The more recent projects have a clear set of requirements as well as the command lines needed to get them running. In fact, I’m able to build and run my recent projects within a few minutes by running “pip install -r requirements.txt”, updating the configuration file, creating the database, and running the database migration script. This is a massive improvement when compared to my initial projects where there was no documentation and my setup involved a ton of adhoc, undocumented work directly on the production server that’s now lost.

I’d argue that this is one of the better habits to adopt as a developer. We do a surprising amount of duplicate work over the years and being able to reference a prior solution is immensely useful, especially when it’s easily discoverable. It’s also a great way of identifying patterns and similarities between projects and understand why some approaches worked and why some failed. This retrospective approach is an active way of improving rather than relying on the “osmosis” approach of just waiting for information to get absorbed.
