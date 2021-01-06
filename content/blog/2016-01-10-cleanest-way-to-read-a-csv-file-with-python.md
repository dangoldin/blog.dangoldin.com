---
date: "2016-01-10T00:00:00Z"
description: Using namedtuples and the csv library make it incredibly easy and clean
  to read a file in Python
meta_img: null
keywords: python, reading a file, clean code
tags:
- 'code'
title: Cleanest way to read a CSV file with Python
---

Python’s my goto language for doing quick tasks and analyses with the majority of them being quick scripts to analyze a file or pull some data. I’m constantly looking to improve my code and lately have developed the following approach. The goal isn’t to make it as short as possible but to make it as expressive and clean as possible. They're related but not synonymous.

{{< highlight python >}}#!/usr/bin/python

import csv
from collections import namedtuple

# Can add whatever columns you want to parse here
# Can also generate this via the header (skipped in this example)
Row = namedtuple('Row', ('ymd', 'state', 'size', 'count'))

with open('file.csv', 'r') as f:
    r = csv.reader(f, delimiter=',')
    r.next() # Skip header
    rows = [Row(*l) for l in r]
    # Do whatever you want with rows
{{< / highlight >}}

The reason I like this approach is that it’s obvious what’s happening and it’s being done in a Pythonic way. There’s no traditional for loop that spans multiple lines and it’s simple to update the loop to manipulate the values during the handling of reach row. This approach also leverages the namedtuple collection which is one of my favorite types - a class-like structure that's significantly more memory efficient but provides easy named access the fields (row.ymd, row.state). With this basic structure in place we can add all the bells and whistles that manipulate and tweak the rows. One thing to be aware of is that the namedtuple generates if immutable so you either need to manipulate the values before construction or use additional structures to transform the data.
