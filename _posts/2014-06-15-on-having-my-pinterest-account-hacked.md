---
layout: post
title: "On having my Pinterest account hacked"
description: "I recently had my Pinterest account hacked which led to a bunch of spam tweets on Twitter."
keywords: "pinterest, twitter, security"
image_url:
category:
tags: ["#meta"]
---
{% include setup %}
Earlier today a I got a message on Twitter letting know that my Twitter account was hacked. Sure enough when I looked at my tweet history I saw a slew of weight loss tweets linking to a Pinterest pin. Turns out that my Pinterest account was compromised and since it was connected to Twitter every time someone pinned a weight loss link it got shared on Twitter.

The fix was simple - block the Pinterest app from within Twitter, disconnect Twitter from within Pinterest, and reset my Pinterest password. Unfortunately, none of these can be done via the apps nor the mobile sites. Instead, both provide a minimal settings page with no clear way of accessing the complete settings. Since I wasn't near a computer, I had to use the Twitter app to delete the spam tweets that were being posted a few times each hour.

This is a frustrating design pattern. Sites and apps should default to a mobile optimized experience but if any functionality is missing they should allow users to fall back to the web view. Arguably, that option should always be available since a user may have a specific flow in mind and shouldn't be forced to learn a new approach - especially if something's urgent. In my case, this wasn't that huge of a deal but I can see how it could have been.

The other lesson is that in this world of interconnected apps you're only as strong as the weakest app. Twitter followers don't care why they're seeing spam and having TFA enabled on Twitter won't help you if another account is compromised.