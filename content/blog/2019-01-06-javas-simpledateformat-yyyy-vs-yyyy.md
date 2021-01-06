---
date: "2019-01-06T00:00:00Z"
description: ""
meta_img: null
keywords: null
tags: []
title: 'Java''s SimpleDateFormat: YYYY vs yyyy'
---

This post would have been more appropriate a week ago when 2018 was coming to a close but better late than never. This is a friendly reminder that when formatting dates in Java’s SimpleDateFormat class there is a subtle difference between YYYY and yyyy. They both represent a year but yyyy represents the calendar year while YYYY represents the year of the week. That’s a subtle difference that only causes problems around a year change so your code could have been running perfectly fine all year only to cause a problem in the new year.

An example illustrates this much better than words ever could.

{{< highlight java >}}
package com.dangoldin.test;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Test {

    public static void main(String[] args) {
        try {
            String[] dates = {"2018-12-01", "2018-12-31", "2019-01-01"};
            for (String date: dates) {
                SimpleDateFormat dt = new SimpleDateFormat("yyyy-MM-dd");
                Date d = dt.parse(date);

                SimpleDateFormat dtYYYY = new SimpleDateFormat("YYYY");
                SimpleDateFormat dtyyyy = new SimpleDateFormat("yyyy");

                System.out.println("For date " + date + " the YYYY year is " + dtYYYY.format(d) + " while for yyyy it's " + dtyyyy.format(d));
            }
        } catch (Exception e) {
            System.out.println("Failed with exception: " + e);
        }
    }
}
{{< / highlight >}}

This gives you the following:

{{< highlight txt >}}
For date 2018-12-01 the YYYY year is 2018 while for yyyy it's 2018
For date 2018-12-31 the YYYY year is 2019 while for yyyy it's 2018
For date 2019-01-01 the YYYY year is 2019 while for yyyy it's 2019
{{< / highlight >}}

The first and last make sense since the two year formats match. The middle one is the odd one out. The date starts as 2018-12-31 but YYYY gives you 2019 while yyyy gives you 2018. In general, you should almost always use yyyy so it’s a good tactic to add some form of linting or checking to make sure your code does not have any date formats referencing YYYY.
