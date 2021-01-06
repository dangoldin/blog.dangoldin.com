---
date: "2017-04-09T00:00:00Z"
description: We've made a ton of progress in self driving cars but we haven't really
  considered what happens when malicious actors purposefully try to trick the code.
meta_img: null
keywords: self driving cars, optical illusions, machine learning, artificial intelligence
tags:
- 'meta'
title: Optical illusions and self driving cars
---

While catching up on the latest self driving car news and digging into the way neural networks work I started thinking of the ways self driving cars would navigate optical illusions or seemingly impossible physical scenarios. I’m by no means an expert but current machine learning and artificial techniques don’t build a relational representation of the world but instead focus on statistical ways of classifying the information they see and then making decisions off of that information.

<div class="video-holder">
  <amp-vimeo data-videoid="208642358" layout="responsive" width="600" height="340"></amp-vimeo>
  <p class="caption"><a href="https://vimeo.com/208642358">Artist sets a trap</a> for a self driving car by surrounding it in a white border.</p>
</div>

This approach works in the vast majority of cases but one can imagine a world where a malicious third party can easily mess with the data going on. About a month ago an artist “trapped” a self driving car by surrounding it in a white circle. That was just an art piece but imagine such actions by malicious actors. Some examples can be someone painting a realistic picture of a pothole, a street sign, or even a person on the road and seeing how self driving cars would react. A proper self driving car would likely be cautious under uncertainty and wouldn’t know how to navigate these situations. Even worse one can probably develop a whole set of these optical illusions that are easy for a human to dismiss as entertaining yet fake but will cause significant problems for self driving cars.

Over time they’ll adapt with the addition of new sensors and a slew of data but it is a real concern I haven’t seen discussed much. Even something as simple as driving in rain or snow is a problem when you’re a computer that learned to drive in sunny weather on perfect road conditions. People, on the other hand, have an innate understanding of physics and how the world works which allows them to easily adapt to new environments. I can learn to drive on a sunny road but within a few minutes feel comfortable driving in the rain and snow. Existing self driving cars don’t work that way and would need to have thousands of hours of training on these new conditions to be comfortable enough to drive on them. It’s impossible to predict the future but I suspect the real advances will come from a combined model - one that combines the existing machine learning techniques with one that’s able to model the relationship and physics of the world.
