---
date: "2016-10-23T00:00:00Z"
description: There's no way to avoid unsecure devices, especially as we move to the
  internet of things, and we need to figure a way to make our infrastructure more
  resilient. One way is to make our routes to the internet - routers and ISPs - more
  intelligent.
meta_img: null
keywords: DDOS, ISPs, router, interent of things, connected home
redirect_from: /2016/10/23/avoiding-future-ddos-attacks/
tags:
- 'society'
title: Preventing future DDOS attacks
---

After Friday’s DNS DDOS attack I’ve been thinking of approaches that could prevent this from happening in the future. In a perfect world every device would be up to date with the latest updates and it would be difficult to compromise anything that’s connected to the internet. Unfortunately, this is not the case and there’s an ever growing number of devices that are quickly hacked together and sold without any focus placed on security. Akamai did a [study that shows](https://www.wired.com/2016/10/akamai-finds-longtime-security-flaw-2-million-devices/) over 2 million internet connected devices have been compromised which allows them to be used to run DDOS attacks, very similar to the one that took down a big chunk of the internet on Friday. The challenge is that most owners both don’t know and don’t bother to do any security audits when setting up these devices and very likely never upgrade the firmware nor the software to make them more secure.

The solution is either to have much stronger regulation on what’s able to be sold to force manufacturers to secure their devices but I suspect this is a non starter - it’s tough to control the global world and there will always be incentives to deviate. A better solution would be one that assumes the internet will be filled with these malicious devices but can still handle them.

One idea is to make our routers smarter. They’re our homes’ gateway to the internet and improving the way they handle outbound traffic can reduce the impact these faulty devices have. Imagine them being smart enough to know the typical pattern of every connected device and throttle atypical traffic. Or have them serve as a both a cache and a throttler of DNS requests. The risk here is that the router itself becomes compromised or ends up accidentally rejecting valid traffic. I suspect most people have a router that was given to them by their ISP and ISPs have a strong incentive to keep their routers secure. And even if the router does get compromised we can push this sort of “smart throttling” unto the ISPs. In the case of the accidental throttling we’ll either need to deal with a small delay or provide the ability for a human to override the throttling - something that they would not unknowingly do to support a random device.

The solution here is to accept that we will always have bad actors and that we’ll never have total security. In that sort of world the network itself needs to be robust and resilient enough to handle whatever is thrown it’s way. Making the network more intelligent is one way but other ways include building in more resiliency into the protocol itself or making more and more of the internet distributed. This problem will only get worse as our entire homes connect to the internet and we need to find a solution before then.
