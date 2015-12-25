---
layout: post
title: "The true cost of low quality"
description: "Engineering teams constantly struggle with the speed vs quality tradeoff. I think both should be achievable but if they're not then quality should be prioritized."
keywords: "management, code quality, speed vs quality, software engineering"
image_url:
category:
tags: ["#management"]
---
{% include JB/setup %}
Recently I’ve found myself have similar conversations with various members of the engineering team regarding the tradeoff between speed and quality. Every situation is different but without going into project details I've found that quality come first, speed second. Not because I think speed is unimportant but because I think quality is underrated. In the desire to push the next feature and launch the next product quality tends to be sacrificed. This is fine as long as we understand the tradeoffs but in most cases those are externalized to others. For example, if an engineering team ships a buggy feature, the engineering team only incurs the cost of fixing it, and even then only if they end up fixing it. Simultaneously, the cost is passed on to the users who are powerless to fix it. And then it goes through multiple tiers - first the end user who becomes inefficient and may lose work, then the support person responsible for dealing with these issues, the product manager who has to context switch to both understand and prioritize the issue, and finally the engineer. During each step time is lost but most importantly is the interruption of [flow](https://en.wikipedia.org/wiki/Flow_%28psychology%29) for multiple people, each of whom gets distracted from what they’re doing in order to deal with a problem that could have been prevented in the first place.

I'm also skeptical of the quality versus speed tradeoff and believe that both can be achieved. I've worked with many people who have been able to deliver both and believe it's a skill that can be developed just like any other. Some situations do force a tradeoff but I suspect these are in the minority for a good engineer. Even then I would push for a refactor after it's deployed in order to bring the quality up to par. Focusing on quality also builds better habits - you'll get quicker naturally over time but if all you do is prioritize speed your quality won't improve. By focusing on quality first your speed will improve on it's own.