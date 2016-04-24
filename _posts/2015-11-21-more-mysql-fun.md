---
layout: post
title: "More MySQL fun"
description: "Doing a group by on a derived column can be dangerous if it has the same name as one of the originals. It's much better to be explicit with the columns and group by you're using."
keywords: "mysql, query issues"
image_url:
category:
tags: ["#sql", "#code"]
---
{% include JB/setup %}
I had a bit of fun with MySQL earlier this week when trying to explain a non obvious “group by” behavior. It’s fairly common to want to manipulate a field in order to transform it into something more useful. The difficulty arises when you want to keep the original name. Below is some SQL code that highlights the odd behavior.

{% highlight sql %}
drop table if exists dan_test;

create table dan_test (
  id int not null,
  id2 int not null
);

insert into dan_test (id, id2) values (1,1), (2,2), (3,3);

select * from dan_test;

select id, case when id = 1 then 2 else id end as id, id2
from dan_test;

select id, sum(id2)
from dan_test
group by id;

select case when id = 1 then 2 else id end as id, sum(id2)
from dan_test
group by id;

select case when id = 1 then 2 else id end as new_id, sum(id2)
from dan_test
group by new_id;
{% endhighlight sql %}

With the second to last query it’s not obvious which id field the group by is referring to: the original from the table or the derived field? It turns out it’s the original field which can cause problems if you’re unaware of this subtlety. There are a few different ways to deal with this situation, including grouping by the derivation formula, but my favorite is to use a brand new field as in the last example above.
