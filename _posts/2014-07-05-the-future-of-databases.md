---
layout: post
title: "The future of databases"
description: "I attended a talk by Prof Michale Stonebraker where he shared his thoughts about the future of databases. In particular I like that many of these new databases are standardizing around a SQL-like syntax."
keywords: "databases, sql, data, mysql, postgresql, vertical, voltdb, redshift"
image_url:
category:
tags: ["#sql", "#data"]
---
{% include setup %}
A couple of weeks ago I attended a talk by <a href="https://en.wikipedia.org/wiki/Michael_Stonebraker" target="_blank">Professor Michael Stonebraker</a>. For those unfamiliar with him, he’s a database researcher responsible for PostgreSQL, Vertica, VoltDB and a dozen others. During his talk he shared his thoughts about the future of databases and what we can expect to see in the coming years. His main point is that databases are becoming more and more specialized and it will be very common for companies to run multiple types of databases that are optimized for different uses cases.

This is already happening at the larger tech companies and it’s spreading downwards. Data is becoming increasingly important and having the tools available to leverage it is a critical advantage. It’s impossible to find a single database that can be used to run a transactional site, support complex yet quick analytics queries, scale to terabytes of data, and still maintain synchronization between its various nodes. Each of these use cases requires a database that’s optimized for that need and an application that knows how to leverage that database.

The neat thing is that many of these newer databases have embraced a SQL-like query syntax so it’s surprisingly easy to get started. The challenge is that this similarity is only skin deep and the implementations are drastically differently both in terms of how the data is stored as well as how the queries are executed. So although it’s simple to write a query that will execute on both Redshift and PostgreSQL it’s likely that this query isn’t as efficient as it can be on one or both of the databases.

This is the right approach for the specialized-database future. By providing a standard interface it makes us more comfortable with introducing a new database into our stack while providing very different functionality under the surface. It’s likely that the first implementations won’t be ideal but as teams become more comfortable with these new systems the implementations will evolve. I hope this pattern of standardizing around a simple interface becomes more popular. Then the backend can be designed for a variety of use cases without forcing the users to completely change the way they think.
