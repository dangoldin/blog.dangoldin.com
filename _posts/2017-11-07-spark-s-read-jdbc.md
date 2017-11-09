---
layout: post
title: "Spark's read.jdbc"
description: "We ran into an issue where our Spark jobs suddenly started taking hours to run. Digging into it we discovered it was due to the way we were accessing tables from MySQL."
keywords: "Spark, read.jdbc, sql, code optimization"
image_url:
category:
tags: ["#code"]
---
{% include setup %}
Yesterday I spent a bit of time investigating one of our Spark jobs that had suddenly shot up in run time. The purpose of our job is to collect all the events we see in an hour and generate a variety of aggregate tables and files that can then be loaded into various systems. When we first wrote the job it took about 45 minutes to run but as we've started seeing much higher data volume the job time has crept up to to 90 minutes. And for some reason yesterday the jobs were not completing even after 2 hours. There was clearly something odd happening.

After digging into it I discovered it was actually a problem with the way we were fetching data from MySQL. In order for us to process our data we load a variety of fact tables from MySQL that are then joined to the raw log level data in Spark. We ingest about a dozen tables this way and it turned out that Spark was just hanging waiting for MySQL. Examining the slow query log it became immediately obvious what the issue was: we were seeing a ton of queries that were "SELECT * FROM (SELECT * FROM table) table WHERE 1=0" quickly followed by "SELECT a, b, c FROM (SELECT * FROM table ) table." It turns out we were using the [read.jdbc](https://spark.apache.org/docs/2.0.0/api/R/read.jdbc.html) function that under the surface Spark does two queries - the first to get the schema and the second to get the data. It's designed to work on a table but what we were doing was passing in a subery.

I suspect the origin of this creativity was to give us a way to do more advanced querying but it came at a pretty big cost when trying to fetch a table. For one of our simple tables there was a multiple order of magnitude improvement by doing "SELECT * FROM table WHERE 1=0" instead of "SELECT * FROM (SELECT * FROM table) table WHERE 1=0" despite them fetching the exact same data. The reason for this is that MySQL isn't smart enough to realize what we were doing and has to actually evaluate the inner query before the where clause. This adds up when the underlying table keeps growing.

Making a one line change to fetch the tables rather than rely on the subqueries had an immediate performance improvement. Our jobs that were still going strong after 4 hours started completing in less than an hour and this was all due to improving a bit of SQL. It's remarkable how trivial, yet impactful some optimizations are and it's important to keep profiling and understand the slowest parts of the system. Only by fixing those do you improve the whole system. This is obvious and has existed since the 1960's by virtue of [Amdahl's law](https://en.wikipedia.org/wiki/Amdahl%27s_law) but it's still relevant today as we embrace more and more big data and parallel processing tools.
