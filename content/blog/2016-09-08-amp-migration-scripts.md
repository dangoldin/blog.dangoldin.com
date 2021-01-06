---
date: "2016-09-08T00:00:00Z"
description: While migrating my blog to AMP I wrote a few scripts to automate going
  from img tags to amp-img tags.
meta_img: null
keywords: AMP, img to amp-img, jekyll, amp blog
tags:
- 'meta'
- 'code'
title: AMP migration scripts
---

Over Labor Day weekend I migrated my blog to use [AMP](https://www.ampproject.org/) but the first version was definitely a work in progress. One big item I needed to take care of was converting all my images to be AMP compatible by replacing &lt;img&gt; tag with &lt;amp-img&gt; along with the image width and height. I ended up writing a quick Python script to go through each of my posts, find each &lt;img&gt; tag, get the image’s dimensions, and then replace the original tag wit the AMP version. Unfortunately, I ran the script without too much testing and forgot to add closing tags which caused some of the content to go missing.

The solution was to write another script that once again went through every post but instead of replacing every img tag with an amp-img tag it found every amp-img referenced and added a closing tag in case it didn’t have one. These two scripts combined ended up fixing most of the AMP issues but I’m sure there are still a few posts that got warped so if you notice any please let me know.

In the spirit of constantly shipping the code is up on [GitHub](https://github.com/dangoldin/ampification) but is simple enough to not need a ton of polishing. Note that it’s not very robust and has some assumptions based on my blog structure so I would test it thoroughly before applying it to your posts.
