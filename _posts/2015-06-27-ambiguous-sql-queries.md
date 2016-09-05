---
layout: post
title: "Ambiguous SQL queries"
description: "When running raw SQL make sure to use table aliases in your queries even when they're not required. This insures you against future breaking changes."
keywords: "sql, queries, best practices"
image_url:
category:
tags: ["#sql"]
---
{% include setup %}
One of the best habits to develop when working with SQL is to always refer to fields through an alias. Numerous times I decided to just take a shortcut and ended up regretting it later. Even if you’ve tested your query to make sure it works there’s no guarantee that a future change to a table schema won’t break it.

Let’s say you have the following two tables - with items.category_id corresponding to categories.id

{% highlight sql %}
create table items (
    id int,
    name varchar(20),
    category_id int,
    owner_id int
);

create table categories (
    id int,
    code varchar(4)
);
{% endhighlight %}

It’s straightforward to join the two tables to get some basic info:

{% highlight sql %}
select i.id as item_id, name, category_id, code
from items i
join categories c on i.category_id = c.id;
{% endhighlight %}

Let’s say we test the code and deploy to production. It works perfectly until someone adds a “name” column to the categories table. All of a sudden our query stops working with a helpful “Column 'name' in field list is ambiguous” error. The reason is that the query doesn’t specify which source table for the name column. The solution is to simply prepend the items table alias to the name field and we’re back to a functional query.

{% highlight sql %}
select i.id as item_id, i.name, category_id, code
from items i
join categories c on i.category_id = c.id;
{% endhighlight %}

This issue is tough to check against since it requires searching your entire codebase every time you need to alter a table. A better approach is to always specify the schema and avoid the issue altogether. Especially in a quickly growing engineering team where multiple people are working on the same code base it’s very easy to run into these sorts of issues that may only get discovered in production. Although most ORM frameworks abstract this away it’s sometimes necessary to dive down into raw SQL and this is one of those small best practices that is a tiny bit of additional effort to significantly reduce a future risk. Avoid learning this lesson the hard way.
