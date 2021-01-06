---
date: "2015-02-26T00:00:00Z"
description: I wrote a pretty basic set of functions to make it easier to work with
  localStorage and lists.
meta_img: null
keywords: javascript, localStorage, lists
tags:
- 'code'
- 'javascript'
title: Lists and localStorage
---

I recently discovered the localStorage functionality in HTML5 and used it on a quick internal tool at TripleLift. One hiccup I ran into was that while it provides the ability to set and get key/value pairs it stores everything as a string so I needed to write a few utility methods to get it to work with lists. They’re pretty straightforward but hopefully they inspire someone to improve on them.

{{< highlight javascript >}}
// Also let caller specify max size of list
function addItem(k, v, limit) {
  var a = getItems(k);
  a.push(v);
  if (!isNaN(limit)) {
    while (a.length > limit) {
      a.shift();
    }
  }
  localStorage.setItem(k, JSON.stringify(a));
}

function getItems(k) {
  var a = null;
  try {
    a = JSON.parse(localStorage.getItem(k));
  } catch(e) {}
  if (a && Array.isArray(a)) {
    return a;
  }
  return [];
}

// Tests/Examples
localStorage.setItem('test_list', null);

addItem('test_list', {"name": "Dan"});
addItem('test_list', {"food": "pizza"});
addItem('test_list', {"beer": "Newcastle"});

var l = getItems('test_list');

console.log('Lengths match: ' + (l.length === 3));
console.log('Value 0 matches: ' + (l[0].name === 'Dan'));
console.log('Value 1 matches: ' + (l[1].food === 'pizza'));
console.log('Value 2 matches: ' + (l[2].beer === 'Newcastle'));

addItem('test_list', {"size": 2}, 2);

l = getItems('test_list');

console.log('List limit works: ' + (l.length === 2));
console.log('Value 0 matches: ' + (l[0].beer === 'Newcastle'));
console.log('Value 1 matches: ' + (l[1].size === 2));
{{< / highlight >}}