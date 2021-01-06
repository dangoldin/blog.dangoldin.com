---
date: "2015-08-01T00:00:00Z"
description: Code is not done when a pull request is submitted but when it's deployed
  to production.
meta_img: null
keywords: engineering management, deployment, quality, engineering teams
tags:
- 'meta'
title: It's not done until it's deployed
---

As a developer, it feels wonderful to commit some code and knock an item off of the ever growing to do list. Unfortunately, until that code is deployed it’s not delivering any actual benefit. It’s easy to open a pull request and move on to the next task but to create high quality products we need to only consider our code complete when it’s deployed and running issue free. So many things need to happen between writing the code and deploying it - handling conflicts with other database changes, updating database schemas, and monitoring the actual code to make sure it’s working as expected on a production system. Calling something done before it’s deployed is a lazy shortcut.

This approach also encourages developers to care more about their code and take a big picture view of the product. By taking an active role in the deployment we’re forced to think through the dependencies and design a release process that avoids downtime and occurs in the right order. For simple features it’s straightforward but larger, coupled ones require an approach that may even end up in rewriting code in order to simplify or stage a complicated deployment process. And if you know your features aren’t complete until they’re deployed you’ll make an effort to actually get them deployed. This is a huge risk reduction since the code and ideas are still fresh in our minds and can deploy code in small batches rather than massive monoliths.

The holy grail is continuous deployment which couples code commits and deployments but it requires significant effort to get it working smoothly that may not be worth it for early stage companies who need to focus on building their product. For them iterating is crucial and every developer needs to take ownership of getting their code into production.
