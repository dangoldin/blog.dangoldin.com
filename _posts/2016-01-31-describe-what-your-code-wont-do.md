---
layout: post
title: "Describe what your code won't do"
description: "It's easy to focus on what problems we're solving but it's equally important to focus on what our code won't do. This ensures we're able to ship a high quality product."
keywords: "software quality, engineering management"
image_url:
category:
tags: ["#management"]
---
{% include setup %}
When starting to spec out a new feature a good habit is to think about what it won’t do. This forces you to focus on the problems that aren’t being solved and makes you aware of the tradeoffs you’re making. Rather than focusing on the problems being solved it’s equally important to know what you’re not doing as well as what your implementation will preclude you from doing in the future. To be effective we need to make tradeoffs or we’d never be able to launch anything but we shouldn’t make them blindly. We need to be aware of the tradeoffs we’re making and understand the paths that will be closed off by a given implementation. By thinking of the negatives of a particular approach we’re able to surface many of these dormant issues. This helps avoids surprises later on and ensures the code has been dissected and thought through in a variety of ways.

Another great thing to do is to share this list with the end users of the product. We’re known for having a variety of biases and a common one is risk aversion. In this case if we just list the problems we’re solving everyone’s glad to endorse it but as soon as we highlight the negatives people will start speaking up. We’re never going to ship perfect code but it’s something that we should strive for and getting actionable feedback early in the process is one of the best ways to get closer to that goal.

Everyone picks up this skill naturally through experience after being bit too many times by a crappy implementation but imagine how much better we’d be if we understood the tradeoffs we’re making with every decision. Focusing on the cases our solution doesn’t work for and prevents us from handling is a great way to get this experience earlier.
