---
layout: post
title: "Generating vs filtering"
description: "It's possible to generate data using either a generative or filtering approach. Both are useful and the skill is knowing when to use each."
keywords: "scala, streams, lazy evaluation, generating, filtering"
image_url:
category:
tags: ["#meta"]
---
{% include JB/setup %}
While playing around with Scala I rediscovered streams - a list-like structure that's lazily evaluated - meaning that only when you access a particular value is it evaluated. This makes it possible to create infinite streams since all you need is a function that's able to compute the next value. In such a way we can create a stream of all numbers, just the positive even numbers, or just the prime numbers. Calculating each successive prime number will become more difficult but it is possible.

In the case of the positive even numbers it's possible to generate the stream in two simple ways - one is to take each positive integer and double it while the other is to take every positive integer and filter them down to those that are divisible by two. Both of these will generate the exact same numbers in the same order but do it in opposite ways. One generates the numbers from a base list and the other filters a larger list down.

In this example the efficiency of the two approaches is similar: the first goes through each element once and does a bit shift while the second goes through two elements and does a bit comparison. But on real code the differences between the two approaches can be significant. It's also likely that one of the approaches may not even be possible or be too arduous - imagine generating a list of prime numbers.

Both are useful depending on the problem and the skill is figuring out when to use each. The generative approach feels as if it should be the more efficient one but there are many cases where filtering is easier and quicker.
