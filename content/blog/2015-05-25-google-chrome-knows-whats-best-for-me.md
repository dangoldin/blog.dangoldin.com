---
date: "2015-05-25T00:00:00Z"
description: The PSEG site isn't up to date with the latest HTTPS best practices so
  Google Chrome prevents me from accessing it. We'll see how this plays out.
meta_img: /image/chrome-pseg-security.png
keywords: chrome, https, security
tags:
- 'meta'
title: Google Chrome knows what's best for me
---

Earlier today I wanted to check up on my electricity bill but ran into an issue trying to login to my PSEG account. Turns out that my nightly version of Google Chrome is preventing me from logging into their site since it has a poor HTTPS configuration. Instead of seeing the login page I get the following message: “Server has a weak ephemeral Diffie-Hellman public key”. Luckily for me this only happened in the nightly build and I was able to login using both the nightly version of Firefox and the standard version of Chrome.

<div class="thumbnail">
  <img src="/image/chrome-pseg-security.png" alt="Chrome not letting me login to PSEG" data-width="661" data-height="541" data-layout="responsive" />
</div>

I wonder whether Google’s making the right decision here. What happens when they propagate these changes down to the standard versions of Chrome and countless people start having issues paying their bills. I understand that Google wants sites to upgrade their security but there will be a ton of disruption in the interim. Especially on sites people use to manage their lives. I’m just hoping that the sites that need to upgrade their security do so before Chrome updates itself.
