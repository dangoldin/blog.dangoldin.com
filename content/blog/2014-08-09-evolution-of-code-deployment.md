---
date: "2014-08-09T00:00:00Z"
description: Code deployment is something all tech companies need to do and there's
  been a lot of progress over the past decade in managing it. I was thinking of how
  my process has evolved and what I've learned.
meta_img: null
keywords: aws, code deployment, release management, devops
tags:
- 'devops'
title: Evolution of code deployment
---

I’ve been working on various tech related projects for over a decade now and have gone through a variety of approaches to deploying code. I’m far from an expert but though it would be helpful to jot down what I’ve seen and where I'm hoping to get.

- FTP upload, no version control: I developed my first few sites locally and then just copied them over to the host server via FTP. This worked well for simple projects where I was the only contributor.

- Version control, single branch: Once I discovered version control I immediately found it helpful. Version control made it easy to work with others but our deployment was still manual. When we were ready to deploy we would log in to our server, run the necessary commands to update the database schema, and then do pull/update to get a new version of our code base.

- Version control, single branch, more automated deployment: Logging in every time to do a deployment was a pain so we started using <a href="http://www.fabfile.org/" target="_blank">Fabric</a> to automate deployments. Fabric allowed us to execute scripts on multiple machines without having to manually log in to each one. Since each box had a set of roles we were able to set up Fabric to deploy by role (ie deploy this change to the DB server, deploy this change to all webservers).

- Version control, multiple branches, more automated deployment: Another improvement was following git best practices and setting up a production branch with everyone working on development branches that would then be merged into master. When the deployment was ready to go out it would be merged into production. The value here was that when we ran into a bug on production, we were able to fix it without having to merge in a bunch of new features.

- Version control, multiple branches, automated testing, automated deployment: This is the ideal state. Each of our repositories is tested enough that code changes are automatically tested, merged, and deployed to production. The process should also be smart enough to handle db migrations and would be to revert changes if any problems arise. In addition, each box may have a different set of required systems libraries and packages and an automated deployment should be able to automatically configure a server with the necessary packages. I know <a href="http://www.getchef.com/chef/" target="_blank">Chef</a> and <a href="http://puppetlabs.com/" target="_blank">Puppet</a> are used for this but I’m only exploring them now.

Something to add is that there’s a huge incentive to make your stack as stateless as possible - for example having multiple web servers behind a load balancer that don’t need to share any state with other webservers directly. This makes it simple to spin up new servers when there’s more demand and improves scalability. Unfortunately, it’s not always possible and complicated deployments end up having coupling - especially when high performance is required. In that case adopting a declarative approach when configuring your instances helps bring some sort of statelessness - for example using AWS tags to declare an instance to be of a particular type and using the region information to dictate what other instances it needs to connect to. Otherwise you’re stuck trying to define a complicated topology via config files. I’d love to know how massive companies manage their deployments - I know Facebook has a <a href="http://arstechnica.com/business/2012/04/exclusive-a-behind-the-scenes-look-at-facebook-release-engineering/" target="_blank">custom process</a> that will deploy new code to a set of boxes and then use BitTorrent to share it to others but I’d love to be able to compare that with those of others, for example Google and Amazon.