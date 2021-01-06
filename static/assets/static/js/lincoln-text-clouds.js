document.addEventListener('DOMContentLoaded',
(function() {
  var fill = d3.scale.category20();

  d3.csv("/assets/static/data/year-phrase-data.csv", function(error, data) {
    var word_data = {};
    data.forEach(function(d) {
      if (!(d.year in word_data)) {
        word_data[d.year] = [];
      }

      word_data[d.year].push({ text: d.phrase, year: d.year, cnt: parseInt(d.cnt,10)});
    });

    var keys = ['1832-1845', '1846-1853', '1854-1859', '1861', '1865'];

    for (var i = 0; i < keys.length; i++) {
      var year = keys[i];

      console.log(year);
      var words = word_data[year];

      var max = d3.max(words, function(d) { return d.cnt } );
      var min = d3.min(words, function(d) { return d.cnt } );

      var fontSize = d3.scale.linear().range([15, 60]).domain([min, max]);

      d3.layout.cloud().size([400,400])
        .words(words)
        .rotate(function() { return ~~(Math.random() * 2) * 90; })
        .font("Impact")
        .fontSize(function(d) { return fontSize(d.cnt); })
        .on("end", draw)
        .start();
    };
  });

  function draw(words) {
    d3.select("#text-clouds")
      .append("h3")
        .text(words[0].year);

    d3.select("#text-clouds")
      .append("div")
        .attr("id","year-" + words[0].year)
        .attr("class","cloud-chart")
        .attr("data-year", words[0].year)
      .append("svg")
        .attr("width", 400)
        .attr("height", 400)
      .append("g")
        .attr("transform", "translate(200,200)")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .style("font-family", "Impact")
        .style("fill", function(d, i) { return fill(i); })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });
  }
})(), false);
