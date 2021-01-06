---
date: "2017-06-20T00:00:00Z"
description: When I migrated my blog to AMP I didn't update the RSS XML generation
  which caused images to not render since AMP has them in a proprietary amp-img tag.
meta_img: null
keywords: amp, rss, atom xml, reader
tags:
- 'code'
title: Getting AMP into RSS
---

A little less than a year ago I [migrated](http://dangoldin.com/2016/09/05/ampifying-my-blog/) this blog over to [AMP](https://www.ampproject.org/) which required a lot of small tweaks - ranging from automating the markup changes to getting the Disqus plugin to work. One thing I didn’t get a chance to finish until earlier this week was supporting the RSS feed. This blog is hosted on GitHub pages which is powered by Jekyll and comes with a pretty powerful templating engine. One of the predefined templates was the ability to generate an RSS atom feed. It worked by taking the content of each post, escaping it, and concatenating them together into a massive XML file.

With standard pages this approach worked great but fails with AMP since AMP has it’s own markup that isn’t supported by common RSS readers. The biggest problem is that AMP uses the &lt;amp-img&gt; tag to include images while standard HTML has the simple &lt;img&gt; tag. This led to the text content loading fine but none of the images making their way through. Luckily, Jekyll provides a simple way of creating your own template tags and I came up with a super simple one to just do a global replace of amp-img with img. This isn’t a perfect solution since the amp-img tag contains some additional functionality but it’s good enough for getting the images to make their way back into the RSS feed. While testing the XML generation I also realized that the img tags were still using relative paths which is fine when consumed via the browser but not so great when done via an RSS reader. A tag later and this is fixed. I’m hopeful that this is the last of my blog’s AMPification but if there’s anything odd still happening do let me know.

{{< highlight ruby >}}
module AMPToImgFilter
  # Very naive for now
  def amp_to_img(html)
    html.gsub! 'amp-img', 'img'
  end
end
{{< / highlight >}}

{{< highlight html >}}
 {% raw %}
<!-- Use the custom tags -->
<content type="html">{{ post.content | amp_to_img | relative_to_absolute_paths | xml_escape }}
 {% endraw %}
{{< / highlight >}}
