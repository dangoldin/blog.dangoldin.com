---
layout: post
title: "Investigating unresponsive ajax.googleapis.com"
description: "I had to deal with some requests off of Google's CDN taking close to a minute to succeed."
keywords: "google cdn, ajax.googleapis.com"
image_url: "/assets/static/images/slow-font-load.png"
category:
tags: ["#devops"]
---
{% include JB/setup %}
I’m not sure whether this is a recent issue but earlier this week I started noticing that every once in a while <a href="https://developers.google.com/speed/libraries/" target="_blank">ajax.googleapis.com</a> gets unresponsive with requests frequently taking close to a minute to complete. In particular, I started seeing a noticeable slowdown in the time it took to render this blog which uses two fonts and an older version of jQuery hosted via ajax.googleapis.com.

<div class="thumbnail">
  <img src="{{ IMG_PATH }}slow-font-load.png" alt="Fonts taking 45 seconds to load" />
</div>

After some investigation it turned out that the issue was only happening on Chrome Canary (43.0.2351.3 canary (64-bit)). In fact, the same issue occurred when visiting the URL directly. This was not a problem in standard Chrome, Firefox, nightly Firefox, nor via simple curl request - it seemed to be a purely Chrome Canary issue.

I didn’t spend a ton of time investigating the root cause but ended up implementing two simple solutions to deal with the problem. One was self-hosting jQuery (via GitHub pages) and the other was loading the fonts asynchronously using Google’s JavaScript implementation. This prevents the call from being blocking so even if it takes a long time the page still renders fine - it may just take a bit of time for the fonts to properly load. This may cause a bit of a flicker as the copy gets redrawn once the new font is loaded but I prefer this to have my site not load for nearly a minute.