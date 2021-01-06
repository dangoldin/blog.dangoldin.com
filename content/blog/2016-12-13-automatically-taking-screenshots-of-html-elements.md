---
date: "2016-12-13T00:00:00Z"
description: A simple script to capture of a screenshot of an HTML element that can
  exist anywhere on the page.
meta_img: null
keywords: selenium, screenshots, HTML element screenshot
tags:
- 'code'
title: Automatically taking screenshots of HTML elements
---

I’ve worked on a variety of scraping projects that required spinning up a browser (via selenium) and having it browse a variety of pages unattended in order to capture some data. The two most recents ones [scraping my account data](https://github.com/dangoldin/turo-automation) from Turo and the [fantasy football stats](https://github.com/dangoldin/yahoo-ffl) from Yahoo. These were relatively straightforward since the browser was used purely to navigate from page to page with the actual data capture done by parsing the underlying HTML.

Recently I needed to expand this approach to get screenshots of specific HTML elements on page. Taking a generic screenshot was easy since selenium comes with a built in function but expanding this to handle elements that were out of view and needed to be cropped took a bit of research. I found two StackOverflow responses that made this simple: the [first](http://stackoverflow.com/questions/37882208/get-element-location-relative-to-viewport-with-selenium-python) explains how to scroll to a specific HTML element and the [other](http://stackoverflow.com/questions/15018372/how-to-take-partial-screenshot-with-selenium-webdriver-in-python) explains how to screenshot an element. Putting these together was extremely painless with the resulting code below. The only nuance was incorporating the scroll amount into the crop in order to get the math to work out.

{{< highlight python >}}
OUT_DIR = 'out'

fn = str(uuid.uuid4())

filename = 'screenshot-' + fn + '.jpg'
filepath = os.path.join(OUT_DIR, filename)

self.driver.execute_script("return arguments[0].scrollIntoView();", el)
self.driver.execute_script("window.scrollBy(0, -150);")
self.driver.save_screenshot(filepath)

scroll = self.driver.execute_script("return window.scrollY;")
location = el.location
size = el.size

if size['height'] == 0 or size['width'] == 0:
    continue

im = Image.open(filepath)

left = location['x']
top = location['y'] - scroll
right = location['x'] + size['width']
bottom = location['y'] + size['height'] - scroll

im = im.crop((left, top, right, bottom))
im.save(filepath.replace('.jpg', '-2.jpg'))
{% endhighlight python %}
