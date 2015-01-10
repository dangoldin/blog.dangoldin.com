---
layout: post
title: "Limited language codebases"
description: "How many languages should a codebase be? Some like the idea of choosing the perfect language for each project while others like standardizing around a few languages."
keywords: "java, python, jython, limited language codebases, software engineering"
image_url:
category:
tags: ["#meta"]
---
{% include JB/setup %}
I’ve discussed the pros and cons of having a codebase out of a few languages versus having the choice made per project or application with a bunch of people and opinions differ. On one hand, having many languages provides flexibility in choosing the right language for the job and allows engineers to learn and explore new tools. Better habits are encouraged since the interface between components requires a well structured and tested structure rather than relying on code similarity. On the other, it prevents code and component reuse and makes it difficult for teams to standardize around a style and codebase. Also, engineers can’t switch projects as easily as they’d be able to under a common language and prevents the depth of knowledge one gets from working on a shared codebase with others.

I used to think the flexibility of being able to choose the right language for the job was the only thing that mattered but now prefer a limited language codebase. With modern languages, libraries, and tools it’s easy to write good code in any language and there are only a few applications that warrant a specific language, and even then only at scale.

My perfect mix is a static, strongly typed language for large, complex codebases that have high performance needs, a scripting language for one off tasks and processes and for quick experimentation, and JavaScript with a framework for the frontend. The static, strongly typed language makes it much easier to refactor code and improves performance while the scripting languages make it easy to quickly get something working or prototype an idea. My current favorites are Java and python - they’re both easy to write and complement each other’s weaknesses. Something I haven’t had a chance to explore in depth is moving to Jython or another JVM based scripting language - that would provide the benefits of the highly functional and robust Java code from a scripting context.