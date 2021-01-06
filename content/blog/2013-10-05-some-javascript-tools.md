---
date: "2013-10-05T00:00:00Z"
description: While blogging I had to deal with copying an Excel table into HTML and
  generating a BCG style growth-share matrix. Here are some tools I came up with that
  make it easier.
keywords: JavaScript, growth-share matrix, bcg matrix, html table
tags:
- 'javascript'
- 'code'
title: Some JavaScript Tools
---

Over the course of this year, I’ve been writing two posts a week and been running into various formatting/design issues, two of which I finally dealt with earlier this week. One was embedding an Excel table into a blog post and the other was creating a BCG style “growth-share” matrix.

To convert a table from Excel to HTML I would write Excel formulae that would wrap each cell in a &lt;td&gt; tag and then wrap each row in a &lt;tr&gt;tag. I’d then copy and paste the result into the text editor to add the header row and finish up the styling. To generate a growth-share matrix, I’d just use Google Drawing or Keynote to draw the axes and labels before taking a screenshot and cropping it into a square.

The solution to these was a bit of JavaScript with some help from <a href="http://stackoverflow.com/questions/1293147/javascript-code-to-parse-csv-data" target="_blank">StackOverflow</a>. These tools are hosted on <a href="https://github.com/dangoldin/js-tools" target="_blank">GitHub</a> and accessible via <a href="https://dangoldin.github.io/js-tools/">https://dangoldin.github.io/js-tools/</a> and are under the MIT License. As I run into more of these I'll keep on adding various tools to this list. If you have any suggestions or want to add your own let me know.