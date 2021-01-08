---
title: 'From AMP on Jekyll to Hugo and GitHub Actions'
date: "2021-01-08T00:00:00Z"
meta_img: null
keywords: amp, jekyll, hugo, netlify, github actions
tags:
  - 'meta'
description: "The story of how I migrated this blog from Jekyll and AMP to Hugo and GitHub Actions."
---
This the first post written on my new blogging setup so what better topic than the new blog setup? Years ago I redesigned my entire site to use AMP across all devices, powered by Jekyll, and hosted on GitHub pages. At the end of 2020 I decided I was ready to abandon AMP and move toward a more traditional and straightforward setup while leveraging a more modern toolchain.

Due to my adoption of AMP my Jekyll/GitHub Pages setup was highly custom. I had to build it locally and push the rendered version to GitHub since I had custom ruby scripts handling a lot of the AMP conversions. In addition, I had to resort to a variety of workarounds to get Disqus working within AMP. Also, since AMP inlines all the CSS the build took almost 8 seconds despite being highly optimized and running a pretty powerful computer.

The major goal was to simplify my setup to kickoff the new year but I also knew I had some requirements:

- **URL permalinks**. This was a hard requirement. I spent multiple years blogging and I wanted to ensure that each of my posts kept their existing URL. They're linked in various places and are cached across the search engines and I wanted to maintain them.
- **Speed**. As I mentioned above I wanted the build time to be as fast as possible. In addition, I wanted the site itself to be fast. That meant focusing a simple and elegant design and eliminating as much miscellaneous JavaScript as possible.
- **Comment support**. This was not a hard requirement since I don't get much commentary on most of my posts but I did want to try to keep the comments I had. People took the time to leave them and they do add to the discussion.

To kickoff the process I had to narrow down the Jekyll replacement and there were a variety of options. Hugo, Gatsby, Ghost, and Next.js were all options but I settled on Hugo. In my pursuit of simplicity and speed I wanted to avoid JavaScript and also wanted to avoid customization. This is a simple blog that I just want to build quickly. I was leaning towards Hugo and after I discovered it had a Jekyll migration utility I was sold. I was able to get my posts migrated and the site running incredibly quickly but had a few items left.

One of the first things I did was confirm that Hugo would be able to maintain my existing permalinks. This was surprisingly straightforward and only required setting the permalinks property in the configuration file. Next I needed to find a theme. Hugo has a pretty nice [collection](https://themes.gohugo.io/) online and after a bit of trial and error I came across [nanxstats/hugo-nanx2020](https://github.com/nanxstats/hugo-nanx2020) which matched the aesthetic I was going for. It was  close enough to what I had and I was familiar enough with Bootstrap to be able to modify it.

The next step was actually making sure my posts rendered nicely. The migration was effective but I ran into a few challenges ranging from converting my amp-img HTML tags to standard image tags as well as updating some of the metadata fields - for example removing the # from the tag list and updating the meta image urls. I ended up writing a [simple script](https://github.com/dangoldin/blog.dangoldin.com/blob/master/scripts/convert_amp_jekyll_to_hugo.py) that went through each post in a directory and handled the conversion. An additional thing I had to handle was Hugo's Jekyll conversion utility not properly handling multiple syntax highlight blocks but I had few enough to do it manually. Working through the various kinks here took the bulk of the work but even then it was pretty fun to be able to compare Hugo and Jekyll in how their templating and rendering worked.

I ended up having to make a few customizations to the theme. One was to give it Google Analytics support and the other was to have the blog as the index page. I ended up adding Disqus as well but after seeing that it blew up the load time from half a second to four seconds and introduced a variety of trackers I switched over to [Utterances](https://utteranc.es/) which is powered by GitHub.

Now it was time to actually get it deployed. I started by doing everything locally but ended up creating a dedicated GitHub repo to act as the testbed. I've heard good things about Netlify and true to its reputation it was a breeze to get it working. Simply connecting the repo to Netlify and copying their build file got it working end to end after dealing with a few absolute/relative URL issues. For a bit of fun I also connected the existing Jekyll-powered blog to see how they compare. A vanilla build of the Jekyll blog with no customization took over 9 minutes while the Hugo site built in less than a minute.

At the same time, I figured I'd give GitHub Actions a shot. The process to get it working took a little more effort than Netlify since I had to find the appropriate GitHub Action but the first one I found, [peaceiris/actions-hugo](https://github.com/peaceiris/actions-hugo), ran without any issues for roughly the same time.

I now had two good deployment options, Netlify and GitHub Actions, and it was time to choose. I ended up going with GitHub Actions. My blog was already in GitHub and deployed to GitHub pages and I didn't want to add another tool. Additionally, GitHub Actions are a bit more transparent and give me the option to customize them in the future. Lastly, I have Cloudflare on top of GitHub pages and I'm a huge fan of their work so didn't want to replace them with anything else. At the same time I did not want a simple blog that would have a GitHub -> Netlify -> Cloudflare flow.

I'm happy with the results so far. I still plan on improving the styling here and will do another pass at improving the load and render time but so far so good. It's a project I've been meaning to do for a while now but held off due to the perceived complexity. Turns out that once I started it it was pretty quick to push through.
