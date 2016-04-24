---
layout: post
title: "Most commonly used shell commands"
description: "I was curious to see my most commonly used shell commands so wrote a quick awk/shell script to figure that out. Let me know what you find."
keywords: "shell, bash, scripting, command line"
image_url:
category:
tags: ["#code"]
---
{% include JB/setup %}
I spend a large chunk of time working in the terminal and was curious to see what my most commonly used shell commands were. This also gave me an opportunity to practice writing one liners and learn a bit of awk.

{% highlight bash %}history | cut -d' ' -f4 | awk '{a[$0]++}END{for(i in a)print i,a[i]}' | sort -k 2 -n -r{% endhighlight %}

The script is simple - look through my command history, extract the first word, and count the number of times that word appears. I was surprised to see git at the top but it makes sense - I tend to run it as a sequence (git status, git commit, git push) so it leads to an inflated count. The rest make sense - they’re a mix of the standard navigation commands as well as command related to my current projects. Next step is to set up a cron job to track this usage over time and see how it changes.

<table class="table"><thead><tr><th>Command</th><th>Frequency</th></tr></thead><tbody><tr><td>git</td><td>347</td></tr><tr><td>ls</td><td>103</td></tr><tr><td>python</td><td>89</td></tr><tr><td>fab</td><td>70</td></tr><tr><td>cd</td><td>49</td></tr><tr><td>ssh</td><td>28</td></tr><tr><td>cat</td><td>28</td></tr><tr><td>ping</td><td>23</td></tr><tr><td>emacs</td><td>22</td></tr><tr><td>stash</td><td>15</td></tr><tr><td>rm</td><td>15</td></tr><tr><td>rake</td><td>15</td></tr><tr><td>pip</td><td>14</td></tr><tr><td>cdblog</td><td>14</td></tr><tr><td>pwd</td><td>12</td></tr><tr><td>jekyll</td><td>12</td></tr><tr><td>connectec2</td><td>11</td></tr><tr><td>sudo</td><td>9</td></tr><tr><td>workon</td><td>7</td></tr><tr><td>wc</td><td>7</td></tr><tr><td>phantomjs</td><td>6</td></tr><tr><td>history</td><td>5</td></tr><tr><td>head</td><td>5</td></tr><tr><td>c_do</td><td>5</td></tr><tr><td>brew</td><td>5</td></tr><tr><td>sh</td><td>4</td></tr><tr><td>mv</td><td>4</td></tr><tr><td>make</td><td>4</td></tr><tr><td>grep</td><td>4</td></tr><tr><td>sass</td><td>3</td></tr><tr><td>redis-cli</td><td>3</td></tr><tr><td>open</td><td>3</td></tr><tr><td>mkvirtualenv</td><td>3</td></tr><tr><td>find</td><td>3</td></tr><tr><td>celery</td><td>3</td></tr><tr><td>source</td><td>2</td></tr><tr><td>sed</td><td>2</td></tr><tr><td>redis-server</td><td>2</td></tr><tr><td>mkdir</td><td>2</td></tr><tr><td>echo</td><td>2</td></tr><tr><td>dig</td><td>2</td></tr><tr><td>cp</td><td>2</td></tr></tbody></table>