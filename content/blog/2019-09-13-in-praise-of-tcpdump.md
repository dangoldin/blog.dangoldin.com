---
date: "2019-09-13T00:00:00Z"
description: With the help of tcpdump we were able to find a rogue instance.
meta_img: null
keywords: tcpdump, aws, metrics, monitoring
tags:
- 'code'
title: In praise of tcpdump
---

We switched over to Prometheus and Grafana for our monitoring but some of our older systems are still on Graphite and StatsD. One of these is an alert for disk usage that started going off a few weeks ago. Over the course of the day it kept fluctuating from 100% disk usage to ~40% and whenever we dug into it we only saw the 40% number. Since StatsD is push based we assumed it was another instance that was submitting its metrics under the same key. Unfortunately, because StatsD is push based, it wasn't clear which instance was actually doing the conflicting metrics push.

After a few days of poking around we weren't any closer to solving the problem and wished there was something on our StatsD instance that could track the source of every metric submission. That's exactly what tcpdump does and after a bit of research we came up with the following command:

{{< highlight bash >}}sudo tcpdump -i eth0 udp port 8125 -vv -X > /tmp/tcpdump.tmp{{< / highlight >}}

This listens to all UDP traffic going into port 8125 and dumps it into a temp file. We kicked this off and after running it for a few hours we saw that there was, in fact, another instance sending this conflicting metric data. This led to a new problem as we were unable to find the instance in our account. After a bit of poking around, we discovered that we had a rogue instance in another account that was created while we were testing a provisioning script and was never deactivated. A relatively simple issue took us quite a bit of time to resolve and I'm not sure where we'd be without tcpdump.
