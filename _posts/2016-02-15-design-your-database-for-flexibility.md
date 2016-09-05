---
layout: post
title: "Design your database for flexibility"
description: "People worry about tech debt but database debt is worse since it's so hard to change and tweak. Spend the extra time desiging a flexibile database schema."
keywords: "database, tech debt, database design"
image_url:
category:
tags: ["#devops"]
---
{% include setup %}
One of the biggest lessons I’ve learned is to spend extra effort thinking about the database when setting out to build something new. Compared to changing a database schema, changing code is trivial. The database structure defines how you think about your business and either provides the flexibility as you grow or impedes you when forced to support something it wasn’t designed to handle.

With code you can do a deploy which can replace all behavior at once while with data you’re forced to acknowledge and handle the data you have. If this is a large table you have to figure out how to migrate the data to a new schema. The simple way is to deal with the downtime and hope the migration works. The more complex way is to support two database schemas at once with your code while the migration occurs. Neither of these would be necessary if you think through the database design choices you’re making. It’s going to be impossible to address every future need but there’s incredible value in at least thinking through potential changes and how they’d be supported.

A simple question is the relationship between tables - are you ever assuming a one-to-one relationship that may be one-to-many in the future? If that’s the case you’re probably better off designing the database to support the more advanced case but having your application only support the one-to-one case. This keeps the flexibility in place if you need but doesn’t complicate the code too much.

Another question to ask is whether there’s anything redundant. It may be easier to denormalize your data a bit for the sake of improving a query but don’t. If a database can support an inconsistent state it will support an inconsistent state. Whether due to a bug, a timing issue during a deploy, or someone making a manual update you’ll end up with an inconsistent state in the database which will likely lay dormant for too long. Avoid this issue entirely by removing all redundancies and potentially conflicting fields.

Beyond the tactical questions, thinking about your business and product roadmap a year from now is a great way to influence your schema now. If you suspect you’ll need to support a particular feature or flow you should imagine what your data would need to look like. It’s important to do this when writing code but it’s more important to do this when designing your database. Code can be changed with a deploy but database changes require more.
