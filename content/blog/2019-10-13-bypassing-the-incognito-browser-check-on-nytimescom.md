---
date: "2019-10-13T00:00:00Z"
description: The NY Times recently introduced a check to prevent incognito users from
  accessing their articles. It's a step in the right direction but possible to bypass
  using some of Chrome's request blocking functionality.
meta_img: /image/nytimes-incognito-check.png
keywords: ny times, privacy, subscriptions
tags:
- 'meta'
title: Bypassing the incognito browser check on nytimes.com
---


<img src="/image/nytimes-incognito-check.png" alt="The NY Times incognito check message" data-width="510" data-height="335" data-layout="responsive" />

For as long as the NY Times had a free article limit you were able to bypass it using incognito mode but it seems this is no longer the case. Earlier today I tried checking out [an article](https://www.nytimes.com/2019/10/13/nyregion/14th-street-cars-banned.html) in incognito mode and received a prompt to "Log in or create a free New York Times account to continue reading in private mode." The loophole was fun while it lasted and glad they finally patched it up - despite the fact that I no longer have unlimited articles.

I was a bit curious to see how this was implemented and it turns out that this logic is served in the JavaScript loaded for every article page rather than relying on a standalone script. Chrome has a pretty nice ability to block requests to specific URLs or domains and blocking the request to that story's JavaScript ( https://www.nytimes.com/vi-assets/static-assets/story-b62c89165cd61167dc0c.js) prevented the prompt from showing up. It's likely this heavy-handed approach blocked a chunk of the site's functionality but my goal was to see what I can do to bypass the incognito check.

It's nice to know that it's technically possible to bypass this incognito check but it's not simple and has to be done separately for each site given the unique JavaScript URL. It's a step in the right direction and I'm glad they're finally taking this more seriously. To eliminate this vector they can have the incognito check in-lined into the initial page load but so long as it's done in JavaScript there will always be a workaround.
