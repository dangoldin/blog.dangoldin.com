---
date: "2013-01-09T00:00:00Z"
description: Tips to help you write better web scrapers
keywords: Scraping web HTML BeautifulSoup
tags:
- 'code'
title: Web scraping like a pro
---

I’ve done my fair share of scraping ever since I started coding and just wanted to share some tips I’ve picked up along the way. I think scraping is a great, practical way to get into coding that is also immediately useful. It also forces you to understand the HTML of a page which gives you a great foundation when you’re ready to create your own site.

Hope they’re useful!

<ul>
<li><b>Avoid it if possible</b><br/>
It is a bit odd that I’m starting off with this as the first tip but if there are alternatives definitely take a look at those; many sites come with an API and that may be a much better approach. Otherwise, every time there’s a change in the HTML structure you run a risk of breaking your scraper which will leave you scrambling to fix your code. It’s also a good idea to organize your code such that a change in the HTML for one of the scraped items does not break the others. For example, if you want to get the name and address of a restaurant from Yelp, have one method that will get the name and another that will get the address. This will most likely be less efficient so you’ll need to use your judgement to see whether the risk-speed tradeoff is worth it.
</li>

<li><b>Use a library</b></br/>
Unless you’re doing a one off job, use a library. Every major language has one: Python has <a href="http://www.crummy.com/software/BeautifulSoup/">BeautifulSoup</a>, Perl has <a href="http://search.cpan.org/~cjm/HTML-Tree-5.03/lib/HTML/TreeBuilder.pm">HTML::TreeBuilder</a>, Javascript has <a href="https://npmjs.org/package/htmlparser">htmlparser</a>, and there’s no excuse to not use one. If you ever need to go back to make some changes (which you most likely will need to), you’ll be glad you did. You can also find libraries that let you simulate browser behavior by storing cookies and letting you submit forms. This gives you the ability to scrape sites that require a login. Some sites try to prevent scraping by obfuscating their HTML a bit in which case you’ll need to do either a string replacement or a basic regular expression to get it parsed by the library.
</li>

<li><b>HTML/DOM inspectors are a must</b><br/>
Since scraping requires getting specific elements from a web page, we need to understand the HTML structure of that page. For me, doing this work within the browser works best since it gives you the ability to both see the HTML that’s responsible for a certain element and also gives you a console window which lets you test a scraping approach. The two browsers I’ve used successfully for this are <a href="https://www.google.com/intl/en/chrome/browser/">Google Chrome</a> and <a href="http://www.mozilla.org/en-US/firefox/new/">Firefox</a> with the <a href="http://getfirebug.com/">Firebug</a> plugin.
</li>

<li><b>User agent spoofing</b><br/>
Every time your browser visits a website, it submits a request that contains information about the browser. This is why some sites show a different page when you’re using a phone versus a computer. Every once in awhile you will need to trick the site into sending back the proper page by “spoofing” the user agent. A simple way to check if you need to do this is to view the source of a page in a browser and compare it with what you’re retrieving in your code. If they’re different, try changing the user agent and see if that fixes it.
</li>

<li><b>Be clever</b><br/>
Looking at the source of a page may be a bit overwhelming and there may be easier ways of getting at that information so be clever! An example of two approaches that I stumbled across were to spoof a mobile browser and to call the AJAX url directly. Spoofing a mobile browser tends to give you simpler and more lightweight HTML which is easier to parse. Loading the content via AJAX lets you get at the content quicker and usually in a more structured format, like JSON or XML. These approaches won’t work on every site so you need to do some research and experiment a little to understand how each site is setup. After that you can figure out the best approach for your scraper.
</li>

<li><b>Be specific</b><br/>
When scraping, you want to make your scraping code rigorous enough to not fail if the page structure ever changes. A good rule of thumb is to be specific when you write your scraper. Use a specific id rather than a class since the id is guaranteed to be unique. Similarly, avoid an ordinal approach where you reference the 2nd or 3rd div. Sometimes this is unavoidable but try to see if there’s another approach. Another useful tidbit is to use the more content-descriptive identifier in the page. For example, if you see a div with the address you want to scrape and that div has two classes, “location-address” and “blue-highlight”, use the “location-address” one since that’s defining what the content is, not how it’s displayed.
</li>

<li><b>Save the HTML of the retrieved pages</b><br/>
It’s helpful to save each HTML page you’ve retrieved. It takes a few iterations to get your scraping code working and it’s quicker to just have the HTML on disk so you don’t have to download it every time the script runs. Another advantage is that if you discover a mistake in your code, you don’t have to redownload all the pages you’ve already processed. It only takes a few minutes of work and worth doing.
</li>

<li><b>Monitor actively</b><br/>
Scraping is prone to breaking so make sure you monitor the job as it runs. It’s likely that your code will work well on one page but will fail on others. I tend to write my code to be a bit picky at first while I work out the kinks and once I’m confident in it I will build in some logic to deal with a missing value to make sure it continues to run. As I mentioned earlier, storing the HTML of the page will save you time if you need to update your scraper and need to rerun it.
</li>

<li><b>Throttle your requests</b><br/>
If you don’t want your roommates pissed pissed at you, which will happen when Yelp blocks you for 6 months, throttle your requests. The simple way to do this is to have your code wait in between downloading pages and another approach is to use proxies to hide your true IP address. This will make it seem that the requests are coming from a variety of computers and keep your roommates happy.
</li>
</ul>