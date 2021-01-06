---
date: "2016-03-10T00:00:00Z"
description: I've been hesitant to use the MySQL enum field after reading some stories
  but it turns out to be pretty useful and stable. Not for everything but has it's
  use cases.
meta_img: null
keywords: mysql, code, enum type, enum data field
tags:
- 'sql'
- 'code'
title: The MySQL enum type
---

The MySQL enum field provides a nice compromise - the space efficiency of using an integer, the human readability of text, and basic type safety. Yet I had this vague recollection of reading something that made it seem enums carried a ton of risks when changing the column definition so wanted to see if I could “break” it. Turns out it’s a lot more resilient than I thought. I went through a series of combinations - ranging from changing the order of the enums in the definition to trying to insert values that didn’t exist but in every case it handled it as expected. Doing a bit of research I discovered how MySQL represents the enum type. Rather than storing the values in a specific order MySQL supposedly creates a map-like structure to relate the integer values with their enum counterparts. This allows you to change the order of the enum definition without changing the underlying map or any of the stored values. I still wouldn’t use enums for anything that would require a join but for storing small and simple sets of data it works great.

{{< highlight sql >}}
drop table if exists test;

-- Create the toy table
create table test (
  id int auto_increment primary key,
  e enum('a','b','c')
);

-- Populate it with some sample values
insert into test (e) values ('a'), ('b'), ('c');

-- Confirm they look good
select * from test;

-- Now let's add another possible enum value
alter table test modify column e enum('a','b','c','d');

-- Looks good
select * from test;

-- Add some more values
insert into test (e) values ('d'),('a'), ('b'), ('c');

-- Looks good
select * from test;

-- Change the order around
alter table test modify column e enum('a','b','e','c','d');

-- Looks the same
select * from test;

-- Change it again
alter table test modify column e enum('a','b','c','d','e');

-- Looks the same
select * from test;

-- Add and change the order
alter table test modify column e enum('b','c','d','e','f','a');

-- Looks the same
select * from test;

-- Fails since 'g' is not a valid value
insert into test (e) values ('g');

-- Replace 'a' with 'f'
update test set e = 'f' where e = 'a';

-- Now get rid of 'a'
alter table test modify column e enum('b','c','d','e','f','g');

-- Now add 'a' back in
alter table test modify column e enum('a', 'b','c','d','e','f','g');

-- Now swap 'f' back with 'a'
update test set e = 'a' where e = 'f';

-- Looks just like before
select * from test;
{{< / highlight >}}
