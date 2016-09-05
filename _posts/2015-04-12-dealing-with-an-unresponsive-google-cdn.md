---
layout: post
title: "Dealing with an unresponsive Google CDN"
description: "I had to deal with some requests off of Google's CDN taking close to a minute to succeed."
keywords: "google cdn, ajax.googleapis.com"
image_url: "/assets/static/images/slow-font-load.png"
category:
tags: ["#devops"]
---
{% include setup %}
I’m not sure whether this is a recent issue but earlier this week I started noticing that many HTTP requests to <a href="https://developers.google.com/speed/libraries/" target="_blank">Google's CDN</a> were taking close to a minute to complete. In particular, this blog would take almost a minute to render since it uses two fonts and an old version of jQuery both hosted by Google.

<div class="thumbnail">
  <img src="{{ IMG_PATH }}slow-font-load.png" alt="Fonts taking 45 seconds to load" />
</div>

After some investigation it turned out that the issue seemed to only happen on Chrome Canary (43.0.2351.3 canary (64-bit)) and even occured when visiting the URL directly. Neither standard Chrome, Firefox, Firefox nightly, nor a simple curl requested had this issue - it seemed to be a purely Chrome Canary issue.

I didn’t spend a ton of time investigating the root cause since it seemed to be browser specific but ended up implementing two simple solutions to deal with the problem. One was self-hosting jQuery (via GitHub pages) and the other was loading the fonts asynchronously using Google’s JavaScript implementation. This allows the content to load without having to wait for the fonts or jQuery to be available. This will occasionally cause a bit of a flicker as the text gets redrawn with the newly loaded font but I prefer this to have my site not load for nearly a minute.