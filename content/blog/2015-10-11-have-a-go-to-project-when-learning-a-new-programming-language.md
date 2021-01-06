---
date: "2015-10-11T00:00:00Z"
description: There are tons of tools to learn a new programming language from simple
  exercices to walkthroughs to large open source projects but the best way is to have
  your own project that you've implemented across a variety of languages.
meta_img: null
keywords: learning to code, new programming languages, software design
tags:
- 'meta'
title: Have a 'go to' project when learning a new programming language
---

At the beginning of the year I wanted to learn a bit of Node.js and decided the best way was to code up a simple project. The idea was <a href="http://jsonify.me/" target="_blank">jsonify.me</a>, a simple API only app that provided people a simple way to generate their own JSON profiles that they would then be able to map to any domain name, for example <a href="http://json.dangoldin.com" target="_blank">http://json.dangoldin.com</a>. The primary goal was to get some real experience with Node.js rather than rely on some walkthroughs and tutorials. Since then I’ve used it as the starter project to learn new languages. I’ve coded it up in Scala and have just finished up the Go version.

The project has a few nice properties that force me to gain a pretty good understanding of the language and how a typical project plays out. Despite being a pretty simple program it touches a bunch of modern web components. The code needs to be able to parse and modify HTTP requests and headers in order to support redirection and authentication. In addition, the code comes with a working LinkedIn OAuth example and gives an opportunity to incorporate an OAuth library. The other big thing is integrating the AWS S3 client library which provides a simple way to get exposure to the AWS ecosystem.

Everyone who’s learning new languages should have a “go to” project. It’s okay to go through a series of tutorials to get the basics of a language but nothing beats working on a project you’ve already done across a variety of other languages. In addition to coding up a project in a new language you get a feel for the way the program is structured and laid out. Over time you start getting an intuitive feel for how one language works compared to another and can understand the tradeoffs between them. Having your own project also allows you to optimize towards the skills you want to learn - in my case I wanted them to be focused on the web and allow me to work with the various HTTP elements as well as a few third party libraries. Tutorials and walkthroughs are great to get a feel for the language but they don’t force you to think through the design or architecture which are critical when working on larger projects. It’s amazing how much effort that takes up when learning a new language and the only way to learn it is to experience the frustration of doing it.
