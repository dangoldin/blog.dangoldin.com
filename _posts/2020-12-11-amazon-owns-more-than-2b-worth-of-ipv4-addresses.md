---
layout: post
title: "Amazon owns more than $2B worth of IPV4 addresses"
description: "Amazon owns almost 110M IPV4 addresses. At the lower end of the market price this is over $2B."
keywords: "aws, amazon, ipv4, ip addresses"
image_url: 
category: 
tags: ["#code", "#aws"]
---
{% include setup %}
While listening to a [podcast discussing BGP](https://softwareengineeringdaily.com/2020/12/02/bgp-with-andree-toonk/) I heard the fact that AWS owns more than $2B worth of IP addresses. I knew AWS was massive but this came as a big shock so I decided to do some digging around. I came across a [site](https://ipv4marketgroup.com/ipv4-pricing/) that listed the market prices of IP addresses and the range looks to be anywhere from $20 to $30 per IP depending on the block size. Now it was time to figure out the IP addresses owned by Amazon. I figured this would be difficult but lucky for us AWS actually [publishes](https://ip-ranges.amazonaws.com/ip-ranges.json) their entire set of IP addresses as JSON.

The work is simply to download the JSON and then convert the CIDR blocks to the number of IPs and add them all up. As of today, December 11, 2020 AWS self reports owning 109,847,486 IPV4 addresses - at a price of $20 this is almost $2.2B and at $30 it's almost $3.3B. That's wild.

{% highlight python %}
import urllib.request
import json

with urllib.request.urlopen(' https://ip-ranges.amazonaws.com/ip-ranges.json') as f:
    j = json.loads(f.read().decode('utf-8'))

print('All keys', j.keys())

print('IPV4 prefixes', len(j['prefixes']))

ips = 0
for prefix in j['prefixes']:
    cidr = int(prefix['ip_prefix'].split('/')[1])
    ips += 2**(32-cidr)

print('# IPS', ips)
{% endhighlight %}