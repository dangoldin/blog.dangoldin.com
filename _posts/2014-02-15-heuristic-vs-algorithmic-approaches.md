---
layout: post
title: "Heuristic vs algorithmic approaches"
description: "Sometimes it's tough deciding whether you should use a heuristic or algorithmic approach. I tend to favor heuristic ones for quick and dirty projects but will opt for an algorithmic one for more complicated work."
keywords: "data science, algorithms, heuristic, algorithms"
category:
tags: []
---
{% include JB/setup %}
Something that’s come up frequently in my quantitative work is balancing heuristic and algorithmic approaches. It’s surprisingly difficult to get the first attempt at an algorithmic approach working properly - it’s not an academic exercise and real world issues will always appear. Over time I’ve found myself writing heuristic checks and tweaks to deal with the various edge cases the algorithmic approach encounters. For example, setting the min and max bounds on the results of a function or adjusting the slope of a curve if it ends up being set in the wrong direction.

It makes me wonder why I didn’t just start with a heuristic approach and worked on an algorithmic approach later after I’ve collected enough data and had a better understanding of the environment. The challenge is that a heuristic approach is only a temporary solution. It will be be difficult to maintain and improving it will require additional hacks and tweaks. A heuristic approach is great at setting a quick baseline but long term improvement will only come from a more rigorous approach.

An example would be writing an algorithm that bids on Google Adwords. A heuristic approach would take yesterday’s bids on a set of keywords, look at their performance, and adjust them or down based on a few simple rules. A simple heuristic might be to allocate budgets to different keywords based on their conversion rates. Unfortunately, this wouldn’t handle the case of different keywords having different costs and volume. Incorporating these would require additional rules and introduce more complexity.

An algorithmic approach would be to model the relationship between cost, impressions, and click through rates for each keyword and then optimize for total conversions. Each model would be designed to predict a dependent variable based on a set of independent variables and would require a statistical approach to make sure the results were statistically significant and safe to use. Each model would require its own research and set of tests but would lead to a more scalable system. Since the models would be independent of one another, you’d be able to improve them individually. It may turn out that our cost calculation model is great but the one that estimates impressions needs more improvement. Now you can focus on the model that needs the most work rather than trying to globally optimize the whole system.

As with anything, these are tools and their usage depends on the situation. It’s difficult to come up with a rule of when to use one over the other but I tend to favor heuristics when I need to do something quick and know it’s not going to require significant changes. If it’s a complicated problem that will require ongoing work, I’ll opt for the more rigorous, algorithmic approach. It will take more work initially but will be better in the long term.