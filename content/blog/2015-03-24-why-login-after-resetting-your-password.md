---
date: "2015-03-24T00:00:00Z"
description: I can’t figure out why nearly every website forces you to login after
  resetting your password.
meta_img: null
keywords: design, ux, authentication, password, reset password, forgot password
tags:
- 'design'
- 'product'
title: Why login after resetting your password?
---

I can’t figure out why nearly every website forces you to login after resetting your password. It’s an extra step that adds nothing to security and introduces friction into the experience. The fact that I just entered my password into a form field should be enough to trigger the authentication flow and get me back into the app. The only reasons I can think of that it’s a way to confirm that the person actually remembers their new password or that the functionality just hasn’t been built. The former case doesn’t make sense - the fact that they forgot their password indicates they rarely use the site and will just forget it again by their next login attempt. It’s easier to just give them the immediate access and have them reset their password later. An even better approach would be to just have them enter the same password twice to make sure they match. The latter reason is just sloth - the engineering effort would be minimal and it would improve the experience and mood of the users who are already frustrated after multiple failed login attempts.