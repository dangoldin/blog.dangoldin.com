---
layout: post
title: "Whatever happened to automatic login?"
description: "It used to be a best practices to automatically redirect users to the logged in version of a site but I've noticed two sites that are forcing the homepage to be seen first."
keywords: "user experience, login, signin, homepage, greenhouse, tallie"
image_url: "/assets/static/images/greenhouse-tallie-trackers.png"
category:
tags: ["#product"]
---
{% include setup %}
When I started building sites one of the accepted principles was to give customers what they want as soon as you can. This manifested itself by taking users to the logged in view whenever they navigated to the site’s homepage. This makes sense - if you know a user’s logged in why waste their time by showing them a homepage that’s designed to sell the product?

Yet recently I encountered two sites, [Greenhouse](https://www.greenhouse.io/) and [Tallie](https://tallie.com/), that will default to the homepage and only load the logged in view when I click the sign in link. One argument is that they both have separate domains for the logged in experience - app.greenhouse.io rather than www.greenhouse.io and usetallie.com rather than tallie.com - but there’s nothing stopping them from redirecting to those as soon as they recognize that a user is logged in.

One explanation is that they’re using different domains for the landing page versus the app but it’s still odd. Greenhouse can set cookies at the wildcard domain (*.greenhouse.io) and Tallie can make the necessary redirect or client side check to see whether a user is logged in. In fact if you actually go to usetallie.com first it will redirect you to tallie.com which, after clicking on “Client Login”, will take you back to usetalie.com.

Another explanation is that they want to save on hosting costs and serve a purely static webpage at first. This way they don’t need any dynamic content and only need to have the dynamic logic for when a user wants to login. This seems like a reach though - these are both enterprise apps and can’t possibly have the traffic load to warrant this degradation of the user experience. Even then the cost of doing a simple login check should be enough for any modern web application to handle.

The last explanation I can think of is that there’s something on the homepage that they want every user to experience. And the only thing that would make sense is tracking and advertising. One potential reason is that the content is so sensitive that they either legally can’t or just don’t want to drop third party trackers inside the app yet still want the ability to target and track users who’ve landed on the home page. A preliminary look using Ghostery bears this out - the homepage for Tallie drops 20 trackers while the in app page drops 6, most of which are for analytics. For Greenhouse it’s not as direct with the homepage dropping 17 while the in app page drops 13, most of which are advertising related. If this is the case I’m disappointed, but not surprised, that user experience was sacrificed to drop some third party JavaScript trackers.

<ul class="thumbnails">
  <li class="span8">
    <div class="thumbnail">
      <amp-img src="{{ IMG_PATH }}greenhouse-tallie-trackers.png" alt="Ghostery trackers: Tallie home + app, Greenhouse home + app" width="1017" height="343" layout="responsive"></amp-img>
      <p>Ghostery trackers: Tallie home + in app, Greenhouse home + in app</p>
    </div>
  </li>
</ul>

I’m searching for other explanations but can’t think of anything that else that would encourage this “anti-pattern” to make a comeback. If anyone has any ideas I’d love to hear them.
