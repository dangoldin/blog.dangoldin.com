---
layout: post
title: "Don't trust client side data"
description: "If you’re designing systems that collect and use data from the client you need to make sure your backend code is capable of dealing with the inevitable trash."
keywords: "analytics, data, pipeline"
image_url:
category:
tags: ["#data"]
---
{% include setup %}
At <a href="http://triplelift.com/" target="_blank">TripleLift</a>, we collect a variety of data - some on the client side and some on the server side. One thing we’ve learned is that you should never trust or make assumptions about client data, no matter how great your JavaScript is. You will always see odd data coming in and your data processing pipeline needs to be designed to take this into account. In our case, one of our jobs assumed (and the client side code confirmed) that particular events would be unique - this allowed us to write a much simpler query without having to worry about many to many joins. Unfortunately, we saw that the aggregate data didn’t match up with what we saw in the logs and after some investigating we discovered that we were seeing some duplicate rows generated on the client side. Taking a deeper look it turned out that there were some plugins and scripts that were making duplicate requests to our analytics server.

There may be ways to deal with this better on the client side as well as smarter backend logic to deal with potential duplicates but the easiest fix is to just assume you will have messy data and prepare accordingly. In our case it entailed writing more complicated queries that were robust enough to not require clean input. It took a little bit longer to write and design but our pipeline can now handle weird input without impacting the final results. If you’re designing systems that collect and use data from the client you need to make sure your backend code is capable of dealing with the inevitable trash.