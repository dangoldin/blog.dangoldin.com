---
layout: post
title: "AWS Snowcone and my first job"
description: "My first job required me to load and read data from a magnetic tape drive. AWS Snowcone reminds me of how far we've come."
keywords: "magnetic tape drive, software engineering"
image_url: "/assets/static/images/ait-tapes.jpg"
category:
tags: ["#history"]
---
{% include setup %}
<amp-img src="{{ IMG_PATH }}ait-tapes.jpg" alt="AIT tapes" width="640" height="480" layout="responsive"></amp-img>
<p class="caption"><a href="https://en.wikipedia.org/wiki/Advanced_Intelligent_Tape">AIT Tapes on Wikipedia</a></p>

AWS recently launched [Snowcone](https://aws.amazon.com/snowcone/) and it immediately reminded me of my first post-college job. I was a "Business Information Specialist" at ZS Associates, a consulting company with a strong emphasis on leveraging data to support pharmaceutical companies. The industry was setup in such a way that there were these massive vendors that would aggregate pharmaceutical prescription data from pharmacies, trace them to the prescriber (ie doctor), and then sell these back to the pharmaceutical companies. In turn, the pharmaceutical companies would give us this data to run a variety of analyses - ranging from calculating sales rep commissions, to setting their quotas, to identifying off-label prescriptions.

At the time, we would receive these data dumps via magnetic tapes and it was one of my tasks to load this data into a tape reader, run a series of cryptic commands on a central computer, and then start the analyses. We all had the fear of doing something wrong when we were reading the tape which would require someone more experienced to save. I don't recall how large these files were but given it was 2005 I doubt they were more than a few hundred gigabytes. These days I'd be shocked if it's not just transferred digitally - and even more likely it's just processed in the cloud.

It's quite incredible how far we've come. I'm constantly reminded that every generation of software engineer gets further up in abstraction. I never had to deal with interrupts or deal with low level network problems. Yet engineers these days rarely have to deal with physical storage or limited computation resources. We all stand on the shoulders of giants.
