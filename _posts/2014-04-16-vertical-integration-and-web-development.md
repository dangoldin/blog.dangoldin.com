---
layout: post
title: "Vertical integration and web development"
description: "We tend to split apps into frontend and backend. It may make more sense to think about our apps in terms of functionality which may lead to a tight coupling between the frontend and backend."
keywords: "coding, architecture, development, engineering, coding"
image_url:
category:
tags: ["#code"]
---
{% include setup %}
Lately, I’ve been thinking about tightly coupled systems and how prevalent JavaScript has become on the web.

Tightly coupled systems scare me. They will undoubtedly break and bring down big chunks of your infrastructure. The solution is to think about your system in terms of various independent services that are responsible for only doing a few things well that won’t bring down the rest of the system if they fail. This approach makes it easier to maintain your code as it grows and also reduces the risk of massive failure. The challenge is figuring out how to break your project down into these services and being sure to revisit that decision as you grow.

JavaScript is pervasive in the modern web. I’ve been using Ghostery for the past couple of months and am constantly amazed by how many external JavaScript libraries are loaded on popular sites. It’s not surprising to see dozens of libraries being included and evaluated. They range from advertising, to tracking, to adding functionality, and it’s incredibly rare to see just one.

On the surface, these two thoughts are different but their intersection is interesting. Similar to the way these sites include additional functionality by loading external scripts, we can compartmentalize various functionality into standalone components and make them available to our applications via simple APIs. In the case of a web app, we’d expose functionality through client side JavaScript libraries that would be coupled with a backend that does the heavy lifting. Rather than slicing horizontally, which is what typical apps do by having a separate UI and a s separate API, we can learn from these external libraries and slice vertically by function.

We integrate tools such as Google Analytics, Stripe, Disqus and MixPanel into our apps without a second thought and we should strive to write our code the same way. This allows us to choose the right tool for the job. If it’s a simple, low volume API that will be used internally, go ahead and do it quickly in a scripting language such as Python, Ruby, or PHP. If, on the other hand, the service will get a ton of requests, you can implement it in Node. In the extreme case of a site that’s using a ton of content, it may make sense to have the content hosted on S3 and just being retrieved by JavaScript called from the client - then the backend can be solely dedicated to providing the dynamic functionality.

This is a pretty extreme approach with it’s own set of challenges. It will definitely require more thought up front on how you want your application to work and will require a different approach than we’re used to but I feel this is the right approach if you’re building for scale. Every application should be broken down into components to see which would benefit from different approaches. If it turns out that two components have drastically different requirements, it might make sense to build them as completely standalone services and only communicate amongst each other via APIs.

This is nothing new, people have been preaching <a href="https://en.wikipedia.org/wiki/Service-oriented_architecture" target="_blank">service oriented architectures</a> for decades but I think we’ve forgotten it when thinking in terms of “web.” It feels more intuitive to split services in terms of frontend and backend but the right approach is to think in terms of actual functionality. It may turn out to be that tightly coupling the frontend and the backend is the right decision.