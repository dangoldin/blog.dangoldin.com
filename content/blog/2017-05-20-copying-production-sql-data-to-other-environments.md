---
date: "2017-05-20T00:00:00Z"
description: Copying relationship data from one database to another is a surprisingly
  common yet difficult task.
meta_img: null
keywords: database migrations, data copy, production, sand, development, test
tags:
- 'code'
title: Copying production SQL data to other environments
---

I suspect most developers have encountered this problem at least once: how do I copy some production data to my test or development environment? This can stem from needing to fix a bug that only manifests in production or just getting a more complicated, real-world dataset that doesn’t yet exist in the test environment. In an ideal world we’d have everything we need in fixtures and properly tested but in the cases we don’t it seems simpler to just copy the data over from the production environment.

This turns out to be surprisingly difficult. The simple cases are easy but it spirals into a world of pain very quickly. To do a proper copy you also need to copy all the dependents and dependencies since they will influence the behavior. Then for each of those you need to do the same thing and keep repeating until you’ve copied over the entire chain. Many ORMs allow you to specify the foreign keys which can be used to figure out the dependency chain; otherwise you need to manually specify the table relationships.

That was the easy part, now you have to handle the fact that the primary keys between the two databases will be different. On one hand you may copy over a row with some values that will violate the constraints of the destination table. On the other hand the data may copy over without any issues but you’ll end up with existing objects referencing this new data. At this point you’re squeezed on both sides.

Now imagine you have references to the data in external systems. This can be additional data that’s kept in another database mapped by ids or content stored on S3. At this point you have to decide what the minimum amount of data it is you need to migrate to do what you need and whether it’s easier to just recreate the production conditions on your environment. More often than not you’re better off skipping the migration and just doing the dirty work of replicating the same configuration on your environment. It ensures your database stays internally consistent and actually gives you a proper scenario to test against outside of production that can be part of your test suite.

As an exercise, I took a [stab at writing a script](https://github.com/dangoldin/db-tools/blob/master/migrate.py) to do this sort of recursive migration. The initial parts were pretty straightforward and I was able to write a simple script that did a recursive migration using an explicitly specified table to table relationship mapping. At the moment the script is unable to handle foreign key constraint violations but in theory it should be possible to resolve this with an exhaustive definition of the table relationships and designing the appropriate execution order. It was a fun, little exercise that confirmed it’s much easier to recreate the objects than to try migrating the data.
