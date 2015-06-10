---
layout: post
title: "A MySQL \"GROUP BY\" nuance"
description: "Be careful when using the GROUP BY in MySQL on a derived field with the same name as a column. Instead of the derived field MySQL will use the column name."
keywords: "mysql, group by, querying"
image_url:
category:
tags: ["#sql"]
---
{% include JB/setup %}
I discovered a nuance with MySQL's GROUP BY statement earlier today that I’ll share with the hope that others can learn from it. It’s fairly common to use a coalesce statement to handle null values while keeping the resulting field the same name. For example:

{% highlight sql %}
SELECT coalesce(a.user_id, b.other_user_id) as user_id, sum(s.num) as total_nums
FROM table_a a
LEFT JOIN table_b on a.some_id = b.some_other_id
LEFT JOIN stats s on a.stat_id = s.id
GROUP BY user_id;
{% endhighlight sql %}

The nuance is that we want the GROUP BY to apply to the entire coalesce expression but as it’s written it only applies to the user_id column from table_a. This has potential to give odd results in more complicated queries. The only fact I even discovered it was that it was causing a duplicate key constraint violation in another table. The solution is quite simple but annoying - you have to use the entire coalesce expression within the GROUP BY statement:

{% highlight sql %}
SELECT coalesce(a.user_id, b.other_user_id) as user_id, sum(s.num) as total_nums
FROM table_a a
LEFT JOIN table_b on a.some_id = b.some_other_id
LEFT JOIN stats s on a.stat_id = s.id
GROUP BY coalesce(a.user_id, b.other_user_id);
{% endhighlight sql %}

The reason this solution is messy is that it’s very easy to update the SELECT but forget to update the GROUP BY. This won’t throw an error and MySQL will execute the query just fine - the results just may be unexpected. What I’ve started doing is renaming the resulting column and using that within the GROUP BY:

{% highlight sql %}
SELECT coalesce(a.user_id, b.other_user_id) as final_user_id, sum(s.num) as total_nums
FROM table_a a
LEFT JOIN table_b on a.some_id = b.some_other_id
LEFT JOIN stats s on a.stat_id = s.id
GROUP BY final_user_id;
{% endhighlight sql %}

This makes the query a bit more complicated but it’s being explicit about what we want and avoids hidden errors.
