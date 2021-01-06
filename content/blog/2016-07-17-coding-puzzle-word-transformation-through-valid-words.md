---
date: "2016-07-17T00:00:00Z"
description: A neat coding puzzle I heard is to find the shortest path from one word
  to another where you're only allowed to change a single letter at every step and
  each step needs to be a valid word. I spent some time this morning writing the code
  to make it happen.
meta_img: null
keywords: word transformation, coding puzzle, breadth first search
tags:
- 'code'
title: 'Coding puzzle: Word transformation through valid words'
---

A fun engineering puzzle I heard this week was to write an algorithm that finds the shortest path between two words of the same length where you’re only allowed to change a single letter each step and every word needs to be valid. This morning I decided to have some fun with it and wanted to jot down my thought process going through the exercise in the hope that it provides a bit of perspective on how I approach code.

The first step was to just do an example in my head to visualize the problem. I started with two short words, dog and cat, and went through the manual transition. The optimal solution is where each letter changed is the final letter - in the case of dog to cat it was simply dog -> dot -> cot -> cat. Now that I had a baseline (and a test), I decided to dive into the actual code.

The immediate realization was that since this was asking for the shortest path I’d need to do a breadth first search, something I haven’t had to touch since some early job interviews. The other realization was that the graph would need to be constructed on the fly. With these two in mind I dove right in.

I broke the problem down into three parts - one was loading the dictionary, two was writing a function that would get the “adjacent” words, and three was doing the search itself. The first function was straightforward since I just loaded in the built in OS X dictionary:

{{< highlight python >}}
def load_dictionary(path = '/usr/share/dict/words'):
  dictionary = set()
  with open('/usr/share/dict/words', 'r') as f:
    for line in f:
      dictionary.add(line.strip().lower())
  return dictionary
{{< / highlight >}}

While thinking about the adjacent word function I thought back to [Peter Norvig’s spell checker](http://norvig.com/spell-correct.html) and remembered how simple yet powerful it was (if you haven’t seen it yet you should take a look - one of the most elegant code examples I’ve seen). All his code needed was a tiny tweak to filter the list of generated words to those in the dictionary.

{{< highlight python >}}
def adjacent_words(word, alphabet):
  splits = [(word[:i], word[i:]) for i in range(len(word) + 1)]
  replaces = [a + c + b[1:] for a, b in splits for c in alphabet if b]
  return [r for r in replaces if r in dictionary]
{{< / highlight >}}

Now it was time to do the actual search which took me a bit of time. I knew the theory but it took me a bit of time to translate it into code. And even then I wasn’t happy with how it looked so ended up finding a pretty simple [Python implementation](http://eddmann.com/posts/depth-first-search-and-breadth-first-search-in-python/).

{{< highlight python >}}
def bfs_paths(source, target, dictionary, alphabet):
  queue = deque(((source, [source]),))
  while queue:
    v, path = queue.popleft()
    for n in [w for w in adjacent_words(v, alphabet) if w not in set(path)]:
      if n == target:
        yield path + [n]
      else:
        queue.append((n, path + [n]))
{{< / highlight >}}

The last part was cleaning up the code and improving its efficiency. The key parts here were using string.lowercase as the universe of letters, replacing a standard list with a collections.dequeue to significantly speed up the “pop” operation, and making the dictionary and alphabet variables locally scoped. As a final test I ran through the dog to cat example and got two additional transformations: dog->cog->cag->cat and dog->cog->cot->cat. The complete code is below but note that I left it open-ended so it will print every path it finds rather than just the shortest one.

{{< highlight python >}}
#!/usr/bin/env python

import string
from collections import deque

def load_dictionary(path = '/usr/share/dict/words'):
  dictionary = set()
  with open('/usr/share/dict/words', 'r') as f:
    for line in f:
      dictionary.add(line.strip().lower())
  return dictionary

# Peter Norvig's spellcheck code is amazing:
# http://norvig.com/spell-correct.html
# Just use the replace part of it
def adjacent_words(word, alphabet):
  splits = [(word[:i], word[i:]) for i in range(len(word) + 1)]
  replaces = [a + c + b[1:] for a, b in splits for c in alphabet if b]
  return [r for r in replaces if r in dictionary]

# Had to remember how to get this working again
# Took a bunch from http://eddmann.com/posts/depth-first-search-and-breadth-first-search-in-python/
def bfs_paths(source, target, dictionary, alphabet):
  queue = deque(((source, [source]),))
  while queue:
    v, path = queue.popleft()
    for n in [w for w in adjacent_words(v, alphabet) if w not in set(path)]:
      if n == target:
        yield path + [n]
      else:
        queue.append((n, path + [n]))

if __name__ == '__main__':
  alphabet = string.lowercase
  dictionary = load_dictionary()

  for x in bfs_paths('dog', 'cat', dictionary, alphabet):
    print x
{{< / highlight >}}