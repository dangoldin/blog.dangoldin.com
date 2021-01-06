---
date: "2017-12-01T00:00:00Z"
description: One metric I've started looking at to analyze Scrum efficiency is average
  number of sprints to complete a story.
meta_img: null
keywords: management, agile, scrum, sprint, efficiency
tags:
- 'management'
title: Measuring sprint efficiency
---


Most startups employ some form of [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development) and one of the most common approaches is [Scrum](https://en.wikipedia.org/wiki/Scrum_(software_development)) which breaks down units of work into time based periods. I don’t want to spend too much time describing either Agile or Scrum since I suspect most are familiar with the concepts but a big challenge is measuring productivity. There are tons of different ways of doing this but the vast majority are different ways of looking at the relationship between story points and sprints. Most of these are focused on some form of velocity - measuring the amount of story points per sprint but an interesting metric I’ve started tracking is average number of sprints per story point. On the surface this is similar to taking the inverse but it turns out it tells different story.

By taking a look at the average number of sprints it takes to do a story you can both get a sense of the team’s velocity but also highlight that some stories keep getting deprioritized. As an example imagine a team doing every story within the sprint it’s assigned - the team’s average sprints per story value is 1. If any stories end up rolling over into the next sprint then this value keeps growing past 1. A value of 2 would indicate that it takes two sprints to complete an average story - something that indicates that the team’s not able to do what they’re setting out to do each sprint.

This metric can also be weighted by our favorite value - story points. The idea here is to give more weight to larger stories and see what the resulting sprints per story value looks like. If it’s above the unweighted one it indicates that more complex stories are taking longer to do and there may be an issue in the point estimation. If it’s lower than the unweighted average it may indicate that the story points are inflated.

No single metric will tell you everything you need to do know and it’s dangerous to rely solely on numbers. At the same time, each new metric is a data point and can help paint a picture of what’s going on. Combined with a more qualitative approach they provide a better understanding than either one alone.
