---
date: "2018-04-17T00:00:00Z"
description: Rather than securing applications through hoops they should be secure
  through walls.
meta_img: null
keywords: security, devops, travis ci, outage
tags:
- 'devops'
title: Secure at the network level
---

Two weeks ago Travis CI published a [postmortem](https://blog.travis-ci.com/2018-04-03-incident-post-mortem) describing an outage that was caused by a script that truncated all tables on a production database. The script was designed to run against a test database but instead ended up wiping the production one. The remediation steps highlighted are a great start but I’m surprised they didn’t pick the most obvious one - protect systems at the network level.

Relying on confirmation steps, user permissions, and unique credentials per environment are great steps and should be best practices but they don’t actually stop malicious or accidental behavior. They reduce the risk by adding more friction but it’s still possible to circumvent these blocks.

The way to eliminate these types of issues is to not rely on hoops but get rid of the loophole entirely. In the scenario above, the database should block traffic from all IPs that have not been whitelisted. And the whitelisted IPs should belong to production applications that need access to the system. In turn, these applications should not allow any SSH access to prevent someone from tunneling through. The way this is done in AWS is by using security groups and giving them the least allowable permissions while still allowing them to function properly. Exceptions can be made but they should be temporary and overseen by more than a single person to avoid any problems.

This sounds draconian but by investing in this approach up front you end up with a much stronger system in the long term that you don’t have to revamp to secure. And since doing this manually is a huge pain you end up investing in tools, such as [terraform](https://www.terraform.io/), that make these rules much simpler to manage.
