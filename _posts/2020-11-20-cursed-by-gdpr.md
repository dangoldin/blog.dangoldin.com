---
layout: post
title: "Cursed by GDPR"
description: "I got subscribed to a Domino's UK marketing email and due to GDPR was unable to unsubscribe."
keywords: "gdpr, email marketing, domino's, spam"
image_url: "/assets/static/images/dominos-pre-vpn.png"
category: 
tags: ["#meta"]
---
{% include setup %}
I had a fun little experience over the past few days. Someone had ordered Domino's in the UK and seemingly typed in my email address by accident. This gave me the privilege of receiving daily emails from Domino's promoting their latest deal. The first few days it was novel and interesting seeing what was popular across the pond but this morning I decided I might as well unsubscribe.

<amp-img src="{{ IMG_PATH }}dominos-pre-vpn.png" alt="Domino's marketing page without VPN" width="1297" height="185" layout="responsive"></amp-img>

Lo and behold the unsubscribe link didn't work. Rather than a web page I got a friendly server error indicating "Access Denied" and that I did not have permission to access the unsubscribe page. My suspicion that this was a result of Domino's blocking access to the site turned out to be true since I was able to unsubscribe using a VPN.

What a wild world. Rather than supporting a global unsubscribe Domino's has a geofenced site for the UK that just blocks access outside the country (just try going to https://www.dominos.co.uk/ outside the UK). I don't know what sort of anti-spam laws this violates (am I now [$43,280](https://www.ftc.gov/tips-advice/business-center/guidance/can-spam-act-compliance-guide-business) richer?) but it's ridiculous that I was not able to unsubscribe from Domino's email without resorting to a VPN.

The lesson here is that if you live outside the Uk and want to bother someone - sign them up for an account on the Domino's UK site.
