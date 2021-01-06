---
date: "2018-12-24T00:00:00Z"
description: The US Congress recently passed an act to make government data available
  and accessible. There's a lot left but it's a great start.
meta_img: null
keywords: open data, government, databases
tags:
- 'data'
title: Open, Public, Electronic, and Necessary Government Data Act
---

The US Congress recently [passed](https://e-pluribusunum.org/2018/12/21/congress-made-open-government-data-the-default-in-the-united-states/) [HR-4174](https://www.govtrack.us/congress/bills/115/hr4174) (The Open, Public, Electronic, and Necessary Government Data Act) which is intended to make all public government data available and accessible. Over the years I’ve done my fair share of poking around various government datasets - both public and private - and while the data was generally available it was rarely accessible. More often than not the data would be available via a scanned PDF which required some heavy OCR work to extract anything useful or the slightly easier PDF parsing code. Even when the data was in CSV files I often ran into formatting issues or inconsistency between the column documentation and the data contents themselves. The most important available datasets will always have people willing to go through the grunt work of cleaning them up but it’s the fringe datasets that end up having too much friction for researchers and developers to dig into them. I’m glad the government is moving to make the data accessible as well since it is the strongest way to make it actionable.

It’s definitely not going to perfect to start as it’s incredibly difficult to get consistent and clean data. Imagine a survey being done every decade. An obvious way to structure it is to have a set of files for each decade containing a description of the available fields and then a file containing the data itself. You can have each survey’s files being internally consistent but there are no guarantees that they will be consistent across surveys. What if some fields or questions were renamed, added, or removed? That makes it more difficult to compare the results over time. To maintain consistency across years all of the surveys would need to be a part of the same data set and use consistent values and formatting in order to make it dead simple to compare one year to another.

In an ideal world the datasets would actually come in prepackaged as database dumps. Then you’d be able to just load into your database with the appropriate database definitions, foreign keys, and field constraints. I can’t wait till the day all government data is in [third normal form](https://en.wikipedia.org/wiki/Third_normal_form).
