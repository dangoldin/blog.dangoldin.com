---
layout: post
title: "Redirect recursion"
description: "I've stumbled unto a way of doing recursion using a series of redirects. I can't think of a real use case but it's one of those fun hacks that's interesting to see."
keywords: "javascript, redirects, recursion, fun hacks, code, programming"
image_url:
category:
tags: ["#code", "#javascript"]
---
{% include setup %}
I’ve stumbled onto what seems to be a solution without a problem but something that’s been fun to experiment with and might have an actual application. The idea is to replace a recursion step with a URL redirection. In this situation the base case will return a 200 response while the recursive step will do a redirection with a slightly updated URL. The sample node server below uses this idea to handle a three tasks - sum up to n, compute a factorial, and test whether an integer is prime.

{% highlight javascript %}
var express  = require('express'),
    port = 4000;

var app = express();

app.get('/sum', function(req, res) {
  var n = parseInt(req.param('n'),10) || 0,
      a = parseInt(req.param('a'),10) || 0;
  if (n === 0) {
      res.status(200).send('Sum: ' + a);
  } else {
      var url = "/sum?n=" + (n-1) + "&a=" + (a+n);
      res.redirect(url);
  }
});

app.get('/fact', function(req, res) {
  var n = parseInt(req.param('n'),10) || 1,
          a = parseInt(req.param('a'),10) || 1;
  if (n === 1) {
      res.status(200).send('Factorial: ' + a);
  } else {
      var url = "/fact?n=" + (n-1) + "&a=" + (a*n);
      res.redirect(url);
  }
});

app.get('/isPrime', function(req, res) {
  var n = parseInt(req.param('n'),10),
      f = parseInt(req.param('f'),10) || 2;
  if (f > Math.sqrt(n)) {
      res.status(200).send('Prime');
  } else if (n % f === 0) {
      res.status(200).send('Composite');
  } else {
      res.redirect('/isPrime?n=' + n + '&f=' + (f+1));
  }
});

app.listen(port);
console.log('Server started on port ' + port);
{% endhighlight %}

The only cases I can think of where it’s even remotely useful is if your servers are behind a CDN and you want to cache every intermediate result without having to write the application logic to do it or you need to reduce the amount of work done by a single HTTP request. It’s just not an efficient approach otherwise - the overhead of making new HTTP connections and handling arguments for every recursive step is usually more expensive than doing the actual logic within a single request.

The other use case I can think of is purely educational - it forces you to write your recursive code in a tail recursive style and forces you to think about the state you need to share between redirect requests. And if you’re ever told to solve a problem without using for loops or recursion you can violate the spirit of the request by using a series of HTTP redirects.

I’m genuinely curious if there’s an actual use case for this and whether anyone’s had to do this.