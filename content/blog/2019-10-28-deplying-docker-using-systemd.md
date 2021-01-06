---
date: "2019-10-28T00:00:00Z"
description: I went from a very hacky deployment system to a slightly less hacky one.
meta_img: null
keywords: docker, systemd, systemctl
tags:
- 'devops'
- 'code'
title: Deplying Docker using systemd
---

A few months ago in a burst of inspiration I converted a bunch of my side projects to run inside Docker. Unfortunately, I didn't do the follow up work of actually creating a Kubernetes cluster and instead came up with a ridiculously hacky process to get them running. I created a simple shell script that would just build and run a Docker image and have just been running it inside a screen session.

This worked surprisingly well. The only problem was that every time the instance was rebooted the screen sessions died and I had to SSH into it in order to restart the scripts. Earlier today I had another instance reboot and decided to finally do something about it. The solution I ended up with was to just bundle the aforementioned shell script into a systemd file and configure it to run at startup. It's been a few hours and so far so good and delay the inevitable move to Kubernetes by a few more months.

<figure>
  <figcaption>run.sh</figcaption>
{{< highlight bash >}}
(docker rm test || true) && docker build -t test:latest . && docker run --env-file env.list --name test -p 8001:8000 -i test:latest
{{< / highlight >}}
</figure>

<figure>
  <figcaption>/etc/systemd/system/test.service</figcaption>
{{< highlight text >}}
[Unit]
Description=Test service.

[Service]
#Type=simple
WorkingDirectory=/root/test
ExecStart=/bin/bash /root/test/run.sh
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
{{< / highlight >}}
</figure>
