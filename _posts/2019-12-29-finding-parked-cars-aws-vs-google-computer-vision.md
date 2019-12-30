---
layout: post
title: "Finding parked cars: AWS vs Google computer vision"
description: "As part of my parking spot finder project I compared Google's computer vision against Amazon's."
keywords: "computer vision, google, amazon, aws rekognition"
image_url: "/assets/static/images/jc-street-parking-google.png"
category:
tags: ["#product"]
---
{% include setup %}
As part of the newly rebooted [Parking Spot Finder](http://dangoldin.com/2019/12/26/parking-spot-finder/) project I started poking around the cloud computer vision services to see how well they'd do at identifying parked cars from an "apartment view." The image is pretty straightforward and shows two intersecting streets with a single available parking spot. I didn't expect these services to identify the spot but my hope was that they'd be able to identify the cars themselves. For this test I tried both Google's [Vision](https://cloud.google.com/vision/) and Amazon [Rekognition](https://aws.amazon.com/rekognition/). Google worked much better but still required a few tweaks to get what I wanted.

<div class="thumbnail">
    <amp-img src="{{ IMG_PATH }}jc-street-parking.jpg" alt="Original image of the street" width="1314" height="986" layout="responsive"></amp-img>
    <p class="caption">Original image</p>
</div>

### First attempt
The simplest thing to do was to take the image I took and just pass it to both services in order to see what I got. I didn't have any strong expectations here but was hopeful that at least one of the services would give me exactly what I wanted. Alas, both services failed to give me what I wanted. Google focused on the buildings while Amazon picked up a handful of the cars.

<div class="thumbnail">
    <amp-img src="{{ IMG_PATH }}jc-street-parking-google.png" alt="Google CV" width="815" height="496" layout="responsive"></amp-img>
    <p class="caption">Google's attempt</p>
</div>

<div class="thumbnail">
    <amp-img src="{{ IMG_PATH }}jc-street-parking-aws.png" alt="AWS CV" width="1593" height="611" layout="responsive"></amp-img>
    <p class="caption">Amazon's attempt</p>
</div>

### Second attempt
The thinking here was that Google focused too much on the buildings since they took up the majority of the image. What if I cropped those out and only passed in images of the street? Would they be able to identify each of the parked cars? In this case Google was perfect and found every parked car while Amazon floundered.

<div class="thumbnail">
    <amp-img src="{{ IMG_PATH }}jc-street-parking-small-1.png" alt="Street view crop 1" width="362" height="130" layout="intrinsic"></amp-img>
    <p class="caption">Original image: First crop</p>
</div>

<div class="thumbnail">
    <amp-img src="{{ IMG_PATH }}jc-street-parking-small-2.png" alt="Street view crop 2" width="264" height="317" layout="intrinsic"></amp-img>
    <p class="caption">Original image: Second crop</p>
</div>

<div class="thumbnail">
    <amp-img src="{{ IMG_PATH }}jc-street-parking-small-1-google.png" alt="Google attempt crop 1" width="821" height="493" layout="intrinsic"></amp-img>
    <p class="caption">Google's attempt: First crop</p>
</div>

<div class="thumbnail">
    <amp-img src="{{ IMG_PATH }}jc-street-parking-small-2-google.png" alt="Google attempt crop 2" width="780" height="497" layout="intrinsic"></amp-img>
    <p class="caption">Google's attempt: Second crop</p>
</div>

<div class="thumbnail">
    <amp-img src="{{ IMG_PATH }}jc-street-parking-small-1-aws.png" alt="Amazon attempt crop 1" width="1588" height="618" layout="intrinsic"></amp-img>
    <p class="caption">Amazon's attempt: First crop</p>
</div>

<div class="thumbnail">
    <amp-img src="{{ IMG_PATH }}jc-street-parking-small-2-aws.png" alt="Amazon attempt crop 2" width="1590" height="616" layout="intrinsic"></amp-img>
    <p class="caption">Amazon's attempt: Second crop</p>
</div>

The nice thing is that I do have a working solution here and the next step is to see what I can do to automate the cropping piece and leverage the structured data to hopefully get something meaningful.  The nice thing is that the final state is well defined - a tagged outline of the available parking spots. There's still a lot of work to get there but that's all part of the fun.
