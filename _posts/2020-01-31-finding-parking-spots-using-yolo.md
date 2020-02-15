---
layout: post
title: "Finding parking spots using YOLO"
description: "Instead of using Google or AWS for computer vision I gave the YOLO library a shot."
keywords: "computer vision, YOLO"
image_url:
category:
tags: ["#code"]
---
{% include setup %}
I finally managed to make a bit more progress on the Parking Spot Finder project. [Last time](http://dangoldin.com/2019/12/29/finding-parked-cars-aws-vs-google-computer-vision/) I tested the computer vision products offered by Google and AWS to see how well they were able to detect cars. This time around I decided to actually start working on the computer vision side and found a nice [tutorial](https://www.pyimagesearch.com/2018/11/12/yolo-object-detection-with-opencv/) that allowed me to quickly try out the YOLO computer vision library. Surprisingly, it did significantly better than AWS but was more mixed against Google. On the original image it did better than both AWS and Google at detecting the cars but it did worse than Google on the cropped images. The next step is to actually try training a model and see how well it can do. Depending on how that goes I may end up changing my approach up and see how far I can get using heuristics.

<amp-img src="{{ IMG_PATH }}jc-street-parking-processed.jpg" alt="Daytime YOLO car detection" width="1314" height="986" layout="responsive"></amp-img>

<amp-img src="{{ IMG_PATH }}jc-street-parking-2-processed.jpg" alt="Nighttime YOLO car detection" width="1271" height="953" layout="responsive"></amp-img>

<amp-img src="{{ IMG_PATH }}jc-street-parking-small-1-processed.png" alt="Daytme YOLO car detection cropped 1" width="362" height="130" layout="intrinsic"></amp-img>

<amp-img src="{{ IMG_PATH }}jc-street-parking-small-2-processed.png" alt="Nighttime YOLO car detection cropped 2" width="264" height="317" layout="intrinsic"></amp-img>
