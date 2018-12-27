---
layout: post
title: "Secret management across computers"
description: "While setting up a new computer a problem I ran into was transferring secrets from one computer to another and am looking for a system to help here."
keywords: "secret management"
image_url:
category:
tags: ["#code", "#devops"]
---
{% include setup %}
As part of the Cyber Monday nonsense I convinced myself to purchase a ThinkPad in order to run Linux. I have a separate post coming about the transition from OS X to Ubuntu but one area I’m still trying to get under control is secret management. I have a ton of code on the old computer and almost all of it is on GitHub. The biggest challenge so far has been migrating secrets across computers. For example I have a variety of scripts that talk to Slack or the Google ecosystem which require their own tokens and keys. Some are straightforward to reissue - for example AWS - while others require a fair amount of frustrated searching. I don’t have the answer here but have been thinking about the following approaches to make things easier and would love to know how others handle this.

- **Just step it up and get the new secrets**. For each project I have I can look at the configuration file and determine exactly what I need and then issue the appropriate credentials from the various services. I know this will work but just feels like a lot of grunt work and not very interesting.
- **Move all secrets to Dropbox**. I can just move all the secrets to Dropbox so they automatically sync across my computers. It will work but will require me figuring out a naming convention and then rewrite a bunch of my scripts to allow for a explicitly named configuration file. The nice thing is that this will automatically update as I add or modify the existing credential files.
- **Encrypt and upload to GitHub**. Rather than relying on Dropbox I can encrypt the secrets and store them in GitHub. I don’t like the fact that I’m actually uploading secrets to a public repo, even if they are encrypted - it just feels dangerous.
- **Keep all secrets to S3**. Similar to the others but this feels more private than the others. I still don't like the fact that I'd have to come up with a naming convention to keep things organized but this seems like a reasonable approach.
- **Host a personal copy of [Vault](https://www.vaultproject.io) or an equivalent system**. I messed around with Vault years ago and it’s a full featured application to improve secret management that comes with a role based system. This may be overkill for what I’m trying to do but I’m tempted since it will give me experience with something new and can serve as a foundation for future projects.
