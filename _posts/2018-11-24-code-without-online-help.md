---
layout: post
title: "Code without online help"
description: "It's too easy to find answers online to our coding problems but it's much better to take the time to solve it on your own locally before going online for help."
keywords: "python, coding, software development, inspect module"
image_url:
category:
tags: ["#code"]
---
{% include setup %}
Whenever I need some coding help my first step is to do an online search which usually leads me to either the library documentation or a StackOverflow page. This is a poor habit and something I’m trying to move away from. While I’m almost always online it’s dangerous to rely on the internet to code - both because there will be times you may not have internet access but also because you lose the ability to do your own investigation, discovery, and critical thinking.

There will always be cases where I’ll have to do a search but even then I first make it an effort to solve the problem locally. The following are some tools that have become indispensable for me when doing my local discovery. Note that Python is primary programming language so the last 3 tools are Python-specific but other modern languages should have equivalent tools.

- history. While not specific to Python I find the history command incredibly useful. I make my history retention as long as I can and then pipe it into grep to see the way I used various commands and their arguments. I may not even know the command itself but by grepping for filenames or directories I’m usually able to figure out what I was looking for.
- man. Short for manual and works just like one. Type man in front of any Linux command and you’ll get an exhaustive, but dense, explanation of the command with a description of the options. The documentation is dense and I have to attempt an option a few times to make sure it’s working as expected but it’s powerful having all the information in a single place. Even better is making it a habit to use man on commands you already use since you will inevitable discover some new functionality.
- dir (Python). Now we’re beyond the shell but dir works similarly to the command line and lists the attributes of an object. I find this really helpful when using an open source library that is sparse on documentation since I can easily see the methods that the objects I’m using have. It’s often enough that just seeing the name gives me what I need.
- [__doc__](https://docs.python.org/3/library/functions.html#dir) (Python). Combined with the above typing __doc__ after an object gives you the docstring of that attribute. This is usually a quick blurb documenting the function - both what it does as well as the argument(s) it takes. This combined with the dir function above makes it pretty easy to write a quick script to dump all the attributes of an object along with their documentation. For example you can do this for the “set” module: print("\n".join([a + ": " + str(getattr(set, a).__doc__) for a in dir(set)]))
- [inspect](https://docs.python.org/3/library/inspect.html) module (Python). While researching the above I came across the inspect module which provides some advanced object inspection functionality - including a cleaner for of the __doc__ approach above. I’m still getting a feel for it but just by reading the linked docs you can get a feel for how it can be used to inspect Python objects.

There must be a ton of other tools I didn’t cover and I’d love to learn them. I’m a big believer in being as independent of a developer as one can be. A good way is to push one’s craft without relying on outside support. It’s too easy to do a search and get what you want but then it’s one ear out the other. Instead, the way to become stronger is by struggling and doing things the hard way with the hope that they stick over time.
