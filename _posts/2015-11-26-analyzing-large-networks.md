---
layout: post
title: "Analyzing large networks"
description: "I started a project with the hope of analyzing a bunch of Meerkat data but ran into issues dealing with the size and scope of the network."
keywords:
image_url:
category:
tags: ["#data"]
---
{% include JB/setup %}
While going through some old repos I came across an old [project](https://github.com/dangoldin/meerkat-crawl) I started to analyze the Meerkat network. The idea was to crawl the network and come up with a list of users as well as who they were following and who they were followed by in order to then analyze the network. The crawling was pretty easy to do and after running it over a weekend without any parallelization or threading I was able to get around 200,000 user profiles with a little over 4 million network connections. The challenge became actually analyzing this data to derive something useful. I tried a few tools - including [Gephi](http://gephi.github.io/), [Cytoscape](http://www.cytoscape.org/), and [NetworkX](https://networkx.github.io/) - but was unable to get anything more useful than a few simple summary stats. I was hoping to get a neat visualization of clusters to see the various cliques on the network but visualizing that data either broke the programs or took too long to even complete. I made the most progress when using a simple script to filter out the “tail” of the data which allowed the remaining data to be visualized but I felt that the filtration may have eliminated a bunch of interesting information. If anyone has some experience dealing with the analysis of large networks I’d love to hear some ideas.
