---
layout: post
title: "A Telegram blog bot"
description: "Given the hubbub around bots I decided to write a super simple one that works with Telegram and responds with random blog posts."
keywords: "telegram, bot, messaging, let's encrypt"
image_url:
category:
tags: ["#code"]
---
{% include JB/setup %}
A combination of bots being in vogue and Telegram offering $1M in [bot prizes](https://telegram.org/blog/botprize) got me to spend a little bit of time writing a bot last week. To get my feet wet I created a simple, self-serving bot that would reply with a random blog post when sent a /blogme command. The code itself is extremely straightforward and most of the time was spent going through the Telegram bot docs and getting the deployment and HTTPS setup. A nice feature that Telegram has is the ability to write a bot that can respond to both polling and webhooks. The polling approach is a much trivial to get started with since you don’t need to worry about any of the devops work and can work on the core interaction. The cons are that it won’t respond immediately and you need a way to track messages your bot has already replied to. Changing it to a webhook provided real time responses but made it a bit more difficult to test and wrapping everything inside a minimal web framework. The biggest hiccup was the requirement of HTTPS for a webhook integration but [Let’s Encrypt](https://letsencrypt.org/) made it simple to get up and running. A year ago I wouldn’t have bothered prototyping anything that required HTTPS but these days it’s incredibly easy to set up. The [code is up](https://github.com/dangoldin/bots) on GitHub and if you’re interested in bots definitely take a look. And if you have Telegram installed try messaging “danblog” with /blogme to get a random blog post.
