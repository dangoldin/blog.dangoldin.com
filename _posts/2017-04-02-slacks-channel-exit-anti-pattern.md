---
layout: post
title: "Slack's channel exit anti pattern"
description: "Slack notifies the entire channel when you leave which discourages people from leaving channels. This is an antipattern."
keywords: "slack, anti pattern, behavior psychology"
image_url:
category:
tags: ["#design"]
---
{% include setup %}
Slack has grown incredibly quickly and solves a difficult problem but I can’t help but notice that some design antipatterns that increase Slack usage but don’t benefit the user. I came across one of these designs on Friday when I saw someone leave a channel. They no longer found the channel useful or were only there to answer a few questions but as soon as they left everyone in the channel saw the message “so and so has left the channel.”

While helpful to let others know they’re no longer in the channel I suspect it may send a negative signal to the remaining people. Imagine if you’re in a channel and see an executive or manager leave - sure you understand that they don’t want to be overwhelmed and want to focus but I can’t help but think that it may still cause some discomfort. This forces people to stick around in channels they may not be interested in and unless they’ve gone the extra step of muting the channel they end up seeing a notification every time a new message is posted.

Now imagine this happening hundreds of times a day. A ton of people end up in channels they don’t necessarily want to be in but aren’t comfortable leaving. This may make Slack’s engagement numbers better but hurt overall productivity. The nice thing is that I reached out to Slack suggesting a “silent exit” and it does look as if they’re aware of the problem and working on a few addition channel notification options.
