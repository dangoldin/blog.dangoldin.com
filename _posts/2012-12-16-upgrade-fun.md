---
layout: post
title: "The joy of upgrading an HD in a Macbook"
description: ""
category: 
tags: []
---
{% include JB/setup %}
As a gift to myself I decided to upgrade the RAM and HD in my MacBook. The plan was to replace the old HD with the new one and then use the install disc to install Snow Leopard on the new HD before upgrading to Mountain Lion. Unfortunately, it turned out that I had a bad install disc and had to come up with another approach. The general idea was to upgrade to Mountain Lion first in order to create another boot disc.

1. Upgrade OS to Mountain Lion and make sure to have a copy of the installation file around
2. Put the new HD into an external enclosure
3. Create two partitions on the new HD, one should be 8 GB to hold the Mountain Lion install boot disc
4. Use <a target="_blank" href="http://blog.gete.net/lion-diskmaker-us/">Lion Disk Maker</a> to create the boot disc on the 8 GB partition of the new HD (<a target="_blank" href="http://osxdaily.com/2012/07/25/create-os-x-mountain-lion-boot-dvd-usb-drive-liondiskmaker/">instructions</a>)
5. Shut down the computer and replace your HD with the new HD
6. Boot your computer while holding down the option key
7. Select the Mountain Lion boot disc from the selection screen and install it on the other partition
8. Mountain Lion is now installed on the new HD
9. You can now remove the Mountain Lion boot partition and use that space for something else

An easier approach would have been to just use a USB flash drive or an SD card to create the boot disc. Unfortunately, I didn't have any that had a capacity of more than 8 GB so I had to resort to this hack.