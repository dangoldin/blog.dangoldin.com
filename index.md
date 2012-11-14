---
layout: default
title: Dan Goldin
tagline: Thoughts and musing
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