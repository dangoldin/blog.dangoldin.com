---
layout: post
title: "JSON to CSV"
description: "I needed to convert JSON data to a CSV which is a surprisingly challenging problem."
keywords: "json, csv, ec2 instance list csv"
image_url:
category:
tags: ["#code"]
---
{% include setup %}
A while back I needed to dump some some EC2 instance information into a CSV file for a quick analysis. Just to get it done I took the immediate approach of using the AWS API to pull the details and then just navigating the massively deep structure. This approach required code designed for that exact structure so it got me thinking of a more generic approach that would be able to extract CSV data from an arbitrary JSON structure. It’s a surprisingly tricky problem since JSON consists of both lists and dictionaries and can have a pretty hairy nesting structure. Just to get the EC2 instances one has to go through a list of reservations each containing a list of instances with the various fields at different hierarchy levels - and some depending on another value within the same structure.

The problem is similar to extracting various elements in HTML and one of my favorite solutions there is to use XPath. It’s straightforward to implement an XPath-like selector for JSON but the challenge is extract a set of fields at once while maintaining some sort of internal consistency - in the EC2 example an example is getting the public ip, the private ip, as well a tag name based on its key. To get this to work we need to take a list of XPath-like expressions that need to be evaluated concurrently in order to extract what’s needed.

The [first pass is up on GitHub](https://github.com/dangoldin/python-tools/blob/master/json_csv.py) but there’s definitely a bit of work that still needs to be done. It’s been tested on a few simple files and examples but definitely doesn’t work for complex hierarchies or extractions.
