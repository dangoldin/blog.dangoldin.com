---
date: "2020-11-26T00:00:00Z"
description: I'm a fan of static code analysis tools and have recently started using
  DeepSource on my open source repos.
meta_img: null
keywords: deepsource, static code analysis, software engineering
tags:
- 'devops'
title: Static code analysis with DeepSource
---

While listening to the [Software Engineering Daily](https://softwareengineeringdaily.com/) podcast I came across an [interview](https://softwareengineeringdaily.com/2020/11/09/deepsource-static-analysis-for-code-reviews-with-jai-pradeesh-and-sanket-saurav/) with Jai Pradeesh and Sanket Saurav who are the founders of [DeepSource](https://deepsource.io/), a modern code analysis tool.

I'm a sucker for these types of tools and willing to try anything that's low friction and promises to me more productive so I gave it a shot on two of my open source repos - [health-stats](https://github.com/dangoldin/health-stats/) and [blog-analytics](https://github.com/dangoldin/blog-analytics/).

There have been quite a few of these tools - for example [SonarQube](https://www.sonarqube.org/) and [Amazon's CodeGuru](https://aws.amazon.com/codeguru/) - but DeepSource definitely felt more modern. For one, it has a native integration to GitHub and I was able to get it added to the repos and start seeing results without having to write any code. In addition to the standard suggestions and recommendations DeepSource als has the ability to automatically open pull requests to address simple formatting and style issues.

I'm excited by the innovation in this space. Similar to the way IDEs have gotten smarter and smarter over time with their code completion and suggestions there's a whole separate set of functionality that can be added through a GitHub integration. GitHub itself has been moving in this direction with [Dependabot](https://github.com/dependabot) opening PRs to update libraries and we'll likely see more and more here as the space evolves.
