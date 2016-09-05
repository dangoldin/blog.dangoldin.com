---
layout: default
title: Dan Goldin
tagline: Thoughts and musing
description: "My thoughts and musings. Trying to write about tech, startups and the entrepreneurial journey."
keywords: "Dan Goldin blog tech startups entrepreneurship"
image_url: "/assets/static/images/photo.jpg"
---
{% include setup %}
<div class="main-content">
  <ul class="posts">
      {% for post in site.posts %}
          <li>
              <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
              <span class="date">{{ post.date | date_to_string }}</span>
          </li>
      {% endfor %}
  </ul>

  <!--
  Do these later once I figure out analytics
  _gaq.push(['_trackEvent', 'Link', 'Click', 'Sidebar Email']);
  _gaq.push(['_trackEvent', 'Link', 'Click', 'Sidebar Github']);
  _gaq.push(['_trackEvent', 'Link', 'Click', 'Sidebar Twitter']);
  _gaq.push(['_trackEvent', 'Link', 'Click', 'Sidebar LinkedIn']);
  _gaq.push(['_trackEvent', 'Link', 'Click', 'Sidebar Feedly']);
  -->
</div>

{% include footer.html %}