---
layout: post
title: "Top down vs bottom up coding"
description: "Two different styles of coding are top down and bottom up. I prefer the top down approach since it lets you identify and resolve issues before spending a ton of time on their implementation."
keywords: "coding, development, engineering"
image_url:
category:
tags: ["#code"]
---
{% include JB/setup %}
Over the years, I’ve noticed two distinct coding styles. Some approach problems top down and will stub out the entire solution using dummy values and methods and come up with a naive solution before fleshing everything out properly. Others will instead take a bottom up approach and try to complete each method entirely before moving on to the next one.

Especially for larger problems, I prefer the top down approach. By stubbing out the various pieces it’s easy to see how everything fits together and makes it easy to identify and solve potential issues before investing a ton of effort into a poor implementation. The other benefit is that I start thinking at a systems level and come up with implementations that tend to be more extensible.

The only time I find myself taking a bottom up approach is when the problem is very well defined and I know exactly what the solution is or when I’m working on HTML and CSS. In that case, and especially with my limited skill, there’s so much coupling between the various components that I can’t avoid going linearly through the components. It does make me wonder whether people who have more frontend experience have also adopted the top down approach.