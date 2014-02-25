$(document).ready(function() {
  $('#id-sierpinski-generate').click(function() {
    drawShape();
    return false;
  });

  function drawPoint(svg, p) {
    svg.append("circle")
      .attr("cx", p[0])
      .attr("cy", p[1])
      .attr("r", 1);
  }

  function randomPoint(w,h) {
    var x = Math.random() * w,
        y = Math.random() * h;

    return [x,y];
  }

  function nextPoint(p, points, ratio) {
    var i = Math.floor(Math.random() * points.length),
        cp = points[i];

    return [(p[0] + cp[0]) * ratio, (p[1] + cp[1]) * ratio];
  }

  function generateVertices(w,h,n) {
    var cx = w/2,
        cy = h/2,
        theta = 2 * Math.PI/n,
        r =  Math.min(w, h)/2,
        points = [];

    for (var i = 0; i < n; i++) {
      var px = cx + r * Math.cos(theta * i),
          py = cy + r * Math.sin(theta * i);
      points.push([px, py]);
    }
    console.log(points);
    return points;
  }

  function drawShape() {
    $('svg').remove();

    var width = 600,
        height = 600;

    var svg = d3.select("#canvas")
      .append("svg")
      .attr("width", width)
      .attr("height", height),
      num_sides = parseFloat($('#id-sierpinski-sides').val()),
      ratio = parseFloat($('#id-sierpinski-ratio').val()),
      vertices = generateVertices(width, height, num_sides),
      s = randomPoint(width, height);

    console.log(vertices);

    for (var i = 0; i < num_sides; i++) {
      drawPoint(svg, vertices[i]);
    }

    for (var i = 0; i < 10000; i++) {
      var s = nextPoint(s, vertices, ratio);
      console.log(s);
      drawPoint(svg, s);
    }
  }
});