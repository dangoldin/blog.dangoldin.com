---
layout: post
title: "Migrating from Linode to Digital Ocean"
description: "I recently moved my personal code over from Linode to Digital Ocean. I was hesitant at first and worried about the migration but it went as smoothly as possible."
keywords: "linode, digital ocean, migration, devops"
image_url:
category:
tags: ["#devops"]
---
{% include setup %}
Ever since I saw that Digital Ocean charged $5/mo, I’ve been meaning to migrate my sites and projects over from Linode but have been wary of dealing with the various issues that would ensue. I finally bit the bullet earlier this week and it went surprisingly smoothly.

My biggest concern was forgetting to copy some files that specified some esoteric settings I came up with when I first set up the projects. Luckily I didn’t run into this issue and most of the effort was spent in trying out my sites and looking at the log files to see which libraries were missing.

Here’s a quick overview of the process - the Digital Ocean <a href="https://www.digitalocean.com/community/articles/migrate-your-current-vps-linode-rackspace-aws-ec2-to-digitalocean" target="_blank">migration guide</a> was a big help.

- Follow the guide and install/configure rsync on both boxes
- Use rsync to migrate the relevant files and folders. In my case it was everything in /var/www, the sites-enabled apache folder, and the MySQL dump
- Install apache, MySQL and the other likely required packages. An overkill approach would have been to list every package on my old box and install it on the new one.
- Load the MySQL dump into the new instance
- Restart apache and go through the configuration settings. All the issues were due to disabled apache modules (headers, deflate, expires) and enabling them resolved them.
- Go through each of the configured sites and make sure they worked. No downtime wasn’t a requirement for me so I ended up changing the DNS settings one by one confirming that each site ran properly. The PHP sites worked immediately but the python sites needed some packages installed via pip.
- Copy the cronjobs from the old box to the new one

None of my projects were complicated and the migration went as smoothly as possible. Most of the time was spent waiting for the files to copy or packages to install and I never ran into an issue that didn’t have an immediately obvious fix. The error log was a big help - it gave me a quick way to identify problems and the missing packages. If you’re on the fence about migrating to Digital Ocean and the only thing holding you back is worrying about the migration I suggest just going for it. Worst case is you spend a few hours playing around with a new box.