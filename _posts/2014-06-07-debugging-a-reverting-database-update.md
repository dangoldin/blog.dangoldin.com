---
layout: post
title: "Debugging a reverting database update"
description: "I ran into a weird bug today where a database record was updated but would sometimes revert back to older values. As with most Heisenbugs, this turned out to be a timing/concurrency issue."
keywords: "bugs, hacking, coding"
image_url: "/assets/static/images/debugging-reverting-db-update.png"
category:
tags: ["#code"]
---
{% include JB/setup %}
I ran into an odd bug today where a database entry was reverting itself after a seemingly simple update. For <a href="http://better404.com">Better404</a>, a customer can change the design of their 404 page but it turns out that every once in a while a change would go through but within a minute would revert back to the previous value. At the same time, update queries run directly via the MySQL client ran fine and were not being reverted - just the ones made through the site. To see what was going on, I enabled full query logging in MySQL (SET GLOBAL general_log = 'ON') and sure enough I saw a lagging query that would update the record to the prior values. Stepping through the code I was able to figure out the cause.

As with most <a href="https://en.wikipedia.org/wiki/Heisenbug" target="_blank">Heisenbugs</a>, it turned out to be a timing/concurrency issue. As part of a user updating their settings, we would kick off a job to crawl and index the modified domain. After running, the job would update the record with the newly crawled timestamp. Unfortunately, the other fields were updated as well and since this indexing job was kicked off before the record was updated, stale data was written to the database. After figuring out the cause, the fix is easy. One option is to kick off the indexing job after the database is updated with the new values so that the indexing job will use the new values. The second option is to modify the indexing job to only update the relevant fields. Both options were trivial to implement so I played it safe and did both. The first required changing the order of some lines and the second was just specifying an optional parameter to the Django model’s save method. Below’s a visual representation of what was happening and the two fixes.

<img src="{{ IMG_PATH }}debugging-reverting-db-update.png" alt="Debugging a reverting database update" />

Unfortunately, concurrency and timing bugs tend to be the most difficult ones to figure out but whenever there’s non deterministic behavior they should be at the top of the suspect list. It’s important to know the tools we’re using and their default behavior - it’s possible that the approach they take differs from how we think they work and becomes a major source of bugs and frustrated debugging efforts.