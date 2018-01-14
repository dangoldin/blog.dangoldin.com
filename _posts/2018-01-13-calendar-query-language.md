---
layout: post
title: "Calendar query language"
description: "I wish calendars had a SQL-like language that let me run queries."
keywords: "calendars, query language, sql, jql"
image_url:
category:
tags: ["#meta"]
---
{% include setup %}
I’m a power user of Google Calendar and use it to organize meetings, tasks, and important dates. The one thing I wish it had was a more powerful query language. I often wish I could run SQL-like queries on top of my calendar. For example being able to get a count of the number of people taking a vacation by day by team or looking at the intersection between multiple calendars. The goal would be to automate much of the work I’m doing now when looking at managing my calendar but also uncover insights that are currently constrained by a lack of easy access.

Given that calendars are reasonably well structured this should be doable by just dumping the data into a relational database and writing the appropriate queries. I’m positive there are some subtle nuances that I’d have to work around - ranging from missing fields, to recurring events, to overly complicated metadata - but it feels like a solvable problem. As I write this an analogy that comes to mind is [JQL](https://www.atlassian.com/blog/jira-software/jql-the-most-flexible-way-to-search-jira-14), or JIRA Query Language, a bastardized SQL that was designed to work on top of JIRA. It supports SELECT statement on top of the JIRA fields but neglects joins and aggregates. JQL is designed for a single purpose and a calendar query language can follow this model. I think I gave myself a project for the next couple of weeks.
