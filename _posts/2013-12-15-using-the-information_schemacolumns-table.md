---
layout: post
title: "Using the information_schema.columns table"
description: "If you're a frequenty user of MySQL you should become familiar with the information_schema.columns table. It's very handy for getting information about all the columns and tables in the MySQL database."
keywords: "mysql, inforamtion_schema, information_schema.columns"
category:
tags: ["#code", "#sql"]
---
{% include setup %}
Something that’s been really helpful to me in understanding a MySQL database is the built in <a href="http://dev.mysql.com/doc/refman/5.0/en/columns-table.html" target="_blank">information_schema.columns</a> table. It provides information on every column in the database and is queryable just like any other table. This makes it easy to quickly find all tables that have a particular column name or all columns that are the same data type. There have been countless times where I knew the data existed somewhere but couldn’t recall which table it was in. Querying the information_schema.columns table for the foreign key helped me quickly figure it out. Below are some sample queries that retrieve data from the information_schema.columns table:

{% highlight sql %}select table_schema, table_name from information_schema.columns where column_name like '%user_id%’;

select * from information_schema.columns where column_name like '%time%’;

select * from information_schema.columns where data_type = 'datetime';
{% endhighlight %}

Since it’s just like any other table, except for being read-only, you can write jobs that access the data. Something I had to recently do was write a quick script to generate fake data. All a user has to do is specify the table name to populate and the script would look up the columns and their types from information_schema.columns and dynamically generate the INSERT statements. For example, if a column was of type varchar it would generate a random text string less than or equal to the length constraint and if it were an int it would generate a random number. It wasn’t perfect and only handled foreign keys that were specified by the user but it was great given the effort. A later version could use the information provided by two other information_schema tables, table_constraints and key_column_usage, to get rid of this manual step. If you’re a frequent MySQL user, familiarizing yourself with the tables in information_schema will make you significantly more efficient.
