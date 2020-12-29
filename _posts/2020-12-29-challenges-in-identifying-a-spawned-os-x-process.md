---
layout: post
title: "Challenges in identifying a spawned OS X process"
description: "While working on a simple proof of concept to show images I ran into some challenges identifying a spawned process in OS X and came up with a hack to get around them."
keywords: "python, os x, subprocess, process, threads"
image_url: 
category: 
tags: ["#code"]
---
{% include setup %}
As part of my project to come up with a utility to deduplicate images on S3 I started working on a proof of concept to validate the flow and functionality. I know that the AWS S3 API has everything I need but I wanted to see whether I could use the built in OS tools to handle the image comparison without resorting to a webapp. The steps I had in mind were pretty simple:

1. Use the AWS S3 API to fetch a list of all file paths and sizes
2. Identify potential duplicates by looking at matches between extensions and sizes
3. Display the potential duplicates and have the user pick the desired action - keep one, both, or neither.

I know that I could do 1 and 2 easily but I was curious how well I could accomplish 3 which turned out to be surprisingly tricky and even now I'm not too happy with the solution I hacked together.

To start, I just downloaded two images as a starting point and used Python's subprocess module to open them up in the default application - which on OS X was Preview. That part worked well but what was difficult was automatically closing the Preview application. The reason is that "open" does not actually open the files but instead offloads that to OS X which then opens the Preview application. I had the idea that my script would be the parent process of Preview but there didn't seem an obvious way to link the two.

After a bit of research my first attempt was to just derive the process ids. The idea here is that I can get a process id for each of the times I call subprocess.Popen and then increment it in order to get the process id for the Preview application. It worked reasonably well but I ran into cases where there were other system processes launching during execution and I didn't want to make any assumptions - especially if someone has other default applications. This led me to do a fair amount of documentation reading - both of the [subprocess](https://docs.python.org/3/library/subprocess.html) module as well as the [psutil](https://psutil.readthedocs.io/en/latest/) library - but neither gave me what I needed.

In essence, I needed to identify the processes that were started as a function of my script but wasn't able to figure this out using the functionality available in the processes themselves. I don't know if this is due to some security restrictions or solely a problem in OS X but even looking at Activity Monitor it didn't seem there was any connection between Preview and the Python script.

But looking at Activity Monitor gave me the idea to leverage knowledge of the open files. Since I know the names of the files I can find out which process has them open and then kill that process. This turned out to be exactly what I needed to get the proof of concept working but there are a few gotchas. One is that if the Preview application has already been opened to look at other files do I really want to be killing it? The other is that I don't control the layout so the images that are automatically opened may be stacked which ruins the experience.

{% highlight python %}
#! /usr/bin/env python

import os
import subprocess
import time
import signal
import psutil

# Keep existing set so we don't kill application if it's already open
existing_pids = set(psutil.pids())

fn1 = 'UNADJUSTEDNONRAW_mini_742.jpg'
fn2 = 'UNADJUSTEDNONRAW_mini_866.jpg'

viewer = subprocess.Popen(['open', '-W', fn1])
viewer2 = subprocess.Popen(['open', '-W', fn2])

time.sleep(2)

pids_to_kill = set()
for filename in [fn1, fn2]:
    pids = subprocess.check_output(['fuser', '--', filename])
    for pid in map(int, pids.split()):
        pids_to_kill.add(pid)

print("pids to kill", pids_to_kill)

for pid in pids_to_kill:
    if pid not in existing_pids:
        os.killpg(pid, signal.SIGUSR1)
{% endhighlight %}

While working on the script gave me a better understanding of the way processes work in OS X and the tools available my desire to avoid a webapp may have been for naught. It's likely simpler, faster, and a better experience to just build a simple webapp.
