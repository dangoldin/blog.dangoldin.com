---
layout: post
title: "Optimizing long running SQL queries"
description: "Someone reduced the size of a SQL query form 380 hours to 12 hours but that still feels slow and likely warrants a different approach."
keywords: "sql, database performance, database optimization"
image_url:
category:
tags: ["#meta"]
---
{% include setup %}
A year ago I read a [post](https://www.spinellis.gr/blog/20180805/) on how someone took a SQL query that took 380 hours to run and by offloading some of the work to shell commands was able to get the run time down to 12 hours. I'm a huge fan of the shell and believe it's underutilized by most engineers yet I can't get over the fact that a query still takes 12 hours to run. I have very little context around the data, the query, or the join but my approach would be to see if there's a different toolset to solve the problem. Running a 12 hour query is dangerous - a disruption will require the query to be run from scratch and the affected tables are locked for that amount of time. It's likely the case that this project doesn't need anything better but even then there should be ways of improving the approach.

Maybe the solution is to create intermediate tables that get updated incrementally which are then the sources to the final query. Maybe it's to revisit the indices and schema to see if there's anything that can be restructured. Maybe it's to shift to a different database engine - a columnar engine such as [Redshift](https://aws.amazon.com/redshift/) (paid) or [MonetDB](https://www.monetdb.org) (Open Source). Without knowing the details of the database or the query it's difficult to say what the ideal solution would be but seeing a 12 hour query makes me think there's a larger change that needs to be made.
