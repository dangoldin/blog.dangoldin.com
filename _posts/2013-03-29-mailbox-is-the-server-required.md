---
layout: post
title: "Mailbox: Is the server required?"
description: "Did the Mailbox app need to use a server or was it about marketing?"
keywords: "Mailbox, marketing"
image_url: "/assets/static/images/mailbox1.png"
category:
tags: ["#product"]
---
{% include JB/setup %}

<img src="{{ IMG_PATH }}mailbox1.png" alt="Mailbox" style="float:right;">

After a couple of weeks on the waiting list I finally got access to the Mailbox App. It’s a huge improvement over the standard mail app and my mobile email consumption habits have improved significantly. I’m still not at “inbox zero” but am making my way there.

I don’t know much about iOS development but one thing I’ve been wondering about is whether they could have written it to not use a remote server. Regarding scaling Mailbox, they <a href="http://www.mailboxapp.com/reservations/?p=1#were-ramping-up" target="_blank">wrote</a>:

<blockquote>A critical part of Mailbox scaling is its brand new infrastructure. Mailbox relies on servers in the cloud to do things like send push notifications, download email as fast as possible, and handle “snoozed” messages.</blockquote>

From reading developer docs, it does seem you need a server to do push notifications but I wonder if there’s a way to schedule notifications on the client side. Conceptually, there’s nothing the server needs to do that can’t be done client side via simple polling. This way, the server load becomes non existent and scaling issues are avoided. Even a hybrid approach could have worked: use the server approach when possible but fall back to polling if the servers are overwhelmed. I just can’t help but think that there must have been a way to have the same functionality client-side. The cynic in me wants to say that it was done to build up hype but it’s equally likely that I just don’t know iOS development. It seems odd that crippling an app would help with marketing. I hope that’s not what it takes to sell for $100M.