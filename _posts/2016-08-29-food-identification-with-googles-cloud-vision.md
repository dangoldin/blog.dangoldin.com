---
layout: post
title: "Food identification with Google's Cloud Vision"
description: "I tried using Google's Cloud Vision to identify the food in my fridge. It didn't go very well."
keywords: "computer vision, google, cloud vision, food identification"
image_url:
category:
tags: ["#code", "#meta"]
---
{% include setup %}
Something that I haven’t quite figured out is how to avoid wasting food. I like to think I keep good track of everything in my fridge but too often I end up finding something in the corner that spoiled and needs to be thrown out. Earlier today I was talking to someone at the office about this problem and how nice it would be if you could just have something that knows everything that’s in the fridge and can track how long it’s been there and an estimate of how long it will last. I’m sure refrigerators in 10 years will have this built in but I wanted to see what I could cobble together in an evening.

Luckily for me Google released a Cloud Vision API and I decided to give it a shot. Turns out implementing it was extremely straightforward, despite Google’s poor documentation, with a quick code search on GitHub that led to me [https://github.com/ramhiser/serverless-cloud-vision](https://github.com/ramhiser/serverless-cloud-vision). Unfortunately, the results were not promising. I ran on three images and while the categorization was surprisingly accurate it was too general. I expected to at least accurate identification for the bottles and cans - milk, ketchup, yogurt but the closest it got was food, ice cream, and gelato. Granted, the photos weren’t staged well and it took me about 15 minutes to get it working but I was still disappointed. The Cloud VIsion service doesn’t offer much customization so I’m going to see how much better I can make it by improving the photos. I’ve included the original photos along with the classification results below. As usual my code is up on [GitHub](https://github.com/dangoldin/fridge-vision) although it was really just a straight up copy and paste from [ramhiser’s code](https://github.com/ramhiser/serverless-cloud-vision) above.


<ul class="thumbnails">
  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}fridge-1.jpg" alt="Fridge 1" width="600" height="800" layout="responsive"></amp-img>
      {% highlight json %}[
        {
          "score": 0.90114909,
          "mid": "/m/02wbm",
          "description": "food"
        },
        {
          "score": 0.88251483,
          "mid": "/m/02phwj2",
          "description": "display window"
        },
        {
          "score": 0.81870794,
          "mid": "/m/0cxn2",
          "description": "ice cream"
        },
        {
          "score": 0.76996088,
          "mid": "/m/0270h",
          "description": "dessert"
        },
        {
          "score": 0.75129372,
          "mid": "/m/02fz11",
          "description": "gelato"
        },
        {
          "score": 0.69974077,
          "mid": "/m/02rfdq",
          "description": "interior design"
        },
        {
          "score": 0.57035172,
          "mid": "/m/02q08p0",
          "description": "dish"
        },
        {
          "score": 0.54961139,
          "mid": "/m/0191_7",
          "description": "retail store"
        },
        {
          "score": 0.53331912,
          "mid": "/m/031bff",
          "description": "window covering"
        },
        {
          "score": 0.51523668,
          "mid": "/m/01_bhs",
          "description": "fast food"
        }
      ]{% endhighlight %}
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}fridge-2.jpg" alt="Fridge 2" width="600" height="800" layout="responsive"></amp-img>
      {% highlight json %}[
        {
          "score": 0.87785435,
          "mid": "/m/07yv9",
          "description": "vehicle"
        },
        {
          "score": 0.78110605,
          "mid": "/m/0k5j",
          "description": "aircraft"
        },
        {
          "score": 0.77443254,
          "mid": "/m/0cmf2",
          "description": "airplane"
        },
        {
          "score": 0.7131173,
          "mid": "/m/02pkr5",
          "description": "plumbing fixture"
        },
        {
          "score": 0.71218145,
          "mid": "/m/015y8h",
          "description": "jet aircraft"
        },
        {
          "score": 0.66169083,
          "mid": "/m/06ht1",
          "description": "room"
        },
        {
          "score": 0.5944497,
          "mid": "/m/01lgkm",
          "description": "recreational vehicle"
        },
        {
          "score": 0.54411179,
          "mid": "/m/041x_j",
          "description": "public toilet"
        },
        {
          "score": 0.53394085,
          "mid": "/m/017_cz",
          "description": "major appliance"
        }
      ]{% endhighlight %}

    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}fridge-3.jpg" alt="Fridge 3" width="600" height="800" layout="responsive"></amp-img>
      {% highlight json %}[
        {
          "score": 0.78413528,
          "mid": "/m/02phwj2",
          "description": "display window"
        },
        {
          "score": 0.647836,
          "mid": "/m/02rfdq",
          "description": "interior design"
        },
        {
          "score": 0.59498113,
          "mid": "/m/0c_jw",
          "description": "furniture"
        },
        {
          "score": 0.57692927,
          "mid": "/m/0191_7",
          "description": "retail store"
        },
        {
          "score": 0.54954523,
          "mid": "/m/08790l",
          "description": "boutique"
        }
      ]{% endhighlight %}
    </div>
  </li>
</ul>
