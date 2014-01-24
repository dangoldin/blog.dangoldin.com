---
layout: post
title: "Developing on a remote instance"
description: "Something I've started doing since joining TripleLift is doing the bulk of my developing on a remote EC2 instance and think it offers a ton of benefits."
keywords: "developing, coding, EC2, AWS, Amazon"
category: 
tags: []
---
{% include JB/setup %}
One of the first things I was given when joining <a href="http://triplelift.com" target="_blank">TripleLift</a> was a Macbook Air and an Amazon EC2 instance to do my development work on. Before that, every company I worked at would give me a pretty powerful computer so that I’d be able to do my development work locally. At first, coding on a remote instance took some getting used to but now I'm a fan of this approach.

<ul class="bulleted">
	<li>It allows me to work from any computer and paired with the highly portable Macbook Air I can work from virtually anywhere. On the flip side, it relies on a connection to the internet so if the internet ever cuts out it’s difficult to do work unless you also have it checked out locally.</li>

	<li>It’s a great way to simulate a production environment. Especially on OS X where many packages require significant Stack Overflowing to figure out, being able to install libraries that will be used in production is a great way to work out the kinks and be confident that your code will run as expected.</li>

	<li>Along these lines, the entire team will end up with a very similar environment which makes it very easy to give and receive help without having to get used to an entirely new environment.</li>

	<li>If your application relies on EC2 it’s a great way to become familiar with the AWS ecosystem as well as reduce latency between Amazon’s various services. This is useful when you have a significant volume of data going to and from S3 and want to make it as quick as possible.</li>

	<li>There are a ton of tools to make this easy. I’ve recently discovered the <a href="http://wbond.net/sublime_packages/sftp" target="_blank">SFTP plugin</a> for <a href="http://www.sublimetext.com/" target="_blank">Sublime Text</a> which lets you edit your files locally that are automatically synced to the remote instance. That paired with emacs or vim on the instance are all you need.</li>
</ul>

The biggest drawback is that you end up relying on the internet in order to get the most out of this set up. It’s possible to have your code synced locally for editing but getting set up to run locally defeats the purpose of having a remote instance since you have to install and configure the various packages. Given that there’s internet almost anywhere I go I think this trade off is worth it.
