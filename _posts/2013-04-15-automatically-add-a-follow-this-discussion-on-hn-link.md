---
layout: post
title: "Automatically add a \"Follow on HN\" link"
description: "I wrote a simple plugin to automatically insert a Follow this discussion on HN link using client side Javascript"
keywords: "coding, hacking, jQuery, javascript, hacker news"
category:
tags: []
---
{% include JB/setup %}
This past weekend I wrote a <a href="https://github.com/dangoldin/follow-discussion-hn" target="_blank">small jQuery plugin</a> that automatically inserts a “Follow this discussion on Hacker News” link on a recently submitted web page. The motivation was to automate the current workflow that consists of first submitting a post to Hacker News, getting the URL of the comment thread, and then updating the original post to link to the thread. I also wanted to see if it could be done entirely in Javascript so that the code could be included on static HTML pages and not require a backend server.

After some research, I settled on the following approach:

1. Use <a href="https://www.firebase.com/" target="_blank">Firebase</a> to store a mapping of URL to the Hacker News thread id. I chose Firebase since it provides a way to read/write using Javascript.
2. Use the <a href="http://hndroidapi.appspot.com" target="_blank">HN Droid API</a> to retrieve recently submitted HN posts for a given user via JSON.
3. If any of the recently submitted posts match the provided url, store that thread id in Firebase and execute the user defined callback function.

It works as expected but has a few limitations:

1. It relies on Firebase and doesn’t use authentication so someone can modify the database to point to another comment thread.
2. It relies on a 3rd party Hacker News API so if that ever goes down it won’t be able to pull recently posted links to Hacker News.
3. The HN API call only pulls the most recent submissions so the plugin will not be able to get the comment thread for older posts.
4. Since Firebase prevents certain characters from being used in a key, I do some string replacement to clean the string which would allow someone to cause a string collision.
5. The HN API isn't real time and uses a cached version so it may take a bit of time for the link to get retrieved.
6. The code hasn’t been thoroughly tested so may have some weird errors. It’s also my first “real” jQuery plugin so it may not follow best practices.

In general, I’m a proponent of offloading as much work as possible to the client side and believe this will become the norm as the technology improves. We’re already using Disqus to handle comments and Firebase as a database and I expect more services to become available via client side Javascript. This will keep pages simple, reduce server costs, and outsource non-core components to specialized vendors.