---
layout: post
title: "Word clouds in R"
description: "My blog analysis is taking a while but I discovered a simple way of generating word clouds in R."
keywords: "word clouds, R, data visualization"
image_url:
category:
tags: ["#meta", "#code", "#dataviz"]
---
{% include JB/setup %}
Analyzing my blog is taking longer than expected but my goal is to have something meaningful over the weekend. In the meantime I wanted to share a [quick script](http://www.r-bloggers.com/building-wordclouds-in-r/) I discovered to generate a word cloud in R. I remember doing this years back in D3 and having to spend a bunch of time figuring it out. Compared to that doing it in R is a breeze. In this case I have a CSV dump of my blog in /tmp/out.csv and am generating two word clouds - one for keywords and the other for tags of my blog posts.

{% highlight R %}
# Install and the libraries
install.packages("tm")
install.packages("SnowballC")
install.packages("wordcloud")

library(tm)
library(SnowballC)
library(wordcloud)

# Read the file
df = read.csv("/tmp/out.csv", header=TRUE)

# Now generate the two word clouds.
# Most of the work here is removing the unncessary and common words
# as well as optionally stemming each of the words. In my case since
# I'm plotting the keywords and tags I ignore this step.

corpus <- Corpus(VectorSource(df$keywords))
corpus <- tm_map(corpus, PlainTextDocument)
corpus <- tm_map(corpus, removePunctuation)
corpus <- tm_map(corpus, removeWords, stopwords('english'))
# corpus <- tm_map(corpus, stemDocument)
corpus <- tm_map(corpus, removeWords, c('the', 'this', stopwords('english')))

wordcloud(corpus, max.words = 100, random.order = FALSE, scale=c(1,.5))

corpus <- Corpus(VectorSource(df$tags))
corpus <- tm_map(corpus, PlainTextDocument)
corpus <- tm_map(corpus, removePunctuation)
corpus <- tm_map(corpus, removeWords, stopwords('english'))
# corpus <- tm_map(corpus, stemDocument)
corpus <- tm_map(corpus, removeWords, c('the', 'this', stopwords('english')))

wordcloud(corpus, max.words = 100, random.order = FALSE, scale=c(1.5,0.5))

{% endhighlight %}

<ul class="thumbnails">
  <li class="span8">
    <div class="thumbnail">
      <img src="{{ IMG_PATH }}wordcloud-tags.png" alt="Word cloud of tags">
      <p style="text-align:center;">Word cloud of the tags I use.</p>
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
      <img src="{{ IMG_PATH }}wordcloud-keywords.png" alt="Wordcloud of keywords">
      <p style="text-align:center;">Word cloud of the keywords I use.</p>
    </div>
  </li>
</ul>
