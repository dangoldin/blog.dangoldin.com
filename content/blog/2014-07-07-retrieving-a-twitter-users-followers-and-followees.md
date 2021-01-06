---
date: "2014-07-07T00:00:00Z"
description: I used the Tweepy library to write a quick script to retrieve a Twitter
  user's followers and followees multiple levels deep.
meta_img: null
keywords: twitter, api, tweepy
tags:
- 'code'
title: Retrieving a Twitter user's followers and followees
---

After reading Gilad Lotan’s <a href="https://medium.com/i-data/fake-friends-with-real-benefits-eec8c4693bd3" target="_blank">post</a> where Gilad bought 4,000 Twitter followers in order to analyze them, a <a href="https://twitter.com/geoffgolberg" target="_blank">friend</a> of mine was inspired to analyze his followers to see if he could get any insight and come up with a neat visualization. The first step was downloading a dataset containing his followers and followees as well as the followers and followees for each of those accounts - the idea being that by going two levels deep you see how similar the various accounts are to each other based on who and what they follow and whether there are any patterns.

I offered to write a short script to help him pull the data and it turned out to be easier than I thought due to the excellent <a href="http://www.tweepy.org/" target="_blank">Tweepy library</a>. The biggest challenge was figuring out how to use Tweepy to deal with Twitter’s absurdly strict API limit (15 requests per 15 minutes) since the documentation was a bit sparse but after discovering the Cursor object it became surprisingly easy to iterate through the results and wait for 15 minutes for API errors.

The code currently works in a user id rather than username world since I wanted to avoid making additional calls but that can be implemented in the end to just pull the usernames for every user id in the dataset. The <a href="https://github.com/dangoldin/twitter-friend-follower-pull" target="_blank">code’s</a> up on Github so feel free to try it out and let me know if you run into any issues.