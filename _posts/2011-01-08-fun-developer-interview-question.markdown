---
layout: post
title: "Tech Interview Question"
description: ""
category:
tags: []
date: 2011-01-08 19:05:28.000000000 -05:00
---
{% include JB/setup %}
When conducting interviews, I've developed the following criteria for a good interview problem:
<ul>
	<li>Avoid brain teasers - they tend to be hit/miss and some people don't really do well under this type of problem</li>
	<li>Challenging - the answer should not be immediately obvious and the should require some creativity</li>
	<li>Rare - similar to above, the problem should not be a common question in order to get</li>
	<li>Flexible - the problem has multiple solutions and can be modified on the fly for different skill levels</li>
</ul>
I've found that the following problem satisfies the criteria and gives a pretty good sense of a developer's skill level.

The problem starts of as a simple scenario:
<blockquote>You need to write a program that will accept a list of words. After the words are entered, the user will enter words and your program will need to indicate whether the entered word was in the original list. How would you design this program and what data structures would you use?</blockquote>
The typical answer to this question is to either store the initial word list in an array, a tree, or a hash. If it's an array or a tree, we talk about the Big O of the solutions and compare that to just using a hash. At this point you can get a sense of whether the person you're interviewing understands basic data structures and knows the use cases of each one.

To dig deeper, I add a twist:
<blockquote>Now imagine you were transported back in time and it turns out your program uses too much memory and you can't keep track of every word. Do you have any alternative solutions?</blockquote>
The creative solutions start appearing here and you can get a pretty good sense of the problem solving skills. For example, a proposed solution at this point is to use word roots or repetitive letter combinations in a tree like structure to reduce the memory usage. We then talk about the algorithm that would need to be written and try to point out possible problems and see how they would be addressed.

And a final twist:
<blockquote>Let's say you still do not have enough memory and but you find out that you don't need to be correct all the time. Can you think of any solutions that can achieve this?</blockquote>
At this point, many people will try to come up with a heuristic or machine learning technique to try to identify words that resemble the words previously entered. We can then talk about both how to construct the algorithm as well as talk about the accuracy of the approach. It turns out that for these solutions it's difficult to quantify the trade off between error rate and space requirements.
<div class="zemanta-img" style="margin: 1em; display: block;">
<div><dl class="wp-caption alignright" style="width: 310px;"> <dt class="wp-caption-dt"><a href="http://commons.wikipedia.org/wiki/File:Bloom_filter.svg"><img title="Example of a Bloom filter" src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Bloom_filter.svg/300px-Bloom_filter.svg.png" alt="Example of a Bloom filter" width="300" height="108" /></a></dt> <dd class="wp-caption-dd zemanta-img-attribution" style="font-size: 0.8em;">Image via <a href="http://commons.wikipedia.org/wiki/File:Bloom_filter.svg">Wikipedia</a></dd> </dl></div>
</div>
At this point the concept of a Bloom Filter is brought up, either by me or by the person I'm talking to. If it's by me I go through the basic concepts (bit array, hash functions, probabilistic data structures) and can get a good sense of whether this is understood or I need to dig deeper. It's great when you can see the moment that someone "gets" the value of this data structure and knows immediately how to use it. At this point we discuss the trade off between the size of the bit array and the number of hash functions. If there's time, we'll work on deriving the relationship between the two as well as talk about where they can be used in the real world.

I wish I could remember how I came up with this problem - I think it stemmed from me encountering Bloom Filters for the first time as well as reading a few articles about spell checking and dictionaries.
<h6 class="zemanta-related-title" style="font-size: 1em;">Related articles</h6>
<ul class="zemanta-article-ul">
	<li class="zemanta-article-ul-li"><a href="http://en.wikipedia.org/wiki/Bloom_filter">Wikipedia: Bloom Filter</a> (wikipedia.org)</li>
	<li class="zemanta-article-ul-li"><a href="http://www.coolsnap.net/kevin/?p=13">Python Implementation</a> (www.coolsnap.net)</li>
</ul>
<div class="zemanta-pixie" style="margin-top: 10px; height: 15px;"><a class="zemanta-pixie-a" title="Enhanced by Zemanta" href="http://www.zemanta.com/"><img class="zemanta-pixie-img" style="border: none; float: right;" src="http://img.zemanta.com/zemified_e.png?x-id=e510f8c1-4c79-4381-8f87-9183acd37446" alt="Enhanced by Zemanta" /></a><span class="zem-script more-related pretty-attribution"><script src="http://static.zemanta.com/readside/loader.js" type="text/javascript"></script></span></div>
