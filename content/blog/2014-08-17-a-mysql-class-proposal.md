---
date: "2014-08-17T00:00:00Z"
description: I'm putting together a MySQL class and would love to get some feedback
  on the proposed structure.
meta_img: null
keywords: mysql, databases, tech classes
tags:
- 'data'
- 'meta'
title: A MySQL class proposal
---

I’m clearly biased but I believe technology is critically important and we should be spending more effort teaching it than we are now. To that end, I’ve been volunteering with <a href="http://www.tealsk12.org/" target="_blank">TEALS</a>, a national program that allows professionals to teach Computer Science classes in a local high school. Something else I’ve been working on is developing a MySQL class to give as part of the <a href="http://www.c4q.nyc/" target="_blank">Coalition 4 Queens</a> program. As part of the process I wanted to share what I’m thinking of doing and would love to get some feedback to hopefully improve it. The general idea is that it will consist of 3 or 4 sessions with each session lasting a couple of hours. The class will be opt-in and the students should have some technology background.

Session I

- Overview of MySQL and relational databases. What are they? How are they used? What are the alternatives?
- Provide a quick overview of the normal forms and what they mean. What impact does it have when they’re violated and go over what well designed databases have.
- Introduce the dataset we will be working with. This will mostly likely be a dataset I’ll pull from some of my side projects that will hopefully be relevant. Currently, I’m thinking of using a database containing some fantasy football data that I’ve scraped.
- Make sure everyone has MySQL installed or can get it installed.

Session II

- Revist the dataset we’re working with and explain the relationships between the various tables and columns.
- Go over the basic syntax of a query: SELECT, FROM, and WHERE.
- Go over the basic INSERT statement.

Session III

- Review the basic syntax of a query and introduce the JOIN operations. Use joins to answer some simple questions from our dataset.
- Introduce the GROUP BY functionality and the ways it can be used to summarize data. Use this in conjunction with joins to explore our dataset.
- Develop some complicated and slow queries and introduce the idea of INDICES so everyone is aware of why they are useful.

Session IV

- Go over table creation and have the students come up with some interesting aggregate tables.
- Provide a quick overview of how to diagnose a query for performance and how to test a query to make sure it was written correctly.
- Discuss the various system tables (information_schema schema) and the various system commands that can be used to get a better understanding of MySQL