---
date: "2015-01-04T00:00:00Z"
description: I've been working on a simple project, jsonify.me, that lets users create
  a JSON object of whatever they want and host it under their own domain.
meta_img: null
keywords: jsonify.me, quantified self, node
tags:
- 'product'
title: Introducing jsonify.me
---

Over the past few weeks I’ve been experimenting with Node.js and wanted to share the project I’ve been working on, <a href="http://jsonify.me/" target="_blank">jsonify.me</a>. It’s an “API only” product without an interface other than a <a href="http://jsonify.me/" target="_blank">documentation page</a>. The idea is to allow anyone to have a publicly accessible URL endpoint that can contain whatever information they want as long as it can be stored as a JSON object. In my case, I have all sorts of semi-structured data that I want to make accessible and keeping it under my domain (json.dangoldin.com) makes it easy to access for whoever is savvy enough to figure it out.

The code is still in the early stages and needs to be cleaned up but the core functionality is there. It works by uploading each user’s JSON object to S3 and then doing a redirect whenever a GET request is made to that user’s subdomain. In my case I registered an account with jsonify.me, got an authentication token, set json.dangoldin.com as my subdomain, updated the CNAME record of json.dangoldin.com to point to domains.jsonify.me, and then made a POST request to json.dangoldin.com with my JSON object which uploaded it to S3 under my username.

I love the idea of a semi-structured format evolving over time as more and more people standardize around common field names as well as a set of third party apps that will migrate data from other services into these JSON objects. Imagine being able to have a service that will authenticate with LinkedIn and then extract the relevant data and put it as JSON into your object or a service that fetches new posts from your blog and adds them to your JSON object. There’s still a long way to go and the code right now is very minimal but I’d love to see people give it a shot and suggest improvements.
