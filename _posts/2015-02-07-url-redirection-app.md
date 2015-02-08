---
layout: post
title: "URL redirection app"
description: "Switcheroo makes it easy to test development code on a production site by rewriting the URL but unfortunately it only works on Chrome."
keywords: "switcheroo, testing, client side testing"
image_url:
category:
tags: ["#code"]
---
{% include JB/setup %}
At <a href="http://www.triplelift.com" target="_blank">TripleLift</a>, we’re big fans of the <a href="https://chrome.google.com/webstore/detail/switcheroo-redirector/cnmciclhnghalnpfhhleggldniplelbg?hl=en" target="_blank">Switcheroo</a> plugin and rely on it during development to test new versions of our code. It allows us to override a production hostname with one of our development boxes so we can see how our code works on a live site. So if a production site is referencing a JavaScript file at http://production-environment/script.js we use Switcheroo to have it reference the development file at http://dev-environment/script.js. Unfortunately, it’s only available for Chrome which makes it more difficult to run browser specifics tests on other browsers.

To deal with this problem we came up with a small redirection app that runs locally and is browser agnostic. Instead of entering the desired host to redirect in the extension, you add it to the local <a href="http://en.wikipedia.org/wiki/Hosts_%28file%29" target="_blank">hosts file</a>, mapping it to localhost. This bypasses the DNS lookup and sends all requests to that domain to the locally running server which then serves a redirect to the desired URL. The <a href="https://github.com/dangoldin/redirector" target="_blank">code’s up on GitHub</a> with a readme that should hopefully be easy to follow.