---
date: "2008-06-19T00:00:00Z"
description: Some advice on setting up internet passwords.
keywords: security, passwords, internet
tags:
- 'meta'
title: Advice on internet passwords
---
<p>After my previous post on the lack of privacy, I feel obligated to give some advice regarding internet passwords in order to maintain the privacy that we do have.</p>

<ol>
    <li>Have at least 3 different passwords:
    <ol>
    	<li>E-mail Account</li>
        This account controls all your other accounts so protect it as much as you can. All other accounts can be accessed or reset if someone has access to your email.
    	<li>Bank/Financial Accounts</li>
        These control your money so use a different password for these than for the rest of your accounts. In addition, you may want to keep your credit card account passwords separate from your bank accounts.
    	<li>"Fun" Account</li>
        These may not be vital to your survival (unless you are a facebook addict) so a password compromise here may not affect you too much. In addition, these sites may not store your password as securely as the bank accounts so you don't want this password being the same as the other accounts.
    </ol>
    <p>A good way to generate passwords is to contain some sort of "base" and add some prefixes or suffixes to it in order to come up with the password for the various sites. For example, I can have my base password be "orange". For financial sites my password will be "orangeFIN22", for my email it will be "orangeE33", etc. Then you don't have to remember an entirely different set of passwords yet they are distinct enough to avoid compromising all your accounts with a stolen password.</p>
    </li>

    <li>Don't trust web sites that are able to send you your password over email

    <p>If a website is able to tell you what your password is, it means it is storing it in the database as either the password itself or through a transformation that is reversible (a becomes b, b becomes c, ..). This means that the site knows what your password is and can be easily accessed by employees of the site or anyone that has access to the database.</p>

    <p>The proper way to handle user passwords is to hash it (one way map) immediately to some obfuscated characters and store those in the database along with an additional field that ensures each row is hashed differently. Then when a user logs in, the site will do this one way map and compare the result against the value in the database; omly if they match is the user logged in.</p>
    </li>
</ol>