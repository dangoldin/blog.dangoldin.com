---
layout: post
title: "Analyzing AWS ELB logs"
description: "You can get a ton of useful information about your web application by loading the ELB logs into Redshift and running some queries."
keywords: "aws elb logs, redshift"
image_url:
category:
tags: ["#code", "#sql"]
---
{% include setup %}
Logging HTTP requests should be enabled for every application you run. When things go wrong, and they will, it’s often the first step to understand the problem. Unfortunately, logging isn’t always top of mind and is often forgotten. Luckily, if you use the Elastic Load Balancer (ELB) functionality within AWS you’re able to set up ELB logs that track every request and write it to an S3 bucket. The documentation is up on the [Amazon site](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/access-log-collection.html
) but there’s a surprising amount of information that’s hidden away in the logs. Since it’s Amazon and they want to make it as easy for you to use their various services together it’s simple to load the logs into Redshift and start digging into them via some basic queries.

I wanted to highlight a few I used in the past couple of weeks to dig into an issue. Despite having a centralized logging system I still find it easier to just write SQL queries - it’s significantly more expressive than any log exploration tool I’ve used and allows me to exactly what I without any magic.

{% highlight sql %}
-- Load the data into Redshift
copy elb_logs
from 's3://logdirs/.../us-east-1/2018/02/19/'
COMPUPDATE OFF CREDENTIALS 'aws_access_key_id=KEY;aws_secret_access_key=SECRET'
delimiter ' '
TIMEFORMAT as 'auto'
ACCEPTINVCHARS
REMOVEQUOTES
FILLRECORD
MAXERROR as 100000;

-- Look at the distribution of ELB status codes
select elbresponsecode, count(1) as cnt
from elb_logs
group by elbresponsecode
order by elbresponsecode;

-- Look at the distribution of backend status codes
select backendresponsecode, count(1) as cnt
from elb_logs
group by backendresponsecode
order by backendresponsecode;

-- Look at distribution by both
select elbresponsecode, backendresponsecode, count(1) as cnt
from elb_logs
group by elbresponsecode, backendresponsecode
order by elbresponsecode;

-- Look at distribution by both where they're unequal
-- This highlights cases where the ELB was unable to reach the hosts
select elbresponsecode, backendresponsecode, count(1) as cnt
from elb_logs
where elbresponsecode != backendresponsecode
group by elbresponsecode, backendresponsecode
order by elbresponsecode;

-- A simple way to look at the request groups causing problems
select split_part(httprequest, '?', 1) as httprequestbase, count(1) as cnt
from elb_logs
where elbresponsecode >= 500
group by httprequestbase
order by cnt desc;

-- For fun, we can also look at the number of errors by minute to see if we can spot a pattern
select to_char(requesttime, 'YYYY-MM-DD HH24:MI') as datetime,
  sum(case when elbresponsecode = 500 then 1 else 0 end) as n500,
  sum(case when elbresponsecode = 501 then 1 else 0 end) as n501,
  sum(case when elbresponsecode = 502 then 1 else 0 end) as n502,
  sum(case when elbresponsecode = 503 then 1 else 0 end) as n503,
  sum(case when elbresponsecode = 504 then 1 else 0 end) as n504
from elb_logs
where elbresponsecode >= 500
group by datetime
order by datetime;
{% endhighlight sql %}
