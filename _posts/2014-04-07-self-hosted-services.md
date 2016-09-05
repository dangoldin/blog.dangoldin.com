---
layout: post
title: "Self hosted services"
description: "Readmill announced that they were shutting down and it got me thinking about third party apps and what it would look like to host them locally."
keywords: "cloud, hosting, personal cloud"
image_url:
category:
tags: ["#product"]
---
{% include setup %}
It never bothered me when apps were acquired and shut down but the <a href="https://readmill.com/epilogue" target="_blank">Readmill news</a> hit me hard. It was one of the truly “free” ebook readers and never got in my way. It fit my behavior perfectly - I would download my books from wherever, drag them into the Readmill web app, and have them permanently accessible on my iPad after a quick sync.

My first reaction was wishing that it would be open sourced but that got me thinking about third party services. Numerous people have been saying how dangerous it is to rely on third party services but until Readmill it never really mattered to me. Sure, in the abstract it’s better to have everything hosted on your own but in reality it’s impossible to get to the same level of quality and experience for everything we use. We’re constantly balancing tradeoffs and we’re biased to favor the short term factors, such as ease of use and simplicity of set up, rather than long term ones, such as privacy, control, and data ownership.

I did some research on self hosting and came across <a href="http://sandstorm.io/" target="_blank">Sandstorm</a> - it’s pitched as a “personal cloud platform” and seems to be the solution to this reliance on third party apps. The idea behind it is that you have your own server and can download and install various cloud apps that will then have access to whatever data you give them. I’m eager to try this out. In the case of a Readmill replacement - I’d love to be able to host something on my own server to act as the backend and then download an iPad app that can connect to it. Both the iPad app and server can still be updated as new versions are rolled out but there’s no risk of the apps being shut down.

The business model would resemble Wordpress. The technology itself would be open source but if someone doesn’t want to run their own server they can pay to have their apps hosted somewhere else. There’s also room for a marketplace of premium or specialty apps that can be sold similar to the way themes and plugins are sold for Wordpress. People are already buying apps on the various app stores - it’s not a big leap to imagine people purchasing apps for their personal servers.