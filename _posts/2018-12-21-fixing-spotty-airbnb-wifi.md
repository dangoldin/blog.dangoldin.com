---
layout: post
title: "FIxing spotty AirBnB wifi"
description: "I've often found that the AirBnBs I stay in have spotty wifi and end up fixing it by picking the appropriate channel."
keywords: "wifi, airbnb"
image_url:
category:
tags: ["#travel"]
---
{% include setup %}
Nearly every time I travel I use AirBnB but a fairly common problem is spotty wifi. I don’t know whether my expectations are higher than the typical guests but in a significant number of my stays the wifi has been spotty. Rather than complain or just accept it I’ve started doing my own simple wifi network maintenance to help improve the speed. The nice thing thing is that this is entirely doable - both because you can connect to the network but also because you have access to the physical router.

The critical piece is being able to access the router’s admin panel. This is usually hosted at the router’s IP address which, on a Mac, you can find by holding the Option button while clicking the wifi icon in the top toolbar. This gives you a router IP address which is usually 192.168.0.1 or 192.168.1.1. There’s going to be a login page but people rarely change the default username/password and these can be found either online via some Googling of “router model default admin password” or by looking at stickers on the router itself. As a last resort you can physically reset the router to factory settings but you need to make sure you know what you’re doing since you will be reverting all the settings and potentially causing significant issues.

Now that you have access to the router’s admin panel you can poke around and see if there are any settings or options that look useful. I usually try to disable all the bells and whistles to focus on actual wifi speed and latency but the biggest help is just picking the appropriate channel. If you live in an apartment building your wifi signals will overlap with those from other apartments. This means that if you’re using the same channel as everyone else there will be a lot of noise which will hurt your performance. The nice thing is that OS X (and I’m sure other OSes have their own equivalents) comes with a utility called “Wireless Diagnostics” which lets you scan all the wifi networks to determine the best channel to use - which is the one that has the least overlap with others. Once you run the scan and get the optimal channel you would just make that the default channel in the router’s wifi settings and you should be good to go. Modern routers come with a gamut of options and customizations but I’ve found that picking the optimal channel gets you most of the way there.

<amp-img src="{{ IMG_PATH }}wifi-scan-osx.png" alt="OS X Wireless Diagnostics" width="3214" height="696" layout="responsive"></amp-img>
