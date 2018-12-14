---
layout: post
title: "Counting the number of lines of code in a GitHub account"
description: "It's surprisingly difficult to count the total number of lines in a GitHub account but using a few shell commands, open source libraries, and Python it's not too bad."
keywords: "git, lines of code, shell script"
image_url:
category:
tags: ["#code"]
---
{% include setup %}
It’s surprisingly difficult to count the number of lines of code in a GitHub account. One day I’d like to come up with a fully automated solution but in the meantime I’ve come up with a workaround that gets me what I need.

1. Follow the steps in the following [Stack Overflow](https://stackoverflow.com/a/29012789) answer to create your own command, cloc-git, that fetches a repo and runs another utility, [cloc](https://github.com/AlDanial/cloc), that counts the number of lines in a git repo.
2. Get all your repos into a single file, one per line.
3. Bulk edit the file to have each line be an invocation of the clock-git command and save them all to a single file. For example, a single line of the file should be of the format: cloc-git git@github.com:dangoldin/dangoldin-blog.git
4. In the command line simply execute the file and pipe into an output file, for example sh loc.sh > lines-of-code
5. Once the previous step succeeds you’ll have a single text file with the output of the cloc-git command for every specified repo but the formatting is not the easiest to follow.
6. Run a simple grep command to get every line containing the SUM line: grep “SUM” lines-of-code and save this to the clipboard
7. Unfortunately the spacing is all off so you can’t use the cut command to do a split via the shell so you have to use a simple programming language. I used python and just dumped the contents into a single variable and ran the following command to split it into lines and then retrieve the last value when splitting by a space.
8. Once you have these values just do a simple sum to get the total number of lines.

It’s not very simple and forces you to use a variety of tools to get to the final result, ranging from reading Stack Overflow documentation to some shell commands to some Python scripting. It’s a good example of where having enough breadth of knowledge and experience with a variety of tools turns a hairy problem into one that can be solved relatively quickly. It’s not a perfect solution but for a one-off I’m happy with the results.
