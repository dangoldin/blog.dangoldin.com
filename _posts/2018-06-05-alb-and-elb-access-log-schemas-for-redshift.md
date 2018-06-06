---
layout: post
title: "ALB and ELB access log schemas for Redshift"
description: "It's very handy being able to analyze ELB access logs in Redshift but unfortunately it's not clear what the schema should be. The post shares the schema necessary to load the access log data."
keywords: "redshift, aws, load balancer, elb, alb, elastic, application"
image_url:
category:
tags: ["#code"]
---
{% include setup %}
Back in February I [wrote](2018/02/20/analyzing-aws-elb-logs/) about using Redshift to quickly analyze ELB access logs. This worked great until we switched from using ELBs to using ALBs. Unsurprisingly in hindsight but frustrating at the time the ALBs have a different log schema. Both the [Classic](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/access-log-collection.html) and [Application](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html) Load Balancer logs are well documented on the AWS site but unfortunately the code to create the appropriate Redshift schema is not. In the hope of helping others and passing it forward I wanted to share the Redshift schemas for both types of access logs.

{% highlight sql %}
-- ELB Logs
create table elb_logs (
	requesttime timestamp,
	elbname varchar(100),
	requestip_port varchar(22),
	backendip_port varchar(22),
	requestprocessingtime double precision encode bytedict,
	backendprocessingtime double precision encode bytedict,
	clientresponsetime double precision encode bytedict,
	elbresponsecode varchar(3),
	backendresponsecode varchar(3),
	receivedbytes bigint,
	sentbytes bigint,
	httprequest varchar(5083),
	useragent varchar(500),
	ssl_cipher varchar(40),
	ssl_protocol varchar(40)
)
sortkey(requesttime);

-- ALB Logs
CREATE TABLE alb_logs (
 type varchar(10),
 requesttime timestamp,
 elb varchar(100),
 client_and_port varchar(24),
 target_and_port varchar(24),
 request_processing_time double precision encode bytedict,
 target_processing_time double precision encode bytedict,
 response_processing_time double precision encode bytedict,
 elb_status_code varchar(3),
 target_status_code varchar(3),
 received_bytes bigint,
 sent_bytes bigint,
 request varchar(5000),
 user_agent varchar(500),
 ssl_cipher varchar(500),
 ssl_protocol varchar(100),
 target_group_arn varchar(100),
 trace_id varchar(100),
 domain_name varchar(100),
 chosen_cert_arn varchar(100),
 matched_rule_priority varchar(10),
 request_creation_time timestamp,
 actions_executed varchar(100)
 ) sortkey(requesttime);
 {% endhighlight %}
