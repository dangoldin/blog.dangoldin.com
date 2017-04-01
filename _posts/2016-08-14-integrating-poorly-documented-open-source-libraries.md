---
layout: post
title: "Integrating poorly documented Open Source libraries"
description: "Open Source is incredible but integrating undocumented libraries is tough. Seeing how others have used it through GitHub search is a simple way to see how it should be used."
keywords: "open source, documentation, free software, libraries, code"
image_url:
category:
tags: ["#code"]
---
{% include setup %}
Open source is great: if you find the right library you’re able to save a ton of time and get code that’s been through the gauntlet that you can confidently incorporate into your system. Unfortunately many open source libraries are partially baked with documentation that doesn’t always accompany the rapid development of the code. This leads developers to repeatedly cross reference their code with some archaic documentation and then wonder why it’s not working as expected. This is proportional to the obscurity of the library - popular libraries will have most of their kinks worked out but esoteric ones that are likely maintained by one person won’t have the polish.

Yet it would be nice to take one of these libraries and build off of it. The simple answer is to reach out to the maintainer and ask questions. I always get excited when someone reaches out with a question about how to use one of my open source libraries; I’m not at that scale where this is burdensome and it’s encouraging that someone is actually using my code. When this doesn’t work a neat trick is to [search GitHub](https://github.com/search) for usage of that code. Most documentation provides a simple starting tutorial and assumes the user can take it from there. More often than not this doesn’t work well and you have to look at the source code to understand how the code works, what arguments the methods expects, and the order in which they should be called. By looking at actual usage of the code you can see how others have integrated these libraries in actual applications rather than toy examples. This works incredibly well for open source libraries in that middle area where they’re not popular enough to have everything figured out yet are useful enough to have had numerous developers wrangle them into their code. Many new and popular libraries fall into this bucket so if you want to use code that’s just becoming popular leveraging GitHub’s code search is a great way to start.
