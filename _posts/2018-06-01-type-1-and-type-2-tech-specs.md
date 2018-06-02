---
layout: post
title: "Type 1 and Type 2 tech specs"
description: "In the 2015 Amazon shareholder letter Jeff Bezos discusses Type 1 and Type 2 decisions and I think that's a great framework to use when writing tech specs."
keywords: "amazon, tech specs, startups, engineering"
image_url:
category:
tags: ["#management"]
---
{% include setup %}
Every year since Amazon went public, Jeff Bezos writes an insightful and penetrating shareholder letter that covers a variety of business topics driving Amazon’s success. In 2015 he wrote about Type 1 and Type 2 decisions:

>  We want to be a large company that’s also an invention machine. We want to combine the extraordinary customer-serving capabilities that are enabled by size with the speed of movement, nimbleness, and risk-acceptance mentality normally associated with entrepreneurial start-ups.

> Can we do it? I’m optimistic. We have a good start on it, and I think our culture puts us in a position to achieve the goal. But I don’t think it’ll be easy. There are some subtle traps that even high-performing large organizations can fall into as a matter of course, and we’ll have to learn as an institution how to guard against them. One common pitfall for large organizations – one that hurts speed and inventiveness – is “one-size-fits-all” decision making.

> Some decisions are consequential and irreversible or nearly irreversible – one-way doors – and these decisions must be made methodically, carefully, slowly, with great deliberation and consultation. If you walk through and don’t like what you see on the other side, you can’t get back to where you were before. We can call these Type 1 decisions. But most decisions aren’t like that – they are changeable, reversible – they’re two-way doors. If you’ve made a suboptimal Type 2 decision, you don’t have to live with the consequences for that long. You can reopen the door and go back through. Type 2 decisions can and should be made quickly by high judgment individuals or small groups.

> As organizations get larger, there seems to be a tendency to use the heavy-weight Type 1 decision-making process on most decisions, including many Type 2 decisions. The end result of this is slowness, unthoughtful risk aversion, failure to experiment sufficiently, and consequently diminished invention.1 We’ll have to figure out how to fight that tendency.

> And one-size-fits-all thinking will turn out to be only one of the pitfalls. We’ll work hard to avoid it… and any other large organization maladies we can identify.

This has stuck with me over the years and I often com back to it. Lately I’ve been thinking about how this fits in with tech specs. As our applications become more complicated it becomes more important to take the time to think about the impact new code will have and tech specs help clarify that thinking, highlight risks, and get buying from everyone involved. At the same time it’s very easy to get carried away and spend so much time moving things around with actually pushing anything forward.

This is where the Type 1 vs Type 2 approach makes sense. Critical components warrant the extra diligence but many features would benefit from a more iterative approach. The entire Agile development process is designed around getting features built and quickly iterating to get closer to the ideal. Microservices also fit into this idea - by splitting your application into many small components you can work on each one independently without having to worry what impact it will have on the others.

The key question is determining what feature or improvement need a Type 1 spec and which can settle for a Type 2. This is where experience and context are extremely valuable. Many experienced engineers have an intuitive feel for what’s going to be risky and warrants a deeper dive and spend the extra effort there. As engineering teams grow they introduce additional process in order to protect against the edge case but that cost is incurred in every other case that would have benefited from a looser process.

Finding that sweet spot is how you find the balance between moving quickly and moving safely. Amazon’s growth has been incredible and their ability to maintain this mindset is even more impressive.
