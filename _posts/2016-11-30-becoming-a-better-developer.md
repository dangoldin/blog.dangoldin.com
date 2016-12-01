---
layout: post
title: "Becoming a better developer"
description: "Yesterday I gave a quick talk about tips and tricks to get better as a software engineer - both in the short term and the long term."
keywords: "software engineering, software development, coding skills, improving, hackreactor"
image_url:
category:
tags: ["#meta", "#management"]
---
{% include setup %}
Yesterday I had the privilege of giving a talk at [HackReactor](http://www.hackreactor.com/) titled “Things I wish I knew” which was an amalgam of the various themes and topics I’ve been blogging and thinking about. While going through the blog I came up with two themes for the topic - the first was tactics that would make someone a better programmer immediately and the second was how to improve as a developer over time.

### Short term tips to become a better programmer
- [Generalize at n=3](http://dangoldin.com/2016/04/07/generalize-at-n3/). Rather than coming up with the perfect abstract solution right away my rule of thumb is to start thinking about that on your third iteration of solving the same problem. This will ensure you’re solving a problem that will recur while giving you enough perspective to actually develop a useful abstract solution.
- [Think carefully about your database](http://dangoldin.com/2016/02/15/design-your-database-for-flexibility/). Compared to changing a database changing code is much simpler. Code is mostly stateless and you don’t need to worry about backfills or migrations.
- [Focus on interfaces, not implementations](http://dangoldin.com/2015/12/02/think-interfaces-not-implementation/). Instead of obsessing over the perfect implementation it’s more important to think about how your application works and the way it’s architected. This way you can always change the implementation of a single method or function to make it better without having to gut and rewrite the entire application.
- For dates and times, just use UTC. A very common refrain online but only worry about timezones when displaying data to users.
- [Use GitHub for documentation](http://dangoldin.com/2016/08/14/integrating-poorly-documented-open-source-libraries/). Sometimes Documentation and StackOverflow don’t have exactly what you need. A good resource is to use GitHub’s code search and find actual examples of the relevant code being used.

### Getting better over time
- [Learn to appreciate DevOps](http://dangoldin.com/2014/12/26/devops-for-the-rest-of-us/). Not many people love DevOps but I’m a strong believer in understanding how your code will run and be deployed. It gets you more familiar with the entire lifecycle and allows you to be more creative with your solutions.
- [Have a sample project to learn new languages](http://dangoldin.com/2015/10/11/have-a-go-to-project-when-learning-a-new-programming-language/). In addition to tutorials I like having a project that I will implement in new languages to learn them. This repetition highlights the major differences between the languages and allows me to work on a sample application that mirrors my interests.
- [Approach code like you approach the gym](http://dangoldin.com/2016/03/13/approach-work-like-the-gym/). We spend more than 8 hours a day working but imagine if we approached it like we do the gym. Sure people that go to the gym every day without a plan are better off than those who don’t go at all but they pale in comparison to those that go with an agenda. How do we turn every line of code we write into something that’s as focused as a workout?
- Read the classics. Despite being a relatively young field software engineering has had a ton of great books written and rather than spending time reading blog posts (including this one!) it’s worthwhile to go read the classics.
