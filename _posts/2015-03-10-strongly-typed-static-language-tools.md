---
layout: post
title: "Strongly typed, static language tools"
description: "Tools are essential to developer productivity and tools for static, strongly typed languages are significantly better."
keywords: "strong typed, weakly typed, static, dynamic, programming language"
image_url:
category:
tags: ["#meta", "#java"]
---
{% include setup %}
Good tools are essential for developer productivity. Imagine how tough it would be to write code in an editor that didn’t have any of the features we use on a daily basis - syntax highlighting, smart spacing, shortcut keys, auto completion, etc. It takes time to get used to all the tools available but once we’re familiar with them we’re orders of magnitude more productive.

For the past year my primary language has been Java although I’ve gotten to do a fair amount of JavaScript, Python, and PHP as well. As great as Sublime is, I’m much more productive in Eclipse. It has nothing to do with the editor and everything to do with the language. Eclipse is able to provide a lot more functionality due to Java’s static, strongly type nature. Some examples are being able to quickly rename variables and methods, move packages, and quickly identify dumb mistakes in method signatures and typos. I suspect similar tools exist for weakly typed or dynamic languages but I can’t imagine them working as well as they do in Eclipse. Strongly typed and static languages are able to get rid of an entire class of errors that are common with scripting languages - typos, forgetting to add an argument to a method call, messing up a type - that the time saved typing gets replaced with the time spent debugging. For many tasks this tradeoff makes sense but larger projects that involve multiple developers and require higher performance would benefit from moving to a strongly typed, static language.

I’m learning Scala which seems to combine the flexibility and expressiveness of Python with the safety and performance of Java. So far I’m cautiously optimistic but we’ll see where I am in a month.