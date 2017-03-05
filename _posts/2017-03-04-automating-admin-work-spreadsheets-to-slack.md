---
layout: post
title: "Automating admin work: Spreadsheets to Slack"
description: "I wrote a simple script that takes an 'On-Call' calendar in a Google Spreadsheet and posts the current week's schedule to Slack."
keywords: "code, management, automation, google spreadsheets, slack"
image_url:
category:
tags: ["#code", "#management"]
---
{% include setup %}
Recently we adopted the concept of owning your own up time for our engineering teams. The goal is to encourage a stronger sense of ownership and actually give the teams the autonomy to approach their development and release process the way they’re comfortable with. Before this we relied on a single on call every week that would be responsible for monitoring all issues and escalating them to the appropriate team. One minor side effect of this change was that I now had to manage the on call calendar and post the new rotation on Slack every week. Since this was a good opportunity to mess around with the Google Spreadsheet and Slack APIs I decided it good be a fun little project.

The spreadsheet has a set of columns with a header - the important ones being a “Current” column indicating whether this is the current week and driven by a spreadsheet formula and a set of columns indicating the on call for that particular team. All the script needs to do is find the “current” row and generate a Slack message highlighting the on call engineer for each team.

Turns out the code was ridiculously easy to write. The [gspread](https://github.com/burnash/gspread) Python library provides a very simple way of reading a Google Spreadsheet and all I need from Slack is a way to pull the list of users (which I could have just kept in the Spreadsheet) and post a message. The code is [up on GitHub](https://github.com/dangoldin/gsheet-slack) and I hope to expand it to handle more of the standard admin work given how easy it was to get this working.
