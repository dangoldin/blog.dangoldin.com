---
layout: post
title: "Getting the most out of log4j"
description: "When doing Java development a huge win comes from using log4j effectively. Done right it can separate the signal from the noise and make it significantly easier to navigte your code."
keywords: "java, log4j, logging"
image_url:
category:
tags: ["#code", "#java"]
---
{% include setup %}
Something that’s incredibly helpful when writing Java code is customizing <a href="http://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/PatternLayout.html" target="_blank">log4j</a>. There are a variety of configuration options and learning just a little bit about them can make you notably more productive. I’ve found two features that have sped up my development cycles.

One was updating my PatternLayout to include the filename and line of each message. With Eclipse, this allows me to quickly jump to the relevant code block whenever anything looks odd rather than having to first open the file and then search for that particular message.

{% highlight properties %}
log4j.appender.CONSOLE.layout=org.apache.log4j.PatternLayout
log4j.appender.CONSOLE.layout.ConversionPattern=%d %p (%t) [%c] (%F:%L) - %m%n
{% endhighlight properties %}

The other was to pick the appropriate log level at the package level. If I’m working on a single package I'll reduce the logging level of other packages to make the relevant messages stand out. This is especially handy when you incorporate eager third party packages that drown out your own messages with their own.

{% highlight properties %}
log4j.logger.com.dan.package.one.logging=WARN
log4j.logger.com.dan.package.one.logging.ClassName=INFO
log4j.logger.com.dan.package.two=DEBUG
log4j.logger.com.dan.package.two.working_on=TRACE
{% endhighlight properties %}

My style of development is to rely on logs more than the debugger so these two have made my life a lot easier. In general. logging is an important tool for all developers and yet few tend to tweak the default settings. By understanding the available configuration options you’re able to tweak them for whichever problem you’re solving. This may not seem like a huge win but when you’re running the same program hundreds of times a day the small efficiencies add up.