---
layout: post
title: "Incognito mode: Chrome vs Safari"
description: "Modern browsers support incognito browsing but Chrome and Safari implement it differently."
keywords: "chrome, safari, incognito, privacy"
image_url:
category:
tags: ["#meta"]
---
{% include setup %}
To maintain some semblance of privacy I’ve been doing the majority of my searches in incognito mode. I normally use Chrome but a few days ago I had to do some browser testing in Safari and discovered that the two browsers handle incognito mode differently. Chrome’s incognito mode will share cookies across all incognito tabs - equivalent to running another instance of Chrome. Safari, on the other hand, will give each tab as its own cookie store.

This is pure speculation but Apple has been pushing the narrative that they care more about privacy than Google and this reinforces that view. Depending on the scenario either one can be considered less user friendly - Chrome if you truly do want each tab to be unique or Safari if you want the entire incognito session to act as a single browser - so it does seem as if it was just a product decision made by the respective teams. The behavior difference may even be explained by the name - it’s “incognito” in Chrome but “private” in Safari - and they actually do suggest different behaviors. I wonder if we’ll see a browser with support for both types.
