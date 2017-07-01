---
layout: post
title: "Send private messages to all members of a Slack channel"
description: "I wrote a simple script to get all members of a Slack channel and then send them each a privat message."
keywords: "slack"
image_url:
category:
tags: ["#code"]
---
{% include setup %}
One of my more recent “management automation” tricks was to write a simple script that gets all active members of a Slack channel and then sends them a direct message. I’ll often want to poll the entire team and ask them to fill out a survey or submit a questionnaire but the response rates tend to be poor. But if I send a message to people directly I end up with a much better response rate. It turns out that in my case I was able to get a greater than 100% improvement in response rate by using this approach. In a group channel there’s a lot going on so it’s likely that some people don’t see the message or decide they’ll do it later but inevitably forget. But by messaging them directly it sends a pretty strong signal that I care about the response and prompts people to just get it done. Despite the success I am hesitant to overuse it since it may lead to people ignoring these direct messages as well. As they say, with great power comes great responsibility. As usual, the code is up on [GitHub](https://github.com/dangoldin/automating-management/blob/master/spam-channel-members.py
) and suggestions and pull requests are welcome.
