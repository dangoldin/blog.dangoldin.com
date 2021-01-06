---
date: "2020-12-19T00:00:00Z"
description: Stanford Medicine supposedly had a flawed algorithm that misallocated
  COVID vaccines. That may be true but we need to stop blaming the algorithm.
meta_img: null
keywords: stanford medicine, covid vaccine, algorithms
tags:
- 'meta'
- 'product'
title: Blame the algorithm
---

Stanford Medicine is in the [news](https://www.npr.org/sections/coronavirus-live-updates/2020/12/18/948176807/stanford-apologizes-after-vaccine-allocation-leaves-out-nearly-all-medical-resid) for using an "algorithm" and allocating minimal COVID vaccines to those actually on the frontlines. Instead it supposedly prioritized senior administrators who are working from home. I'm sure there's some truth to the algorithm biasing allocation to those who are older but whenever I see someone blame an algorithm my spidey-sense goes off. The algorithm in this case was likely some extremely simple calculation in Excel that could have been easily verified by a human - both before it was run as well as a quick analysis of the results. 

When writing software we write unit tests to test the functionality of our code and that could have easily been applied here. Similarly, when we deploy code we ask what do we expect to see and then confirm the results. This didn't happen here and it required residents actually raising the issue to the administration.

The cynical view is that this was intentionally done by the administration to prioritize the vaccines for themselves. If no one complained they'd get the vaccine. If there were complaints they'd just blame the algorithm. I wouldn't be surprised if that's what happened here. In any case, as the entire world moves to software we really need to stop blaming the algorithm and instead blame the authors and approvers.
