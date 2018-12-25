---
layout: post
title: "Solve all web app performance problems with SQL"
description: "More often than not web application performance problems can be solved by digging into, and optimizing, the queries."
keywords: "sql, web performnace"
image_url:
category:
tags: ["#meta"]
---
{% include setup %}
The title is clearly tongue in cheek but a very large number of web application issues can be solved through better SQL. Web applications performance problems are either UI or API related. And if the performance is on the API side it's likely due to slow queries. The majority of endpoints are doing some form of database interaction and many are making multiple database calls. It only takes one of these to be slow to make the entire application feel sluggish - especially if you have lots of concurrent requests to this endpoint. This often happens when you rely on an ORM to manage your database reads and writes without understanding the queries that are actually being made. An ORM makes it much easier to get started but to get the best performance you need to go lower level and write your own queries. The way to dig into these is to look at the slow query log which gives you (at least in MySQL) both the query, the duration, and the amount of rows examined and snet. Sorting by the query duration gives you a the worst performing queries and then it’s up to you to address them. Sometimes it’s adding a few indices to a table. Other times it’s rewriting the query to be more efficient. Even more rarely it highlights a weakness in the application logic that requires rethinking a particular approach.
