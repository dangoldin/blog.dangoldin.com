---
custom_js:
- d3.sierpinski.v2.js
date: "2014-02-21T00:00:00Z"
description: A quick JavaScript that allows you to specify your own Sierpinksi generation
  strategy.
meta_img: /image/sierpinski-fun-4-0.4.png
keywords: Sierpinksi, gasket, triangle
tags:
- 'dataviz'
- 'javascript'
- 'code'
title: More Sierpinski fun
---
As a follow up to my previous <a href="http://dangoldin.com/2014/02/19/sierpinski-triangle-in-d3/">post</a>, I modified my Sierpinski generation code to allow specifying the number of sides and the distance ratio for each iteration of the loop. The Sierpinski triangle can be generated with 3 sides and a distance ratio of 0.5. Increasing the number of sides and decreasing the ratio leads to some interesting patterns - it looks as if for a given N, we get N shapes each consisting of N shapes. I suspect this is a fractal pattern - similar to the triangle - but it's difficult to confirm given a fixed screen resolution. I'd love to know what's going on here and whether there's a relationship between the number of sides and the distance ratio.

<ul class='thumbnails'>
  <li class="span3">
    <div class='thumbnail no-border'>
      <img src="/image/sierpinski-fun-10-0.2.png" alt="N=10, ratio=0.2" data-width="181" data-height="180" data-layout="responsive" />
      <p class="center">
        N = 4, ratio = 0.4
      </p>
    </div>
  </li>
  <li class="span3">
    <div class='thumbnail no-border'>
      <img src="/image/sierpinski-fun-10-0.2.png" alt="N=10, ratio=0.2" data-width="181" data-height="180" data-layout="responsive" />
      <p class="center">
        N = 10, ratio = 0.2
      </p>
    </div>
  </li>
</ul>

<!-- TODO: Get this working
<form class="form form-horizontal" id="sierpinski-options-form">
  <div class="control-group">
    <label class="control-label" for="id-sierpinski-sides"># of sides</label>
    <div class="controls">
      <input type="text" name="sides" id="id-sierpinski-sides" placeholder="3,4,.."/>
    </div>
  </div>

  <div class="control-group">
    <label class="control-label" for="id-sierpinski-ratio">Distance ratio</label>
    <div class="controls">
      <input type="text" name="ratio" id="id-sierpinski-ratio" placeholder="0.5" />
    </div>
  </div>

  <div class="control-group">
    <div class="controls">
      <button id="id-sierpinski-generate" class="btn btn-primary">Generate!</button>
    </div>
  </div>
</form>

<div id="canvas">
</div>

{% include D3 %}

{% include custom_js %}

-->
