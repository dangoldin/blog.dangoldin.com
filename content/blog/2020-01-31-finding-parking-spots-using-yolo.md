---
date: "2020-01-31T00:00:00Z"
description: Instead of using Google or AWS for computer vision I gave the YOLO library
  a shot.
meta_img: null
keywords: computer vision, YOLO
tags:
- 'code'
title: Finding parking spots using YOLO
---

I finally managed to make a bit more progress on the Parking Spot Finder project. [Last time](http://dangoldin.com/2019/12/29/finding-parked-cars-aws-vs-google-computer-vision/) I tested the computer vision products offered by Google and AWS to see how well they were able to detect cars. This time around I decided to actually start working on the computer vision side and found a nice [tutorial](https://www.pyimagesearch.com/2018/11/12/yolo-object-detection-with-opencv/) that allowed me to quickly try out the YOLO computer vision library. Surprisingly, it did significantly better than AWS but was more mixed against Google. On the original image it did better than both AWS and Google at detecting the cars but it did worse than Google on the cropped images. The next step is to actually try training a model and see how well it can do. Depending on how that goes I may end up changing my approach up and see how far I can get using heuristics.

<img src="/image/jc-street-parking-small-2-processed.png" alt="Nighttime YOLO car detection cropped 2" data-width="264" data-height="317" data-layout="intrinsic" />

<img src="/image/jc-street-parking-small-2-processed.png" alt="Nighttime YOLO car detection cropped 2" data-width="264" data-height="317" data-layout="intrinsic" />

<img src="/image/jc-street-parking-small-2-processed.png" alt="Nighttime YOLO car detection cropped 2" data-width="264" data-height="317" data-layout="intrinsic" />

<img src="/image/jc-street-parking-small-2-processed.png" alt="Nighttime YOLO car detection cropped 2" data-width="264" data-height="317" data-layout="intrinsic" />
