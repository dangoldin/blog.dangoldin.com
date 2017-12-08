---
layout: post
title: "Jira analysis script"
description: "I have a small script that analyzes Jira in order to help measure squad and sprint efficiency."
keywords: "jira, developer efficiency, developer productivity"
image_url:
category:
tags: ["#code"]
---
{% include setup %}
A few days ago I [wrote](2017/12/01/measuring-sprint-efficiency/) about using average number of sprints to complete a story as a way to measure a team’s sprint efficiency. Unfortunately at that time I had a pretty hacky [Jira analysis script](https://github.com/dangoldin/automating-management/blob/master/jira-analysis.py) that I was too ashamed to share but it has been cleaned up enough for me to not feel too much guilt. It’s available on GitHub and comes with a few additional bells and whistles. One is specific to the way we work where we label relevant stories with a priority (priority:1, priority:2, etc) based on our planning process so we can hold ourselves accountable to spending the appropriate time on our initiatives. The other is a simple way that calculates the story points done by assignee. It’s a dangerous metric to use since story points are variable and not all work is measured via story points but it’s yet another metric that can help highlight or sharpen a potential issue.
