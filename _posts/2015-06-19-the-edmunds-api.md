---
layout: post
title: "The Edmunds API"
description: "I had to use the Edmunds API a couple of weeks ago and was pleasantly surprised by how easy and simple it was to use."
keywords: "edmunds, api"
image_url:
category:
tags: ["#product"]
---
{% include setup %}
As part of the <a href="/2015/06/07/finding-the-optimal-car-to-list-on-relayrides/">RelayRides analysis</a> I needed to estimate the price of a car and stumbled across the <a href="http://developer.edmunds.com/" target="_blank">Edmunds API</a>. I came in with some low expectations but was pleasantly surprised by how well it worked. I thought I’d need to go through a data cleanup process to make sure I was using the correct arguments in the HTTP requests but somewhat remarkably the Edmunds API was able to properly handle nearly every request.

It’s unbelievable how happy a good API makes me. Dealing with various edge cases is a huge time suck so having an API that works as expected the first time you try it is incredibly refreshing and highlights the amount of crappy APIs we’ve all had to deal with. I’d expect this to come from a small, product focused company or at least be built in house but it turns out Edmunds partnered with <a href="http://www.mashery.com/" target="_blank">Mashery</a> to develop their API. It definitely makes a case against keeping development in house.
