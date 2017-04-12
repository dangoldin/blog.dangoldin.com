---
layout: post
title: "SQL is the perfect interface"
description: "If you think about it SQL is the perfect interface. It's so simple on the surface while allowing a variety of different databases to be created that are optimized for different use cases."
keywords: "sql, database, olap, oltp, rdbms"
image_url:
category:
tags: ["#meta"]
---
{% include setup %}
The more I code the more I’m exposed to SQL. It started with the usual relational suspects - MySQL, PostgreSQL, and even SQL Server (back in the finance days), but has since then expanded to columnar database such as Redshift, Vertica, and MonetDB. And now I’m starting to use SQL to query data on S3 using SparkSQL, Athena, and Hive.

The first [SQL standard](https://en.wikipedia.org/wiki/SQL) was introduced in 1974 and it’s just incredible to see how dominant and dispersed it’s become. It’s still used for the original RDBMS use cases but it’s expanded significantly since then for a whole slew of new use cases. At the same time the underlying query syntax remained surprisingly similar. We talk about designing good interfaces that allow us to write reusable and clean code but SQL is an interface that’s existed, evolved, and expanded for more than 40 years.

It’s amazing that a single query can run across a variety of databases (or distributed files) and it’s up to you to pick the engine you want to power your use case. If you’re doing a massive volume of selects and updates pick an OLTP database such as MySQL or PostgreSQL. If you’re analyzing large datasets use an OLAP such as Vertica or Redshift. If you have even more data that’s on a distributed file system use Hive or SparkSQL. And if those aren’t good enough there’s an ever-growing list of SQL-based database products optimized for different use cases - the two that immediately come to mind are [VoltDB](https://www.voltdb.com/) for super quick and accurate transactions and [TimescaleDB](http://www.timescale.com/), a recently launched database built on top of PostgreSQL that’s optimized for time series data.

Every experienced developer has some familiarity with SQL which makes new relational databases feel approachable. In addition, we have so many tools and libraries built for relational databases that it becomes straightforward to extend them to the new entrants. It actually feels as if the pace of new SQL-based databases is growing and it’s because of this creativity granted due to constraints. By committing to a fixed SQL standard database developers are able to focus on designing the perfect engine for a specific use case knowing that if they’re able to hit their performance goals developers will feel comfortable integrating it into their code.
