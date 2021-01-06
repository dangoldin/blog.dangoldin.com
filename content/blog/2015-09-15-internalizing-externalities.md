---
date: "2015-09-15T00:00:00Z"
description: Rather than offloading work to other teams engineering teams should strive
  to internalize the externalities by supporting business cases as soon as they become
  technically feasible.
meta_img: null
keywords: engineering, management, product management, code quality
tags:
- 'product'
title: Internalizing externalities
---

Recently I've adopted the practice of having the engineering team support other team when the core technology can support it - even if hasn't been fully built in to the product. This may require manually adding entries to a series of database tables that or manually pulling reports that aren't yet availabe via the UI. Despite being an inefficiency for the engineering team it provides a variety of benefits that outweigh this minor inconvenience.

- Engineers understand the business better. By being closer to the actual use cases engineers understand how the product is used and the problems that other teams are solving. This can have huge wins in the future when there are multiple implementation options available and the developer needs to pick one. Being able to pick the right one can significnatly change the cost of doing future development work.

- Work gets done faster. Engineers love their efficiency and as soon as they end up having to do the same thing twice they'll think of ways to automate it. This is the perfect way of shifting the problem to the person best suited to solve it. A support person may need to come up with a series of inefficient workarounds while an engineer will solve the underlying, core issue.

- Improved quality. Being closer to the actual use case will improve the quality of the code since the developer will know how their code will be used and will understand the options available. The other benefit is that it will become a lot easier to see usability issues as well as improvement opportunities that can be implemented in the future. Bugs will also get caught earlier since the developer will be more likely to monitor the behavior if they were the ones that worked on it. The fact that they used it will provide more motivation to monitor it when it's out in production.

- Prioritization makes sense. Oftentimes it's not obvious why one feature is prioritized over another. Being able to work through some business cases and experience user frustrations is a great way to get a look at the product from a different perspective.

- No workarounds that end up being "grandfathered" in. It's common to see users come up with workarounds to support a use case not officially supported. This places a big burden on the engineering team that may end up needing to support it since a particular workflow now depends on it. By exposing the problem to engineers earlier it's more likely that this situation is avoided.

Years ago I read how Kayak has their <a href="http://www.inc.com/magazine/20100201/the-way-i-work-paul-english-of-kayak.html" target="_blank">customer support phone number get routed</a> to the engineering team some percentage of the time. The goal is to expose engineers to customer problems with the idea that an engineering can actually solve a problem once it bothers them enough times. I view this as "internalizing externalities" - rather than offloading engineering costs to other teams (product managers, QA, customer support) we should address the problems as soon as they arise. This ensures the quality stays high while aligning the engineering team with the rest of the company.
