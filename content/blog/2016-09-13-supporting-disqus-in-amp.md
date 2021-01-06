---
date: "2016-09-13T00:00:00Z"
description: AMP comes with a set of restrictions that make it difficult to get Disqus
  comments integrated. There's a pretty simple way of doing it using amp-iframe and
  S3.
meta_img: null
keywords: disqus, amp, iframe-amp
tags:
- 'code'
title: Supporting Disqus in AMP
---

After migrating my blog to AMP the last task was getting [Disqus](https://disqus.com/) working again. The crux of the issue is that in order to improve page performance AMP disallows blanket script tags (which the Disqus integration leverages) but to make up for it comes with a variety of helpers to include officially support functionality. Examples of this include an amp-youtube tag to include YouTube videos and the amp-vimeo tag to include Vimeo videos. As a generic solution, AMP provides the amp-iframe tag which allows you to include a restricted iframe.

Doing the research it turned out there was no out of the box solution but after a bunch of false starts I came across a great [post](https://labs.tomasino.org/disqus-in-amp) by [James Tomasino](https://twitter.com/mr_ino) where he ran into similar issue and came up with a workaround that was simply creating an additional HTML page for each post that contained the appropriate Disqus code which could then be included via the amp-iframe tag. Unfortunately this approach wouldn’t work in my case since amp-iframe requires HTTPS and my blog is solely HTTP due to being hosted on GitHub pages with a custom domain.

The workaround I came up with is to take the script James came up with and make a few tweaks to it that allow it to be hosted on an S3 bucket. I also wanted to avoid having to build an additional comment HTML page for each post for each new post and made a small change that allowed me to pass the relevant details as GET arguments into the comment iframe page. If you’re interested in the implementation, just take a look at the source of this page or check out [https://s3.amazonaws.com/dangoldin.com/amp-disqus.html](https://s3.amazonaws.com/dangoldin.com/amp-disqus.html).
