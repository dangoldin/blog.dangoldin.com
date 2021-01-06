---
date: "2019-08-27T00:00:00Z"
description: I ran into an issue and solved it by fetching my public keys from GitHub.
meta_img: null
keywords: github, digitalocean, ssh, public keys
tags:
- 'meta'
title: Getting public keys from GitHub
---

I use DigitalOcean to host a variety of personal projects and every once in a while go through a "DevOps" spree where I upgrade everything I can. Last time around I switched them over to Ansible to make these sorts of updates easier. I ran this playbook earlier this week and discovered that one of the instances had an outdated public key and I no longer had SSH access.

It would have been straightforward to go through the DigitalOcean flow of stopping the instance and launching it again with an updated key but I wanted to explore and see if I could find a way to avoid the reboot. After poking around the DigitalOcean UI I found a section that allowed to me to login to the terminal of the instance. I was somehow able to guess the password here (shows how secure my passwords are) but then ran into another problem: the paste command garbled the text as I was pasting it into the spoofed terminal. I tried a few alternatives but was unable to get public key added through the UI.

What I needed was a simple way to publicly host my keys and then download them using a curl command. I was about to upload them to a personal S3 bucket and then somehow remembered that you can get any GitHub user's keys from a GitHub url: https://github.com/{user}.keys - my keys are available at https://github.com/dangoldin.keys. Fetching this file and dumping them into authorized_keys solved my problem and I was able to finish up the update. The lesson here is that 1) your GitHub public keys are publicly accessible via GitHub and 2) it's useful to keep accumulating info since you don't know when you'll need it.
