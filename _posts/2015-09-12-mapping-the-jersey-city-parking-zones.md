---
layout: post
title: "Mapping the Jersey City parking zones"
description: "There was no easy way to see the parking zones of Jersey City on a map so I decided to use the PDF they provided to generate a map."
keywords: "jersey city, parking zone s, 07302"
image_url:
category:
tags: ["#code", "#dataviz", "#python", "#javascript"]
---
{% include JB/setup %}
A big part of owning a car in Jersey City is dealing with the street parking. Unfortunately, Jersey City does not make it easy to see what the zones are - instead there's a PDF that lists the streets and address ranges that are part of each zone. After getting frustrated with this annoyance for too long I decided to just take matters into my own hands and visualize the zones through some scripting. This is a relatively simple project that still involved some false steps so I wanted to document the process and provide a peek into my development approach.

The first step was extracting the address ranges from the PDF into something more digestible by a program. I tried using a PDF converter but that ended up mashing up the addresses together so I took a step back and came up with a very simple script that took copy and pasted text from the PDF and cleaned it up into a list of addresses.

To do a quick proof of concept I started with a single zone for now and see whether I could get it visualized the way I wanted to using Google Maps. After converting the address range into a starting and end address I attempted to use the Google Maps API to do the geocoding (going from an address to a latitude/longitude). Unfortunately, due to the volume of addresses I wanted geocoded I quickly hit the rate limit cap. I introduced a throttle between calls but that ended up causing the page to take too long to load.

Even then, the geocoding wasn't 100% accurate and I needed to figure out how to visualize the resulting zones from a set of coordinates. The first visualization atttempt was to just connect the coordinates with a series of lines but as expected that led to just a jumbling of lines. As a quick fix I sorted the coordinates clockwise by figuring out the center of the coordinates, converting each coordinate as an angle from the center, and then sorting the resulting points by angle. This led to a "starburst" shape that was neater but still didn't represent the actual zone.

It's not done just yet and I'm working on two improvements - one is moving the actual geocoding work to an offline script so I don't have to deal with the rate limiting issue and two is using a convex hull algorithm to come up with a polygon that encapsulates each of the addresses in a zone that should improve the visualization. Feel free to follow along on <a href="https://github.com/dangoldin/jersy-city-parking-mapper" target="_blank">GitHub</a> and offer any feedback, suggestions, or even a pull request.

Writing good code on the first try is tough and part of the process is attempting an approach that may require backtracking. The challenge is realizing when something isn't working and being able to take a step back and revisit the actual goals and understand the constraints. Some projects do end up perfect on the first try but the vast majority require multiple iterations to get right. Experience helps us understand the constraints and tools we're working with but as the popular saying goes: "Wisdom comes from experience. Experience comes from bad judgement."
