---
layout: post
title: "Python 3 and aiohttp"
description: "I finally got the chance to mess aroun with Python 3's async functionality and had fun using the aiohttp library."
keywords: "python3, scraping, aiohttp, asyncio"
image_url:
category:
tags: ["#code"]
---
{% include setup %}
A few months back I read about [aiohttp](https://aiohttp.readthedocs.io/en/stable/) and asyncio and finally got the chance to play around with it a few weeks back. The project was a quick one-off scrape of a few thousand domains to see what percentage had implemented the [pubvendors.json](https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/pubvendors.json%20v1.0%20Draft%20for%20Public%20Comment.md) spec, an extension of GDPR that allows publishers to specify the vendors they’re working with.

My initial reaction was to do it in the way I’ve done it countless times before: the requests library in a for loop. Instead I decided to actually try something new and use the aiohttp library, a new asynchronous library for Python 3. It took me a little bit of time to figure out how to structure the code and use Python’s new async functionality (which by the way is very similar to modern JavaScript) but the end result is simple for what it does and runs incredibly quickly.

The code below is my attempt at a functional solution - it’s inspired by imitating the aiohttp examples as well as a few helpful blog posts. I’m sure it’s far from perfect and I don’t do much other than print the status but it got me what I needed. If you’re doing any sort of scraping or network heavy work take the time to learn the new async functionality provided in Python 3 - it’s a massive performance improvement.

{% highlight python %}
#! /usr/bin/env python

import aiohttp
import asyncio
import json

timeout = aiohttp.ClientTimeout(total=10)

URLS = "example1.com example2.com example3.com".split(" ")

async def fetch(session, url):
    try:
        async with session.get(url) as response:
            data = await response.text()
            valid_pv = data.startswith('{')
            print(url, valid_pv)
            return valid_pv
    except:
        print(url, 'Error')
        return 'Error'

async def bound_fetch(sem, session, url):
    async with sem:
        await fetch(url, session)

async def run(urls):
    tasks = []
    sem = asyncio.Semaphore(100)

    async with aiohttp.ClientSession() as session:
        for url in urls:
            # Blame the spec for the path, don't worry about HTTPS for now
            full_url = 'http://' + url + '/.well-known/pubvendors.json'
            task = asyncio.ensure_future(bound_fetch(sem, full_url, session))
            tasks.append(task)

        responses = asyncio.gather(*tasks)
        await responses

URLS = [url.lower() for url in URLS if not url.lower().endswith('.app')]

print(URLS)

loop = asyncio.get_event_loop()
future = asyncio.ensure_future(run(URLS))
loop.run_until_complete(future)
{% endhighlight python %}
