---
date: "2014-05-29T00:00:00Z"
description: I wrote a quick script to make it easy to generate fake data for SQL-like
  databases.
meta_img: /image/js-tools-generate-sql-data.png
keywords: sql, fake data, generate sql data, javascript
tags:
- 'code'
- 'devops'
title: Generate fake SQL data using JavaScript
---

A problem I occasionally run into is needing to generate a bunch of fake data and insert it into a database table. My usual approach has been to generate this data in Excel and then use a series of string concatenations to generate the necessary insert statements which I’d then execute in the SQL client. After doing this one too many times I decided it was time for a better, more automated approach and <a href="https://dangoldin.github.io/js-tools/#tab-sql-data">hacked one together</a> in JavaScript. It’s currently a part of my js-tools <a href="https://github.com/dangoldin/js-tools" target="_blank">GitHub repo</a> and suggestions are welcome. One thing I definitely need to add is the ability to specify the range of possible values for each field rather than using a hardcoded distribution.

<a href="https://dangoldin.github.io/js-tools/#tab-sql-data">
  <img src="/image/js-tools-generate-sql-data.png" alt="JS Tool to generate SQL insert statements" data-width="1144" data-height="368" data-layout="responsive" />
</a>
