---
layout: post
title: "Downloading your AIM buddy list"
description: ""
keywords:
image_url:
category:
tags: []
---
{% include setup %}
Given that AIM is shutting down and my nostalgia I thought it would be nice to fetch all my screennames for posterity.

AIM doesn't make it easy since they only populate the page when the screennames are in view.

A simple script that just fetches all the usernames visible on the screen at once. Manually have to go through screen by screen and run the middle block until all the names are fetched and then print them to the screen.

To be a it more efficient you can zoom out so it only takes a few scrolls to get everyone.

{% code javascript %}
usernames = []

els = document.getElementsByClassName('user-item');
for (var i = 0; i < els.length; i++) {
    console.log(els[i].textContent);
    usernames.push(els[i].textContent)
}

console.log( usernames.join("\n") );
{% endcode %}
