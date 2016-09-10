---
layout: post
title: "On business models - To collect or to fine?"
description: "I compare the collecting every ticket vs fining trespasser model on trains"
keywords: "business models, trains"
category:
tags: ["#finance"]
---
A few years ago, I was on vacation in Italy and spent a good amount of time on trains. Being from the US, I noticed that my ticket was not checked every single ride. At the same time, not having a ticket and being caught carried a large fine. Having the luxury of time, some assumptions, and some algebra, it’s straightforward to work out how to set the fine to make the two systems have the same expected revenue.

{%highlight txt %}
N = number of passengers
p = ticket price
c = % of passengers that will be checked for a ticket
v = % of passengers that are violators
F = fine

Np = Np(1-c)(1-v) + Npc(1-v) + Ncv*F

Solving for F, we get that F = p/c.
{% endhighlight %}

With these assumptions, the fine only depends on the ticket price and the check rate. For example, if the ticket price is $50 and there are 1,000 passengers, the expected amount collected is $50,000. If the conductor only checks 10% of passengers for tickets, the fine would need to be $500 to make the two systems equivalent. If the two systems are expected to generate the same revenue, but one is cheaper to implement, why is the seemingly non-optimal system chosen? I can think of a few reasons:

- Checking all tickets is easier than setting the check rate and fine - especially if they fluctuate
- There are additional roles for the ticket collector other than checking tickets
- There’s value in minimizing the volatility of the revenue
- The cost of having conflicts between passengers and collectors over large fines is higher than checking every ticket - there may be a fear of a low-likelihood, high-cost event
- Union agreements may prevent changing the structure
- General cultural differences across continents

As entrepreneurs, we’re constantly thinking about the ideal business model. Noticing and comparing other business models help us refine and develop our own.

I’m always on the lookout for more examples, so if you have any please email me or post below.
