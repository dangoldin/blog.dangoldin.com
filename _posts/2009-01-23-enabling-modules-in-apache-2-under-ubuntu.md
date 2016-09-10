---
layout: post
title: "Enabling modules in Apache2 under Ubuntu"
description: "Enabled Apache2 modules in Ubuntu manually"
keywords: "apache2, ubuntu"
category:
tags: ["#code"]
---
<p>The Apache enabled modules are found in <span class="gray">"/etc/apache2/mods-enabled"</span> as a set of .load and .conf files. If the modules you want are in the <span class="gray">/etc/apache2/mods-available</span> folder but not in <span class="gray">"/etc/apache2/mods-enabled"</span> folder, just copy the .load and .conf files over (note that the .conf file may not exist).</p>

<p>If there is no file in the mods-availble folder, you will need to create a new .load file in the mods-available folder to point to a module in <span class="gray">"/usr/lib/apache2/modules"</span>. To do this, create a .load file containing the line <span class="gray">"LoadModule xxx /usr/lib/apache2/modules/yyy.so"</span> where xxx is the name of the module and yyy is the file name. After creating this file, you can just copy it over to the mods-enabled folder and restart apache using <span class="gray">"sudo /etc/init.d/apache2 restart"</span>.</p>
