---
layout: post
title: "Gmail's autocomplete"
description: "Gmail has a new feature that autocompletes messages and it's surprisingly accurate."
keywords: "google, gmail, autocomplete, privacy"
image_url:
category:
tags: ["#product"]
---
{% include setup %}
Ever since I’ve been managing I’ve spent an inordinate amount of time in my inbox. What’s both sad and amazing is how accurate the new Gmail autocompletions (officially called [Smart Compose](https://ai.googleblog.com/2018/05/smart-compose-using-neural-networks-to.html)) have gotten. They’re incredibly accurate for common phrases and are likely leveraging very similar technology to what Google is using for their autocomplete search. It’s great for finishing off that last sentence and even acts as a real time phrase thesaurus that helps suggest alternate phrasing.

It does make you think about the information Google is collecting to make this happen. By using Gmail we’re already trusting Google with our sensitive information but this feels like a step beyond. The tech blog linked above addresses this concern by indicating that it’s only used for common phrases but it’s still sending the message contents to the autocomplete servers to get a prediction.

<amp-img src="{{ IMG_PATH }}gmail-autocomplete-request.png" width="1110" height="736" alt="Gmail autocomplete request" layout="responsive"></amp-img>
<p class="caption">Gmail autocomplete request</p>

<amp-img src="{{ IMG_PATH }}gmail-autocomplete-response.png" width="1070" height="696" alt="Gmail autocomplete response" layout="responsive"></amp-img>
<p class="caption">Gmail autocomplete response</p>

Google has numerous businesses beyond advertising and has a strong incentive to get privacy right but it’s still shocking how embedded Google is in our lives - personally and professionally.
