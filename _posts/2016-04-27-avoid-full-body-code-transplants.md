---
layout: post
title: "Avoid full body code transplants"
description: "It's easy to get carried away and start rewriting all parts of your code. Don't do this and treat it like an ill patient that requires multiple transplants - do one transplant at a time."
keywords: "engineering management, coding, software development, software engineering"
image_url:
category:
tags: ["#management"]
---
{% include setup %}
When working on new features it’s easy to keep increasing scope until you end up doing a full rewrite of your code. Don’t. It’s healthy to refactor code as you go but you need to be wary of how many things you’re changing and the risks those changes carry. Code will get stale unless it’s constantly maintained and updated as the rest of the product evolves but trying to change too much at once will make it difficult to diagnose issues and increase the odds of bugs in production.

The analogy is that of an extremely sick patient. That person may need a variety of transplants but it’s dangerous and stupid to replace multiple organs at once. Instead you should find the most critical one to replace and do that. After the body adjusts to that transplant you move on to the next most critical one. Otherwise the body will go into shock and reject the organs.

Bad code is similar to this patient. There are countless things that can be improved but if it’s doing a critical job keeping a product alive you need to treat it carefully. Replacing everything at once may end up working but more likely it will cause a slew of problems that will be tough to diagnose given the various changes. It’s much better to approach code like a sick patient - make a change, release, and monitor to make sure everything is going well. Once you’re confident that the code is functioning as expected you can move on to the next most critical item. Over time you end up replacing the critical components while reducing risk.