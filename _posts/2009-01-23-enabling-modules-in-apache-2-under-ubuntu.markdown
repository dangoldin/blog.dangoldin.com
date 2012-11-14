---
layout: post
title: !binary |-
  RW5hYmxpbmcgTW9kdWxlcyBpbiBBcGFjaGUgMiB1bmRlciBVYnVudHU=
wordpress_id: 136
wordpress_url: !binary |-
  aHR0cDovL3d3dy5kYW5nb2xkaW4uY29tL2Jsb2cvP3A9MTM2
date: 2009-01-23 14:17:46.000000000 -05:00
---
<p>The Apache enabled modules are found in <span class="gray">"/etc/apache2/mods-enabled"</span> as a set of .load and .conf files. If the modules you want are in the <span class="gray">/etc/apache2/mods-available</span> folder but not in <span class="gray">"/etc/apache2/mods-enabled"</span> folder, just copy the .load and .conf files over (note that the .conf file may not exist).</p>

<p>If there is no file in the mods-availble folder, you will need to create a new .load file in the mods-available folder to point to a module in <span class="gray">"/usr/lib/apache2/modules"</span>. To do this, create a .load file containing the line <span class="gray">"LoadModule xxx /usr/lib/apache2/modules/yyy.so"</span> where xxx is the name of the module and yyy is the file name. After creating this file, you can just copy it over to the mods-enabled folder and restart apache using <span class="gray">"sudo /etc/init.d/apache2 restart"</span>.</p>

<div class="zemanta-pixie" style="margin-top: 10px; height: 15px;"><a class="zemanta-pixie-a" title="Zemified by Zemanta" href="http://reblog.zemanta.com/zemified/b59ff2a4-5986-4938-92ec-6a2b41ac0963/"><img class="zemanta-pixie-img" style="border: medium none; float: right;" src="http://img.zemanta.com/reblog_e.png?x-id=b59ff2a4-5986-4938-92ec-6a2b41ac0963" alt="Reblog this post [with Zemanta]" /></a></div>
