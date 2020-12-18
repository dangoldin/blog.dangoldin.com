---
layout: post
title: "What do adtech and BGP have in common?"
description: ""
keywords: "Both BGP and adtech suffer from systems built around trust being manipulated by malicious actors. It's no surprise that they came up with similar solutions."
image_url: 
category: 
tags: ["#devops", "#product"]
---
{% include setup %}
Despite writing web applications many engineers are not familiar with the infrastructure side of the internet - [DNS](https://www.cloudflare.com/learning/dns/what-is-dns/), [BGP](https://www.cloudflare.com/learning/security/glossary/what-is-bgp/), TCP/IP - and yet depend on it all working. Over the years I've gotten a better understanding of the guts of the internet but only in the past few weeks have I discovered [Resource Public Key Infrastructure](https://en.wikipedia.org/wiki/Resource_Public_Key_Infrastructure) (RPKI) on top of BGP. RPKI is meant to add a layer of trust on top of the existing infrastructure which was designed many decades ago without worrying about malicious actors.

A simple way to view it is to imagine various entities broadcasting routes between IP addresses. So long as everyone is honest the system works and traffic is routed in near-optimal ways. But a malicious actor can broadcast incorrect routes which can then be naively followed. RPKI simply adds authority/trust to these broadcasts so routes cannot simply be hijacked.

This mirrors recent trends in adtech that aim to improve transparency and honesty - for example [sellers.json](https://iabtechlab.com/sellers-json/) and [ads.txt](https://iabtechlab.com/ads-txt/). Similar to RPKI they give the various players in the adtech ecosystem information around the legitimacy of what they're buying or selling. For example, a website will maintain an ads.txt file ([NY Times](https://www.nytimes.com/ads.txt) example) that lists legitimate sellers of their ad inventory and the way those ads are represented in the market. Similarly, an ad exchange will host a sellers.json file ([TripleLift](https://cdn.3lift.com/sellers.json) example) that contains the set of publishers that they represent. A buyer can reference both of these to confirm that the ad request they are seeing is legitimate.

Both BGP and adtech suffer from system that were built around trust so it shouldn't be surprising that they came up with similar solutions but it's yet another reminder of how connected the modern internet is.
