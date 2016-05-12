---
layout: post
title: "Identifying unused database tables"
description: "Keep a database clean is underrated. One of the easiest things to do is to drop unused tables. I have a few tricks I've picked up over the years to amke this process easy."
keywords: "sql, mysql, database cleanup, database schema, metadata"
image_url:
category:
tags: ["#sql", "#code"]
---
{% include JB/setup %}
When writing code it’s very easy to accumulate deprecated database tables that end up as zombies - they’re still around and may even be populated and used by a variety of side scripts but if they disappeared and the dependent code was removed nothing would be different. In fact you’d have a smaller code base, a smaller database, and would hopefully improve everyone’s productivity a tiny bit.

Dealing with the tables are are still being populated and read requires a bit of investigative work and knowledge of the product since there’s no simple way of identifying them. But there are a simple ways to identify tables that are no longer updated.

### 1. The metadata
Some databases provide a last updated flag as part of the metadata tables. For example, MySQL contains an update_time field inside the information_schema.tables table for MyISAM tables. Reading the MySQL documentation it also looks as if recent versions will have this set for some InnoDB tables as well.

### 2. The temporal columns
In the case where there’s no metadata for a table you have to resort to a bit of trickery. If your table has any form of a time column then you can write a very simple query - **select min(timestamp), max(timestamp) from table** - to spot the most recent data in a given table. If this date is old you may be able to safely assume that this table is no longer being populated or maintained. Combining this quick trick with data from the informatino_schema.columns table and you can write a very neat query that can run this check across the entire database.
For example, you can first run **select table_schema, table_name from information_schema.columns where column_name = 'timestamp'** to identify every table that contains the timestamp column. Then you can automate the creation of a monster query that will generate a checking query for each of the tables and then union them all together. So then you end up with something akin to **select 'table_1' as table_name, min(ymd) as min_ymd, max(ymd) as max_ymd from table_1 union all select 'table_2' as table_name, min(ymd) as min_ymd, max(ymd) as max_ymd from table_2 union all...** The query may take a while depending on the indices but once it does you can quickly sort by the max timestamp to quickly spot the potentially unused tables.
A small adjustment you can make to deal with tables that may still be getting populated is to look at the number of rows that exist by day. If you see a huge decline it can be a good indicator that this table may just be getting some noise from an older job and is safe to remove, but only after removing the deprecated job.

### 3. Snapshot and monitor
But what do you do if there’s no metadata and no timestamp column? Ideally you’d have created and updated timestamps in every table. If not you can either add these to be automatically set and see whether anything changes over time or you can just take a manual snapshot today and a few days or weeks later to see whether anything changed. If the table is too large you can compare the number of rows or some summary statistics. The general idea is to compare it against multiple periods of time to see if, and how much, it’s changing.

These are just a few tricks I’ve picked up over the years trying to keep database schemas clean. Most companies do a good job managing the deployment process when generating new tables and writing new code but it’s rare to find companies that tend to their database garden. I believe maintaining a clean database is underrated - it’s valuable to know that everything in your database is used and that you don’t have to worry worry about an obscure script touching an obscure table you’ve never heard of. I’d love to know if people have other tips that can be used to both keep, and get, a database clean.
