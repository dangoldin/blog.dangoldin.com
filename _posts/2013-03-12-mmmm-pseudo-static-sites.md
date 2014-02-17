---
layout: post
title: "Mmmm... pseudo static sites"
description: "My experience building a pseudo static site where the static site is hosted on S3 and is generated dynamically."
keywords: "S3, EC2, static site, web server"
category:
tags: ["#code", "#aws"]
---
{% include JB/setup %}
Reading <a href="http://blog.apps.npr.org/2013/02/14/app-template-redux.html" target="_blank">Katie Zhu’s post</a> on NPR’s news app architecture got me curious about a setup where most of the content is static and can be hosted on S3 and EC2 is primarily used to generate the static content which is then uploaded to S3. The benefits were obvious:

<ul>
<li><strong>Cost:</strong> S3 is cheaper than EC2.</li>
<li><strong>Reliable:</strong> S3 doesn’t go down near as frequently as EC2.</li>
<li><strong>Scalable:</strong> Since it’s primarily static you don’t have to worry about additional capacity or dealing with caching, databases, and all the other fun things.</li>
<li><strong>Simpler:</strong> There are no weird server issues here. As long as you generate the right content and your rendering is good, you don’t need to worry about a web server acting up.</li>
</ul>

I’ve been meaning to write a script that would scrape Hacker News in order to show me the top content I missed while sleeping. I had some time this weekend and decided to give it a go using this “pseudo-static” approach. The result is called Yet Another Hacker News Reader (<a href="http://yahnr.com/" target="_blank">YAHNR</a>) and you can take a look at the code on <a href="https://github.com/dangoldin/yahnr" target="_blank">GitHub</a>. Turns out it was pretty simple to write and the most difficult part was thinking differently about the problem. Whereas I’d keep the content in a database I ended up storing them in static JSON files and instead of having the logic to generate the HTML page live on a web server I have it using Mustache templates.

I’ve become a fan of this approach and think every developer should try it out. It offers a new perspective and most apps will have some components that’ll be able to leverage this sort of setup. Right now, if you run a static blog and want comments, you can use <a href="http://disqus.com/" target="_blank">Disqus</a>. You can use <a href="https://www.firebase.com/" target="_blank">Firebase</a> to build entire web apps that do all the work on the client side. As more and more services become available via Javascript, this approach becomes more and more practical.