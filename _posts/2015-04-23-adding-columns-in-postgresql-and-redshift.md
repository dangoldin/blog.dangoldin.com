---
layout: post
title: "Adding columns in PostgreSQL and Redshift"
description: "Adding a database column in SQL is easy, except when it's not."
keywords: "postgresql, redshift, mysql, sql, database, create column"
image_url:
category:
tags: ["#devops", "#code"]
---
{% include setup %}
A frequent event when working with a SQL database is adding a column. Ideally, you’d want to add this column before or after another one that makes sense rather than all the way at the end. MySQL makes this straightforward since you can use the AFTER keyword when adding a column to specify exactly where it should be added. PostgreSQL and Redshift make this difficult since all new columns are automatically added at the end.

Normally, this isn’t a problem in most cases since you just write a query to specify the desired column order but it makes doing a simple “SELECT *” more annoying and will break naive jobs that rely on a particular column order.

The accepted solution is to create a new table with the proper structure, migrate the data from the original table while using a default value for the new column, drop or rename the original table, and then rename the new table with the original name. It’s a lot easier to see this in code:

{% highlight sql %}
-- The original table
CREATE TABLE test (
  id int not null primary key,
  name varchar(20) not null
);

-- Let's say we need to add an age column
-- Create the new table
CREATE TABLE test_new (
  id int not null primary key,
  name varchar(20) not null,
  age int not null
);

-- Migrate the data
INSERT INTO test_new
  SELECT id, name, 0
  FROM test;

-- Backup the old table
RENAME TABLE test TO test_old;

-- Rename the new table to have the original name
RENAME TABLE test_new TO test;

-- If all looks good, drop the old table
DROP TABLE test_old;
{% endhighlight %}

One issue with this approach is that if the table is very large, it will take a long time to migrate the data from the original to the new table. In this case a possible approach is to do it piecemeal - if you know you only need recent data you can migrate a subset of the data first to get the table ready, do the rename, and then migrate the rest. In code again:

{% highlight sql %}
-- The original table
CREATE TABLE test (
  id int not null primary key,
  name varchar(20) not null
);

-- Let's say we need to add an age column
-- Create the new table
CREATE TABLE test_new (
  id int not null primary key,
  name varchar(20) not null,
  age int not null
);

-- Migrate some of the data
INSERT INTO test_new
  SELECT id, name, 0
  FROM test
  WHERE id > 1000000;

-- Backup the old table
RENAME TABLE test TO test_old;

-- Rename the new table to have the original name
RENAME TABLE test_new TO test;

-- Migrate the rest of the data
INSERT INTO test
  SELECT id, name, 0
  FROM test_old
  WHERE id <= 1000000;

-- If all looks good, drop the old table
DROP TABLE test_old;
{% endhighlight %}

If you know for a fact that it's not important to have the old data immediately available you can opt to rename the original table, create the new table, and only then migrate the data. This allows queries that need to write data to this table to complete immediately. The risk is that the legacy data will only be available after the migration completes. The last code block:

{% highlight sql %}
-- The original table
CREATE TABLE test (
  id int not null primary key,
  name varchar(20) not null
);

-- Let's say we need to add an age column
-- Create the new table
CREATE TABLE test_new (
  id int not null primary key,
  name varchar(20) not null,
  age int not null
);

-- Backup the old table
RENAME TABLE test TO test_old;

-- Rename the new table to have the original name
RENAME TABLE test_new TO test;

-- Migrate the data
INSERT INTO test
  SELECT id, name, 0
  FROM test_old;

-- If all looks good, drop the old table
DROP TABLE test_old;
{% endhighlight %}

The first scenario handles having columns in the right order but the other two can be useful on MySQL as well when tables are large and performance is critical. For high load databases, transactions can be used to make sure that the renames are done atomically - this will avoid an intermittent query writing to a non existent database. It's surprising how a task as simple as adding a column can evolve into a large problem with a variety of solutions when running into a variety of constraints.