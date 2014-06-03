---
layout: post
title: "Examining ssh login requests"
description: "If you run a server that's open to the world. Take some time to make it secure. It doesn't take long and makes it significantly less likely you'll get hacked."
keywords: "security, ssh, ubuntu, server"
image_url:
category:
tags: ["#devops", "#code"]
---
{% include JB/setup %}
I recently migrated to Digital Ocean and spent some time beefing up its security. One of the things I looked into was the various SSH attempts being made and to see if there was a pattern. Luckily, I’m running Ubuntu and every SSH attempt is logged by default to /var/log/auth.log and all it required was a quick one liner to see the failed attempts by username.

{% highlight bash %}grep "Invalid user " /var/log/auth.log | cut -d' ' -f8 | awk '{a[$0]++}END{for(i in a)print i,a[i]}' | sort -k 2 -n -r | head -n 100{% endhighlight %}

<table class="table"><thead><tr><th>Username</th><th>Count</th></tr></thead><tbody><tr><td>test</td><td>141</td></tr><tr><td>postgres</td><td>116</td></tr><tr><td>oracle</td><td>88</td></tr><tr><td>web</td><td>75</td></tr><tr><td>test2</td><td>74</td></tr><tr><td>admin</td><td>59</td></tr><tr><td>jboss</td><td>49</td></tr><tr><td>ubuntu</td><td>45</td></tr><tr><td>webmaster</td><td>43</td></tr><tr><td>user</td><td>42</td></tr><tr><td>tech</td><td>40</td></tr><tr><td>debian</td><td>40</td></tr><tr><td>testuser</td><td>39</td></tr><tr><td>server</td><td>38</td></tr><tr><td>penguin</td><td>38</td></tr><tr><td>shoutcast</td><td>36</td></tr><tr><td>rdp</td><td>36</td></tr><tr><td>www</td><td>35</td></tr><tr><td>radio</td><td>35</td></tr><tr><td>ftp</td><td>33</td></tr><tr><td>test3</td><td>30</td></tr><tr><td>student</td><td>29</td></tr><tr><td>guest</td><td>29</td></tr><tr><td>toor</td><td>21</td></tr><tr><td>public</td><td>19</td></tr><tr><td>testing</td><td>15</td></tr><tr><td>tester</td><td>15</td></tr><tr><td>students</td><td>15</td></tr><tr><td>var</td><td>13</td></tr><tr><td>gov</td><td>9</td></tr><tr><td>adm</td><td>9</td></tr><tr><td>x</td><td>8</td></tr><tr><td>nagios</td><td>8</td></tr><tr><td>zabbix</td><td>7</td></tr><tr><td>z</td><td>7</td></tr><tr><td>y</td><td>7</td></tr><tr><td>w</td><td>7</td></tr><tr><td>vyatta</td><td>7</td></tr><tr><td>u</td><td>7</td></tr><tr><td>t</td><td>7</td></tr><tr><td>shell</td><td>7</td></tr><tr><td>s</td><td>7</td></tr><tr><td>r</td><td>7</td></tr><tr><td>q</td><td>7</td></tr><tr><td>p</td><td>7</td></tr><tr><td>o</td><td>7</td></tr><tr><td>n</td><td>7</td></tr><tr><td>michael</td><td>7</td></tr><tr><td>m</td><td>7</td></tr><tr><td>l</td><td>7</td></tr><tr><td>k</td><td>7</td></tr><tr><td>j</td><td>7</td></tr><tr><td>i</td><td>7</td></tr><tr><td>h</td><td>7</td></tr><tr><td>g</td><td>7</td></tr><tr><td>f</td><td>7</td></tr><tr><td>e</td><td>7</td></tr><tr><td>dup</td><td>7</td></tr><tr><td>d</td><td>7</td></tr><tr><td>ch</td><td>7</td></tr><tr><td>c</td><td>7</td></tr><tr><td>b</td><td>7</td></tr><tr><td>a</td><td>7</td></tr><tr><td>sales</td><td>6</td></tr><tr><td>office</td><td>6</td></tr><tr><td>home</td><td>6</td></tr><tr><td>data</td><td>6</td></tr><tr><td>bash</td><td>6</td></tr><tr><td>apache</td><td>6</td></tr><tr><td>administrator</td><td>6</td></tr><tr><td>v</td><td>5</td></tr><tr><td>test1</td><td>5</td></tr><tr><td>teamspeak</td><td>5</td></tr><tr><td>ssh</td><td>5</td></tr><tr><td>plesk</td><td>5</td></tr><tr><td>master</td><td>5</td></tr><tr><td>linux</td><td>5</td></tr><tr><td>ircd</td><td>5</td></tr><tr><td>http</td><td>5</td></tr><tr><td>walid</td><td>4</td></tr><tr><td>vnc</td><td>4</td></tr><tr><td>ust</td><td>4</td></tr><tr><td>ts</td><td>4</td></tr><tr><td>temp</td><td>4</td></tr><tr><td>telnet</td><td>4</td></tr><tr><td>smmsp</td><td>4</td></tr><tr><td>smart</td><td>4</td></tr><tr><td>samba</td><td>4</td></tr><tr><td>org</td><td>4</td></tr><tr><td>operator</td><td>4</td></tr><tr><td>net</td><td>4</td></tr><tr><td>named</td><td>4</td></tr><tr><td>mike</td><td>4</td></tr><tr><td>library</td><td>4</td></tr><tr><td>info</td><td>4</td></tr><tr><td>hacker</td><td>4</td></tr><tr><td>git</td><td>4</td></tr><tr><td>ftpuser</td><td>4</td></tr><tr><td>dan</td><td>4</td></tr><tr><td>cc</td><td>4</td></tr></tbody></table>

The usernames were all over the place - from generic ones (such as test, admin, ubuntu, guest) to the names used by various services (postgres, oracle, nagios) to letters of the alphabet. There was also a slew of common English first names. In total, there were ~1500 unique usernames that attempted to access my box.

The auth.log file also contains the IP address of each attempt and we can easily summarize by that.

{% highlight bash %}grep "Invalid user " /var/log/auth.log | cut -d' ' -f10 | awk '{a[$0]++}END{for(i in a)print i,a[i]}' | sort -k 2 -n -r | head -n 100{% endhighlight %}

<table class="table"><thead><tr><th>IP</th><th>Count</th></tr></thead><tbody><tr><td>162.13.41.12</td><td>874</td></tr><tr><td>176.31.244.7</td><td>733</td></tr><tr><td>216.127.160.146</td><td>572</td></tr><tr><td>195.50.80.169</td><td>382</td></tr><tr><td>66.219.106.164</td><td>359</td></tr><tr><td>199.33.127.35</td><td>220</td></tr><tr><td>112.167.161.194</td><td>98</td></tr><tr><td>128.199.226.160</td><td>66</td></tr><tr><td>198.50.120.178</td><td>60</td></tr><tr><td>189.85.66.234</td><td>37</td></tr><tr><td>14.18.145.82</td><td>29</td></tr><tr><td>166.78.243.86</td><td>23</td></tr><tr><td>222.190.114.98</td><td>22</td></tr><tr><td>130.126.141.74</td><td>18</td></tr><tr><td>178.208.77.133</td><td>17</td></tr><tr><td>61.160.213.171</td><td>8</td></tr><tr><td>49.213.20.249</td><td>8</td></tr><tr><td>23.253.51.76</td><td>7</td></tr><tr><td>178.254.8.177</td><td>7</td></tr><tr><td>193.107.128.10</td><td>5</td></tr><tr><td>121.167.232.196</td><td>2</td></tr><tr><td>107.182.134.51</td><td>2</td></tr><tr><td>82.221.106.233</td><td>1</td></tr><tr><td>74.3.121.10</td><td>1</td></tr><tr><td>72.225.239.90</td><td>1</td></tr><tr><td>111.74.134.216</td><td>1</td></tr></tbody></table>

In this case, the total number of IP addresses is significantly smaller with only 26 unique IP addresses trying to connect. I took a look at a few and some of them look to be legitimate sites that may have been compromised.

If you have a box open to the world, you should make sure it’s secure. A small program that makes this easy is fail2ban - it scans log files and bans IPs that have had too many failed attempts. Two other quick fixes are to disable password authentication entirely and rely solely on public key authentication which is significantly harder to crack and change the default SSH port from 22 to something else. These should be enough to eliminate the bulk of attempts and keep your box secure.