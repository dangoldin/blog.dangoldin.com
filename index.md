---
layout: default
title: Dan Goldin
tagline: Thoughts and musing
description: "My thoughts and musings. Trying to write about tech, startups and my entrepreneurial journey."
keywords: "Dan Goldin blog tech startups entrepreneurship"
image_url: "/assets/static/images/photo.jpg"
---
{% include JB/setup %}

<ul class="posts">
    {% for post in site.posts %}
        <li>
            <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
            <span class="date">{{ post.date | date_to_string }}</span>
        </li>
    {% endfor %}
</ul>