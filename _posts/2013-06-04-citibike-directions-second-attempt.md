---
layout: post
title: "Citibike Directions: Second Attempt"
description: "I updated the Citibike directions app to be more general and provide directions from any NYC address to another rather than just Citibike station to Citibike station."
keywords: "citibikenyc, citibike, bike sharing, google maps api"
category:
tags: ["#code"]
---
{% include JB/setup %}
To coincide with the launch of Citibike, I wrote a <a href="http://dangoldin.com/citibike-station-directions/station-to-station.html" target="_blank">simple web app</a> that provided cycling directions from one Citibike station to another. The biggest piece of feedback I received was that people care about getting from place to place rather than from one Citibike station to another. Based on this feedback, I <a href="http://dangoldin.com/citibike-station-directions/" target="_blank">updated the app</a> to provide directions from any New York City address to another by breaking every trip down into three steps: the first is to walk to the nearest Citibike station, the second is to bike from one station to another, and the last is to walk to the destination. A limitation I ran into is that Google’s <a href="https://developers.google.com/maps/documentation/javascript/directions" target="_blank">Direction Service</a> doesn’t support different transit methods for multiple waypoints. This, combined with my desire to get it out there, is why the design’s not as good as it should be. I’ll see if I can improve it over the next few weeks. People have also been telling me this needs to be on mobile so I’m going to use this as an excuse to jump into mobile development. I’m excited.