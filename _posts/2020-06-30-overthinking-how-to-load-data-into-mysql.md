---
layout: post
title: "Overthinking how to load data into MySQL"
description: "I have two scripts to laod data into MySQL and while the end goals are similar they each take a different approach and it's not obvious which one is the more correct one."
keywords: "quantified self, unix philosophy, scripting"
image_url:
category:
tags: ["#code"]
---
{% include setup %}
I have two projects that generate data to dump into my [personal dashboard](/2020/02/27/my-personal-grafana-dashboard/). One [loads the health export](https://github.com/dangoldin/health-stats) from my Apple watch into MySQL and the other [analyzes my blog posts](https://github.com/dangoldin/blog-analytics) and generates a CSV file of statistics that I then load into MySQL. The input to both is basically the same - either a file or a directory - and yet two different approaches to the processing.

The blog analytics script doesn't depend on any third party libraries and just generates a CSV file that can then be loaded into MySQL through a query. The health stats script, on the other hand, connects to MySQL and handles the insertions incrementally. As you can guess the health script depends on an external library to make the connection to MySQL as well as a small library to handle some time zone logic.

I subscribe to the Unix philosophy of having programs do one thing but do it well. The first program follows this model. Yet it's less functional than the latter, it has no support for incremental logic and I have to run a separate SQL command to load the CSV file. The second program, on the other hand, handles the entire process end to end.

The "Unix way" would be to split each bit of functionality into individual scripts that can be chained together. The first program can then be executed as "python3 analyze.py ~/blog/_posts out.csv && execute_sql {query}" and the second as "get_sql_field {get_max_date_query} \| python3 get_health.py export.xml \| execute_sql {query}". Neither of these feel particularly elegant since the commands feel bloated and not very easy to follow. There's also the mixture of SQL and CSV - how functional is a program that generates SQL but doesn't actually execute it? Is that really a self contained script?

It all goes to show that there are multiple ways of solving problems and there's rarely a single obvious solution. Solutions are meant to solve problems and every problem is unique. At the moment I'm partial to having a personal library of common SQL that I can tap into - it's a middle ground between the two approaches and allows me to get some reusability.
