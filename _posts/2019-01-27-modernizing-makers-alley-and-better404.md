---
layout: post
title: "Modernizing Makers Alley and Better404"
description: "I accidentally broke two old sites and decided to use it as an opporutnity to modernize them."
keywords: "tech debt, django, devops"
image_url:
category:
tags: ["#code"]
---
{% include setup %}
Years ago I started two companies, [Makers Alley](http://makersalley.com) and [Better404](https://better404.com), and while they were both failures I didn’t have the heart to shut down the site. I put a lot of heart into building them and just pulling the plug felt cold. Instead I just paid the annual hosting fee and had them both running on a small AWS instance. This worked fine for years but unfortunately while I was messing around with Terraform I ended up terminating the instance entirely. Beyond the fact that they were both running incredibly old libraries with no available pip libraries the instance also contained the only copy of the database. I wa stuck with having the source code from a few years ago and not much else. Rather than give up I decided to use this as an opportunity to learn a bit and modernize them using some of the newer technologies.

The one saving grace was that for both repos I found an old commit containing a database dump so I didn’t have to start from scratch. It took me a bit of time to find them but I discovered a set of git commands to find the deleted file and the associated commit which allowed me to retrieve the file.

{% highlight sh %}
git log --diff-filter=D --summary | grep delete | grep dump.tgz
git log --oneline --follow -- dump.tgz
{% endhighlight %}

Getting the data back took care of a big problem and the rest was making sure that the applications actually ran. They were both created using old versions of Django - 1.4 for Makers Alley and 1.5 for Better404. Remarkably, everything in the Better404 requirements.txt file installed properly and I was able to both cleanup the config files and get everything working using Docker and docker-compose in a single evening session. Makers Alley, on the other hand, proved more difficult. Many of the dependencies in the requirements.txt file refused to install and I got stuck in a loop of library upgrades where upgrading one library required an upgrade to another library. At some point I just gave up and upgraded everything to the latest version and did a scrubbing session where I just stripped away all unused functionality in order to reduce the amount of dependencies. One of the biggest changes was upgrading Makers Alley to support Elasticsearch 6.5 from 1.9 - there were so many breaking changes that I had to go through the code and update the way indexing and search was implemented since the old libraries had no support for the latest version of Elasticsearch. Fixing Makers Alley took a holiday weekend to get right but I’m happy with the overall result - it’s now running on Django 1.11 and every library is at the latest version.

The entire process was fun and both made me appreciate how much easier it is do develop using Docker. At the same time, it’s a reminder of how difficult and frustrating dependency management can be. Had I been actively developing the apps I would have made an effort to constantly be upgrading the libraries and resolving issues as they came up rather than doing a large scale cleanup with 5 years worth of package upgrades.
