---
layout: post
title: "Bulk geocoding tool"
description: "Just released a new JavaScript tool that geocodes a list of addresses."
keywords: "javascript, tools, csv to bootstrap table, bcg matrix, bulk geocoding"
image_url:
category:
tags: []
---
{% include JB/setup %}
Over the weekend I dug up an <a href="https://github.com/dangoldin/js-tools" target="_blank">old repository</a> I started to contain a running collection of <a href="http://dangoldin.com/js-tools/" target="_blank">JavaScript tools</a> to make my life easier. Ever since I created it it had two tools - one to convert CSV/TSV text into a bootstrap table and the other to generate a “BCG style” matrix. Earlier today I coded up another script - a quick way to geocode a list of addresses. All you have to do is enter a list of address you want geocoded, one per line, and the script will use the Google Maps API to geocode each one with the resulting latitude/longitude being written to an HTML table. If you have any other suggestions for a quick tool let me know.