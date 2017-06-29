---
layout: post
title: "Jersey City garbage truck routes"
description: "Visualizing the routes of garbage trucks in Jersey City."
keywords: "jersey city, open data, 07302, garbage trucks"
image_url: "/assets/static/images/jersey-city-garbage-trucks.png"
category:
tags: ["#code", "#dataviz", "#javascript"]
---
{% include setup %}

<ul class="thumbnails">
  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}jersey-city-garbage-trucks.png" alt="Jersey City garbage trucks"  width="718" height="811" layout="responsive"></amp-img>
    </div>
  </li>
</ul>

A couple of months ago I took a stab at plotting the Jersey City [parking zones](http://dangoldin.com/2015/09/24/mapping-the-jersey-city-parking-zones-ii/) after getting frustrated that the only place to see them was a PDF of streets and addresses. Last week someone left an awesome [comment](http://dangoldin.com/2015/09/24/mapping-the-jersey-city-parking-zones-ii/#comment-2385514530) pointing out that Jersey City has a bunch of open data available, including a near-real time feed of [garbage truck locations](http://www.jciaonline.org/gpsMap.php?view=map), a general [open data portal](http://data.jerseycitynj.gov/), as well as the ability to [request custom data](https://jerseycitynj.seamlessdocs.com/w/records_request). As a first project I decided to capture the movement of the garbage trucks every minute and then plot the results on a map. The results are interesting - some trucks remain local to Jersey City while others end up venturing as far as Newark Airport. The final visualized routes are at [https://dangoldin.github.io/jersey-city-open-data/](https://dangoldin.github.io/jersey-city-open-data/) and the code is up on [GitHub](https://github.com/dangoldin/jersey-city-open-data).

The approach I took was straightforward. After going to the real time map I opened the network explorer in order to see the HTTP requests being made to update the map with the latest truck locations. It was a single URL call that was returning a pipe delimited file containing the location of each truck. By writing a simple wget script and setting it as a cronjob I was able to capture the truck locations every minute. After a day’s worth of data I combined the files and removed duplicate lines (for when the trucks stayed in a single location). After that it was simple to use the Google Maps API to draw a route for each individual truck. The neat thing here is that 90% of the work was done through simple shell commands. One command to fetch the data every minute, another to combine them into a single file, and then a few others to sort and dedup the data. By the time I got to coding all I needed to do was convert the data from a pipe delimited file into something that could be consumed by the Google Maps API.
