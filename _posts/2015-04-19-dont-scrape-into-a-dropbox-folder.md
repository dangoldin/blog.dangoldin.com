---
layout: post
title: "Don't scrape into a Dropbox folder"
description: "I ran a data scraping script over two days that ended up clobbering my Dropbox folder. Exciting times."
keywords: "scraping, dropbox, lesson learned"
image_url: "/assets/static/images/scraping-tons-of-files.png"
category:
tags: ["#data"]
---
{% include setup %}
Thursday night I kicked off a data scraping project for a friend. Since I was going to be out of town until Saturday night I decided it would be a good idea to run the job on my beefy home computer and write the results into a Dropbox folder so I’d have it accessible on my other computer while traveling.

Unfortunately, when I finally looked at my Dropbox Friday night it was completely busted. In addition to being over my 6 GB limit, the syncing was completely stopped and Dropbox was using up my entire CPU. I had to figure out a way to deal with this while holding on to the scraped data.

Since Dropbox was entirely unusable, I disabled it on my travelling machine and did a bit of investigation with the data I had with the hope of running it on the complete dataset when I got back home to my primary computer. When I finally got back home I saw that the scraping job was still running and had downloaded around 791 thousand files into one folder that totaled 11.7 GB.

<div class="thumbnail">
  <amp-img src="{{ IMG_PATH }}scraping-tons-of-files.png" alt="11.7 GB over 11.7 GB"  width="392" height="133" layout="responsive"></amp-img>
</div>

The solution seemed straightforward - move the files out of Dropbox into a separate directory and then let Dropbox recover itself. Sadly that didn’t quite work. First, doing a “mv * targetfolder” ended up causing an issue with the globber since there were too many files for bash to handle. The fix was simple - move the entire folder and then rename it to the destination folder - but it took me a few attempts until I stumbled unto it. Second, Dropbox was in such a wretched state that it refused to do anything. The solution here was a bit more involved. I had to log in to the Dropbox site, remove the data from the UI, unlink Dropbox from my computers via the website, and then relink them via the app on the computer.

Two lesson here: do not save your results in Dropbox and when downloading hundreds of thousands of files do not save them in a single folder.