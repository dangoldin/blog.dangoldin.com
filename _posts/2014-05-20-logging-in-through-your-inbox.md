---
layout: post
title: "Logging in through your inbox"
description: "MixPanel sends an email to login to your account after a few failed login attempts. I wonder if the approach of being able to login solely through an inbox would work"
keywords: "security, mixpanel, logging in, design patterns"
image_url: "/assets/static/images/mixpanel-failed-login-email.png"
category:
tags: ["#product", "#design"]
---
{% include setup %}
MixPanel has a clever way of handling failed login attempts. Instead of locking the user out of the account or forcing a password reset they send an email with two links - one to log in to the account directly and another to reset the password. I don’t recall ever seeing this approach before and wish more sites started doing it. This approach also obviates the need to even have a password - a site can just send a “login link” for an entered email address and the user can login via their inbox. This is similar to the way we login via the various social networks but instead of being sent to a social network for confirmation we are sent to our inbox. The only friction is having to go to your inbox to click on the link but since most people keep their inboxes open all day I don’t see this as a huge problem. The other advantage is security - most people use the same password across multiple sites so if one is compromised the others become vulnerable. Under this approach each site will have its own security controls and it becomes impossible for one site’s shoddy security to affect another’s. This is probably too drastic of a change for most users but I’d love to see sites start embracing this model.

<img src="{{ IMG_PATH }}mixpanel-failed-login-email.png" alt="Mixpanel email for failed login attempts"/>