---
date: "2015-01-06T00:00:00Z"
description: Finally played around with the export of my Twitter analytics in Excel.
  Nothing too surprising but still an interesting exercise.
meta_img: null
keywords: twitter, analysis, excel
tags:
- 'data'
title: Some quick Twitter analytics analysis
---

I finally got around to exploring the Twitter analytics data and wanted to see whether I could find anything useful. My dataset contained 831 tweets, every single one since October 2013, as well as the text, the number of impressions, and the number of engagements. Just by loading the data into Excel, calculating a few values, and generating a pivot table it’s easy to investigate a few ideas. I’ve included some of the pivot tables below along with the various items that stood out.

<table class="table small">
  <thead>
    <tr>
      <th></th>
      <th>Has hashtag</th>
      <th>No hashtag</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Has mention</th>
      <td>171</td>
      <td>251</td>
    </tr>
    <tr>
      <th>No mention</th>
      <td>237</td>
      <td>181</td>
    </tr>
  </tbody>
</table>

- Avg impressions vs hashtag and mention (excluding @replies): Idea was to investigate whether tweets with hastags or mentions end up being due to the fact that they are more likely to appear in search results. The results are a bit weird since it seems as if having a hashtag only helps if there wasn't also an @ mention. Otherwise it hurts.

<table class="table small">
  <thead>
    <tr>
      <th>@mention</th>
      <th># tweets</th>
      <th>Total engagments</th>
      <th>Total impressions</th>
      <th>Avg engagement rate</th>
      <th>Engagements / Impressions</th>
      <th>Avg impressions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>No</td>
      <td>446</td>
      <td>2192</td>
      <td>89714</td>
      <td>2.7%</td>
      <td>2.4%</td>
      <td>201</td>
    </tr>
    <tr>
      <td>Yes</td>
      <td>385</td>
      <td>914</td>
      <td>58112</td>
      <td>2.9%</td>
      <td>1.6%</td>
      <td>151</td>
    </tr>
  </tbody>
</table>

- I suspected that sending someone an @reply would reduce total impressions but increase the engagement rate since it's directed at someone. It does reduce the average impressions and only leads to a slight increase in engagement rate - and only when looking at the average of rates, not the total engagements over total impressions. I suspect most people don't differentiate between an @reply and an @mention which doesn't lead to a significant difference in actual engagement rates.

<table class="table small">
  <thead>
    <tr>
      <th>Has mention</th>
      <th># tweets</th>
      <th>Total engagments</th>
      <th>Total impressions</th>
      <th>Avg engagement rate</th>
      <th>Engagements / Impressions</th>
      <th>Avg impressions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>No</td>
      <td>331</td>
      <td>1524</td>
      <td>62850</td>
      <td>2.6%</td>
      <td>2.4%</td>
      <td>190</td>
    </tr>
    <tr>
      <td>Yes</td>
      <td>115</td>
      <td>668</td>
      <td>26864</td>
      <td>2.8%</td>
      <td>2.5%</td>
      <td>234</td>
    </tr>
  </tbody>
</table>

- If we exclude @replies and compare tweets with and without mentions, the tweets with mentions have both a higher average number of impressions and a higher engagement. Nothing surprising here - @mentions are good since they draw attention to a tweet while @replies hurt since they limit total reach. Still nice to have some data to confirm.

<table class="table small">
  <thead>
    <tr>
      <th>Has Link</th>
      <th># Tweets</th>
      <th>Total engagements</th>
      <th>Total impressions</th>
      <th>Engagement rate</th>
      <th>Avg impressions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>No</td>
      <td>426</td>
      <td>990</td>
      <td>59385</td>
      <td>1.7%</td>
      <td>139.4</td>
    </tr>
    <tr>
      <td>Yes</td>
      <td>405</td>
      <td>2116</td>
      <td>88441</td>
      <td>2.4%</td>
      <td>218.4</td>
    </tr>
  </tbody>
</table>

- Tweets with links have higher engagement - most likely since there's a stronger call to action. Again this isn't surprising but nice to see it backed up by a bit of data.