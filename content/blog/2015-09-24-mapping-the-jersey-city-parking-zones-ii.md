---
date: "2015-09-24T00:00:00Z"
description: Finally finished the first pass at visualizing the Jersey City parking
  zones.
meta_img: /image/jersey-city-parking-zones.png
keywords: jersey city, parking zones, 07302, open data
tags:
- 'code'
- 'dataviz'
- 'python'
- 'javascript'
title: Mapping the Jersey City parking zones II
---


<ul class="thumbnails">
  <li class="span8">
    <div class="thumbnail">
      <img src="/image/jersey-city-parking-zones.png" alt="Jersey City parking zones" data-width="442" data-height="640" data-layout="responsive" />
    </div>
  </li>
</ul>

I finally had the chance to finish up the Jersey City parking zone mapping project from a couple of weeks ago. The goal was to take a PDF of valid addresses for each zone and visualize it on a map. The result can be found at [https://dangoldin.github.io/jersey-city-open-data/](https://dangoldin.github.io/jersey-city-open-data/) and includes the zones that had enough geocodeable addresses to generate a valid polygon.

As expected, most of the work was going from the PDF to a set of valid geocoded addresses. The biggest challenge was extracting the text from the PDF and transforming them into addresses that could be accurately geocoded. Once I had that it was simply modifying the Google Maps <a href="https://developers.google.com/maps/documentation/javascript/examples/polygon-simple" target="_blank">polygon example</a> to generate a list of polygon and finding a library to overlay the zone labels.

The two things I want to change are to modify the visualization to also include a street level visualization rather than relying on a polygon since it’ll make the information bit more useful as well as incorporate the street cleaning hours. If anyone has that data I’d love to get it.

As usual, the code is up on <a href="https://github.com/dangoldin/jersey-city-open-data" target="_blank">GitHub</a> and pull requests are welcome.
