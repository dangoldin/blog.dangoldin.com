---
layout: post
title: "Efficiency vs expressiveness"
description: "Ideally we can write code that's both efficient and expressive but they're often at odds with one another. I wish there was a language that offered both."
keywords: "code, software engineering, efficiency, pandas, for loops, iteration, expressiveness"
image_url:
category:
tags: ["#code"]
---
{% include setup %}
The ideal code is both efficient and expressive but they’re often at odds with one another. Last week I was working on a [simple script](https://github.com/dangoldin/aws-billing-details-analysis/blob/master/analyze_aws_details.py) to parse and visualize a detailed AWS bill across a variety of dimensions and came across a clear example. The script loads a CSV file into a Pandas dataframe and adds a few columns based on the values of some others. The challenge is that the CSV file can be millions of rows so minor improvements can lead to significant efficiency gains. Given this quick overview the code below should make sense but there are two functions that each iterate through the values of the same column in order to generate two additional columns.

{% highlight python %}
    def add_usage_type_group(self):
        d = self.d
        # Get rid of the nan
        all_usage_types = list(x for x in d['UsageType'].unique() if type(x) == str)
        d['usage_type_group'] = ''

        # Simple group assignment using substring
        usage_groups = ['DataTransfer', 'Requests', 'In-Bytes', 'Out-Bytes', 'BoxUsage']
        for usage_type in all_usage_types:
            for usage_group in usage_groups:
                if usage_group in usage_type:
                    d.usage_type_group[ d['UsageType'] == usage_type ] = usage_group
                continue

    def add_instance_type(self):
        d = self.d
        # Extract from usage type which will be like "APS1-BoxUsage:c4.large"
        all_usage_types = list(x for x in d['UsageType'].unique() if type(x) == str)
        d['instance_type'] = ''

        for usage_type in all_usage_types:
            if 'BoxUsage' in usage_type:
                instance_type = usage_type.split(':')[-1]
                d.instance_type[ d['UsageType'] == usage_type ] = instance_type
{% endhighlight python %}

As one can see the outer for loop is shared but the inner logic is different. If all I cared about was efficiency I’d be able to combine the two functions but then I’d lose the separation of concerns. I can also rewrite the code to be more functional and have a single method that takes a list of functions to apply as arguments but that would but in this case would look messy. I wish I didn’t have to sacrifice efficiency for expressiveness and would love a language that was smart enough to handle this sort of optimization. The JVM does a series of optimizations as it runs so it may come close but I wonder if there’s any language that can do this optimization at compile time.

I was also a bit curious about this issue and wrote a toy [Python script](https://github.com/dangoldin/code-samples/blob/master/iteration_filter_testing.py) to compare the various implementations of a simple for loop filter. The data reinforces this conflict between efficiency and expressiveness. The script generates a random integer array and then filters it down to two smaller arrays - one for numbers divisible by 100 and one for numbers divisible by 200. The naive way is to do a single for loop and then have if statements for each condition but the slightly improved version is to realize that 200 is a multiple of 100 and one can nest that check. The more Pythonic way of doing these is through a list comprehension and I gave that shot as well. The last attempt was even more functional and do the exercise using a filter/lambda combination.

{% highlight python %}
#! /usr/bin/env python

import random
import timeit

TEST_LIST_SIZE = 100000
NUM_ITERATIONS = 1000

def generate_random_list(size):
    return random.sample(xrange(size), size)

def naive_simple(l):
    a = []
    b = []
    for i in l:
        if i % 100 == 0:
            a.append(i)
        if i % 200 == 0:
            b.append(i)
    return a, b

def naive_smart(l):
    a = []
    b = []
    for i in l:
        if i % 100 == 0:
            a.append(i)
            if i % 200 == 0:
                b.append(i)
    return a, b

def filter_single(l, n):
    return [i for i in l if i % n == 0]

def filter_multiple(l, list_n):
    return [
        [i for i in l if i % n == 0] for n in list_n
    ]

def filter_lambda_single(l, n):
    return filter(lambda x: x % n == 0, l)

def naive_simple_test():
    l = generate_random_list(TEST_LIST_SIZE)
    a, b = naive_simple(l)

def naive_smart_test():
    l = generate_random_list(TEST_LIST_SIZE)
    a1, b1 = naive_smart(l)

def filter_single_test():
    l = generate_random_list(TEST_LIST_SIZE)
    a2, b2 = filter_single(l, 100), filter_single(l, 200)

def filter_multiple_test():
    l = generate_random_list(TEST_LIST_SIZE)
    a3, b3 = filter_multiple(l, [100,200])

def filter_lambda_single_test():
    l = generate_random_list(TEST_LIST_SIZE)
    a4, b4 = filter_lambda_single(l, 100), filter_lambda_single(l, 200)

if __name__ == '__main__':
    l = generate_random_list(TEST_LIST_SIZE)

    a, b = naive_simple(l)

    a1, b1 = naive_smart(l)

    a2, b2 = filter_single(l, 100), filter_single(l, 200)

    a3, b3 = filter_multiple(l, [100,200])

    a4, b4 = filter_lambda_single(l, 100), filter_lambda_single(l, 200)

    print 'Comparison tests'
    print a == a1
    print b == b1

    print a1 == a2
    print b1 == b2

    print a2 == a3
    print b2 == b3

    print a3 == a4
    print b3 == b4

    print 'Timing tests'
    print 'Array generation', timeit.timeit('generate_random_list(TEST_LIST_SIZE)', 'from __main__ import generate_random_list, TEST_LIST_SIZE', number=NUM_ITERATIONS)
    print 'Naive simple', timeit.timeit('naive_simple_test()', 'from __main__ import naive_simple_test', number=NUM_ITERATIONS)
    print 'Naive smart', timeit.timeit('naive_smart_test()', 'from __main__ import naive_smart_test', number=NUM_ITERATIONS)
    print 'Filter single', timeit.timeit('filter_single_test()', 'from __main__ import filter_single_test', number=NUM_ITERATIONS)
    print 'Filter multiple', timeit.timeit('filter_multiple_test()', 'from __main__ import filter_multiple_test', number=NUM_ITERATIONS)
    print 'Filter lambda single', timeit.timeit('filter_lambda_single_test()', 'from __main__ import filter_lambda_single_test', number=NUM_ITERATIONS)
{% endhighlight python %}

The benchmarks are below and the results are intuitive. The quickest implementation was the single for loop with the nested if conditions and the slowest was the filter/lambda approach. Surprisingly, the other approaches were similar despite the single naive for loop only iterating over the array once while the list comprehensions iterating over the array twice. If we increase the size of the array we do see a bigger benefit coming from the single pass over the array.

#### Array size: 10,000; Iterations: 10,000

|Implementation|Time (sec)|
|---|---|
|Array generation | 56.21|
|Naive simple | 73.51|
|Naive smart | 64.11|
|Filter single | 71.92|
|Filter multiple | 71.19|
|Filter lambda single | 91.34|


#### Array size: 100,000; Iterations: 1,000

|Implementation|Time (sec)|
|---|---|
|Array generation | 63.96|
|Naive simple | 78.74|
|Naive smart | 71.13|
|Filter single | 82.19|
|Filter multiple | 81.86|
|Filter lambda single | 109.44|
