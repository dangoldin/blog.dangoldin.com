---
layout: post
title: "Fun with the Oyster books API"
description: "Crawling the Oyster books web API and having some fun with the resulting data set."
keywords: "oyster, dataviz, api"
image_url: "/assets/static/images/oyster-rating-vs-pages.png"
category:
tags: ["#datascience", "#dataviz"]
---
{% include JB/setup %}
I’m an avid reader and signed up for <a href="http://oysterbooks.com/" target="_blank">Oyster</a> as soon as I discovered them. Since then, every time I wanted to read a new book my first step has been to check Oyster. If the book wasn’t available I’d get it the old fashioned way and read it via Readmill, another great app.

One feature I wish Oyster had was the ability to see the overlap between their available collection and what I had in my “to read” list. The only way to do this now is to go through my list one book at a time and then search for it using the Oyster iOS app since the search functionality isn’t available via the web. Being lazy, I really didn’t want to do this and started searching for a quicker way. By browsing their website and looking at the network requests in Chrome I noticed two interesting API calls being made - one to get the book “sets” and another to get the books with a set.

These API endpoints turned out to be publicly accessible and it only took a short Python <a href="https://github.com/dangoldin/oyster-books-crawl" target="_blank">script</a> to retrieve the books and dump them into a CSV file. This got me a little less than 3,000 books - turns out that the publicly accessible data is only a fraction of the entire collection and my endeavour wasn’t as fruitful as hoped.

I did manage to get a set of over 4,000 books and decided to have fun with it.

<ul class="thumbnails">
  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}oyster-authors-by-num-books.png">
        <img src="{{ IMG_PATH }}oyster-authors-by-num-books.png" alt="# of authors by # of books written">
      </a>
      <p>
        <strong>Num of authors by num of books written.</strong> Very few others appear more than once in the data set. This may be due to the limited data set or Oyster's job in editing the publicly accessible collections, maybe both.
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}oyster-authors-author-ratings.png">
        <img src="{{ IMG_PATH }}oyster-authors-author-ratings.png" alt="Distribution of ratings">
      </a>
      <p>
        <strong>Distribution of ratings.</strong> Ratings are clustered around 4 with very few ratings under 3. This is most likely a biased set since the Oyster editors would have chosen the highest rated books to be featured in their sets.
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}oyster-authors-num-books-by-author.png">
        <img src="{{ IMG_PATH }}oyster-authors-num-books-by-author.png" alt="Distribution of ratings">
      </a>
      <p>
        <strong>Num of books by author.</strong> Kurt Vonnegut has over 20 books available on Oyster with Shakespeare in the number 2 spot.
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}oyster-authors-box-plot-rating-by-author.png">
        <img src="{{ IMG_PATH }}oyster-authors-box-plot-rating-by-author.png" alt="Ratings by author">
      </a>
      <p>
        <strong>Ratings by author box plot.</strong> Just a quick box plot to see the rating distribution by author.
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}oyster-authors-num-books-vs-rating.png">
        <img src="{{ IMG_PATH }}oyster-authors-num-books-vs-rating.png" alt="# of books vs rating">
      </a>
      <p>
        <strong>Rating vs # of books.</strong> Doesn't look as if the # of books an author has written on Oyster has any relationship with their rating. I thought maybe authors with higher average ratings would appear more frequently.
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}oyster-authors-author-ratings-over-time.png">
        <img src="{{ IMG_PATH }}oyster-authors-author-ratings-over-time.png" alt="Rating over time by author">
      </a>
      <p>
        <strong>Rating over time by author.</strong> This was a reach but I wanted to see whether an author was most likely to have better ratings earlier or later in his or her career. In this case it looks as if the publish date isn't the original authorship date so not a very useful analysis.
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}oyster-pub-ratings.png">
        <img src="{{ IMG_PATH }}oyster-pub-ratings.png" alt="Publisher ratings">
      </a>
      <p>
        <strong>Publisher ratings.</strong> Similar to authors, we can take a look to see whether some publishers have significantl higher ratings than others. This is a bit more useful since there's a lot more data per publisher than there is per author. I couldn't make much sense of the results here.
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}oyster-num-pages-by-decade.png">
        <img src="{{ IMG_PATH }}oyster-num-pages-by-decade.png" alt="# of pages by decade">
      </a>
      <p>
        <strong>Avg number of pages by decade.</strong> I wanted to see whether books were getting longer or shorter so did a quick plot of the average number of published pages by decade since the year was too fine. The publish dates aren't entirely accurate so I wouldn't read too much into this.
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}oyster-rating-by-decade.png">
        <img src="{{ IMG_PATH }}oyster-rating-by-decade.png" alt="Avg rating by decade">
      </a>
      <p>
        <strong>Avg rating by decade.</strong> Similar to the previous plot but looking at the average rating rather than the number of pages. Seems to be pretty steady to me although this may be due to the dataset being a curated list of top books.
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}oyster-rating-vs-date.png">
        <img src="{{ IMG_PATH }}oyster-rating-vs-date.png" alt="Rating vs date">
      </a>
      <p>
        <strong>Rating vs date.</strong> Another way to look at the previous plot but plotting each book rather than the average by decade. Not much going on here although this may be due to the biased dataset and flawed publish dates.
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}oyster-rating-vs-pages.png">
        <img src="{{ IMG_PATH }}oyster-rating-vs-pages.png" alt="Rating vs # pages">
      </a>
      <p>
        <strong>Rating vs number of pages.</strong> This is an interesting one - are longer books more popular? Most of the books are clustered around a couple of hundred pages but longer books do tend to have a higher average rating. I'm not sure why this would be the case but would guess that only someone who's already interested in a long book would read it or stick with it enough to leave a review.
      </p>
    </div>
  </li>
</ul>

As usual, the code's up on <a href="https://github.com/dangoldin/oyster-books-crawl" target="_blank">GitHub</a>.