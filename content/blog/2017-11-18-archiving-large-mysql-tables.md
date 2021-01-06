---
date: "2017-11-18T00:00:00Z"
description: To dump a large agg table we wrote a simple script to slice into small
  date based chunks and handle each one individually.
meta_img: null
keywords: mysql, archive, data, mysqldump
tags:
- 'code'
title: Archiving large MySQL tables
---

One of the major changes we made when building the latest iteration of our data pipeline was moving our key agg tables over from MySQL to Redshift. Despite the migration we thought it would be prudent to archive these tables. The challenge was that some of these tables were hundreds of gigabytes so doing a simple mysqldump wouldn’t work. The reason these tables were so large is because they included a date dimension which led to our [archive script](https://github.com/dangoldin/python-tools/blob/master/archive_tables.py). The script works by generating a sequence of shell commands that slice the table into chunks by date, gzip each chunk, and upload it to an S3 bucket. This keeps each individual chunk small enough to archive while making sure all the data is captured. It’s not the most elegant solution but it’s obvious and it’s quick. The one piece that’s missing is the table schema which can be fetched separately.
