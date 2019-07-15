---
layout: post
title: "My Ubuntu experinece"
description: "I switched to Ubuntu at the end of last year and wanted to share how it compares with OS X."
keywords: "ubuntu, osx, open source"
image_url:
category:
tags: ["#meta"]
---
{% include setup %}
At the end of 2018 I made the shift from OS X on a Macbook Pro to Ubuntu on a Thinkpad and it's been enough time for me to get used to the new setup while still remember the old one so I thought I'd share my experiences.

**The good**

Installing packages is much easier and requires no weird workarounds. The built-in package manager is a big boost and nearly every library or utility I need can be installed with a simple "apt install" call. As expected, there's a lot more customization you can do than on OS X. Nearly everything can be tweaked and modified - ranging from shortcuts in different apps to various system settings to get the optimal configuration. Developing feels similar to OS X in terms of IDEs but it does feel a little bit snappier and the environment is much closer to where it will actually be deployed.

**The bad**

One of the things I miss most is Excel. There's LibreOffice and Google Spreadsheets and they're alright for viewing spreadsheets but impossible to work with as a power user. Excel on OS X is not as good as it is on Windows but at least I have that option. There's always the option of running Excel in a virtualized Windows environment but I stayed away from that for now.

There's also the expected lack of usability around the edges. For the most part things work but there are some annoyances I discovered - for example some applications close with a Ctrl+W while others require a Ctrl+Q. Similarly, some of the functionality is a bit wonky. I got a VPN working but as soon as I'd disconnect from the VPN I'd lose name resolution. The fix was to use [dnsmasq](http://www.thekelleys.org.uk/dnsmasq/doc.html) but I wish it worked out of the box.

**The ugly**

Ubuntu is just not as stable as OS X. This may be a function of the hardware but I used to be able to run OS X for months without a reboot and it's rare that I can go a week without one. It's somewhat surprising since so much of the modern internet runs on top of Linux but it's just rare for my computer to go a week without seizing or slowing to a crawl. There were a few cases where my computer went into "read-only mode" and required an fsck (file system consistency check) to become healthy again. I'm running stock Ubuntu with minimal tweaks and it's surprising how often it crashes. I've read that the Thinkpad hardware is just not suited for Ubuntu but then why does Windows not have the same problems?

Despite the challenges I'm still a convert and feel good using open source software. It comes with everything I need to do to my job and while I wish it was a bit more polished and stable I'm not going back to OS X any time soon.
