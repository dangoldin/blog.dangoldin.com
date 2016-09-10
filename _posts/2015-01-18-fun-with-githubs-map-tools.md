---
layout: post
title: "Fun with GitHub's map tools"
description: "I discovered that GitHub had a series of tools to render maps and decided to play around with them."
keywords: "github, tools, "
image_url:
category:
tags: ["#code"]
---
{% include setup %}
After discovering <a href="https://github.com/blog/1772-diffable-more-customizable-maps" target="_blank">GitHub's map visualization</a> feature I needed to give it a shot on the only GPS dataset I had available, my runs from RunKeeper. Unfortunately, the RunKeeper files were in GPX while GitHub expects either geoson or topjson. A short <a href="https://github.com/dangoldin/map-fun" target="_blank">Python script</a> later and I was able to convert the GPX data into <a href="http://geojson.org/geojson-spec.html" target="_blank">geojson</a>. The other hiccup I encountered was that the generated geojson file was too large for GitHub to visualize. My 232 runs contained 162,071 latitude/longitude pairs which turned into a 4MB file - not massive but large enough for GitHub to refuse to visualize it. The simplest solution was to generate multiple files but that made it impossible to see all my runs on a single map. The other solution was to see if converting to topojson would reduce the file size. That helped but I wasn't able to find the right balance between compression and quality and ended up with a hybrid approach - two files, one per running year, each in topojson.

<script src="https://embed.github.com/view/geojson/dangoldin/map-fun/master/runs.2013.topo.json"></script>

<script src="https://embed.github.com/view/geojson/dangoldin/map-fun/master/runs.2013.topo.json"></script>

<!-- <script src="https://embed.github.com/view/geojson/dangoldin/map-fun/master/runs.2014.topo.json"></script> -->

The entire process was painless and quick. The geojson format was straightforward to generate and GitHub does a great job rendering it. The entire process took an hour and I had to read the <a href="https://github.com/mbostock/topojson/wiki/Command-Line-Reference" target="_blank">topojson utility docs</a> to figure out how simplification worked. One thing I didn't get to do was explore GitHub's map diffs but will try to in the next couple of weeks.
