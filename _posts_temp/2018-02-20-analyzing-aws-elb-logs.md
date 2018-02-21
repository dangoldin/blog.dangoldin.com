---
layout: post
title: "Analyzing AWS ELB logs"
description: ""
keywords:
image_url:
category:
tags: []
---
{% include setup %}
There's a surprising amount of power hidden in the ELB logs. They're a simple way of analyzing your application and seeing where the bottlenecks are.

- loading the data into Redshift first
copy elb_logs
from 's3://logdirs/.../us-east-1/2018/02/15/'
COMPUPDATE OFF CREDENTIALS 'aws_access_key_id=;aws_secret_access_key=/vQlFvEhzn'
delimiter ' '
TIMEFORMAT as 'auto'
ACCEPTINVCHARS
REMOVEQUOTES
FILLRECORD
MAXERROR as 100000;

- group by elb status code
select elbresponsecode, count(1) as cnt
from elb_logs
where elbresponsecode>=500
group by elbresponsecode
order by elbresponsecode;

- group by backend status code
select backendresponsecode, count(1) as cnt
from elb_logs
group by backendresponsecode
order by backendresponsecode;

- group by both
select elbresponsecode, backendresponsecode, count(1) as cnt
from elb_logs
where elbresponsecode>=500
group by elbresponsecode, backendresponsecode
order by elbresponsecode;

- group by request
select split_part(httprequest, '?', 1) as httprequestbase, count(1) as cnt
from elb_logs
where elbresponsecode>502
group by httprequestbase
order by cnt desc;
