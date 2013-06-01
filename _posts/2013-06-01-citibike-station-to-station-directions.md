---
layout: post
title: "Citibike Station to Station Directions"
description: "I wrote a simple web app that allows you to get cicycling directions from one Citibike station to another."
keywords: "citibikenyc, bike sharing, google maps api"
image_url: "/assets/static/images/citibikes-nyc.jpg"
category:
tags: []
---
{% include JB/setup %}
<div class="thumbnail">
    <img src="{{ IMG_PATH }}citibikes-nyc.jpg" />
    <p>Photo by <a href="https://twitter.com/rafat/status/339046904979660800" target="_blank">@rafat</a></p>
</div>

On Wednesday, I took my first bike ride using New York City's new <a href="http://citibikenyc.com/" target="_blank">Citibike</a> program. So far it's been great but one issue I ran into is being able to plan a trip. Google offers cycling directions from place to place but doesn't take into account the Citibike stations. On the other hand, the Citibke app shows the rental stations but doesn't make it easy to find directions from one station to another unless you're already at one of them.

I decided to actually do something about it and wrote a <a href="http://dangoldin.com/citibike-station-directions/" target="_blank">little web app</a> that lets you pick two Citibike stations and retrieves the cycling directions between them using the Google API. It's definitely not perfect and the user experience needs to be improved but it does what it was designed to do.

What I find amazing is how simple it was to write the app - it took me less than 90 minutes to go from having an idea to having something that's usable. The list of stations are available in <a href="http://citibikenyc.com/stations/json" target="_blank">JSON from the Citibike site</a> and Google makes it very easy to use their services to show a map and get directions.The best part is that this app is completely static since it's just using client side Javascript and Google's APIs. I've written about this <a href="http://dangoldin.com/2013/03/12/mmmm-pseudo-static-sites/">before</a> but I'm convinced that more and more services will become available through APIs which will lead to more and more apps and sites being built this way.