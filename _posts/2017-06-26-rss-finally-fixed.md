---
layout: post
title: "RSS finally fixed"
description: "I finally got AMP images working in RSS by not using GitHub Pages for Jekyll generation."
keywords: "github, amp, github pages, rss"
image_url:
category:
tags: ["#meta"]
---
{% include setup %}
Last week’s post highlighting my victory getting AMP working in RSS was a bit premature since it turns out my solution only worked locally. While being powered by Jekyll, GitHub Pages doesn’t support custom plugins which I was using to replace the “amp-img” tags with “img” when generating the XML feed. So while my approached worked when generating the blog locally it silently ignored my custom template tags when pushed to GitHub.

GitHub support was incredibly helpful here and provided me the exact steps I needed to get it working. Turns out that you can configure GitHub Pages to disable the Jekyll build and just serve content that’s within the “docs” folder of your repo. After adding the built directory to the repo and updating the settings everything’s working great.

Ironically, after reading Alex Kras’s [post on disabling AMP](https://www.alexkras.com/i-decided-to-disable-amp-on-my-site/) I’m tempted to do the same. The blog is pretty minimal and there’s no real reason for me to use AMP other than my curiosity. It’s significantly faster than what I had before but I’m sure if I take the time I can replace AMP with something much better and easier to maintain. But then all the wonderful hacks I had to do to get AMP working disappear.
