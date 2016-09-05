---
layout: post
title: "Reprioritizing a non priority RabbitMQ queue"
description: "Sometimes it's necessary to reprioritize tasks on a RabbitMQ queue. One way to do it is to get every task on there and use shell scripting to requeue then in the correct order."
keywords: "rabbitmq, tasks, devops"
image_url:
category:
tags: ["#code"]
---
{% include setup %}
Earlier today we had a hiccup where we had a bunch of messages piled up on a RabbitMQ queue that were not being consumed. Some of these tasks were very quick data loads while others were more involved jobs that could take multiple minutes to run. Normally these are distributed relatively evenly across the day so it’s not a problem but in this case we had hundreds of tasks in a random order and we wanted to shuffle them around such that the data load tasks executed first so that the data would be quickly accessible to other higher priority jobs.

Luckily, we remembered we had some old shell commands that helped us backup and restore a RabbitMQ queue so it only required a bit of scripting to come up with a sequence of commands to do exactly what we wanted. The script works by dumping the contents of the queue into a file, extracting the message field, filtering the messages into the desired buckets, turning them into queue addition commands, and executing the resulting files.

{% highlight sh %}
# Dump the contents of the queue to a file.
# To be safe requeue the messages and do a manual purge when
# we confirm the data looks right.
./rabbitmqadmin get queue=data_queue requeue=true count=2000 > tasks.log

# 1 - Get the appropriate field (in our case the fifth one)
# 2 - Remove the header rows
# 3 - Trim the line
# 4 - Prepend the publish command and turn the task message string into an argument
cut -d'|' -f5 tasks.log | sed '$d' | sed '1,3d' | sed 's/^ *//;s/*$//' | sed -e "s/^/.\/rabbitmqadmin publish exchange=data_queue.task routing_key=standard payload='/" | sed -e "s/$/'/" > tasks.clean

# Split the tasks into two pieces
cat tasks.clean | grep log > tasks.clean1
cat tasks.clean | grep -v log > tasks.clean2

# Queue the tasks in the appropriate order
sh tasks.clean1
sh tasks.clean2
{% endhighlight %}
