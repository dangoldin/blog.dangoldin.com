---
layout: post
title: "Github Migration Notes"
description: "I migrated by blog to Github pages and wanted to share some notes of the process."
category:
tags: ["#blog"]
---
{% include setup %}
After a few hours of solid work I was able to get my new site up and running on Github pages. I got frustrated with
having too many blogs and decided that I should finally get it together and consolidate everything. Within a few hours
I was able to get it up and running on Github pages up and migrated my old Tumblr and Wordpress posts. Hopefully this
encourages me to write more.

A few notes:
1. The <a href="https://github.com/mojombo/jekyll">documentation</a> for Jekyll is great and makes it very easy to get started.
2. Jekyll comes with a few <a href="https://github.com/mojombo/jekyll/wiki/blog-migrations">migration</a> scripts that made it easy to move the old blog posts over.
3. There's a pretty strong community around it so it's easy to get started with themes. I ended up using <a href="http://jekyllbootstrap.com/">one</a> based on
Twitter Bootstrap.
4. Github pages provide a custom domain option so you can host your entire site in Github. Other than the fact that it's
free, you don't have to worry about your site dying due to heavy load.
5. An issue to be aware of is that the Jekyll parser is pretty strict and doesn't provide very helpful error messages. I
had an issue that prevented some posts from migrating because they had a ":" in the titles. To discover this, I had to
migrate a few posts at a time until I was able to identify the issue.