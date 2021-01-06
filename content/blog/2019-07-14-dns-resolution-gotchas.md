---
date: "2019-07-14T00:00:00Z"
description: We ran into an issue a few months ago that highlighted an unexpected
  behavior in DNS resolution and taught us a lesson.
meta_img: null
keywords: DNS, domain name servers
tags:
- 'devops'
title: DNS resolution gotchas
---

A few months ago we ran a pretty complex migration from AWS Route 53 to NS1 and ran into a few gotchas that I wanted to share. On the surface, DNS seems simple: you associate subdomains to specific records and then rely on the DNS provider to handle that resolution.

The nuance occurs when you have a deeper structure where it takes a few steps to get to the final IP address. This is fairly common if you want to do DNS resolution based on the geography of the user. As an example, if I have a single site, www.dangoldin.com, I can use AWS Route 53 to create multiple records, each for a specific geographic region containing dedicated servers. In this case, I can set it up so that users from Europe end up with the record www-eu.dangoldin.com while users in North America end up with www-na.dangoldin.com. It's still up to me to then have another resolution to map these regional records to the final locations but this allows the DNS resolution to be a bit more granular.

The trap we fell into was assuming that the resolution would be sticky. We thought that if Route53 was going to be used for the original lookup (www.dangoldin.com) we did not have to worry about NS1 being used for subsequent lookups. This was true most of the time but unfortunately not all the time. As part of the migrations we made some optimizations in our record hierarchy which caused the two systems to have a differing set of records. They were internally consistent but if some resolutions bled from Route53 to NS1 and vice versa they would end up unresolved.

Using the previous example (www.dangoldin.com), imagine we had www-na and www-eu in Route53 but decided to split www-na into www-useast and www-uswest in NS1. The problem would occur if the first request was to Route53 which would resolve with www-na but the second request tried to resolve www-na in NS1 since that record was not present. The same thing would have happened if we tried to resolve www-useast or www-uswest in Route53.

This was a gnarly problem and difficult to diagnose and catch since the issue manifested itself before the request even made it to our servers. In fact, we caught it by noticing that our traffic was lower than expected.

The takeaway here is that DNS is incredibly important, difficult to test and monitor, and if you ever switch your DNS providers to keep them in alignment until you're sure all of the traffic has shifted over.
