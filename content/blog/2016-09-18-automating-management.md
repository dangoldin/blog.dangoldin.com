---
date: "2016-09-18T00:00:00Z"
description: Part of being a manager is doing a lot of rote tasks that help improve
  the team's productivity. I've spent some time automating it with a variety of scripts.
meta_img: null
keywords: engineering management, automation
tags:
- 'management'
title: Automating management
---

One of the biggest lessons I learned when I became an engineering manager was how important the basic operational elements. These are all the things that need to get done outside of code and allow the whole team to be as productive as possible and range from reminding people to do code reviews to creating dashboards to highlight key metrics to enforcing an on-call process. These tasks are important yet repetitive so being a good engineer I’ve spent some time automating them. There’s still a long way to go but strong engineers have a mindset that they want to automate as much repetitive work as possible in order to focus on unique and novel challenges.

This attitude can be applied to management as well. By automating the menial stuff you’re able to focus on the tasks that require a human touch. Nearly every product geared towards developers exposes some sort of API which can be used to automate most rote work. The approach I’ve taken so far is extracting data from Redmine and GitHub via their APIs and exposing the results in a simple dashboard powered by [freeboard](https://github.com/Freeboard/freeboard) as well as on Slack. Since every company has a unique setup with their own set of tools and processes it’s difficult to come up with a universal solution but modern day tools make it incredibly easy to get started with some sort of automation.
