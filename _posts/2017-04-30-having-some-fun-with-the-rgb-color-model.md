---
layout: post
title: "Having some fun with the RGB color model"
description: "To learn React I worked on a simple webapp to help me explore the RGB colors. React is great but the JS build system is getting quite complicated."
keywords: "react, colors, rgb, javascript development, frontend engineering"
image_url: "/assets/static/images/color-fun.png"
category:
tags: ["#code"]
---
{% include setup %}

<amp-img src="{{ IMG_PATH }}color-fun.png" alt="Color fun" width="2312" height="574" layout="responsive"></amp-img>

The best way to learn a new technology is to play with it so to learn React I started a simple project I termed “[color-fun](https://dangoldin.github.io/color-fun/)" ([GitHub](https://github.com/dangoldin/color-fun)). The general idea is to let you specify a starting color along with a step size for each of the digital primary colors and see the color progression. By messing around with various combinations one can get a pretty good sense of the way the RGB color scheme works. To make it a bit less boring there’s also a “random” option to generate a new value combination and a new color row.

While simple it was my first real attempt at a React project and - apologies for the pun - color me impressed. It was straightforward to get started and felt intuitive and direct. Oftentimes when learning a new framework it feels as if you’re learning a brand new way to do things without a good understand of the behind-the-scenes magic. With React there’s a fair amount of magic but it’s intuitive and doesn’t prevent you from getting up and running. I’m positive my code could be cleaner, less repetitive, and organized better but it logically makes sense and if someone were to suggest a different way of organizing it I’m sure I’d understand it immediately.

The biggest challenge was figuring out the modern JavaScript toolchain. I come from a world where one could do front end development by linking to a jQuery CDN but we’re far removed from those days. Now there’s webpack and browserify as well as a whole slew of highly-recommended libraries all available via npm. It’s great seeing this growth and evolution but it still doesn’t feel as simple as it ought to be. The biggest benefit of learning to code JavaScript is the ability to run it directly in the browser and while helpful, these tools do keep pushing us further away. I’ve had to deal with some complex build systems - ranging from make to maven to gradle - and I can imagine how challenging they can be to a new developer. The quicker one can get to actually writing the code the better and reducing friction in the toolchain is necessary to get more people into coding. Alongside the great new frameworks there needs to be a well fleshed out build system.
