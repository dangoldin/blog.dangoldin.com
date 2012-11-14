---
layout: post
title: !binary |-
  SW50ZXJuZXQgUGFzc3dvcmRzOiBTb21lIEFkdmljZQ==
wordpress_id: 35
wordpress_url: !binary |-
  aHR0cDovL3d3dy5kYW5nb2xkaW4uY29tL2Jsb2cvP3A9MTk=
date: 2008-06-19 16:55:09.000000000 -04:00
---
After my previous post on the lack of privacy, I feel obligated to give some advice regarding internet passwords in order to maintain the privacy that we do have.

<strong>1. Use different passwords for different sites</strong>

You should have at least 3 different passwords:
<ol>
	<li>E-mail Account</li>
This account controls all your other accounts so protect it as much as you can. All other accounts can be accessed or reset if someone has access to your email.
	<li>Bank/Financial Accounts</li>
These control your money so use a different password for these than for the rest of your accounts. In addition, you may want to keep your credit card account passwords separate from your bank accounts.
	<li>"Fun" Account</li>
These may not be vital to your survival (unless you are a facebook addict) so a password compromise here may not affect you too much. In addition, these sites may not store your password as securely as the bank accounts so you don't want this password being the same as the other accounts.</ol>
A good way to generate passwords is to contain some sort of "base" and add some prefixes or suffixes to it in order to come up with the password for the various sites. For example, I can have my base password be "orange". For financial sites my password will be "orangeFIN22", for my email it will be "orangeE33", etc. Then you don't have to remember an entirely different set of passwords yet they are distinct enough to avoid compromising all your accounts with a stolen password.

<strong>2. Don't trust web sites that are able to send you your password over email</strong>

If a website is able to tell you what your password is, it means it is storing it in the database as either the password itself or through a transformation that is reversible (a becomes b, b becomes c, ..). This means that the site knows what your password is and can be easily accessed by employees of the site or anyone that has access to the database.

The proper way to handle user passwords is to hash it (one way map) immediately to some obfuscated characters and store those in the database along with an additional field that ensures each row is hashed differently. Then when a user logs in, the site will do this one way map and compare the result against the value in the database; omly if they match is the user logged in.

If you are interested in hashing, take a look at <a href="http://bretm.home.comcast.net/~bretm/hash/">http://bretm.home.comcast.net/~bretm/hash/</a>
<div class="zemanta-pixie" style="margin-top: 10px; height: 15px;"><a class="zemanta-pixie-a" title="Zemified by Zemanta" href="http://reblog.zemanta.com/zemified/464baeac-6000-4496-acf6-0672356c59e9/"><img class="zemanta-pixie-img" style="border: medium none; float: right;" src="http://img.zemanta.com/reblog_e.png?x-id=464baeac-6000-4496-acf6-0672356c59e9" alt="Reblog this post [with Zemanta]" /></a></div>
