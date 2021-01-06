---
date: "2018-05-26T00:00:00Z"
description: We're often tempted to write programs to solve simple problems but the
  shell has a variety of commands that can let us do nearly anything.
meta_img: null
keywords: shell, bash, command line
tags:
- 'code'
title: Power of shell commands
---


It’s surprising how unappreciated shell commands are. They’re incredibly powerful and once understood are able to handle small one-off tasks much quicker than writing even simple scripts. Earlier this week I ran into a small task that highlights the power and ability of the shell.

A few of our applications use the same configuration file which contains a variety of URLs, secrets, and passwords. If any of these applications require a field the it gets added to this growing configuration file. This is clearly not good for security and as part of a larger security revamp we’re moving to application-specific config files. Long term we want to revamp the way we do deploys such that the configuration is kept in environment variables and handled by the build system but as a short term solution we want to split this single configuration file into a file per application.

The solution is straightforward - go through the config reader code of each application, extract the keys, and then find them in the main configuration file. Easy to explain but parsing files is fickle and not very interesting. Luckily for us with a few shell commands we can do exactly what we need to do. We use the cut command and a few pipes to extract the keys from the config reading file and then combine it with the join command to get the intersection. A one liner is all that’s needed to give us the application specific config file.

{{< highlight bash >}}
join -t'=' <( grep '\$configObj' code/application/config/reader.php | cut -d'(' -f3 | cut -d"'" -f2 | sort ) <( sort ~/config.properties )
{{< / highlight >}}

Shell commands are simple but it's the ability to chain them together that gives us an incredible set of tools. We're often tempted to write a simple script but it's very likely that it's possible to do the same with a series of shell commands and pipes.
