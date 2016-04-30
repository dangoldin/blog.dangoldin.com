---
layout: post
title: "Text is king"
description: "Despite being bullish on tech I tend to manage as much as I can through text files. They're extremely powerful while providing the flexibility to change to suit my evolving needs."
keywords: "text, todo list, calendar, blogging, utilities"
image_url:
category:
tags: ["#meta"]
---
{% include JB/setup %}
As many people know despite being bullish on tech I’m spartan and utilitarian with my technology usage. This expresses itself as a strong bias for text above nearly another format. There are tons of apps that try to help me organize my tasks and todos but I prefer simple text files and an intelligent folder structure. This is true when it comes to blogging as well - rather than using a fancy CMS or hosted application I rely on Jekyll which exposes my content in Markdown.

On the surface this seems inefficient - why build your own tools when perfectly good apps exist that will be maintained and improved over time? Unless I spend a ton of time there’s no way I’m going to be able to build a blogging platform that competes with Medium or Wordpress nor will I ever make a todo application that is better than Todoist, Wunderlist, or Google Calendar.

For me it’s less about the tool and more about the problem. Sure a tool helps with that but I’m more about figuring out a process that works for me. Despite how great an app is it’s extremely unlikely that it will change to accommodate my evolving needs. Having my own process optimized around text gives me the flexibility to do things my way as well as easily change both the process and the underlying data.

Just last week I realized that I forgot to add metadata to a few of my blog posts. Had the content been squirrelled away in a web app there’s no way I would have been able to easily find which posts were affected other than writing a crawler and examining the DOM. But having everything in simple structured Jekyll text files made it as simple as writing a simple command line regular expression to identify these posts. And this can easily scale to any other blog maintenance task I have - whether it’s adding some additional information to a subset of posts or just searching for various words or phrases.

The success of this system depends on building out and committing to a structured approach when dealing with text. Text is innately extremely flexible but by imposing a semi-structured system of tags and folder structures it makes it extremely easy to navigate and manage. And if anything does change it only requires a small script to update everything to fit the new format. Replication is also simple - I can either keep it in a version control system or have it synced via Dropbox. If you’re undisciplined or have a static workflow definitely leverage an existing tool but if you’re constantly trying to improve your system and want the ability to go back and analyze content you produced there’s not much better than text. It unlocks the power of the command line while giving you the option to write whatever esoteric script you need to solve your own problem. And if you do want to export your data anywhere else it can be as simple as turning your simple, semi-structured text into an API request to whatever service is in vogue at the moment.
