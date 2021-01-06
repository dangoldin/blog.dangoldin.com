---
date: "2015-07-16T00:00:00Z"
description: I realized that our brains work just like Bloom filters. They don't always
  know the details and they have some false positives but they're great for at least
  telling us that we ought to know something.
meta_img: null
keywords: bloom filter, memory
tags:
- 'meta'
title: A Bloom filter in my head
---

As many at TripleLift will tell you I have a fondness for <a href="https://en.wikipedia.org/wiki/Bloom_filter" target="_blank">Bloom filters</a> but only recently did I realize that our brains work in a similar way. We don’t always know every particular detail or have perfect recall but what we do have is the ability to realize that something is familiar and that we might have encountered it before. This triggers enough additional thoughts that we’re able to dig up the actual thought or reference. For example I can’t always recall the exact Java library I need to use for a particular problem but I know that I’ve solved similar problems before and can quickly rediscover my previous solution, whether through an online search with the appropriate keywords or even by going through some old code.

I’d even argue that it’s more important to have awareness of everything you’ve done and seen in the past than to have a perfect recollection of a smaller subset of items. Knowing that you’ve seen something before takes care of the fear of the unknown - very similar to how <a href="https://en.wikipedia.org/wiki/George_Dantzig" target="_blank">George Dantzig</a> was able to solve an “unsolvable problem” as a student since he didn’t know it was considered unsolvable.

Unknowingly I’ve even developed an approach to take advantage of this mental model. I dump interesting notes and links into text files that I “tag” with a bunch of additional thoughts or keywords I think of at the time. Then whenever I run into an issue and realize that one of my notes might be useful it’s a simple text search to find exactly what I’m looking for. Rather than rely on a structured approach such as Evernote I rely on my own adhoc system and am rarely unable to find what I was looking for. In the extreme cases I can even resort to a regex search and some piping to deal with too many results or a very scattered document. Every once in a while I’ll even write a quick Python script to provide a semblance of order although almost always I just resort to a text search.
