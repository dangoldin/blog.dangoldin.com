---
layout: post
title: "Programming languages and developer tools"
description: "Lately I've been thinking about the balance between expressive scripting languages that tend to be weakly and dynamically typed but have worse tool support. Strongly and statically typed languages, on the other hand, are less expressive but come with better tooling."
keywords: "programming languages, developer tools, software engineering, strong, weak, dynamically typed, statically typed"
image_url:
category:
tags: ["#meta"]
---
{% include setup %}
As developers we want to be as productive as possible. This encourages us to improve our tools and languages to accommodate new patterns and challenges. Many of these improvements have come due to better hardware since we're better able to cope with slight inefficiencies at the expense of higher productivity. This, coupled with the constant advancement of compilers and interpreters, has led to a massive adoption of scripting languages.

Lately I've been thinking about the trade-offs we accept when we use scripting languages. They're easier to dive into and make it easy to build a prototype. This is especially easier with the growth of open source tools and frameworks.  Unfortunately, these prototypes are difficult to scale as as they and the team working on them get larger in scope. The lack of strong and static types makes it more difficult to undertake large scale refactors and encourages type-related bugs.

Proper tools are a huge boon to productivity but their power depends on the type of language. The more rigid and standardized the language or framework the easier it is to build a higher level tool. The more flexible a language the less a tool can do. This explains why strong, statically typed languages, such as Java, have amazing tools that can automate large scale refactors, identify obvious type specific bugs, and do more advanced static code analysis to identify potential issues. It's possible to get these benefits for weak and dynamically typed languages, such as PHP, but those will only work if your code is using a particular framework or style.

The fact that we're still debating the benefits of one language over another and everyone having their favor indicates that there's no "best" language. The best language will depend on the problem and the constraints and all we can do is figure out what to use for a particular task. My approach is to do quick prototypes in Python but over time architect in such a way that the more performant and complex components can be easily replaced with Java, a strong and statically typed language.
