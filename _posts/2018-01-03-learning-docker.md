---
layout: post
title: "Learning Docker"
description: "I'm late to the party but finally got a chance to Dockerize a script and learned a ton along the way."
keywords: "docker, containerization, jenkins, dcos"
image_url:
category:
tags: ["#code"]
---
{% include setup %}
I’m a bit embarrassed to admit this but I’ve been a bit behind the Docker craze. Sure I’ve done the tutorials when it came out but never really applied it to any of my actual projects. Given that nearly everyone is using Docker in some shape or form, I decided it was finally time to give it an honest effort.

I had a small Python script that I’ve been running weekly off of my laptop and wanted to come up with a better solution. My old approach would have been to just run it as a cronjob on a VPS but the problem was that it had a variety of third party libraries that needed to be installed via pip and if I ever needed to move it elsewhere I’d have to set it up again. After speaking with a few people it seemed that this could be a use case for Docker and then running it either within a build server (Jenkins) or on top of a distributed system (DC/OS).

From my ancient experiments the Docker tutorial I figured I’d be in for a world of pain but wrapping my script into a Docker container was surprisingly simple. I don’t think it took longer than 10 minutes to get it working and then a bit more time to figure out and modify the code to properly handle the various tokens and secrets.

The next step was getting it working in Jenkins but being able to base it on an already functional job built and deployed a container made it much easier. Once again the majority of the work here was figuring out how to securely handle tokens and secrets as part of the build process but I had a bunch of help.

Now that I had a working end-to-end system I decided to revisit the other scripts in my repo and see if I could Dockerize them as well. This is where I had a few false steps. I tried moving each script into its own folder with its own Dockerfile but that ended up failing when they needed to access shared libraries that I didn’t want to split out or duplicate. The final approach I settled on is to build one container that’s able to run any of the scripts but then trigger the exact script through the run command. I’m not 100% sold that this is the best way of doing it since it feels a bit hacky but I’m happy that I decided to give Docker a shot and the progress I’ve been made. There’s still a lot to learn but I’m much more comfortable diving right in.
