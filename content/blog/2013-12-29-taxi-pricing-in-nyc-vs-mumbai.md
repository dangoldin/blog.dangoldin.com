---
date: "2013-12-29T00:00:00Z"
description: The difference in taxi fares between New York City and Mumbai is huge
  and highlights the difference in the cost of labor.
keywords: taxi pricing, taxi fares, NYC, Mumbai
tags:
- 'datascience'
title: Taxi pricing in NYC vs Mumbai
---

Something else that struck me during my trip to India was the difference in taxi fare between <a href="http://www.nyc.gov/html/tlc/html/passenger/taxicab_rate.shtml" target="_blank">New York City</a> and <a href="http://www.taxiautofare.com/taxi-fare-card/Mumbai-Taxi-fare" target="_blank">Mumbai</a>. I expected them to be different but the magnitude of the difference was shocking. In NYC, the base fare is $2.50 and increases 50 cents for each additional 1/5th of a mile or 60 seconds of not moving. In Mumbai, the rate starts at 19 rupees (~32 cents) and includes the first 1.5 km. After that it’s 12.35 rupees (21 cents) for each additional km and 30 rupees (50 cents) for an hour of not moving.

<table class="table"><thead><tr><th>Distance (mi)</th><th>Wait Time (min)</th><th>Total NYC Fare ($)</th><th>Total Mumbai Fare ($)</th><th>Est NYC Gas Cost ($)</th><th>Est Mumbai Gas Cost ($)</th><th>Est NYC Driver Profit</th><th>Est Mumbai Driver Profit</th></tr></thead><tbody><tr><td>1</td><td>1</td><td>5.50</td><td>0.39</td><td>0.18</td><td>0.24</td><td>97%</td><td>38%</td></tr><tr><td>1</td><td>2</td><td>6.00</td><td>0.44</td><td>0.18</td><td>0.24</td><td>97%</td><td>45%</td></tr><tr><td>1</td><td>5</td><td>7.50</td><td>0.59</td><td>0.18</td><td>0.24</td><td>98%</td><td>59%</td></tr><tr><td>2</td><td>1</td><td>8.00</td><td>0.72</td><td>0.35</td><td>0.48</td><td>96%</td><td>33%</td></tr><tr><td>2</td><td>2</td><td>8.50</td><td>0.77</td><td>0.35</td><td>0.48</td><td>96%</td><td>38%</td></tr><tr><td>2</td><td>5</td><td>10.00</td><td>0.92</td><td>0.35</td><td>0.48</td><td>97%</td><td>48%</td></tr><tr><td>5</td><td>1</td><td>15.50</td><td>1.71</td><td>0.88</td><td>1.20</td><td>94%</td><td>30%</td></tr><tr><td>5</td><td>5</td><td>17.50</td><td>1.91</td><td>0.88</td><td>1.20</td><td>95%</td><td>37%</td></tr><tr><td>5</td><td>10</td><td>20.00</td><td>2.16</td><td>0.88</td><td>1.20</td><td>96%</td><td>45%</td></tr><tr><td>5</td><td>20</td><td>25.00</td><td>2.66</td><td>0.88</td><td>1.20</td><td>97%</td><td>55%</td></tr><tr><td>10</td><td>5</td><td>30.00</td><td>3.57</td><td>1.75</td><td>2.40</td><td>94%</td><td>33%</td></tr><tr><td>10</td><td>10</td><td>32.50</td><td>3.82</td><td>1.75</td><td>2.40</td><td>95%</td><td>37%</td></tr><tr><td>10</td><td>20</td><td>37.50</td><td>4.32</td><td>1.75</td><td>2.40</td><td>95%</td><td>44%</td></tr><tr><td>10</td><td>30</td><td>42.50</td><td>4.82</td><td>1.75</td><td>2.40</td><td>96%</td><td>50%</td></tr><tr><td>20</td><td>10</td><td>57.50</td><td>7.14</td><td>3.50</td><td>4.80</td><td>94%</td><td>33%</td></tr><tr><td>20</td><td>20</td><td>62.50</td><td>7.64</td><td>3.50</td><td>4.80</td><td>94%</td><td>37%</td></tr><tr><td>20</td><td>30</td><td>67.50</td><td>8.14</td><td>3.50</td><td>4.80</td><td>95%</td><td>41%</td></tr><tr><td>50</td><td>0</td><td>127.50</td><td>16.58</td><td>8.75</td><td>12.00</td><td>93%</td><td>28%</td></tr><tr><td>100</td><td>0</td><td>252.50</td><td>33.15</td><td>17.50</td><td>24.00</td><td>93%</td><td>28%</td></tr><tr><td>1000</td><td>0</td><td>2502.50</td><td>331.40</td><td>175.00</td><td>240.00</td><td>93%</td><td>28%</td></tr></tbody></table>

The differences are crazy. A short ride will cost $5 in NYC but only 40 cents in Mumbai. Even if we look at the limit where we’re always moving and there’s no stopping, a NYC fare will cost 7.55 times <sup><a href="#footnote1">1</a></sup> that of one in Mumbai. Given these differences, I was surprised to discover that gas is 40% more expensive <sup><a href="#footnote2">2</a></sup> in Mumbai. If we assume an average car gets 20 miles a gallon, it works out that in NYC the profit to the driver is over 90% of the total fare whereas in Mumbai it’s closer to 30%. The fare pricing echoes this: standing still for an hour costs 50 cents in Mumbai but $30 in NYC. This is simplified since there are many other factors at play, ie the <a href="
http://en.wikipedia.org/wiki/Taxicabs_of_New_York_City#Medallions" target="_blank">NYC medallion system</a>, but it’s still a massive difference in labor costs.

This reminds me of something I read about the pricing of soda in grocery stores. In the US, a 12 pack of Coke is only slightly more expensive than a 20 oz bottle whereas in countries with lower labor costs they’re much closer to the actual unit costs. The reason is the same - the cost of labor in US contributes the most to the cost of an item whereas in countries with lower labor costs it’s the item cost that’s the bulk of the final item price.

<sup id="footnote1">1</sup> 7.55 = 2.5/(1.61 &times; 12.35/60)
<sup id="footnote2">2</sup> $3.50/gallon in NYC vs 78 Rupees/gallon ($4.80) in Mumbai