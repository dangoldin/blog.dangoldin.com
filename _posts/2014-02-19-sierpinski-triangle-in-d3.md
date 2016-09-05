---
layout: post
title: "Sierpinski triangle in D3"
description: "There's a neat iterative algorithm to generate a Sierpinski triangle that I implemented in D3/JavaScript."
keywords: "sierpinski triangle, D3, visualization, JavaScript"
category:
image_url: "/assets/static/images/sierpinski-triangle.png"
tags: ["#dataviz", "#javascript", "#code"]
custom_js: ["d3.sierpinski.js"]
---
{% include setup %}

There's a little known algorithm for constructing a <a href="https://en.wikipedia.org/wiki/Sierpinski_triangle" target="_blank">Sierpinski triangle</a> that is surprisingly easy to implement.

1. Start the three vertices that form a triangle
2. Pick a random point inside the triangle
3. Pick a random vertex
4. Go halfway from a the random point to the vertex and mark that point
5. Go to step 3 using the result of 4 as the starting point

I'm trying to get better at D3 and thought it would be a good exercise to code it up. The resulting image is below (generated using 10,000 points) and the JavaScript is in the following <a href="{{ STATIC_PATH }}js/d3.sierpinski.js">file</a>. Next up is to write a new script that allows a user to specify the number of vertices and the adjustment factor - the <a href="https://en.wikipedia.org/wiki/Sierpinski_carpet" target="_blank">Sierpinski carpet</a> can be generated with 4 vertices and a distance adjustment factor of a third rather than a half.

<div id="canvas-triangle">
</div>

{% include D3 %}

{% include custom_js %}