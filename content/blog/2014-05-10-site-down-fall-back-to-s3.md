---
date: "2014-05-10T00:00:00Z"
description: An idea to reduce costs and improve uptime is to use S3 for all static
  content and have a quick client side JS call to determine what to use when. Dynamic
  generation isn't always necessary.
meta_img: null
keywords: s3, scalability, javascript
tags:
- 'devops'
title: Site down? Fall back to S3
---

An approach to scaling sites that I haven’t seen used much is using S3 as much as possible and falling back to it in case the dynamic elements are either not needed or unavailable. Many sites will host their static assets on S3 but there’s a lot more that can be pushed that way.

Reddit gives logged out users <a href="http://highscalability.com/blog/2013/8/26/reddit-lessons-learned-from-mistakes-made-scaling-to-1-billi.html" target="_blank">cached content</a> rather than dynamically generating a page. That way logged in users get the full experience but logged out users may see a slightly out of date site. Content rich sites would benefit significantly from this approach - it would reduce cost and ensure uptime. If it turns out that the site does go down you can flip a switch and serve the cached/static content to everyone while the site is brought back up.

Current frameworks allow you to cache various elements of a page so they don’t need to be regenerated every time but they’re still dependent on the web server. If that goes down the page won’t be generated. An interesting idea might be to use client side JS to make a quick request to a server to see if it’s up and if not fall back to an HTML file on S3. I don’t know any sites that take this approach and would love to see some examples.