---
date: "2019-11-08T00:00:00Z"
description: Rather than rely on a third party service I have a simple way of managing
  my passwords via encrypted text files.
meta_img: null
keywords: password manager, pgp
tags:
- 'code'
title: DYI password manager
---

I prefer plaintext for all my note taking. Text files are extremely portable and serve as a flexible foundation for anything I'd want to do. For example, I can use grep to perform complex regex searches across thousands of files. If I want to apply a bulk operation to my notes I can write a quick script to do so. This is all possible because there's no proprietary format backing them and I'm able to leverage the power of the command line.

I recently adopted this approach to manage my passwords. I like to keep all my notes in Dropbox so it's synced across devices while being accessible on my phone. I wanted to do the same thing for my passwords but also want to make sure it's stored securely on Dropbox. To do so, I ended up with a pretty simple approach where I encrypt it using GPG via a symmetric cipher. That way the file itself is encrypted but can be easily decrypted when I need to access anything from it.

To search my passwords it's a simple alias command:
{{< highlight bash >}}alias pass='gpg -d ~/Dropbox/notes/passwords.txt.gpg | grep -A 4'{{< / highlight >}}

This decrypts the file and then pipes the result into grep which performs a simple search and shows the subsequent four lines upon given a match. The format of the file is simple: a series of blocks where the first line contains some descriptive information about the site/application/whatever followed by a line (or more) with the actual secrets. For example,

{{< highlight txt >}}
github.com
d...g..@gmail.com/dasdsa321313212
d..g..@workemail.com/12321dasdsadsa

Anothersite.com
	32132zxczxdsa1231
{{< / highlight >}}

It's far from perfect. The most annoying part is accessing the secrets on a mobile device. My approach to that is a simple website that is just a wrapper around the above alias. There's a lot more to do here but this approach works for me.
