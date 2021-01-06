---
date: "2015-11-12T00:00:00Z"
description: I went through each repo on my GitHub account which was a nice walk down
  memory lane and wanted to go over each of the projects briefly talk about each one.
meta_img: null
keywords: code, projects, analysis, open source, github
redirect_from: /2015/11/12/projects-ive-worked-on/
tags:
- 'code'
title: My old projects
---

Writing up my old projects got me browsing through my GitHub account to see what else I've worked on. Some I'll update when I get a good idea while others I completely forgot until going through the list. I noticed two big themes when going through the list. The first is how much nicer it is to have projects that are in static HTML/CSS/JavaScript since they can be hosted publicly on GitHub and don't require any setup or configuration to start using. The other is how many third party libraries or APIs I've used and how much more difficult everything would have been had I had to build everything from scratch. If anyone is interested in forking and ressurecting some of these I'll be glad to polish it up.

- [Twitter archive analysis](https://github.com/dangoldin/twitter-archive-analysis): At some point Twitter announced that they would allow you to export your entire Tweet history and this was a quick pass at a toolkit to analyze the data and do a few simple visualizations. I wrote a blog post about it [here](/2013/01/19/making-sense-of-my-twitter-archive/).

- [Instagram download](https://github.com/dangoldin/instagram-download): A couple of years ago Instagram changed their policies so I decided to close my account. Before that I needed a way to export my photos. This was a simple app/script that spawns a very basic OAuth web application in order to authenticate you with the Instagram API which allows you to export all your photos.

- [Yahoo fantasy football download](https://github.com/dangoldin/yahoo-ffl): I've been in a fantasy football league for almost a decade now and every year I update this script to scrape the data from the Yahoo fantasy football site. The goal was to use this data to develop a statistical model to help me manage my team but I haven't gotten around to starting that yet. Maybe next year!

- [Runkeeper stats](https://github.com/dangoldin/runkeeper-stats): A pretty simple R script to analyze and map the data that can be exported from RunKeeper. I wrote a blog post about it [here](/2014/01/04/visualizing-runkeeper-data-in-r/).

- [Site analysis](https://github.com/dangoldin/site-analysis): I was frustrated by the slowness of various sites and decided to write a script to see what was taking sites so long to load. This analyzes the top Alexa sites and figures out how much data they're loading and of what types - CSS, JavaScript, images, etc. I wrote a blog post about it [here](/2014/03/09/examining-the-requests-made-by-the-top-100-sites/).

- [Relay Rides analysis](https://github.com/dangoldin/relay-rides-analysis): This script analyzes the JSON search results of Relay Rides (now Turo) and combines it with data retrieved using the Edmunds API to identify the cars that have the best financial return. The return is calculated by looking at the estimated price of the car and dividing it by average money earned per day. The obligatory blog post is [here](/2015/06/07/finding-the-optimal-car-to-list-on-relayrides/).

- [Jersey City parking zone mapper](https://github.com/dangoldin/jersey-city-open-data): Jersey City has a ridiculous PDF that lists the streets and addresses that belong to each zone. I painstakingly extracted, cleaned, and geomapped the data in order to visualize the zones on a map.

- [JS tools](https://github.com/dangoldin/js-tools): Probably my most commonly used code. This is a series of tools hosted on ... that provide some basic utilities that help me throughout the day. The most useful lately has been a way of comparing SQL table schemas but it has a bunch of others.

- [Citibike station directions](https://github.com/dangoldin/citibike-station-directions): A web app that breaks every trip down into a walk to a Citibike station, biking from Citibike station to Citibike station, and another walk to the final destination.

- [Meerkat crawl](https://github.com/dangoldin/meerkat-crawl): To help a buddy out I started mapping out the network relationships between users on Meerkat but quickly ran into a scaling issue. I got to around 5 million connections and wasn't able to figure out how to actually visaulize it in a clean and timely way.

- [Yet another Hacker News reader](https://github.com/dangoldin/yahnr): My attempt at modifying the Hacker News experience to show the top stories over a rolling 24 hour period. This was a good exercise in messing around with pseudo static sites where the content is solely hosted on S3 with a script to push new files every few minutes.

- [Python tools](https://github.com/dangoldin/python-tools): A series of Python scripts that I've writtent to deal with various minor issues. I have a ton more that I'll add to this repo when I find them.

- [MySQL class](https://github.com/dangoldin/mysql-class): I taught a MySQL class at [Coalition for Queens](http://www.c4q.nyc/) and this is the series of slides used.

- [Redirector](https://github.com/dangoldin/redirector): A tiny Node.js app that acts similar to the "Switcheroo" Chrome browser extension but able to work across other browsers. It requires a bit of manual set up but then uses the hosts file to intercept web requests and redirect them to another host. A quick write up [here](/2015/02/07/url-redirection-app/).

- [Oyster books crawl](https://github.com/dangoldin/oyster-books-crawl): This was a series of scripts that crawled the Oyster API to pull the available books and then analyzed them to find patterns. A bit sad that this script outlived Oyster itself. I wrote a blog post about it [here](/2014/03/16/fun-with-the-oyster-books-api/).

- [Taxi pricing](https://github.com/dangoldin/taxi-pricing): The goal here was to compare the pricing of taxis across various cities. The two primary dimenisons used were cost per a minute waiting and cost per a mile of driving. Using this information one can then see how different cities and countries value labor costs. The analysis is written up [here](/2013/12/29/taxi-pricing-in-nyc-vs-mumbai/) and [here](/2014/01/09/taxi-prices-around-the-world/).

- [Meeting place finder](https://github.com/dangoldin/meeting-place-finder): A simple script that uses the Google Maps API to come up with an ideal meeting place for a group of people that ensures everyone has the same commute time.

- [Lincoln text analysis](https://github.com/dangoldin/lincoln-text-analysis): An old project that read in the text of Abraham Lincoln's speeches and did a few visualizations of the text. I wrote a blog post about it [here](/2013/02/12/analysis-of-lincolns-words/).

- [Lawdiff](https://github.com/dangoldin/lawdiff): I participated in a journalism meets tech hackathon and this was my team's entry. We looked at proposed state laws and compared them against other states to identify laws that were most likely written by a special interest group. We had a number of false positives but were able to find a bunch of laws that were nearly identical despite being introduced in multiple states.

- [IMDB](https://github.com/dangoldin/imdb): Another early analysis project where I scraped some IMDB data in order to analyze the average age of actors and actresses over time. This came after I watched Misrepresentation and wanted to show that actors and actresses are treated differently in the movie industry. I wrote a blog post about it [here](/2012/05/23/trend-of-actor-vs-actress-age-differences/).

- [Jeopardy parser](https://github.com/dangoldin/jeopardy-parser): I found an open source crawler of Jeopardy clues and made a few updates to make the code multi threaded and able to crawl significantly faster. I then worked with my wife to turn this data into a simple web app that displayed random Jeopardy clues for us to test our knowledge.

- [Map fun](https://github.com/dangoldin/map-fun): Similar to the RunKeeper analysis above this was another pass at summarizing my running data over multiple years but this time leveraging GitHub's map tools. I wrote a blog post about it [here](/2015/01/18/fun-with-githubs-map-tools/).

- [Node toys](https://github.com/dangoldin/node-toys): This was the start of me messing around with Node.js and getting a feel for the framework. One of the fun projects I used it for was evaluating recursive functions using HTTP redirects. I did a quick write up of it [here](/2014/12/31/redirect-recursion/).

- [AWS tools](https://github.com/dangoldin/aws-tools): A super simple script that downloads a list of EC2 instances and then prints the IP, name, and address. The end goal was to make it simple to connect to an instance without going through a manual process of figuring out the appropriate address to use. I ended up not using this that much since it was easier for me to maintain a list of aliases and hosts in a text file. A very basic write up [here](/2014/11/09/some-simple-aws-tools/).

- [Wikilearn](https://github.com/dangoldin/wikilearn): This was one of my favorite projects. The goal was to analyze a Wikipedia article and come up with a visual timeline of all the dates and events that occured. I used an open source library for the visualization piece but ended up running into all sorts of issues analyzing the Wikipedia text. This is where I got a bunch of exposure to NLP but still wasn't able to make it work.

- [Mixergy mp3 download](https://github.com/dangoldin/mixergy_mp3_download): I subscribe to the Mixergy feed and this was my attempt at a script that would just download the available mp3 files and store them for future listening. I'm sure the HTML code of the page has changed since then so the code is most likely broken.

- [Geo data](https://github.com/dangoldin/geo_data): A one of script I wrote to crawl a site and generate a mapping of ZIP codes to counties. I'm not sure why I needed this but I suspect it was for some sort of data analysis project.
