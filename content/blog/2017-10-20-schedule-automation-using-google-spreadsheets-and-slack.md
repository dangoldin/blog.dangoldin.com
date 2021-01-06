---
date: "2017-10-20T00:00:00Z"
description: I modified an old script that used a schedule in a Google spreadsheet
  to message users to work across multiple tabs and schedules by introducing a meta
  tab.
meta_img: null
keywords: google spreadsheet, slack, schedule, calendar, automation, management
tags:
- 'code'
title: Schedule automation using Google spreadsheets and Slack
---

Back in March I [wrote a script](http://dangoldin.com/2017/03/04/automating-admin-work-spreadsheets-to-slack/) that would go through an on-call calendar kept in a Google spreadsheet and then post the current week’s schedule to a Slack channel. This worked surprisingly well and I thought of doing something similar for the other engineering team calendars. In addition to the on call rotation, we have a dedicated time for internal tech talks as well as a session to cover the news in the industry. To make them easier to manage we keep them all in that same spreadsheet.

It would have been trivial to write a few more scripts for each type of calendar but I wanted something that could keep scaling to whatever new calendars we introduced. By looking at what’s consistent across each of the calendars - dates and people - we can come up with an approach that can scale to new calendars. My simple solution to this was to introduce a “meta” tab that contains guidance on how to interpret each of the calendar tabs. This includes specifying the date column, the column that will contain the names, and an optional message column. With this information it was straightforward to modify my existing script to accept this information as variables rather than being hardcoded to the structure of a specific spreadsheet.

Basically, [this version of the script](https://github.com/dangoldin/automating-management/blob/master/post_schedule.py) treats the Google spreadsheet as a simplified database. It’s able to read and understand what it needs to do yet the spreadsheet itself can be maintained and modified directly by people through the spreadsheet UI. I’m a fan of this hybrid approach and think there’s some really powerful things one can do with this. Spreadsheets are underrated in the tech world and can be leveraged for a variety of power-user cases. Rather than create super specific applications and UIs it might be worth exploring whether you can just build on top of a spreadsheet.
