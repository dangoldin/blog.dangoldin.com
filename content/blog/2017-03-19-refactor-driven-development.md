---
date: "2017-03-19T00:00:00Z"
description: There are a variety of software development methodologies and I’d like
  to throw another one into the fray - refactor driven development.
meta_img: null
keywords: software engineering methodologies, software development, driven development,
  coding
tags:
- 'management'
- 'code'
title: Refactor driven development
---

There are a variety of software development methodologies and I’d like to throw another one into the fray - refactor driven development. Rather than focusing on tests or models or functions the focus should be on expressive and maintainable code. Imagine spending 80% of your development time on refactoring old code and laying a solid foundation for all future work. Then the remaining 20% of the time can be spent on writing new features and functionality that drive the product forward. Once this work is done it may lead to more refactoring work to get the code back into a pristine state.

The intuition behind this is that a 10x developer is not just writing 10 times more code but is making decisions and designs that allow future changes to be done 10 times quicker. This only comes from building a system that can be easily extended and morph into something else. A few years ago I read [Where Good Ideas Come From](https://www.amazon.com/Where-Good-Ideas-Come-Innovation/dp/1594485380) which introduced me to the concept of “[the adjacent possible](http://www.practicallyefficient.com/2010/09/28/the-adjacent-possible.html)” which is this concept that we may not always see two steps ahead but once we take a step in a direction we’re able to see a whole new set of options. This translates beautifully into good code - we may not always see the benefits but once it’s written we suddenly see all this potential. Great code has a high degree of optionality which allows it to easily mutate to support a whole new world.

This emphasis on refactoring is risky since you may very well end up with something that’s too rigid and doesn’t provide any of the expected functionality. To make it work the team needs to have enough knowledge about the business to understand how the product will need to evolve as well as a strong understanding of design patterns and tradeoffs between various implementations. It’s not for the faint of heart and requires a team committed to improving the code quality and having the confidence and ability to hustle when an urgent business need arises.

The value of this approach is that business requirements and features can be done in hours or days instead of weeks. That’s incredibly powerful since so much of the time we are writing code with the goal to deliver something by a target date. Yet oftentimes we reach that date and discover that only a small bit of the whole is being used or even worse the code we wrote only handles a fraction of the desired use cases. Both of these indicate wasted development effort and while the agile process is meant to address this by having frequent iterations that are each meant to deliver value and raise potential problems earlier. At the same time the agile approach encourages us to think more tactically which prevents us from constantly thinking about the big picture and what can be done to increase our long term optionality.

Imagine being able to wait till the last minute before knocking a feature out. This gives you the luxury of waiting until you know something is a necessity rather than building something due to risk aversion. It’s definitely not easy and carries a world of risk but if you have a strong foundation and confidence that you can get it to work this ability is priceless.

This is of course a simplification of how development works and the reality is not as black and white. At the same time, I believe as an industry we do gloss over the business value a well maintained and clean code base provides. It’s difficult to prove and make the case that spending the majority of your time refactoring is actually going to be more valuable to the business  but in many cases this is true.
