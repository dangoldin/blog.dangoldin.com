---
layout: post
title: "Fun with Prolog: Priceonomics Puzzle"
description: ""
category:
tags: []
---
{% include JB/setup %}
The <a href="http://blog.priceonomics.com/" target="_blank">Priceonomics blog</a> is one of my favorites so when I saw that they had a <a href="http://priceonomics.com/jobs/puzzle/" target="_blank">programming puzzle</a> up I decided to have some fun with it. And what’s more fun than hacking around with a quirky, esoteric programming language? I remember having fond memories of playing around with Prolog in middle school so decided to dig it up again in an attempt to solve this puzzle.

Prolog is pretty different than the mainstream programming languages, it belongs to the logic programming language category and relies on defining a variety of relations and then querying these relationships to get results. A simplified way to think about it is you define a set of equations and tell Prolog to "solve for X".

This leads to some interesting behavior. Many functions end up being bidrectional with the Prolog version of a "concat" function being a good example. The first argument is a list, the second is the separator, and the last is the resulting string. Passing in all 3 will return true if the concatenation statement is true. Passing in the list and the separator will tell us what the concatenated string is. Passing in the separator and a concatenated string is equivalent to a "split" function. The only piece it's not able to figure out is the separator given the list and the concatenated string. Unfortunately, I'm not familiar enough with Prolog to explain why.

{% highlight prolog %}
?- atomic_list_concat(['Prolog', 'is', 'sweet'], ' ', 'Prolog is sweet').
true.

?- atomic_list_concat(['Prolog', 'is', 'sweet'], ' ', 'Prolog is not sweet').
false.

?- atomic_list_concat(['Prolog', 'is', 'sweet'], ' ', X).
X = 'Prolog is sweet'.

?- atomic_list_concat(L, ' ', 'Prolog is sweet').
L = ['Prolog', is, sweet].

?- atomic_list_concat(['Prolog', is, sweet], X, 'Prolog is sweet').
ERROR: atomic_list_concat/3: Arguments are not sufficiently instantiated{% endhighlight %}

For the first pass, I decided to ignore the web side and just focus on defining the exchange rate relationships and have Prolog tell me which exchanges would work. The way it works is that we define a profit to be defined in terms of two intermediate currencies. We can then ask Prolog to give us the currency chain that will result in a profit.

{% highlight prolog %}
exchange(usd,eur,0.7779).
exchange(usd,jpy,102.459).
exchange(usd,btc,0.0083).
exchange(eur,usd,1.2851).
exchange(eur,jpy,131.711).
exchange(eur,btc,0.01125).
exchange(jpy,usd,0.0098).
exchange(jpy,eur,0.0075).
exchange(jpy,btc,0.0000811).
exchange(btc,usd,115.65).
exchange(btc,eur,88.8499).
exchange(btc,jpy,12325.44).

% Calculat profit for a usd->x->y->usd currency chain
profit(First, Second, Profit) :-
    exchange(usd,First,P1),
    exchange(First,Second,P2),
    exchange(Second,usd,P3),
    Profit is P1 * P2 * P3.

arb :-
    profit(First, Second, Profit),
    Profit > 1.0,
    write('usd '),
    write(First), write(' '),
    write(Second), write(' usd '),
    write(Profit), nl, fail.

:- arb.{% endhighlight %}

The next step was to get it to retrieve and parse the JSON from the Priceonomics server. After doing a ton of searches and reading a ton of documentation I was able to get it to work. As a next step I'll try to see if I can get it to return currency chains of arbitrary length.

{% highlight prolog %}
:- use_module(library('http/json')).
:- use_module(library('http/json_convert')).
:- use_module(library('http/http_json')).
:- use_module(library('http/http_client')).
:- use_module(library('http/http_open')).

parse(I) :-
    test(CP=S) = test(I),
    atomic_list_concat(L,'_', CP),
    [A, B] = L,
    atom_number(S,R),
    assert(exchange(A,B,R)).

% Calculat profit for a usd->x->y->usd currency chain
profit(First, Second, Profit) :-
    exchange('USD',First,P1),
    exchange(First,Second,P2),
    exchange(Second,'USD',P3),
    Profit is P1 * P2 * P3.

arb :-
    http_get('http://fx.priceonomics.com/v1/rates/', JsonIn, []),
    json_to_prolog(JsonIn,PrologIn),
    PrologIn = json(L),
    maplist(parse, L),
    profit(First, Second, Profit),
    Profit > 1.0,
    not(First = Second),
    not(First = 'USD'),
    not(Second = 'USD'),
    write('USD '),
    write(First), write(' '),
    write(Second), write(' USD '),
    write(Profit), nl, fail.

:- arb.{% endhighlight %}

I'm sure a Prolog pro would have been able to do this much quicker and better but I had a surprisingly fun time doing it. I got a bit frustrated trying to translate the JSON into Prolog relationships but actually getting it to work made it worth it. Trying a whole new programming category is a great way to get more creative and forces us to think about problems differently. Prolog may not be the most practical language but exposing us to new concepts and approaches makes it valuable.