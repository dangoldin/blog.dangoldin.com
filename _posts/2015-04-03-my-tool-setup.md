---
layout: post
title: "My tool setup"
description: "Tools are incredibly important to be productive so here are the ones I use."
keywords: "productivity, tools, development"
image_url:
category:
tags: ["#meta"]
---
{% include JB/setup %}
Great tools have the potential to make us significantly more productive and I wanted to share my existing setup. A huge part of that productivity is our comfort with our tools since over time we learn the shortcuts, understand the capabilities better, and develop processes to solve common problems. The challenge is that there is always a tool that might be better but the learning curve is too steep to warrant a time investment. Here's what I have so far.

- Google Chrome Canary + FirefoxDeveloperEdition: I like being on the bleeding edge so use the nightly builds of both browsers. My preference would be to use Firefox for everything but I'm more familiar and comfortable with the Chrome dev tools.

- Google Calendar: I'll use this for both scheduling meetings as well jotting down deadlines and todos. It's been working great and I haven't felt a need to use anything else. I tried using a few apps but wanted something that had a better integration with the rest of the Google suite.

- Fastmail + Gmail: We use Gmail at work but my preference is for Fastmail. It's cleaner, simpler, and faster than Gmail and reminds me of what Gmail was when it first launched. Within both Fastmail and Gmail I strive to achieve "inbox zero" with varying success.

- Google Docs: Whenever I need to write anything non code I'll reach for Google Docs. The interface is simple to use and I like the cross device sync. The only time I'll move away is when I don't have internet access or I'm taking random notes.

- Excel: I tried using Google Spreadsheets but Excel is significantly better for larger scale projects and I'm too comfortable with the keyboard shortcuts I picked up during my maangement consulting and finance days. My ideal solution would be a spreadsheet interface built on top of a language such as R. Then I'd be able to use the spreadsheet component for the quick and dirty work, pasting data into it, doing simple transforms, etc and dive into the R for the more serious quantitative work.

- Terminal with zshell and ohmyzsh: Being comfortable with the terminal is vital for developers. It's the primary way to interact with external servers and knowing the various commands and scripts allow us to quickly diagnose and fix problems. The add on I use is zshell with the ohmyzsh configuration since it comes with a nice set of bells and whistles - git integration, useful highlighting, ..

- Sublime Text 3 + SFTP: For scripting progrmas my editor of choice is Sublime Text. It's surprisingly snappy and lightweight while providing a lot of flexibility for third party plugins. One of these plugins is SFTP which allows me to sync local files over to a remote server. I do a lot of my development work on an EC2 instance so being able to save them remotely is a huge productivity boost. I used to use Evernote for note taking but have switched to using text files in Dropbox. This allows me to organize them the way I want and leverage the command line to find exactly what I'm looking for.

- EC2: At TripleLift, each developer gets their own EC2 instance to be used for development. This both mirrors the production environment better than OS X would and allows us to make our sites publicly accessible to other developers. The other nice piece is that it interfaces nicely with the other AWS products, namely S3. Transferring files from S3 to EC2 is much quicker than going from S3 to a local computer. The two major constraints are that it's command line only and tends to be less performant than our local machines.

- Eclipse + IntelliJ: For Java I'm using Eclipse and for Scala I'm using IntelliJ. I've been coding Java for a lot longer and am much more familiar with Eclipse. It's possible that I'll move to IntelliJ at some point but for now my projects allow me to keep them separate.

- Git on GitHub with Hub: No surprise here. GitHub makes it easy to collobarate with others and I'm a big fan of the interface. The only annoyance I had was being unable to open pull requests from the command line but I've since found Hub which provides a command line interface to GitHub.

Would love to hear of other tools that people find useful.
