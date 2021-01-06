---
date: "2014-12-26T00:00:00Z"
description: DevOps is a necessary skill for all software engineers to know. It gets
  you closer to the hardware while letting you think at a more abstract level of how
  your application will actually work.
meta_img: null
keywords: devops, aws, vps, engineering
tags:
- 'devops'
title: DevOps for the rest of us
---

I’m becoming increasingly convinced that DevOps is a necessary skill for any software engineer to have. It gets you closer to the hardware and helps you understand the way your code will actually run and where it fits within the tech stack. It also provides independence when working on new projects since it gives you both the knowledge to understand the needs as well as empowers you to make them happen. This is especially important when working at a small company where there’s immense value in having general skills that can be used to make progress independently without need to disrupt others. My first job writing code I only had to worry about my small patch of software but over time I’ve slowly picked up a variety of DevOps skills that help me write better code. Below are the skills that every software engineer should know - they may not all fall under traditional DevOps but I believe they’re essential for anyone writing code. If you have any others let me know and I’ll add them to the list.

- **Shell commands**. Almost any task can be done efficiently using a series of shell commands. Being aware of the various commands and their options makes it simple to find specific files, summarize data, or just monitor a server. The most important ones are ls, cd, pwd, rm, wc, find, grep, head, tail, less, sort, cut, sed, and curl.
- **Configuration of various applications**. This might be specific to Linux/Unix but knowing the default configurations of common applications and where the settings are is important when setting up an application and diagnosing problems. There have been countless times I installed something on my box only to run into issues with unexpected behavior. Being able to examine the configuration and grep through the logs is critical to understanding what’s actually happening.
- **Package managers**. Both the ones by provided by the operating system (apt and yum) as well as the language specific ones (pip, npm, gem, CPAN). There already so many powerful open source tools and libraries available that it’s rare to find something that can’t at least serve as a starting point for whatever you’re building.
- **Web architecture**. This is a big one but it’s crucial to understand how the internet works from the time you type in a web address to a browser to what’s going to happen on the server. A good starting point is to look at Amazon Web Services and be able to explain each of the services offered, how they’re used, and how they fit together. Even better is to play with them to get a sense of how they can be used.
- **Setting up and deploying an application on a brand new VPS**. Using AWS or Digital Ocean it’s trivial to get a virtual private server (VPS) but it will come completely empty. Being able to log in, install the necessary software, and get it responding to external requests is vital for anyone writing web code. Even better is deploying multiple applications on the same VPS and configuring DNS to make it work.
- **Back of the envelope calculations**. Having a sense of how long various types of requests and operations take is important in understanding the type of hardware you need and where optimizations can be made. Another good skill is thinking in terms of “bytes.” This helps you estimate how much memory your code is using and makes it easy to understand what solutions are scalable and which will end up causing problems.
