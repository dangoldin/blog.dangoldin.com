---
layout: post
title: "Generate fake SQL data using JavaScript"
description: "I wrote a quick script to make it easy to generate fake data for SQL-like databases."
keywords: "sql, fake data, generate sql data, javascript"
image_url: "/assets/static/images/js-tools-generate-sql-data.png"
category:
tags: ["#code", "#devops"]
---
{% include JB/setup %}
A problem I occasionally run into is needing to generate a bunch of fake data and insert it into a database table. My usual approach has been to generate this data in Excel and then use a series of string concatenations to generate the necessary insert statements which I’d then execute in the SQL client. After doing this one too many times I decided it was time for a better, more automated approach and <a href="http://dangoldin.com/js-tools/#tab-sql-data">hacked one together</a> in JavaScript. It’s currently a part of my js-tools <a href="https://github.com/dangoldin/js-tools" target="_blank">GitHub repo</a> and suggestions are welcome. One thing I definitely need to add is the ability to specify the range of possible values for each field rather than using a hardcoded distribution.

<a href="http://dangoldin.com/js-tools/#tab-sql-data">
  <img src="{{ IMG_PATH }}js-tools-generate-sql-data.png" alt="JS Tool to generate SQL insert statements" />
</a>