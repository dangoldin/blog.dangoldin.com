---
layout: post
title: "Static site search"
description: "I'm a huge fan of static sites and think it would be straightforward to implement a simple version of search. I plan on giving it a shot on this blog."
keywords: "javascript, static sites"
image_url:
category:
tags: ["#meta"]
---
{% include JB/setup %}
I’ve written <a href="http://dangoldin.com/2013/03/12/mmmm-pseudo-static-sites/" target="_blank">previously</a> about the appeal of static sites and recently came up with another example of how powerful the setup can be. The gist is that the site’s content is static HTML, CSS, and JavaScript but the relevant underlying content is refreshed on a recurring basis with a separate job. This allows you to host the entire site on S3 and avoid maintaining your own web server.

Normally, implementing a site search requires a backend to accept queries, break them down into the appropriate keywords, and hit a search index to find the matching documents. A simple implementation would index the site using a server side script and store the results in a JSON file that could then be access on the client side. The client side JavaScript would need to be intelligent enough to parse the query string and reference the right index file but a simple solution is easily doable. I’m surprised more simple sites haven’t adopted this approach and I’ll give it a shot with this blog to see what issues I run into.
