---
layout: post
title: "Keeping Ubuntu computers in sync"
description: "When I switched to Ubuntu I started keeping my configuration and setup in version control in order to make it as easy as possible to set up new computers with the same settings."
keywords: "ubuntu, sync, apt"
image_url:
category:
tags: ["#code", "#devops"]
---
{% include setup %}
I switched to Ubuntu a few years ago and along with the change decided to keep as much of my environment setup in version control as possible. The motivation was to make the process of setting up a new computer as simple and repeatable as possible since I planned on shifting both my personal and work computers to Ubuntu and wanted to keep them in sync as much as possible.

The two primary things I wanted to take care of was to keep my applications and config files in sync between the two systems. The first I was able to do partially. I found a single command that captured everything installed via apt (pkg -l | grep ^ii | awk '{print $2}') and then saved into a file that's kept in version control. These can then be installed again using another command that just pipes the list into apt-get: apt-get install $(grep -vE "^\s*#" filename  | tr "\n" " "). There are still some issues I need to handle around custom repositories but it generally works well.

To handle configs I settled on using symbolic links. I keep all my key config files in the same git repo and then just symbolic link them to the appropriate place. For example, I use [Oh My Zsh](https://github.com/robbyrussell/oh-my-zsh) and have my own .zshrc file that I link to my root directory by doing "ln -s ~/code/dev-ops/config/.zshrc .zshrc"

This approach definitely has room for improvement but it's simple and lightweight and gets me most of the way to what I need.
