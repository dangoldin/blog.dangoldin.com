---
layout: post
title: "Solving coding tests in PostgreSQL"
description: "PostgreSQL is surprisingly good at solving a variety of coding tests."
keywords: "coding tests, postgresql, fizzbuzz"
category:
tags: []
---
{% include JB/setup %}
Most developers are familiar with the FizzBuzz code test which is a quick way to filter out developers who can’t code. At Yodle, we had our own, slightly more challenging problem. The challenge was read in a text file and then print out the frequency each word appears in descending order. It’s more complicated than FizzBuzz but it assesses a variety of skills. The solution needs to do the following:

<ol>
  <li>Read the file</li>
  <li>Split the text into a list of words delimited by non-letter characters</li>
  <li>Convert each word to lower case</li>
  <li>Compute the frequency each word appears</li>
  <li>Sort the results in descending order by frequency</li>
  <li>Print this sorted list</li>
</ol>

I thought it would be fun to see if I could do it in PostgreSQL and was surprised by how quick and easy it was. The most challenging part was figuring out how to read the file - after that it was just using a few of the built in functions to clean and organize the text.

{% highlight sql %}
DROP TABLE IF EXISTS temp_t;
CREATE TABLE temp_t (c text);

COPY temp_t(c) FROM '/tmp/data.txt';

select lower(data.w) as word, count(1) as num_words
from (
  select regexp_split_to_table((select string_agg(c,' ') from temp_t), E'[^\\w]+') as w
) data
where data.w <> ''
group by word
order by num_words desc, word;
{% endhighlight %}

It also turns out to be very simple to do FizzBuzz in PostgreSQL. The nice part of the PostgreSQL solution is that it can easily scale to adding a 3rd combination. for example print Dozz if the number is divisible by 7. In the PostgreSQL solution, it would just require adding a row whereas in the standard solutions it would require a bit of work and would increase the chance of a bug.

{% highlight sql %}
DROP TABLE IF EXISTS fizzbuzz;
CREATE TABLE fizzbuzz (
  num int,
  text varchar(4),
  priority smallint
);

insert into fizzbuzz (num, text, priority) values (3, 'Fizz', 1), (5, 'Buzz', 2);

select coalesce(string_agg(fizzbuzz.text, '' order by fizzbuzz.priority asc), nums.num::text) as text
from (
  select generate_series(1,100) as num
) nums
left join fizzbuzz on nums.num % fizzbuzz.num = 0
group by nums.num
order by nums.num asc;
{% endhighlight %}

Clearly PostgreSQL isn’t the right tool for every task but it’s surprising how powerful it can be given the right problem. It’s also a great way to think differently about a problem - even if you end up choosing a more standard solution.