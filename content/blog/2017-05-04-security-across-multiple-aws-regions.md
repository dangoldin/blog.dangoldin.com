---
date: "2017-05-04T00:00:00Z"
description: Amazon has a great concept with VPCs but unfortunately they don't work
  across regions. There's a simple workaround here that allows you to secure your
  cross region communication.
meta_img: null
keywords: aws, security groups, virtual private clouds, cross regions, vpc
tags:
- 'devops'
- 'code'
title: Security across multiple AWS regions
---

As great as AWS is there’s still a major gap in the way cross-region support are handled. It’s boggling that there’s no single screen to see every one of your instances and you’re forced to do it a region at a time. Beyond the cosmetic it’s not-obvious how to get instances from multiple regions to communicate securely with one another. On one hand Amazon has the neat concept of a Virtual Private Cloud (VPC) that allows you to create a group of machines that act as if they’re on the same network. This makes it simple come up with some pretty neat security rules - for example only allowing for an instance to communicate with the outside world via port 80 but with its network on other ports. Using a combination of VPCs and security groups one can come up with a pretty intricate security system.

Unfortunately this doesn’t work across regions. Instead, Amazon [suggests setting up a VPN](https://aws.amazon.com/answers/networking/aws-multiple-region-multi-vpc-connectivity/) that can bridge the two networks. This makes sense if you have a dedicated DevOps team and the scale necessary to support this but I was looking for a much simpler solution. All I wanted was to have a few instances (powered by OpsWorks) that were scattered across the world be able to communicate securely with the primary system that was hosted in the US East region. After a minor back and forth with the AWS support team we were able to come up with the following, somewhat elegant, solution. Note that I contributed minimally here and almost all the credit should go to AWS support.

The solution was to update the setup recipe of our instances outside the US East region to whitelist themselves on the relevant security group (code below). In theory it’s simple but there were a few small gotchas that needed to be handled:

- Deregistration. Since there’s a maximum number of rules that a security group may have it’s important to also add a shutdown recipe that removes the instance from the security group.
- Permissions. It turns out that every instance that starts up within OpsWorks has an IAM role which needs to be updated to support the AuthorizeSecurityGroupIngress and RevokeSecurityGroupIngress actions.
- Stack settings. While possible to hardcode the relevant ids and values into the OpsWorks recipe it makes a lot more sense to make this dynamic and driven by the Stack settings.

I wish Amazon supported VPCs that could span multiple regions but it turned out that this workaround wasn’t as difficult as I thought. There’s still the risk that this approach will fail when we hit the security group rule limit or the API calls fail but by then I’m hopeful there’s a legitimate solution.

{{< highlight ruby >}}
# Authorize
require 'aws-sdk'
ec2 = AWS::EC2::Client.new(region: 'us-east-1')
resp = ec2.authorize_security_group_ingress({
  group_id: 'sg-####',
  ip_permissions: [
    {
      ip_protocol: "tcp",
      from_port: 443,
      to_port: 443,
      ip_ranges: [
        {
          cidr_ip: "#{node["opsworks"]["instance"]["ip"]}/32",
        },
      ],
    },
  ],
})

# Revoke
require 'aws-sdk'
ec2 = AWS::EC2::Client.new(region: 'us-east-1')
resp = ec2.revoke_security_group_ingress({
  group_id: 'sg-####',
  ip_permissions: [
    {
      ip_protocol: "tcp",
      from_port: 443,
      to_port: 443,
      ip_ranges: [
        {
          cidr_ip: "#{node["opsworks"]["instance"]["ip"]}/32",
        },
      ],
    },
  ],
})
{{< / highlight >}}
