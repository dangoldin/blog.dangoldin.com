---
date: "2015-08-20T00:00:00Z"
description: Scripting languages make it easy to move quickly with small steps. On
  the other extreme some languages let us take slow, large stpes. The goal is to find
  a language that maximizes actual speed.
meta_img: null
keywords: programming, Python, Java
tags:
- 'meta'
title: Development cycles across programming languages
---

The most common way of making sure code works is by going through the “develop-run-test” loop. We write some code that we expect to have a certain behavior, we run the code and trigger that behavior, and then we confirm that the results are what we expected. And we keep iterating, hopefully making more progress with each new iteration.

One thing I’ve noticed is that this pattern varies drastically for me depending on the language I’m working with. I’ll cycle through iterations much quicker in Python than I will with Java. Part of it is that my Java projects are larger and take a longer amount of time to start but I suspect the bigger benefit is that Java’s strong and static type system makes it easier to take larger coding steps than I’d be able to with Python. For example, if I need to write a method to extract data from a JSON object I’ll approach it very different if I’m doing it in Python than I would if I were doing it in Java. With Python I’d jump into the REPL and walk through a few examples and make sure I handle the the various edge cases whereas with Java I’d place a lot more faith in the IDE and it’s litany of warnings.

Each language comes with it’s own pros and cons and it’s impossible to find a single language that fits every use case. The goal is to pick the appropriate language for the job at hand - and this may involve starting with one and moving to another one as the problem domain changes or the team grows. The ideal language is one that’s able to maximize the product of the iteration speed as well as the step size. Taking frequent, small steps is equivalent to taking fewer, bigger steps - the aim is to maximize the resulting speed - not the individual inputs. A great language paired with a strong development environment achieves both speed and step size.
