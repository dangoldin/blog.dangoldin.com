---
layout: post
title: "The ownership hierarchy"
description: "To write great code engineers need to embrace end to end ownership and not think their work is done when they open a pull request."
keywords: "software engineering, product ownership, engineering management"
image_url:
category:
tags: ["#management"]
---
{% include setup %}
Great engineers assume end to end ownership of their products. Rather than focusing on one feature at a time they understand how it fits in with the rest of the product and think about the impact it will have on users and the business. This leads to code that scales with the product while being able to be maintained and developed by a small team. But you can only have this with everyone embracing full ownership over a product.

This idea can be expressed via an ownership hierarchy. The idea is that all engineers are responsible for writing code but the best ones want their code in products that’s loved by the end users. By moving up this hierarchy you develop a larger sense of ownership than someone who just wants to knock out some tasks.

- I opened a pull request: This is the start for every engineer. We all write code and some may consider it done when they open a pull request - leaving the rest up to someone else.
- My code’s merged into master: The next level is a tiny bit beyond - in this case it’s not just that the code was written but that it has also been merged into the main branch.
- My code’s deployed to production: At this point we’re at least aware that the code isn’t the end goal and that we want to make sure it’s out in the real world.
- My code is being used in production: We’re finally at the point where we care that our code is actually being used. Code that’s deployed but unused doesn’t matter and we strive to write code that’s actually used.
- Users love my code: The peak is building products that are loved by users. This is what drives great products and should be the goal for every bit of code that’s written and deployed.
