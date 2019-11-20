---
layout: post
title: "SMS based password manager"
description: "To get my password manager working on mobile I set it up to work via SMS."
keywords: "password manager, sms, twilio"
image_url:
category:
tags: ["#code"]
---
{% include setup %}
Two Fridays ago I wrote about my [home-built password manager](http://dangoldin.com/2019/11/08/dyi-password-manager/) and while working well on a computer it was a pain to use on mobile. I've been trying to think of a more friendly way of supporting this on mobile and came up with the idea of retrieving the passwords via SMS. The workflow would be to send a text to a number with a search term and then get the password back as a response. Twilio made it surprisingly easy to build a simple proof of concept ([GitHub code](https://github.com/dangoldin/password-manager)) and the resulting code is fewer than 50 lines and supports the use case.

There's a fair amount of left to do - ranging from improving the error correction to dockerizing and deploying the code - but it works as is and I've been using it locally via [ngrok](https://ngrok.com). There are probably dozens of usability improvements I can make but the major one I noticed is that iOS doesn't allow me to highlight a section of a text message - only the entire thing. This means that I need to tweak the Twilio code to send the response line by line. This will be a tad more expensive but cheaper than using a paid password manager. The other question I'm still trying to work through is the security of SMS.
