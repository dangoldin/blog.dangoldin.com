---
layout: post
title: "AWS Glacier"
description: "I had a bunch of old useless files I didn't want to permanently get rid of so I started using AWS Glacier to back them up."
keywords: "aws glacier, dropbox, backups"
image_url:
category:
tags: ["#aws", "#devops"]
---
{% include setup %}
I’ve been trying to reduce the amount of stuff I have and a big part of it is old electronics. I’ve been selling off old headphones and random cables but the one thing that’s been more difficult to get rid of is older hard drives. I know that most of the stuff on them is junk that I’ll never see again but it’s still tough to just throw it away. They’re reminders of previous jobs and old projects that are a part of my identity that are tough to permanently delete with a click. Many of them are unique in the world and only exist on an old hard drive. I realize it’s foolish to keep them around but it’s tough to let go.

I thought about moving the stuff over to Dropbox but upgrading to a paid plan to store a bunch of files I’d never touch again seemed wasteful. I wanted something that was a one time upload, was cheap, and gave me peace of mind. I recently read about <a href="https://aws.amazon.com/glacier/" target="_blank">Amazon’s Glacier</a> product and it fit the bill perfectly. It’s a penny a month for each GB stored but with additional fees for retrieving old files. Looking at the amount of files I want to store this would cost me less than 20 cents a month and allows me to get rid of a ton of old drives. I spent a couple of evenings this past week tarring up these old files and transferring them to Glacier using the <a href="http://simpleglacieruploader.brianmcmichael.com/" target="_blank">Simple Amazon Glacier Uploader</a> app.

Glacier is a great fit for data that’s difficult to throw away but unlikely to be accessed and is significantly cheaper than Dropbox. I’m in the process of going through more and more of my data and seeing which of it would be a good fit for Glacier.