---
date: "2017-10-05T00:00:00Z"
description: Often I need to run the same command multiple times with a different
  date argument. I wrote a simple script to help automate this.
meta_img: null
keywords: python, automation, date replacement, sql queries
tags:
- 'code'
title: Generating a series of commands covering a date range
---

I know the title of the post is terrible but I found it difficult to describe the content in another way.

Lately I’ve been spending a decent amount of my time in SQL-land and running some pretty repetitive queries where only some of the arguments are changed. These run the gamut from exporting some data for a date range by day to adding a series of date partitions while messing around with [Spectrum](http://docs.aws.amazon.com/redshift/latest/dg/c-spectrum-external-tables.html). Depending on the amount of these queries I needed to write I’d either just do it manually with a bunch of copy and pastes or use Excel to generate the queries I needed.

Neither of these were that efficient so I wrote a simple [script](https://github.com/dangoldin/python-tools/blob/master/date_replace.py) to simplify the entire process. It accepts the format string, the start date, and the end date and replaces the macro in the format string with each date of the date range. Then it’s as simple as either piping the results into pbcopy or copying and pasting it into the SQL client. This gets even better by aliasing the command so it can be run in any terminal window.

I often find that I get into the habit of repeating a manual process over and over instead of just taking the time to automate it. This was no exception: the script took me a few minutes to write and I suspect if I had it I would have saved myself hours given how often I had to do some form of this. Hopefully I can catch myself going down the manual path and build a tool to solve the problem instead.

{{< highlight python >}}
#! /usr/bin/env python

import datetime
import sys

if __name__ == '__main__':
    string_template, start_str, end_str = sys.argv[1:]

    start = datetime.datetime.strptime(start_str, '%Y-%m-%d')
    end = datetime.datetime.strptime(end_str, '%Y-%m-%d')

    while start < end:
        print string_template.replace('{{ YMD }}', start.strftime('%Y-%m-%d'))
start = start + datetime.timedelta(days=1)
{{< / highlight >}}
