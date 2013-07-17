---
layout: post
title: "Scraping Yahoo fantasy football stats with Scrapy"
description: "Over the weekend I updated my old Yahoo fantasy football stats scraper to use Scrapy and wanted to share some thoughts."
keywords: "scrapy, scraping, yahoo fantasy football stats, fantasy football"
category: 
tags: []
---
{% include JB/setup %}
Last week, someone reminded me of an old project I had on GitHub that scraped fantasy football stats from Yahoo. Unfortunately, it was antiquated and failed to retrieve the data for the current season. I’ve also been interested in trying out the <a href="http://scrapy.org/" target="_blank">Scrapy</a> framework and decided this would be a good opportunity to give it a shot. I tried finding a sample project that dealt with authentication as a starting point but wasn’t able to find one so hopefully my attempt can serve as an example to others.

The full project is <a href="https://github.com/dangoldin/yahoo-ffl" target="_blank">available on GitHub</a> but I wanted to highlight a few of the components:

<ul class="bulleted">
	<li><strong>parse method</strong>: This submits a form POST to the Yahoo login page which authenticates the session. The key point here is to specify a callback function which will continue the existing session.
{% highlight python %}
def parse(self, response):
    return [FormRequest.from_response(response,
                formdata={'login': self.settings['YAHOO_USERNAME'],
                		  'passwd': self.settings['YAHOO_PASSWORD']},
                callback=self.after_login)]{% endhighlight python %}
	</li>
	<li><strong>parse_stats method</strong>: In previous projects, I struggled with separating the crawling from the parsing since the page would have information that would relevant to both - for example I would want to extract information from a page as well as find the next page to scrape. Scrapy offers a nice solution by letting you return different types from the same method. Returing a Request will lead to another page being crawled but one can also returned the scraped structured data via an Item. In the case of the scraper, I return the fantasy football stats on each page via Items but also return a Request when I want to navigate to the next page of stats.
{% highlight python %}
def parse_stats(self, response):
    hxs = HtmlXPathSelector(response)

    # Parse the next url
    next_page = hxs.select('//ul[@class="pagingnavlist"]/li[contains(@class,"last")]/a/@href')
    next_page_url = 'http://football.fantasysports.yahoo.com' + next_page.extract()[0]
    count = int(RE_CNT.findall(next_page_url)[0]) # Don't go past a certain threshold of players
    current_week = int(RE_WEEK.findall(next_page_url)[0])

    self.log('Next url is at count {} with week {}'.format(count, current_week))

    if current_week <= 17:
        # Parse the stats
        stat_rows = hxs.select('//table[@id="statTable0"]/tbody/tr')
        xpath_map = {
            'name': 'td[contains(@class,"player")]/div[contains(@class,"ysf-player-name")]/a/text()',
            'position': 'td[contains(@class,"player")]/div[contains(@class,"ysf-player-detail")]/ul/li[contains(@class,"ysf-player-team-pos")]/span/text()',
            'opp': 'td[contains(@class,"opp")]/text()',
            'passing_yds': 'td[@class="stat"][1]/text()',
            'passing_tds': 'td[@class="stat"][2]/text()',
            'passing_int': 'td[@class="stat"][3]/text()',
            'rushing_yds': 'td[@class="stat"][4]/text()',
            'rushing_tds': 'td[@class="stat"][5]/text()',
            'receiving_recs': 'td[@class="stat"][6]/text()',
            'receiving_yds': 'td[@class="stat"][7]/text()',
            'receiving_tds': 'td[@class="stat"][8]/text()',
            'return_tds': 'td[@class="stat"][9]/text()',
            'misc_twopt': 'td[@class="stat"][10]/text()',
            'fumbles': 'td[@class="stat"][11]/text()',
            'points': 'td[contains(@class,"pts")]/text()',
        }
        for stat_row in stat_rows:
            stats_item = ScrapefflPlayerItem()
            stats_item['week'] = current_week
            for col_name, xpath in xpath_map.items():
                stats_item[col_name] = stat_row.select(xpath).extract()
            yield stats_item

    # Jump to next week if we go past the threshold of players        
        if count > self.settings['MAX_STATS_PER_WEEK']:
            yield Request(self.base_url.format(self.settings['YAHOO_LEAGUEID'], current_week + 1), callback=self.parse_stats)
        else:
            yield Request(next_page_url, callback=self.parse_stats){% endhighlight python %}}
	</li>
	<li><strong>XPath expressions</strong>: In the past, I'd use either BeautifulSoup or PyQuery to traverse the DOM but found XPath expressions to be simpler. There’s less code to write and the expressions are easier to understand and have a higher information density.
{% highlight python %}
stat_rows = hxs.select('//table[@id="statTable0"]/tbody/tr')
xpath_map = {
    'name': 'td[contains(@class,"player")]/div[contains(@class,"ysf-player-name")]/a/text()',
    'position': 'td[contains(@class,"player")]/div[contains(@class,"ysf-player-detail")]/ul/li[contains(@class,"ysf-player-team-pos")]/span/text()',
    'opp': 'td[contains(@class,"opp")]/text()',
    'passing_yds': 'td[@class="stat"][1]/text()',
    'passing_tds': 'td[@class="stat"][2]/text()',
    'passing_int': 'td[@class="stat"][3]/text()',
    'rushing_yds': 'td[@class="stat"][4]/text()',
    'rushing_tds': 'td[@class="stat"][5]/text()',
    'receiving_recs': 'td[@class="stat"][6]/text()',
    'receiving_yds': 'td[@class="stat"][7]/text()',
    'receiving_tds': 'td[@class="stat"][8]/text()',
    'return_tds': 'td[@class="stat"][9]/text()',
    'misc_twopt': 'td[@class="stat"][10]/text()',
    'fumbles': 'td[@class="stat"][11]/text()',
    'points': 'td[contains(@class,"pts")]/text()',
}{% endhighlight python %}
	</li>
</ul>

This also got me thinking about the evolution of my approach to scraping. In 2006, I was into Perl and scraped using the LWP::Simple, WWW::Mechanize and the HTML::TreeBuilder libraries. After I moved on to Python I switched to using urllib and BeautifulSoup. Most recently, I’ve started using the wonderful requests library along with PyQuery. Conceptually, these approaches are the same: first retrieve a web page and then extract the data you want by traversing the DOM. Scrapy does the same thing internally but by removing a ton of the boilerplate, it lets you focus on the key problems in scraping - figuring out what page to scrape next and figuring out how to extract the content. The rest is handled by Scrapy itself - including file storage, retries, throttling, and probably a ton more that I haven’t gotten a chance to explore yet.

This also gives me some time to work on the actual draft algorithm. My goal is to create a strategy that’s using a value based approach combined with my schedule. The idea is that I shouldn’t pick the players that will have the highest point total over the season but the ones that will have more points during my tough matchups. Of course, it’s almost all luck but I’m still looking forward to attempting this approach.