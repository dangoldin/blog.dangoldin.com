---
layout: post
title: "Extract info from a web page using JavaScript"
description: "With a little bit of JavaScript knowledge you can cleanly extract information from a web page while avoiding formatting issues."
keywords: "html, css, javascript, crawling, scraping"
image_url: "/assets/static/images/ff-roster-source.jpeg"
category:
tags: ["#python", "#javascript", "#code"]
---
{% include JB/setup %}
How many times have you tried copying something from a webpage into Excel and discovering that the formatting got completely messed up and forced you to clean the data up manually? With just a bit of knowledge about HTML and CSS you can use JavaScript to get the information you want without having to struggle with the formatting issues.

In my case, I participated in a fantasy football draft and wanted to share the list of players I drafted with a friend. Unfortunately, copying and pasting didn’t work so I decided to jump into JavaScript. Hope these steps give a sense of how to approach a simple scraping problem. The idea is to use the browser’s inspect element feature to find the pattern that the element we’re interested in have in common. Then, we use JavaScript to find the elements matching that pattern and extract the information we want.

<ul class="thumbnails">
  <li class="span8">
    <div class="thumbnail">
    <p>1. The page we want to parse - please ignore the quality of my fantasy team.</p>
      <img src="{{ IMG_PATH }}ff-roster.jpeg" alt="My fantasy roster">
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
    	<p>2. Use the Chrome "Inspect Element" feature to figure out the HTML/CSS of the element we're interested in. In this case, the element containing player name has the class value “name playernote”.</p>
      <img src="{{ IMG_PATH }}ff-roster-source.jpeg" alt="Using inspect element to identify the HTML/CSS for the elements">
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
    	<p>3. Run a JavaScript command to get all the HTML elements that have those classes.
      	{% highlight javascript %}document.getElementsByClassName('name playernote'){% endhighlight %}
      </p>
      <img src="{{ IMG_PATH }}ff-roster-get-players.jpeg" alt="JavaScript to get the elements matching our CSS query">
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
    	<p>4. Store those HTML elements in a variable so we can quickly iterate through the list.
		{% highlight javascript %}players = document.getElementsByClassName('name playernote'){% endhighlight %}
      </p>
      <img src="{{ IMG_PATH }}ff-roster-get-players-2.jpeg" alt="Store the elements in a variable">
    </div>
  </li>

  <li class="span8">
    <div class="thumbnail">
    	<p>5. Use JavaScript to go through the previous list and extract the player name. Then we can just copy and paste the list of names without having to deal with the formatting issues.
      	{% highlight javascript %}for (var i = 0; i < players.length; i++) { console.log( players[i].textContent ); }{% endhighlight %}
      </p>
      <img src="{{ IMG_PATH }}ff-roster-get-player-names.jpeg" alt="Iterate through the list to extract the player name">
    </div>
  </li>
</ul>

In addition to extracting information, JavaScript can be used to interact with a web page. This comes in handy when you want to automate a certain action on a site that would take too long to do manually. For example, I was able to code up some quick JavaScript that would go through a list of my Facebook friends and invite them to like my startup’s new page. Hope this little JavaScript hack comes in handy and let me know if you have any questions.