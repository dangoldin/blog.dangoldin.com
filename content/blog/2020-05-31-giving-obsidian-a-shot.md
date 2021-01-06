---
date: "2020-05-31T00:00:00Z"
description: I love the idea of the networked-thought note taking apps but don't want
  to use a cloud product or a proprietary format. Luckily I discovered Obsidian.
meta_img: null
keywords: obsidian, roam, note taking
tags:
- 'productivity'
title: Giving Obsidian a shot
---

I tried using Notion a while back but rebelled against having my data stored in the cloud in a proprietary format. For a [variety of reasons](/2016/04/30/text-is-king/) I want my notes to be available locally in a text based format. At the same time there's a lot to like about the modern tools and I feel myself being worn down. A few weeks ago I discovered [Roam](https://roamresearch.com/) and am sold on its networked thought model. I've been using it for some of my note taking but was hesitant to commit given my concerns. Earlier this week I came across [Obsidian](https://obsidian.md/) - a Roam-like product that runs locally and stores everything in Markdown. This was opportune timing since I'm able to lean in on the networked thought model while still staying true to local files in an open format. I'm still getting used to Obsidian's semantics - tags, links, and Markdown - but overall I'm bullish and glad to give it a shot.

Obsidian is also a great example of why I keep my notes in a text format. All I had to do to get them into Obsidian was run find . -name "*.txt" -exec rename 's/\.txt$/.md/' '{}' \; which replaced the .txt extension with .md for every file in my notes folder. This just would not have been possible had my notes been stored in the cloud in some proprietary format. Similarly, since Markdown is itself open and I can easily go back to plaintext - although I will likely need to do a bit of scripting to actually clean up the files.

I understand that adopting a proprietary format can improve the product it's often a form of lockin that I'm just not willing to accept. I wish more people had this mindset so we'd see less cloud software and more open desktop software - especially for sensitive use cases.
