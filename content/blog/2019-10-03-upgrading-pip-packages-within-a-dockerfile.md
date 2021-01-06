---
date: "2019-10-03T00:00:00Z"
description: It's not as simple as it should be to bulk update pip packages in a requirements.txt
  file while using Docker.
meta_img: null
keywords: django, python, docker, dockerfile
tags:
- 'code'
- 'devops'
title: Upgrading pip packages within a Dockerfile
---

I have an old project, [makersalley.com](http://makersalley.com), that used to run on an old version of Python (2.7) and an archaic version of Django (1.4). Earlier this year I overhauled it to run on a newer version of Django (1.11) and Dockerized the entire setup which required all sorts of changes and library fixes.

Last night, I took it one step further by upgrading it to the latest versions of both Python (3.7) and Django (2.2). The most difficult part was figuring out how to upgrade to the latest versions while being tied down to Docker. For example, changing the Python version in the Dockerfile caused many of the packages in requirements.txt to not build but because they were all executed within Docker I had to get the entire requirements.txt fixed before that step would succeed. Similarly, it wasn’t clear which versions of the packages in the requirements.txt depended on one another and upgrading all of them blindly would have been a fool's errand. It also turned out that one package, MySQL-python, was not available in Python 3+.

The ideal workflow for me would have been to upgrade the Python version first, install the latest version of Django, and then go through and upgrade each of the pip packages one at a time resolving issues along the way. This approach was not possible using Docker and a requirements.txt file. I could have come up with a minimal Dockerfile and then entered the container to do the individual upgrades but that didn't seem worth and instead I did everything through a virtualenv.

Somewhat surprisingly, updating the code itself was quick and easy and only required changing about 130 lines which were primarily Python 2.7 vs 3.7 syntax errors.
