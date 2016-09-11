document.addEventListener('DOMContentLoaded',
(function() {
  var margin = {top: 20, right: 20, bottom: 60, left: 40},
      width = 600 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

  var formatPercent = d3.format(".0%");
  var formatInt = d3.format("d");

  var x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1);

  var y = d3.scale.linear()
      .range([height, 0]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom")
      .tickSize(6);

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .tickFormat(formatInt);

  var svg = d3.select("#volume-chart").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      d3.csv("/assets/static/data/year-data.csv", function(error, data) {

    data.forEach(function(d) {
      d.cnt = +d.cnt;
    });

    x.domain(data.map(function(d) { return d.year; }));
    y.domain([0, d3.max(data, function(d) { return d.cnt; })]);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
          .style("text-anchor", "end")
          .attr("dx", "-0.8em")
          .attr("dy", "-0.5em")
          .attr("transform", function(d) {
              return "rotate(-90)"
              });

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    svg.selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.year); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.cnt); })
        .attr("height", function(d) { return height - y(d.cnt); });
  });
})(), false);
