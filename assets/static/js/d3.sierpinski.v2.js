$(document).ready(function() {
  function drawPoint(svg, p) {
    svg.append("circle")
      .attr("cx", p[0])
      .attr("cy", p[1])
      .attr("r", 1);
  }

  function randomRectanglePoint(w,h) {
    var x = Math.random() * w,
        y = Math.random() * h;

    return [x,y];
  }

  function nextRectanglePoint(p, p1, p2, p3, p4) {
    var i = Math.floor(Math.random() * 4),
        cp = [p1, p2, p3, p4][i];

    return [(p[0] + cp[0])/3, (p[1] + cp[1])/3];
  }

  // Square
  var svg = d3.select("#canvas-carpet")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  var s1 = [0, 0],
      s2 = [width, 0],
      s3 = [width, height],
      s4 = [0, height],
      s = randomRectanglePoint(width, height);

  drawPoint(svg, s1);
  drawPoint(svg, s2);
  drawPoint(svg, s3);
  drawPoint(svg, s4);
  drawPoint(svg, s);

  for (var i = 0; i < 10000; i++) {
    var s = nextRectanglePoint(s, s1, s2, s3, s4);
    console.log(s);
    drawPoint(svg, s);
  }
}