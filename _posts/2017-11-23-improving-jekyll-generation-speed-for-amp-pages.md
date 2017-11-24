---
layout: post
title: "Improving Jekyll generation speed for AMP pages"
description: "Every since I moved my blog over to AMP it took a very long time to build it due to the CSS inlining requirement. Now it takes 15 seconds."
keywords: "jekyll, amp, build, speed"
image_url:
category:
tags: ["#code"]
---
{% include setup %}
Last September I migrated my blog over to AMP which entailed a variety of challenges ranging from converting every img tag to an amp-img tag with some additional metadata to figuring out how to support Disqus. I tackled the critical ones but the one I never got to was speeding up the build time since it had no impact on the actual reader experience and just slowed down my build and commit process. During this Thanksgiving break I finally decided to do something about it after discovering that jekyll has a profiling feature. It’s expected that the bulk of the time is spent generating the post pages but running the profiler highlighted that the majority of the work wasn’t in the actual content block but in generating the head element - something that shold similar from page to page.

Filename                                                                   | Count |     Bytes |    Time
---|---|---|---
_layouts/default.html                                                      |   570 | 16663.07K | 230.544
_includes/themes/amp/default.html                                          |   570 | 16658.06K | 229.425
_includes/head.html                                                        |   570 | 11934.62K | 228.908
_layouts/post.html                                                         |   562 |  3595.71K |   5.542
_includes/themes/amp/post.html                                             |   562 |  3590.77K |   4.640
_includes/metadata.json                                                    |   570 |   461.90K |   3.392
_includes/setup                                                            |  2181 |    14.91K |   2.345
_includes/tags_list                                                        |   559 |    73.99K |   0.874
_includes/footer.html                                                      |   570 |  1167.83K |   0.256
sitemap.xml                                                                |     1 |    62.20K |   0.245
_includes/styles.scss                                                      |   570 |  5736.18K |   0.115
archive.html                                                               |     1 |   120.81K |   0.114
_includes/posts_collate                                                    |     1 |   120.80K |   0.105
atom.xml                                                                   |     1 |  1739.08K |   0.063
tags.html                                                                  |     1 |   108.78K |   0.056
_includes/header.html                                                      |   570 |   709.16K |   0.056
_includes/pages_list                                                       |     2 |   103.64K |   0.047
index.md                                                                   |     1 |   106.79K |   0.020
_layouts/page.html                                                         |     6 |   246.62K |   0.010
sitemap.txt                                                                |     1 |    34.99K |   0.010
done in 245.117 seconds.| | |

After taking a quick look at the head.html file it became clear what the problem was: AMP requires the CSS to be inline which combined with my usage of SCSS which needed to be transpiled to CSS on every page. Unsurprisingly, this was an expensive operation and the solution was to somehow get rid of it. While we can’t avoid inlining the CSS what we can do is transpile the SCSS to CSS once and include the contents in every post. Even better is to read the contents of the resulting CSS file once and then just inject it whenever necessary via the [jekyll-include-cache](https://github.com/benbalter/jekyll-include-cache) extension. Applying these tactics gets the blog generation time down to 15 seconds from over 4 minutes. It does require the CSS file to be regenerated every time the SCSS file changes but given the infrequency it’s not a huge issue. This doesn’t make it any quicker to write posts but it does feel good to get such a big improvement in blog generation speed.

Filename                                                                   | Count |     Bytes |    Time
---|---|---|---
_layouts/default.html                                                      |   570 | 16663.10K | 4.277
_layouts/post.html                                                         |   562 |  3595.71K | 4.104
_includes/themes/amp/default.html                                          |   570 | 16658.09K | 3.984
_includes/head.html                                                        |   570 | 11934.64K | 3.607
_includes/themes/amp/post.html                                             |   562 |  3590.78K | 3.306
_includes/metadata.json                                                    |   570 |   461.92K | 2.420
_includes/setup                                                            |  1612 |    11.02K | 1.367
_includes/tags_list                                                        |   559 |    73.99K | 0.700
sitemap.xml                                                                |     1 |    62.20K | 0.251
archive.html                                                               |     1 |   120.81K | 0.119
_includes/posts_collate                                                    |     1 |   120.80K | 0.111
atom.xml                                                                   |     1 |  1739.13K | 0.065
tags.html                                                                  |     1 |   108.78K | 0.064
_includes/pages_list                                                       |     2 |   103.64K | 0.050
_includes/header.html                                                      |   570 |   709.16K | 0.041
index.md                                                                   |     1 |   106.79K | 0.019
sitemap.txt                                                                |     1 |    34.99K | 0.011
_layouts/page.html                                                         |     6 |   246.62K | 0.008
done in 15.077 seconds.| | |
