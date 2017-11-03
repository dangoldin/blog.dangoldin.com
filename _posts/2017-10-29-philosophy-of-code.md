---
layout: post
title: "Philosophy of code"
description: "More important than style and syntax is the philosophy of code. Strong teams have a shared understanding and it makes them more productive."
keywords: "code, software engineering, software development"
image_url:
category:
tags: ["#code"]
---
{% include setup %}
After writing my post on the code review pyramid I realized that I had many more thoughts about the highest level, code philosophy, and wanted to dedicate a full post to dig into it. The general idea is that a highly functional engineering team is way past the point of arguing over style and syntax and has reached the point where they share the same code philosophy. At this point all members of the team have an instinctive sense of how and where new code should be written - even if they can’t necessarily explain it.

A concrete example is to think about a data pipeline project. We have a ton of events coming in that need to be aggregated, stored in a database, and then exposed via an API in a UI dashboard. Now imagine having to add some additional fields. Depending on the field you may be able to add it explicitly at the ingestion level, or potentially derive it during the agg, or maybe even calculate it at the API or UI level. Each of these may be entirely reasonable but a good team will have a strong option on how it should be done. This means that every new feature and functionality is implemented similarly and keeps the code base clean and consistent.

This also extends into the way teams approach their class hierarchies and inheritance. Do they go all in and have a ton of factories with complex class hierarchies or do they prefer flatter hierarchies with classes that are able to do more? It also ties into design patterns and which ones are preferred in the code base as well as how to treat nulls and exceptions.

A programming language can't prescribe every single approach to every type of problem so there's always some freedom by design. Unfortunately, this can get dangerous on larger projects but strong teams are able to identify the components they want to embrace and the components they want to ban. Frameworks exist because they make these decisions for us. They are purposefully opinionated in order to encourage a particular approach. By having this sort of imposed shared knowledge, every developer using that framework becomes more productive despite the fact that the framework itself limits the flexibility of the language.

The point isn’t to find the one right approach but to realize that it’s more about agreeing on an approach. The fact that engineers still debate the pros and cons of nearly everything to do with software engineering indicates that there’s likely no single answer and we’re better off finding something that’s consistent and right for the team.
