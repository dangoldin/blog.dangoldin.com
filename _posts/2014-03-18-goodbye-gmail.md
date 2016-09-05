---
layout: post
title: "Goodbye Gmail"
description: "I moved away from Gmail to Fastmail and couldn't be happier. Gmail just got to be a big pain in the ass to use."
keywords: "fastmail, gmail"
image_url: "/assets/static/images/why-is-gmail.png"
category:
tags: ["#product"]
---
{% include setup %}

<img src="{{ IMG_PATH }}why-is-gmail.png" alt="Why is gmail so slow?" /> <br/>

Over the course of the past year I’ve become more and more pissed off at Gmail. I loved using Gmail when it launched - it made writing and reading email a pleasure. It was simple, clean, and responsive. Now it’s the opposite. All actions feel slow. The initial page load takes a substantial amount of time and then I get to wait for the various page elements to load - including a chat list that I’m almost never signed into and integration with a slew of other Google products. Loading emails or new tabs is noticeably slow and the search is sluggish for a company whose main product is a search engine.

This past weekend I decided to see what was out there and discovered <a href="https://www.fastmail.fm/" target="_blank">Fastmail</a>. I’ve been using over the past few days and it’s been great. Emails are quick to load and send and the navigation feels snappy and responsive. I’m not sure how well it will work as my inbox grows but so far I’m impressed. It feels like Gmail when it launched almost 10 years ago. It feels odd to describe it in terms of Gmail since I’m bashing it but I can’t think of a better way.

I did a quick anecdotal test by looking at the networks tab in Google chrome as each loaded. Gmail loaded in 6 seconds after making nearly 150 requests and retrieving 338 kb while Fastmail loaded in a little over 300 milliseconds after making 18 requests and retrieving 128 kb. Repeating this a few times showed similar results. Others seem to be having the same issue since Google’s first auto-suggestion is “why is gmail so slow” when typing in “why is gmail”. The switch is also much simpler than I expected - I just have Gmail forwarding everything to my Fastmail account and it’s completely transparent to the outside world. In the future I plan on migrating everything to use my new email address but for now this is a good intermediate step. I haven’t heard much from others moving away from Gmail so I’d love to hear your experiences if you made the switch.

<img src="{{ IMG_PATH }}gmail-load.png" alt="Gmail load times" />
<img src="{{ IMG_PATH }}fastmail-load.png" alt="Fastmail load times" />
