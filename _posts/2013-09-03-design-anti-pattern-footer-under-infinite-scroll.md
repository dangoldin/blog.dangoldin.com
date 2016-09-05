---
layout: post
title: "Design anti pattern: footer under infinite scroll"
description: "If you have a site that uses infinite scroll make sure you don't have anything clickable in the footer. It's a terrible design pattern."
keywords: "design, anti-pattern, footer, infinite scroll, linkedin"
image_url: "/assets/static/images/damn-it-linkedin.png"
category:
tags: ["#design"]
---
{% include setup %}

<ul class="thumbnails">
  <li class="span7">
  	<div class="thumbnail">
  		<a href="{{ IMG_PATH }}damn-it-linkedin.png">
      		<img src="{{ IMG_PATH }}damn-it-linkedin.png" alt="LinkedIn infinite scroll and footer" />
      	</a>
    </div>
  </li>
</ul>

I’m not sure why this needs to be said but if your site offers infinite scroll make sure you don’t have anything clickable in the footer. I’d expect the occasional site to succumb to this but I was surprised to see it happening on LinkedIn. All I wanted to do was read the developer docs but unfortunately the link is located in the footer which provides a nice challenge of clicking the link before new content is loaded. I wasn’t quite able to get it and ended up just searching Google for the LinkedIn documentation link. If your site’s content is only accessible via a Google search you have a problem.