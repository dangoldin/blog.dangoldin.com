---
layout: post
title: "Production makes fools of us all"
description: "Just because your code works on a development environment doesn't mean it will work on production. The scale and infrastructure may be completely different and you nede to keep it mind when writing software."
keywords: "software, development, coding"
image_url:
category:
tags: ["#devops", "#management"]
---
{% include setup %}
The biggest development lesson I learned over the years is that production is a completely different beast from development. Code that works perfectly in a development environment can fail catastrophically in production and cause a severe impact on the business. Issues can stem from bits of inefficient codes to database schemas that just don't scale on production. Ideally your development environment  mirrors production and has the same load and hardware but that's rarely the case. For the other cases cases I’d go through the following items to make sure your code is ready for production:

- General code efficiency: Your code may pass unit tests and work fine when you’re running it on development data but you should make sure the code itself can scale to production data. Inefficient code may be fine to push to production if it’s not being hit often or you have the hardware to back it up but you need to make sure this is the case. This also extends to UI applications: if your development environment has a few rows for a customer while in production a customer will have hundreds, you need to make sure that the UI is responsive and that the design actually fits the production use case.
- Query performance: This is the most frequent problem I’ve seen when new code is deployed. A query may run fine in development which can have a magnitude less data but as soon as it’s pushed to production queries that used to take milliseconds while developing start taking multiple seconds. The simplest way to deal with this is to just run your queries on production and confirm they work - especially on the datasets and filters you suspect will be problematic. The results may lead to solutions such as adding new indices to a table or generating new summary tables to speed up the code, neither of which would have been easy to discover during development.
- Deployment plan: Part of writing code is thinking through the deployment and a big part of deployment is making sure you’re avoiding down time. In addition to making sure your application rolls over gracefully to the new code you should be thinking about the database migrations you’ll need to make and confirming they will run as expected on production. I’ve encountered cases where adding a column took a few seconds on a development database but multiple hours on production. If that’s the case you should rewrite the migration to avoid downtime - for example creating a new table and population it with legacy data and only then renaming it to the original name.
- Rollback plan: As much as we like to think our code is perfect mistakes happen and we should write code that’s easy to rollback. Ideally it’s as simple as just pushing the older code but it may need a bit more work if it depends on database changes or other applications.

None of these should be earth shattering and over time they become a habit but until then it’s important to go through each one to ensure a successful production deployment.
