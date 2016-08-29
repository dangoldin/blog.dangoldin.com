---
layout: post
title: "Giving wallabag a shot"
description: "I set up wallabag, an Instapaper alternative, earlier today and it got me thinking about open source and how it doesn't work well for cross platform projects."
keywords: "instapaper, wallabag, open source, cross platform"
image_url:
category:
tags: ["#meta"]
---
{% include JB/setup %}
I’ve been a happy Instapaper user for years but the news that it was being acquired by Pinterest got me thinking about some alternatives. Not because I have anything against Pinterest; in fact I think this is a great fit and they’ll be able to complement each other but because it’s a reminder that no third party product is guaranteed to last and I wanted to see what open source alternatives are out there.

I discovered [wallabag](https://www.wallabag.org/) and got it setup earlier today. The documentation to install and get it running was incredibly straightforward and I was able to get it operational within an hour. Unfortunately it took a bit of wrestling to understand the various configuration options and I’m still unable to get it working across both the web and an iPhone. There’s a series of steps you need to do - from generating a unique RSS token to setting up an oAuth application that make it difficult to just get up and running. I understand that it’s designed for developers and offers a ton of customization but it should be simpler to get get the base installation - every user would want an extension to easily add articles and a way to access them offline on a phone and automatically generating the necessary settings would make it much easier to get started.

Trying out an open source alternatives is an eye-opening experience. You don’t realize how much polish it takes to build something usable. We love claiming that we can build anything in a day but it’s the relentless polishish that makes a successful product. I suspect this is why it’s incredibly hard to find open source products that require a cross platform approach. It’s difficult to think of successful open source applications that span across multiple environments. That requires multiple developers each agreeing on a unified vision and then making sure each of the components fits together. This is a tough combination and may be why so many popular open source projects are incredibly focused: it’s a lot easier to get multiple people working on a single product when it’s simple and they all share the same pain. But as soon as the scope expands there’s no single vision holding everything together and it shows in the final product.

The nice thing about open source is that anyone can add functionality and I’m already thinking of ways to improve wallabag. Hopefully I’ll have some time over the next few weeks.
