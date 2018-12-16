---
layout: post
title: "New code is not a linear increase in complexity"
description: "Adding new code often feels easier at the moment but it can significantly increase the branching, and thus complexity, of your code."
keywords: "software engineering, code complexity"
image_url:
category:
tags: ["#code"]
---
{% include setup %}
When it comes to software development we often add features simply because it’s easy. And almost always they are - just add an additional optional argument or two to a function and suddenly you’ve expanded your application’s functionality. The catch is that this assumes that this new code is a linear increase in complexity but it’s not.

Computer science has the concept of “[Big O notation](https://en.wikipedia.org/wiki/Big_O_notation)” to measure how a function behaves as a function of it’s input. A “Big O” of O(N) is linear while O(N^2) is quadratic. The implicit goal is that you should strive to write your code to minimize it’s complexity with the ultimate goal being O(1). The same approach can be applied to code complexity. How much will the new functionality affect the complexity of the code? A seemingly simple code change may change the “exponent” of your code’s complexity and a complex code change may actually reduce your code complexity. The code change is not always correlated with the complexity that is being introduced.

[Cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity) was a concept introduced in the 70s to measure code complexity. It does so by measuring the number of branches in your code. A simple example is to think about a simple “if” statement: just adding a condition adds a new flow to your code which may have further implications down the line. The concept is more than 40 years old and is still incredibly useful in keeping ourselves honest.

Adding a single feature is often easy and so we do it but we don’t consider the fact that dozens of these small changes increase the overall complexity of the code significantly. This makes future code changs more difficult to make, test, and maintain. It’s critical to think of the code you’re writing not purely in terms of the complexity of the code itself but of the complexity it introduces to the the rest of the code base.
