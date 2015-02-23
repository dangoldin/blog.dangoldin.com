---
layout: post
title: "Lessons from Node"
description: "I played around with Node.js for the past couple of months and wanted to share some thoughts around my experience."
keywords: "node, javascript, engineering"
image_url:
category:
tags: ["#javascript"]
---
{% include JB/setup %}
I've decided to move on from <a href="http://nodejs.org/" target="_blank">Node</a> after messing around with it for the past couple of months. And while the experience is still fresh I wanted to share my thoughts. I’m far from an expert so take all these with a grain of salt.

- Node’s powerful and in the right hands can make a developer extremely productive. I was able to write a few simple applications surprisingly quickly given my limited knowledge and I can see why so many opt to use it. At the same time it requires a commitment to the Node-centric way which can be tough depending on your background. JavaScript has functional scope and the benefit of Node depends on an asynchronous approach which can be difficult to write.
- It’s drastically different from writing client side JavaScript. Instead of worrying about supporting multiple browsers you have to write code that’s maintainable and supports a growing number of use cases. This isn’t that much different from any other backend language but came as a surprise to me since I expected it to be somewhat similar to writing front-end code.
- JavaScript is very difficult to write well. Despite (and possibly due to) JavaScript’s pervasiveness it’s tough to find good code. It’s so flexible that it’s easy to get started but that flexibility makes it critical to keep pruning and cleaning your code. Everyone has their own way of writing JavaScript which can be damaging when working as part of a large team on a large application. Many dismiss JavaScript as being an introductory language but a case can be made that it actually requires an expert to do well. Whereas other languages have rules that prevent new developers from making mistakes, JavaScript lets you do whatever you want.
- Testing is paramount. Due to JavaScript’s flexible nature it’s important to test thoroughly. When writing Java I rarely have to worry about typos or scope issues since my IDE will let me know immediately but there’s no such luck with JavaScript. I discovered a ton of issues in my toy applications as soon as I started writing tests.
- Lots of resources to learn about it online. After committing to working on some Node I was able to find a ton of useful examples and resources online. The community is large and there are a ton of useful libraries on npm but it’s tough to identify the best ones. There seem to be multiple versions of every library and for someone new it can be a bit overwhelming trying to pick the right one to use.

I enjoyed my experience with Node and learned a ton but it’s style and approach just don’t fit the way I work. JavaScript’s lack of structure makes it difficult for me to imagine using it on large, team-based projects. Of course there are best practices to make it work but that’s something that would need to be part of the engineering culture versus something that’s part of the language itself. Node is great for small, experienced teams who want to get an app up and running quickly but if the application has complex logic or will require a large team to maintain I would opt for a more rigid, higher performance language. I’m biased towards the JVM and have recently picked up Scala as my “experimental” language. The goal is to do a similar post on Scala once I get more experience.