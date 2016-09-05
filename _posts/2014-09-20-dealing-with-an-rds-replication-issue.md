---
layout: post
title: "Dealing with an RDS replication issue"
description: "We ran into an RDS replication issue that I've never seen before."
keywords: "rds, aws, database, devops"
image_url:
category:
tags: ["#devops"]
---
{% include setup %}
Earlier this week we encountered an odd RDS issue that I’ve never seen before. An AWS hiccup caused a database replication query to fail which stopped the replication process. We discovered this the following day when we saw weird results during after running an analysis query. The nice thing was that this wasn't a huge deal since our production system relies on the master database but we did have to spend time dealing with this.

When we discovered this issue we did a few online searches to see how to resolve the issue and resume the replication. Turns out there's a command, "CALL mysql.rds_skip_repl_error", that will skip the current replication error and move on. In our case, the errors occurred when creating temporary table for a legacy job so we were able to skip it. Otherwise, we'd run the risk of breaking the sync between our master and replica databases.

Unfortunately, running this query once wasn't enough since the error keep on reappearing. After speaking with an AWS rep, we realized we could keep on running that command until we skipped past the replication errors. Another useful tip was to look at the ReplicaLag CloudWatch metric to see how far behind the replica database was from the master. In our case after going through a couple of dozen of these skip error calls replication resumed but the replica database was still more than a day behind.

While the replication caught up, we made a quick update to our scripts to point to our master database instead of replica so that our jobs would reference the correct data. After replication caught up we simply reverted this change.

To prevent this issue in the future, we're going to revisit the jobs that were using the temporary tables. We've also added a CloudWatch alert to notify us if replica gets too far behind. In a way we got lucky since these errors were recoverable. Without that we would have had to recreate the replica database which may have had a performance impact on our master database.