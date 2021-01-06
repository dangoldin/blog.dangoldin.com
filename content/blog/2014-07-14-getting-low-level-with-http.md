---
date: "2014-07-14T00:00:00Z"
description: I'm working on a project using Netty - a low level framework that forces
  you to create your own HTTP requests from packets. A wonderful learning experience.
meta_img: null
keywords: netty, http, low level, web framework
tags:
- 'meta'
title: Getting low level with HTTP
---

I’m currently working on an application using <a href="http://netty.io/" target="_blank">Netty</a>, a low level network framework, and it’s given me a wonderful education of the HTTP protocol. Prior to this project, every web application I’ve worked on has leveraged a framework that removed the low level details. They built the HTTP requests from multiple packets, took care of various encoding issues, dealt with keep-alive connections, came with built-in support for sessions and cookies, and in general made it extremely easy to get a web server up and running.

Writing a Netty application is completely different than using a framework such as Django, Ruby on Rails, or Node. You get a much better understanding of how TCP and HTTP work and doesn’t actually take that much time once you get the hang of it. Building an HTTP request from individuals packets was completely novel and finally getting it to work made me feel the same way as when I built my first site. If you’re interested in or currently working in web development and you haven’t worked with a low level framework, take a weekend off and give it a try - it’ll give you a newfound appreciation of how the modern web works.