---
layout: post
title: "Tool specialization and growing companies"
description: "The first version of most tech companies is a scrapped together product but over time they grow and evolve and start coming up with specialized tools and solutions to new problems."
keywords: "tech startups, companies, engineering"
image_url:
category:
tags: ["#meta"]
---
{% include JB/setup %}
It’s obvious in hindsight but incredible when you experience it but every successful company has to iterate through a variety of tools as it, and its problems, grow. A typical modern tech startup starts by identifying a problem and using a common web framework to quickly come up with the first pass. But as this company grows new problems and situations arise that the initial solution no longer supports. They may end up having a series of asynchronous tasks and need to start using RabbitMQ with that use case. MySQL may no longer be enough and they start offloading their data to Redshift. That off the shelf web framework is no longer performant enough so they have to split it into multiple components and start embracing strong, statically typed languages.

This tool specialization also goes hand in hand with team specialization. A single engineer doesn’t have the time to do everything so startups need to make the short term decisions and focus on the next couple of months in order to grow. Only when they grow does t make sense to find the critical problems and dedicate time to fixing them. And hopefully by that point you have a larger team that can focus on the deeper problems.

For most of us the problems have already been solved and it’s about figuring out how to adapt the solutions for our systems. Sometimes this requires getting an open source library to work. Other times it may require implementing the code from an obscure academic paper. But the real success comes when you run into problems that no one else has encountered. At that point you’re dealing with extremely specialized problems that you were the first to encounter. These are the scale problems that Google and Facebook are solving and every startup hopes to get there some day. In fact, that is the ultimate mission engineering based companies - solving problems that haven’t been encountered yet.
