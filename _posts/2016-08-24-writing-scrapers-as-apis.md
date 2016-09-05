---
layout: post
title: "Writing scrapers as APIs"
description: "A neat idea is to write every scraper you code as an API. This provides a nice separation of concerns and turns boring scraping problems into interesting engineering challenges."
keywords: "scraping, apis, domain specific language, dsl, dom manipulation, meta programming"
image_url:
category:
tags: ["#code", "#meta"]
---
{% include setup %}
While building the [Turo scraper](http://dangoldin.com/2016/08/21/downloading-your-turo-ride-history/) I became annoyed that there was no API to make my job significantly easier. Then I wouldn’t have had to go through a variety of hoops and iterations to get the data I needed and would also not have to worry about changes to their page design breaking the script. This got me thinking about an idea to write my scraper in such a way that it’s exposed as an API. In that case I can architect the code so that the retrieval and manipulation of the ride data is completely separate from the scraping code. Then if and when Turo does decide to release an official API all I’d need to do is swap my unofficial implementation out for the official one.

This chain of thought led to me to the challenges of building this on the engineering side. There’s something neat about being able to specify a bit of data through a series of steps. For example, to get the details for a ride the steps may be: 1) login to Turo, 2) navigate to that ride’s receipt page, 3) parse the details, 4) return them as JSON. Another API endpoint may be to retrieve all the rides. This one would be 1) login to Turo, 2) navigate to the first page, 3) fetch all the rides, 4) if there’s a next page, go to it and repeat step 3, otherwise 5) return the list of rides as JSON. For almost every request the first and last steps will be the same but the intermediate step will vary. This becomes even more interesting since we can now start to think about caching the results at the intermediate levels so you can avoid the steps if you’ve already done them in the past. This way we’re incrementally building a “shadow” version of the site and use that for everything we need but keep augmenting it when needed.

Pushing this further we can imagine a scraping specific language that represents the steps involved during a scraping session. The goal here is to replace the code that does the DOM traversal and instead come up with a cleaner and more expressive way that can be applied through code. Sometimes the application will be going to our cache but other times it will require actually navigating to the appropriate page.

I’m excited to try this approach out since it turns a rote scraping exercise into a higher order solution that can scale to other scraping jobs. I only wish I thought of it sooner since by the time I went down this rabbit hole I was mostly done with the actual code so I’ll have to give this a shot on the next scraping job.
