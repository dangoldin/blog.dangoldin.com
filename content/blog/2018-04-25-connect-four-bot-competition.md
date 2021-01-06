---
date: "2018-04-25T00:00:00Z"
description: We ran a Connect Four bot competition at TripleLift and wanted to share
  the framework and boilerplate code that made it easy for everyone to get started.
meta_img: null
keywords: connect four, ai, bots, competition, contest
tags:
- 'code'
title: Connect Four bot competition
---

Years ago when I worked at Yodle the engineering team held a Connect Four bot competition. The goal was for each person to write a Connect Four playing bot and then let them loose to determine the winner. We had either a few days or a few weeks to do this and my failed approach was to use genetic programming to evolve a bot. The best it did was beat a completely random bot 80% of the time while the winning entry leveraged Minimax with Alpha Beta Pruning.

That’s all in the past but earlier this week we held a quarterly kickoff and one of the more recent traditions is to have a short coding activity so I thought of running a mini Connect Four competition. Since we only had a bit of time I needed to make it as easy for everyone to get started as possible so I wrote up a [simple framework](https://github.com/dangoldin/connect-four) to make it easy to run a Connect Four competition. The code comes with four different applications: a server application that manages the game, a bot client in Python, a bot client in JavaScript, and a React UI to visualize the game. The first three were simple to write but the React UI involved finding [Jeff Leu’s great example](https://codepen.io/jeffleu/pen/KgbZwj) on CodePen and adapting it from an interactive game session to a game visualization.

There’s some nuance around getting the appropriate libraries and dependencies set up but it’s a neat activity that gets everyone thinking. A big thing that the code would benefit from is some utility functions around managing state and determining winners since that’s boilerplate that everyone would need to write. This code exists in the server application but didn’t make its way into the client since I wanted to keep the JavaScript and Python clients comparable.

If you end up giving this a try I’d love to know how it went.
