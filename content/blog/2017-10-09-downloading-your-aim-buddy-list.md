---
date: "2017-10-09T00:00:00Z"
description: AIM will be shut down in December but there's a lot of sentimental value
  in the buddy list so use the following code to download it before it's lost forever.
meta_img: null
keywords: AIM, buddy list, screen names
tags:
- 'code'
title: Downloading your AIM buddy list
---

While writing the [most recent post](/2017/10/07/farewell-aim/) about the impending AIM shut down I became curious and logged in to see what what I’ve been missing. The application felt worse but seeing my buddy list made me nostalgic and going through the usernames brought back some fond memories as I tried to remember who each screen name belonged to.

I’m a bit of a hoarded, across both the physical and digital worlds, so didn’t want to lose my buddy list after the shut down. Unfortunately, AIM doesn’t make it very easy to download a copy of your buddy list so I came up with a crude but effective approach. Normally I’d look at the source code, identify the HTML elements containing what I wanted, and write a little bit of code in the JavaScript console to extract what I needed. I tried this approach in the AIM web client but it turns out that they update the HTML code to only show the screen names that are actually in view and it wasn’t obvious where the full list of screen names was being stored.

My extremely simple approach was to open the console and write some code to capture the screen names visible on the screen, add them to a running list, and then scroll further down the page and repeat the process. The efficiency here is limited by the number of screen names visible at any one time so probably the cleverest part of the entire script was just zooming way out to get the list to be as long as possible. Then it only took a few scrolls to get the list of screen names which could then be printed and copied over from the JavaScript console. I didn’t even bother with the deduplication step since I could easily remove duplicates by piping the results into the uniq shell command and then piping it back to my clipboard.

Make sure to download your buddy list before the scheduled shutdown on December 15.

{{< highlight javascript >}}
// Start by logging in to www.aim.com and zoom way out

// Create the initial array that we will
usernames = []

// Run this a bunch of times after scrolling a bit to get the next set of screen names
els = document.getElementsByClassName('user-item');
for (var i = 0; i < els.length; i++) {
    console.log(els[i].textContent);
    usernames.push(els[i].textContent)
}

// Just write to the screen but there will likely be duplicates unless you did your scrolls perfectly.
console.log( usernames.join("\n") );
{{< / highlight >}}
