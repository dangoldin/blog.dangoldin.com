---
date: "2019-12-26T00:00:00Z"
description: A few years ago I started on an app to help me find a parking spot. I
  plan on actually finishing it up in the coming year.
meta_img: null
keywords: computer vision, parking
tags:
- 'code'
title: Parking spot finder
---


<img src="/image/jc-street-parking.jpg" alt="Jersey City street" data-width="1314" data-height="986" data-layout="responsive" />

I live in Jersey City and rely on street parking rather than paying for a lot. Jersey City also some aggressive alternate side parking rules with many streets having twice-a-week cleanings which in the worst case requires me to move my car 4 times a week.

A few years ago I decided to build a simple tool that would be hooked up to a camera and would notify me whenever a spot became available. I unfortunately never finished that up and am hoping that by posting it publicly it will act as a motivator and hold me accountable.

The [repo is up on GitHub](https://github.com/dangoldin/parking-spot-detector) for everyone who wants to follow along. I haven't done much of this type of project so it will be a good introduction to the modern world of computer vision while also solving an actual problem.

The approach I'm currently taking is to first confirm that I can actually identify parking spots in static images. I'll attempt this using the various cloud APIs as well as some open source libraries, such as [YOLO](https://pjreddie.com/darknet/yolo/). I'm hoping that they work but if not I'll resort to something a bit more creative.

After that step is done I'll figure out how to automate the photo taking - it may be as simple as getting my Raspberry Pi working again or somehow integrating with a webcam. In any case, I imagine this part to be more straightforward than the first.
