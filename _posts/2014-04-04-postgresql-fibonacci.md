---
layout: post
title: "PostgreSQL Fibonacci"
description: "It's possible to use PostgreSQL to define recursive relationships. In this case we define a Fibonacci number generator using a PostgreSQL query."
keywords: "postgresql, fibonacci"
image_url:
category:
tags: ["#code"]
---
{% include JB/setup %}
Earlier today I was researching whether it was possible to generate Fibonacci numbers using a SQL query. A Google search turned up a <a href="http://pgsql.inb4.se/2009/march/fibonacci-sequence-using-with-recursive.html" target="_blank">short PostgreSQL</a> query that uses a recursive approach. Since this is recursion, the query starts by defining a base case and then goes on to define a generation step with a stopping limit.

{% highlight sql %}with recursive f as (
    select 0 as a, 1 as b
    union all
    select b as a, a+b from f where a < 100000
) select a from f
{% endhighlight %}

It’s interesting to see the edge features of a language and I find that query languages tend to have the most striking ones. My experience with the various SQLs has been that at the basic level they’re very similar but diverge significantly at the edges.