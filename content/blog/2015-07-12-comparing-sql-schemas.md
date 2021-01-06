---
date: "2015-07-12T00:00:00Z"
description: A quick JavaScript tool to make it easy to compare two SQL schemas.
meta_img: null
keywords: sql, schema, compare sql schemas
tags:
- 'sql'
- 'code'
- 'devops'
title: Comparing SQL schemas
---

During development it’s common to get your dev database out of sync with the one in production. Sometimes it’s due to an additional column in development you added before realizing it wasn't necessary and other times it’s just creating a few temporary tables on production that you forget to drop. In both cases it’s useful to reconcile the schema differences every once in a while to keep your database in a clean state. In the past I would just run a simple query (select table_schema, table_name, column_name from information_schema.columns;) on each environment and then use either Excel or Google Sheets to spot the differences. This takes a bit of time so this weekend I put together a quick <a href="https://dangoldin.github.io/js-tools/#tab-sql-schema-comparison" target="_blank">JavaScript tool</a> to automate the process. You simply run the schema query on each of the environments and paste the resulting rows into the two text areas. The result is a JSON based diff showing the additions, deletions, and modifications to each of the tables and fields. The next step is to modify it to also identify differences in the column types.
