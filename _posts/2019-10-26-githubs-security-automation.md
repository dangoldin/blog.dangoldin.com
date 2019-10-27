---
layout: post
title: "GitHub's security automation"
description: "GitHub is now scanning repos for security vulnerabiltiies and opening up PRs to upgrade the affected dependencies."
keywords: "github, security, automation"
image_url:
category:
tags: ["#product"]
---
{% include setup %}
I have a variety of old projects up on GitHub and recently noticed pull requests being opened from "dependabot" to fix security vulnerabilities in old requirements files. Turns out it's a [new feature](https://help.github.com/en/github/managing-security-vulnerabilities/configuring-automated-security-fixes) offered by GitHub that scans repos and submits patches to upgrade insecure versions. This is a great idea - there's very little chance that I'd go through my old and unmaintained repos to upgrade their dependencies but I'd definitely approve and merge a PR that upgrades a few of my libraries.

GitHub is incredibly well positioned to launch a new product line focused on security. They recently acquired [Semmle](https://thenextweb.com/security/2019/09/19/github-acquires-semmle-to-help-developers-spot-security-vulnerabilities/) that further identifies vulnerabilities and a massive market for GitHub. It can be as simple as enabling the scan in a repo's settings and having it automatically monitored and probed for vulnerabilities. Right now it seems to happen on a set interval but it can easily expand to occuring at a pull request level. Imagine having a security scan run every time a pull request is opened - that would be a huge win to companies, developers, and the security of the web.
