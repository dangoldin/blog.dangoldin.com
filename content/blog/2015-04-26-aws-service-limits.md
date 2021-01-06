---
date: "2015-04-26T00:00:00Z"
description: Using AWS to scale is great but make sure to be aware of your service
  limits or you might be caught unaware.
meta_img: /assets/static/imags/aws-ec2-launch-failure.png
keywords: aws, devops, service limits, cloud computing
tags:
- 'devops'
title: AWS service limits
---


<div class="thumbnail">
  <img src="/image/aws-ec2-launch-failure.png" alt="AWS EC2 launch failure due to service limits" data-width="960" data-height="182" data-layout="responsive" />
</div>

Something I haven’t seen mentioned much is that AWS has <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html" target="_blank">service limits</a>. The only way to find out that you’re hitting one is when an instance fails to launch with the error message “Your quota allows for 0 more running instance(s)” with a link to open a support ticket and request a higher limit.

This is a serious problem when you’re at the instance limit and depend on auto scaling for high loads. The instance limit prevents you from scaling to meet the demand and the only reasonable option is to file a support ticket and hope someone is able to get to it in time. The doomsday option is to temporarily shut down secondary or tertiary instances to make room for the critical ones.

I understand why Amazon chose to implement it but I wish they had better support around messaging when you’re close to the instance limit or whether your current setup can push you over. There’s nowhere in the UI where you can see the limit but luckily there’s a simple command to do it via the <a href="http://aws.amazon.com/cli/" target="_blank">command line interface</a> - aws ec2 describe-account-attributes --region=us-east-1.

If you’re running a quickly growing stack you should make sure to monitor your service limits so you’re not caught unaware. Also make sure to monitor the limits per region and within a VPC as they each have their own.
