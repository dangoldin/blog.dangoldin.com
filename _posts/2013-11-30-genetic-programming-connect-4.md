---
layout: post
title: "Genetic programming Connect 4"
description: "A few years ago I wrote a genetic program that generates a Connect 4 bot. This provides a quick overview of how it works."
keywords: "genetic programming, ai, connect 4"
category:
tags: []
---
{% include JB/setup %}
Over Thanksgiving break I was going through some old GitHub repos and found an interesting one I wanted to share. It’s a <a href="https://github.com/dangoldin/connect4bot" target="_blank">Connect 4 bot</a> that’s evolved through a genetic program. The goal of the strategy is to choose a column to move to that will give the highest probability of a win given a board position. To figure out the move column, the genetic program simulates play of strategy against strategy and gives the most successful ones a greater chance of reproducing into the next generation. The idea is that over time the resulting strategy will be the most fit.

The way a typical genetic program works is represented is through a tree structure with the leaf nodes (terminals) containing the various features of the input and the non-leaf nodes containing functions to evaluate the values in the leaf nodes. This way, the program can evaluate any input and we can create new functions by taking subbranches from one tree and combining them with another.

I used the <a href="http://pyevolve.sourceforge.net/" target="_blank">PyEvolve framework</a> which took care of all the simulation code so the bulk of my work was spent in figuring out which features and functions to use as well as a way of tracking the intermediate strategies so I could store the resulting strategy for later use. The features I ended up using where the number of own and opponent’s pieces adjacent to the move, the number of own and opponent’s 3 piece segments that would be created with the move, and the height of the column. I experimented with a few functions but ended up keeping a simple set of four - add, subtract, multiply, and an “is greater than” function.

In the end, the best I could get was a genetic program that was able to beat a random move strategy a little over 70% of the time. Unfortunately, this “optimal” strategy failed to win against a real strategy, such as <a href="http://en.wikipedia.org/wiki/Minimax#Minimax_algorithm_with_alternate_moves" target="_blank">minimax</a>. I suspect the strategy would have done a bit better had I trained it against a smarter set of strategies but I doubt it would have ever been able to compete with the minimax approach. I’m mostly amazed that by starting with a few features and some simple functions it’s possible to evolve a strategy that’s actually better than random. I doubt I can use this approach in a professional project but it’s still great being exposed to it.
