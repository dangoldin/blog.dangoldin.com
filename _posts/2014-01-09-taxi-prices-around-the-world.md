---
layout: post
title: "Taxi prices around the world"
description: "This is a comparison of taxi prices across various cities. I've included a few visualizations showing the magnitude of the differences"
keywords: "taxi prices, visualization, analysis"
image_url: "/assets/static/images/taxi-mile-vs-distance.png"
category:
tags: ["#dataviz", "#code", "#R"]
---
{% include setup %}
I initially set out to add some visualizations to an earlier post comparing taxi fares between NYC and Mumbai based on some reader suggestions. After a few visualizations, I wasn’t discovering anything new and decided add taxi fare data from other cities to make it more interesting. I ended up simulating rides in different cities on <a href="http://www.worldtaximeter.com" target="_blank" rel="nofollow">worldtaximeter.com</a> and combining that with the data from <a href="http://www.taxiautofare.com" target="_blank" rel="nofollow">taxiautofare.com</a> and <a href="http://www.numbeo.com/taxi-fare/" targt="_blank">www.numbeo.com</a> in order to break down each city’s fare into a base fare, the included distance, the rate per local distance unit, and the rate per minute. Since each city’s fare came in local units I also had to convert to miles (sorry world) and US dollars (sorry again). Using R we generate the fares for the various combinations of distances and stoppage times and start diving into the data. As usual, the data and code are up on <a href="https://github.com/dangoldin/taxi-pricing" target="_blank">GitHub</a> with contributions, corrections, and suggestions welcome. I’d also love to get the real rates for the cities so either do a pull request or let me know what they are in the comments and I’ll update the post.

<table class="table"><thead><tr><th>City</th><th>Base</th><th>Inc Dist</th><th>Per Dist</th><th>Per Min</th><th>Dist Cvr</th><th>Fare Cvr</th><th>$ Base</th><th>$ per Mile</th><th>$ per Min</th><th>Ratio</th><th>$ per Hr</th></tr></thead><tbody><tr><td>New York</td><td>2.50</td><td>0.00</td><td>2.50</td><td>0.50</td><td>1.00</td><td>1.00</td><td>2.50</td><td>2.50</td><td>0.50</td><td>5.00</td><td>30.00</td></tr><tr><td>Mumbai</td><td>19.00</td><td>1.50</td><td>12.35</td><td>0.50</td><td>1.61</td><td>0.02</td><td>0.32</td><td>0.33</td><td>0.01</td><td>39.77</td><td>0.50</td></tr><tr><td>London</td><td>2.20</td><td>2.00</td><td>1.70</td><td>0.52</td><td>1.61</td><td>1.64</td><td>3.61</td><td>4.49</td><td>0.85</td><td>5.31</td><td>50.71</td></tr><tr><td>Amsterdam</td><td>2.66</td><td>0.00</td><td>1.95</td><td>0.32</td><td>1.61</td><td>1.36</td><td>3.62</td><td>4.27</td><td>0.44</td><td>9.81</td><td>26.11</td></tr><tr><td>Tokyo</td><td>712.00</td><td>0.00</td><td>188.00</td><td>56.00</td><td>1.61</td><td>0.01</td><td>6.84</td><td>2.91</td><td>0.54</td><td>5.41</td><td>32.26</td></tr><tr><td>Aberdeen</td><td>2.40</td><td>0.90</td><td>1.10</td><td>0.37</td><td>1.61</td><td>1.64</td><td>3.94</td><td>2.90</td><td>0.61</td><td>4.79</td><td>36.41</td></tr><tr><td>Austin</td><td>2.54</td><td>0.20</td><td>1.30</td><td>0.67</td><td>1.61</td><td>1.00</td><td>2.54</td><td>2.09</td><td>0.67</td><td>3.12</td><td>40.20</td></tr><tr><td>Baltimore</td><td>1.80</td><td>0.15</td><td>1.36</td><td>0.44</td><td>1.61</td><td>1.00</td><td>1.80</td><td>2.19</td><td>0.44</td><td>4.98</td><td>26.40</td></tr><tr><td>Barcelona</td><td>2.05</td><td>0.00</td><td>0.98</td><td>0.38</td><td>1.61</td><td>1.36</td><td>2.79</td><td>2.15</td><td>0.52</td><td>4.15</td><td>31.01</td></tr><tr><td>Berlin</td><td>3.00</td><td>0.00</td><td>1.58</td><td>0.41</td><td>1.61</td><td>1.36</td><td>4.08</td><td>3.46</td><td>0.56</td><td>6.20</td><td>33.46</td></tr><tr><td>Boston</td><td>2.60</td><td>0.23</td><td>1.73</td><td>0.54</td><td>1.61</td><td>1.00</td><td>2.60</td><td>2.79</td><td>0.54</td><td>5.16</td><td>32.40</td></tr><tr><td>Chicago</td><td>2.25</td><td>0.18</td><td>1.11</td><td>0.37</td><td>1.61</td><td>1.00</td><td>2.25</td><td>1.79</td><td>0.37</td><td>4.83</td><td>22.20</td></tr><tr><td>Dublin</td><td>4.09</td><td>1.00</td><td>1.03</td><td>0.37</td><td>1.61</td><td>1.36</td><td>5.56</td><td>2.26</td><td>0.50</td><td>4.48</td><td>30.19</td></tr><tr><td>Edinburgh</td><td>3.00</td><td>0.52</td><td>1.20</td><td>0.36</td><td>1.61</td><td>1.64</td><td>4.92</td><td>3.17</td><td>0.59</td><td>5.41</td><td>35.13</td></tr><tr><td>Ibiza</td><td>3.25</td><td>0.00</td><td>0.98</td><td>0.35</td><td>1.61</td><td>1.36</td><td>4.42</td><td>2.15</td><td>0.48</td><td>4.51</td><td>28.56</td></tr><tr><td>Las Vegas</td><td>3.30</td><td>0.00</td><td>1.49</td><td>0.53</td><td>1.61</td><td>1.00</td><td>3.30</td><td>2.40</td><td>0.53</td><td>4.53</td><td>31.80</td></tr><tr><td>Los Angeles</td><td>2.85</td><td>0.18</td><td>1.67</td><td>0.50</td><td>1.61</td><td>1.00</td><td>2.85</td><td>2.69</td><td>0.50</td><td>5.38</td><td>30.00</td></tr><tr><td>Madrid</td><td>2.04</td><td>0.00</td><td>0.98</td><td>0.32</td><td>1.61</td><td>1.00</td><td>2.04</td><td>1.58</td><td>0.32</td><td>4.93</td><td>19.20</td></tr><tr><td>Malaga</td><td>1.42</td><td>0.00</td><td>0.84</td><td>0.34</td><td>1.61</td><td>1.36</td><td>1.93</td><td>1.84</td><td>0.46</td><td>3.98</td><td>27.74</td></tr><tr><td>Mallorca</td><td>3.00</td><td>0.00</td><td>0.80</td><td>0.29</td><td>1.61</td><td>1.36</td><td>4.08</td><td>1.75</td><td>0.39</td><td>4.44</td><td>23.66</td></tr><tr><td>Manchester</td><td>2.35</td><td>0.43</td><td>1.00</td><td>0.28</td><td>1.61</td><td>1.64</td><td>3.85</td><td>2.64</td><td>0.46</td><td>5.75</td><td>27.55</td></tr><tr><td>Melbourne</td><td>3.20</td><td>0.00</td><td>1.61</td><td>1.04</td><td>1.61</td><td>0.89</td><td>2.85</td><td>2.31</td><td>0.93</td><td>2.49</td><td>55.54</td></tr><tr><td>Montreal</td><td>3.45</td><td>0.00</td><td>1.70</td><td>0.63</td><td>1.61</td><td>0.93</td><td>3.21</td><td>2.55</td><td>0.59</td><td>4.34</td><td>35.15</td></tr><tr><td>New Delhi</td><td>40.00</td><td>0.00</td><td>15.00</td><td>1.67</td><td>1.61</td><td>0.02</td><td>0.67</td><td>0.40</td><td>0.03</td><td>14.46</td><td>1.67</td></tr><tr><td>Paris</td><td>2.20</td><td>0.00</td><td>1.14</td><td>0.75</td><td>1.61</td><td>1.36</td><td>2.99</td><td>2.50</td><td>1.02</td><td>2.45</td><td>61.20</td></tr><tr><td>Rome</td><td>2.80</td><td>0.00</td><td>1.52</td><td>0.44</td><td>1.61</td><td>1.36</td><td>3.81</td><td>3.33</td><td>0.60</td><td>5.56</td><td>35.90</td></tr><tr><td>San Diego</td><td>2.50</td><td>0.00</td><td>1.67</td><td>0.46</td><td>1.61</td><td>1.00</td><td>2.50</td><td>2.69</td><td>0.46</td><td>5.85</td><td>27.60</td></tr><tr><td>San Francisco</td><td>3.10</td><td>0.00</td><td>1.39</td><td>0.47</td><td>1.61</td><td>1.00</td><td>3.10</td><td>2.24</td><td>0.47</td><td>4.76</td><td>28.20</td></tr><tr><td>Seattle</td><td>2.50</td><td>0.16</td><td>1.55</td><td>0.52</td><td>1.61</td><td>1.00</td><td>2.50</td><td>2.50</td><td>0.52</td><td>4.80</td><td>31.20</td></tr><tr><td>Sydney</td><td>3.40</td><td>0.00</td><td>2.06</td><td>0.91</td><td>1.61</td><td>0.89</td><td>3.03</td><td>2.95</td><td>0.81</td><td>3.64</td><td>48.59</td></tr><tr><td>Toronto</td><td>4.25</td><td>0.14</td><td>1.74</td><td>0.53</td><td>1.61</td><td>0.93</td><td>3.95</td><td>2.61</td><td>0.49</td><td>5.29</td><td>29.57</td></tr><tr><td>Vancouver</td><td>3.20</td><td>1.00</td><td>1.85</td><td>0.50</td><td>1.61</td><td>0.93</td><td>2.98</td><td>2.77</td><td>0.47</td><td>5.96</td><td>27.90</td></tr><tr><td>Washington DC</td><td>3.00</td><td>0.00</td><td>0.93</td><td>0.26</td><td>1.61</td><td>1.00</td><td>3.00</td><td>1.50</td><td>0.26</td><td>5.76</td><td>15.60</td></tr><tr><td>Zurich</td><td>6.00</td><td>0.00</td><td>3.80</td><td>1.15</td><td>1.61</td><td>1.10</td><td>6.60</td><td>6.73</td><td>1.27</td><td>5.32</td><td>75.90</td></tr><tr><td>Beijing</td><td>13.00</td><td>3.00</td><td>2.30</td><td>0.30</td><td>1.61</td><td>0.17</td><td>2.21</td><td>0.63</td><td>0.05</td><td>12.34</td><td>3.06</td></tr><tr><td>Shanghai</td><td>14.00</td><td>0.00</td><td>2.40</td><td>0.50</td><td>1.61</td><td>0.17</td><td>2.38</td><td>0.66</td><td>0.09</td><td>7.73</td><td>5.10</td></tr><tr><td>Moscow</td><td>245.00</td><td>0.00</td><td>26.53</td><td>14.00</td><td>1.61</td><td>0.03</td><td>7.35</td><td>1.28</td><td>0.42</td><td>3.05</td><td>25.20</td></tr><tr><td>Bangkok</td><td>35.00</td><td>0.00</td><td>6.00</td><td>1.67</td><td>1.61</td><td>0.03</td><td>1.05</td><td>0.29</td><td>0.05</td><td>5.78</td><td>3.01</td></tr><tr><td>Buenos Aires</td><td>1.81</td><td>0.00</td><td>1.00</td><td>0.18</td><td>1.61</td><td>1.00</td><td>1.81</td><td>1.61</td><td>0.18</td><td>9.20</td><td>10.50</td></tr><tr><td>Cairo</td><td>2.50</td><td>0.00</td><td>1.25</td><td>0.28</td><td>1.61</td><td>0.14</td><td>0.35</td><td>0.28</td><td>0.04</td><td>7.19</td><td>2.35</td></tr><tr><td>Dhaka</td><td>250.00</td><td>0.00</td><td>35.00</td><td>4.17</td><td>1.61</td><td>0.01</td><td>3.25</td><td>0.73</td><td>0.05</td><td>13.51</td><td>3.25</td></tr><tr><td>Istanbul</td><td>2.80</td><td>0.00</td><td>1.73</td><td>0.33</td><td>1.61</td><td>0.46</td><td>1.29</td><td>1.28</td><td>0.15</td><td>8.44</td><td>9.11</td></tr><tr><td>Jakarta</td><td>6000.00</td><td>0.00</td><td>3550.00</td><td>500.00</td><td>1.61</td><td>0.00</td><td>0.49</td><td>0.47</td><td>0.04</td><td>11.43</td><td>2.46</td></tr><tr><td>Lagos</td><td>3.32</td><td>0.00</td><td>3.06</td><td>0.16</td><td>1.61</td><td>1.00</td><td>3.32</td><td>4.93</td><td>0.16</td><td>31.58</td><td>9.36</td></tr><tr><td>Manila</td><td>50.00</td><td>0.00</td><td>13.60</td><td>1.75</td><td>1.61</td><td>0.02</td><td>1.10</td><td>0.48</td><td>0.04</td><td>12.51</td><td>2.31</td></tr><tr><td>Rio de Janeiro</td><td>4.70</td><td>0.00</td><td>1.70</td><td>0.37</td><td>1.61</td><td>0.42</td><td>1.97</td><td>1.15</td><td>0.16</td><td>7.38</td><td>9.35</td></tr><tr><td>Seoul</td><td>2800.00</td><td>0.00</td><td>1050.00</td><td>206.00</td><td>1.61</td><td>0.00</td><td>2.63</td><td>1.59</td><td>0.19</td><td>8.21</td><td>11.62</td></tr></tbody></table>

Using this information we can run a few interesting analyses:

<ul class="thumbnails">
  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}taxi-mile-vs-distance.png">
        <amp-img src="{{ IMG_PATH }}taxi-mile-vs-distance.png" alt="USD per minute vs USD per mile" width="800" height="800" layout="responsive"></amp-img>
      </a>
      <p>
        <strong>USD per minute vs USD per mile.</strong> The most obvious check is to see the most and least expensive cities by the two dimensions we have - distance and time. The results are expected - Asian and African cities tend to be the least expensive and European cities being the most expensive. Within Asia there's pretty significant variance with South and Southeast Asia being the cheapest but Seoul and Tokyo being more expensive. A city that stood out was Lagos - it has the one of the lowest per minute fares but one of the largest per mile fares. I don't know why this is the case but I suspect it has something to do with t sure why this is the case other than the roads being in poor condition and the price needing to take that into account.
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}taxi-fixed-time-10.png">
        <amp-img src="{{ IMG_PATH }}taxi-fixed-time-10.png" alt="Keep time fixed at 10 minutes but vary distance" width="800" height="1200" layout="responsive"></amp-img>
      </a>
      <p>
        <strong>Keep time fixed at 10 minutes but vary distance.</strong> The idea here is to look at how quickly the prices increase by distance for different cities. This echoes the previous chart of Europe and Lagos having the highest per mile fares.
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}taxi-fixed-distance-4.png">
        <amp-img src="{{ IMG_PATH }}taxi-fixed-distance-4.png" alt="Keep distance fixed at 4 miles but vary time" width="800" height="1200" layout="responsive"></amp-img>
      </a>
      <p>
        <strong>Keep distance fixed at 4 miles but vary time.</strong> Similar to the previous plot but look at the way price will increase as a function of time. Not much new data here.
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}taxi-max-miles-max-minutes.png">
        <amp-img src="{{ IMG_PATH }}taxi-max-miles-max-minutes.png" alt="What does $10 get you?" width="800" height="800" layout="responsive"></amp-img>
      </a>
      <p>
        <strong>What does $10 get you?</strong> Another way to look at expenses is to see the maximum time and distance $10 will get you in different cities. This is similar to looking at the inverse of the per minute and per mile prices.
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}taxi-max-miles-max-minutes-zoom.png">
        <amp-img src="{{ IMG_PATH }}taxi-max-miles-max-minutes-zoom.png" alt="What does $10 get you (zoomed)?" width="800" height="800" layout="responsive"></amp-img>
      </a>
      <p>
        <strong>What does $10 get you (zoomed)?</strong> This zooms in the bottom left corner of the previous plot. Turns out that having $10 in an expensive city doesn't go very far.
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}taxi-mile-min-ratios.png">
        <amp-img src="{{ IMG_PATH }}taxi-mile-min-ratios.png" alt="Distribution of $ per mile vs $ per min ratios" width="800" height="800" layout="responsive"></amp-img>
      </a>
      <p>
        <strong>Ratio of $ per mile vs $ per minute.</strong> The goal was to see how many times a mile was more expensive than a minute for the different cities. The reason we see such high ratios is that the price of gas has a lower variance from city to city than the cost of labor - this leads to cities with low labor casts having significantly higher ratios.
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}taxi-heatmap-fares.png">
        <amp-img src="{{ IMG_PATH }}taxi-heatmap-fares.png" alt="Heatmap of the fares as a function of time and distance by city" width="800" height="800" layout="responsive"></amp-img>
      </a>
      <p>
        <strong>Heatmap of fares as a function of time and distance.</strong> I wanted this to be a bit more insightful in order to be able to compare all cities against each other across both dimensions but the extreme differences make it difficult to visualize. This highlights once more how expensive Zurich is compared to the other cities. The heatmaps below cluster the cities by the sum of price per mile and price per minute in order to visualize them along similar price scales.
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}taxi-heatmap-fares-0.png">
        <amp-img src="{{ IMG_PATH }}taxi-heatmap-fares-0.png" alt="Heatmap of the fares as a function of time and distance by city 1st" width="800" height="800" layout="responsive"></amp-img>
      </a>
      <p>
        <strong>Heatmap of the fares as a function of time and distance by city (1st quartile).</strong>
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}taxi-heatmap-fares-1.png">
        <amp-img src="{{ IMG_PATH }}taxi-heatmap-fares-1.png" alt="Heatmap of the fares as a function of time and distance by city 2nd" width="800" height="800" layout="responsive"></amp-img>
      </a>
      <p>
        <strong>Heatmap of the fares as a function of time and distance by city (2ng quartile).</strong>
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}taxi-heatmap-fares-2.png">
        <amp-img src="{{ IMG_PATH }}taxi-heatmap-fares-2.png" alt="Heatmap of the fares as a function of time and distance by city 3rd" width="800" height="800" layout="responsive"></amp-img>
      </a>
      <p>
        <strong>Heatmap of the fares as a function of time and distance by city (3rd quartile).</strong>
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}taxi-heatmap-fares-3.png">
        <amp-img src="{{ IMG_PATH }}taxi-heatmap-fares-3.png" alt="Heatmap of the fares as a function of time and distance by city 4th" width="800" height="800" layout="responsive"></amp-img>
      </a>
      <p>
        <strong>Heatmap of the fares as a function of time and distance by city (4th quartile).</strong>
      </p>
    </div>
  </li>
</ul>