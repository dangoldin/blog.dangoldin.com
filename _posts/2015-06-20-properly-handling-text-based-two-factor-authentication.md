---
layout: post
title: "Properly handling text based two factor authentication"
description: "When doing text message based two factor authentication it's important to actually be secure by not showing the unlock code on a lock screen."
keywords: "security, two factor authentication, twitter, bank of america"
image_url: "/assets/static/images/tfa-twitter.png"
category:
tags: ["#product"]
---
{% include setup %}
The purpose of two factor authentication is to prevent unauthorized access to your accounts by requiring a device other than a password to verify that it’s actually you. Usually this is a text message to a phone or an app such as Authy or Google Authenticator. Being paranoid and despite the inconvenience I chose to do it for the vast majority of my accounts that support it but some are significantly more secure than others.

In particular, developers need to be careful when doing text message based authentication and make sure the code is not visible during a lock screen. Twitter includes the login code as the first word in the message whereas Bank of America does it right and makes sure the code is not visible without unlocking the screen. It’s a seemingly tiny difference but highlights how important it is to get security right.

<div class="row">
	<div class="span3">
		<div class="thumbnail">
			<img src="{{ IMG_PATH }}tfa-boa.png">
			<p>Bank of America obfuscating the code</p>
		</div>
	</div>
	<div class="span3 offset1">
		<div class="thumbnail">
			<img src="{{ IMG_PATH }}tfa-twitter.png">
			<p>Twitter including the code on the lock screen</p>
		</div>
	</div>
</div>

<br/>
