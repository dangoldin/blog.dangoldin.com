---
date: "2017-07-28T00:00:00Z"
description: I pulled my meeting history over the past 4 years and visualized it to
  look at the trends.
meta_img: /image/num-meetings.png
keywords: meetings, data visualization
tags:
- 'dataviz'
- 'code'
title: Visualizing my meetings over time
---

As part of never ending goal to improve my efficiency I was curious to understand how my meeting habits have evolved over time. I had an old script that would [identify meeting room hogs](http://dangoldin.com/2016/10/01/shaming-meeting-room-hogs/) and [repurposed it](https://github.com/dangoldin/gcal-shaming/blob/master/meeting_duration_growth.py) to just download every one of my calendar events from when I joined TripleLift and another small script to [analyze](https://github.com/dangoldin/gcal-shaming/blob/master/analyze.py) this data. Two things I had to filter out were multi day events which were tended to be vacations and events with me as the only attendee which were my reminders and todos. Unsurprisingly, there was a pretty large increase over time as we grew from a scrappy startup of 15 people to one with over 150 and as my role evolved from an individual contributor to a manager and then to the head of the engineering team.

<ul class="thumbnails">
  <li>
    <div class="thumbnail">
      <img src="/image/attendees-per-meeting.png" alt="" data-width="1654" data-height="927" data-layout="responsive" />
      <p class="caption">Clear growth in the number of meetings I have on my calendar with a pleasant dip in the holiday season.</p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <img src="/image/attendees-per-meeting.png" alt="" data-width="1654" data-height="927" data-layout="responsive" />
      <p class="caption">Sure enough the increase in meetings also led to an increase in the number of meeting hours.</p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <img src="/image/attendees-per-meeting.png" alt="" data-width="1654" data-height="927" data-layout="responsive" />
      <p class="caption">I was curious to see whether the number of people in my meetings changed and this shows a worrying trend upwards.</p>
    </div>
  </li>
</ul>
