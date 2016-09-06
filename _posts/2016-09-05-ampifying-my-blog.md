---
layout: post
title: "AMPifying my blog"
description: "I just finished migrating my blog to AMP and am happy with the outcome. The site's snappier and feels much better on mobile."
keywords: "AMP, Google AMP, jekyll, blog design, mobile design"
image_url:
category:
tags: ["#meta"]
---
{% include setup %}
Ever since AMP was announced I’ve been meaning to migrate my blog but hesitated due to the fear that it would take an inordinate amount of time and would be laden with edge cases. But over the Labor Day weekend I decided to give it a shot and see how far i could get. A quick GitHub search showed two promising repos - [amp-jekyll](https://github.com/juusaw/amp-jekyll) and [amplify](https://github.com/ageitgey/amplify) - and I gave them both a shot. They approach AMP integration in two different ways - amp-jekyll creates an AMP version of every post and has it live in a separate folder structure while amplify is a comprehensive theme. This made the amp-jekyll integration much easier since it’s designed to work parallel to the existing blog but I wanted to do a full rewrite.

I ended up cloning the amplify repository and manually importing a few of my blog posts to see how they’d render, handle the images, and look under the different style. After playing around with amplify I realized it would actually be straightforward to integrate directly into my blog as an additional theme. After copying over the design files and the libraries required to inline the SCSS I was left with making a few changes to the CSS to get it to resemble the previous design. All in it took a few hours to get my blog migrated to AMP and it’s incredibly quick - especially on mobile (if you haven’t given it a shot please do).

There are still a few things I need to take care of but I’m pleasantly surprised by the ease and simplicity of the transition and the resulting performance. The major problems I need to take care of before I call this a success:

- Disqus integration. I’ve been using Disqus to manage comments and it would be a shame if I had to ditch it. Based on a few StackOverflow and forum posts it looks as if it’s possible to get Disqus working by forcing an iframe with the comment section but I’ll have to figure out how this works.
- Various styling fixes: Since I ended up starting with the amplify CSS there are a few inconsistencies that I still need to take care of - especially on some of my older posts that have some ugly inline CSS.
- Img to amp-img: To be AMP compliant you cannot have any img tags and instead must use amp-img. This sounds straightforward but amp-img requires you to specify the dimensions of the image which I have not been doing. It looks as if there’s a plugin for this in amp-jekyll and I got it working locally but need to get it working on GitHub pages.
- JavaScript heavy posts: I have a few older posts that depend on D3 for visualizations and I’m going to have to rewrite those posts to include the animations as amp-iframe elements. This seems straightforward but I’m sure I’ll run into some hiccups when I actually sit down to do this.
- Build times take forever: This is my biggest issue so far. Since AMP requires all CSS to be inlined it means that every CSS change causes the entire site to be regenerated. Before AMPifying, Jekyll would build the site in around 10 seconds and now it takes nearly 2 minutes. I don’t have a good fix for this but a simple solution may be to have different CSS for the different types of pages to avoid a full site regeneration with every style change. While developing I solve this problem by moving all but a few posts out of the _posts folder in order to reduce the number of pages that need to be generated. Then when I’m happy with the outcome I’ll move the other posts back and let it go through the full generation. This is extremely hacky and I wish there was a better solution here.

I’d love to know what the readers of the blog think and whether they’re noticing any improvement so if you have any feedback please let me know. And I’m aware that I have yet to get Disqus set up to work with AMP but in the meantime let me know via [Twitter](https://twitter.com/dangoldin).
