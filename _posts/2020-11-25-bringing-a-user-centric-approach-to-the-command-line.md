---
layout: post
title: "Bringing a user centric approach to the command line"
description: "Rather than have a variety of flags at the command line just infer what the user wants to do."
keywords: "command line, scripts, software engineering"
image_url: 
category: 
tags: ["#code"]
---
{% include setup %}
I have a [small script](https://github.com/dangoldin/health-stats/blob/master/get_health.py) that takes an export of Apple Health data and then dumps it into a MySQL database that I then use to visualize my health metrics over time. My prior workflow was to open the app and then Airdrop the file over to my computer at which point I'd unzip it, copy the relevant file over into the script directory, and simply run the script.

Clearly this was not the smoothest experience and I figured it was finally time to deal with it. I've seen scripts take a variety of inputs supporting all sorts of formats - for example a "-f" flag for a file or a "-d" for a directory - but I was never a fan of that. I want the script to take whatever is thrown at it and then just infer whatever the user intended. It's not an approach you'd want in every use case but for a simple script I liked the elegance.

The implementation was simple enough - if it's a zip file, handle it as a zip file; if it's a directory, append export.xml and handle that as a file; otherwise assume it's a standard file. I'm surprised most developers don't adopt this approach - it's bringing a more user-centric experience to the command line.

{% highlight python %}
if fn.endswith('.zip'):
    print('Handling as zip file')
    with zipfile.ZipFile(fn) as fz:
        with fz.open(os.path.join('apple_health_export', 'export.xml')) as f:
            xmldoc = minidom.parseString(f.read())
elif os.path.isdir(fn):
    print('Handling as directory')
    xmldoc = minidom.parse( os.path.join(fn, 'export.xml') )
else:
    print('Handling as export.xml file')
    xmldoc = minidom.parse(fn)
{% endhighlight %}
