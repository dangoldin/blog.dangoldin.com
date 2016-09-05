---
layout: post
title: "Writing code? Think about the deployment"
description: "When writing code it's important to think about how it will be deployed. That leads to higher quality code and improves the rate at which teams can deploy new code."
keywords: "deployment, coding, dev ops"
image_url:
category:
tags: ["#management", "#devops"]
---
{% include setup %}
The goal of every bit of code should be to make it to production. Code that’s not deployed is wasted effort as well as a loss to the business. And a big part of making sure code is deployed is thinking through the deployment plan as we write the code. Some code is deployed simply by pushing the new application while other code may require updating the database schema. More complex code may depend on other applications which will need to be tweaked and deployed beforehand. Large companies and teams have dedicated ops teams that handle deployments but small teams need to do this on their own.

Thinking through the deployment also leads to better code. By going through the steps of how the deploy will work you end up breaking your code down into a series of changes that end up being significantly safer and reduce the risk of a large failure. For example, we may want to write an update that will add an additional feature to our application based on a flag in a database. A safe way of doing it is to create a new column first that will have no effect on the existing application and then roll out our the new code that starts using this column. Future releases can then remove the code that uses legacy columns with latter releases dropping those columns entirely. None of this is shocking news but it’s surprising how rarely we think about deployments when we set out to write code. Especially as a team grows it’s important for everyone to be thinking about the way their code will work and the way it needs to be deployed.
