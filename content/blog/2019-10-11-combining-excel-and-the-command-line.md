---
date: "2019-10-11T00:00:00Z"
description: Excel and the command line have so much functionality when combined that
  they're perfect for one off tasks.
meta_img: null
keywords: excel, command line, productivity
tags:
- 'meta'
title: Combining Excel and the command line
---

I was lucky that my first job caused me to learn Excel. I was also lucky that subsequent jobs helped me discover the power of the command line. Combining both of these made me incredibly productive and are an amazing tool to have in your arsenal.

As engineers, we're paid for solving problems. While most software engineering problems require designing and building for the long term there's a whole category of problems that are just "throwaway work" and the goal is to get to a solution as quickly as possible and move on. Excel and the command line are designed for this.

Some of these problems are investigations. For example going through log files to parse out and understand what's happening. In that case you can write a few shell commands to do a quick job of filtering and cleaning the data - for example grep, cut, and sort - which can then be passed into Excel for deeper investigation or visualization.

Another common problem is needing to generate the same command multiple times that then needs to be executed. One use case is doing a few hundred database queries that all follow the same format. It's possible to do this via a script or in many cases the command line but I've found it to be easier to do in a spreadsheet. You get immediate feedback on whether your approach works and it's straightforward to then copy and paste it into whatever tool you need.

It's easy to fall into the trap of writing code to solve every problem but combining shell scripts and Excel combine to have a ton of built in functionality that they're perfect for many one off tasks.
