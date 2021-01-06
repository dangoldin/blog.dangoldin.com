document.addEventListener('DOMContentLoaded',
  function(){
  function drawPoint(svg, p) {
    svg.append("circle")
      .attr("cx", p[0])
      .attr("cy", p[1])
      .attr("r", 1);
  }

  // From: http://koozdra.wordpress.com/2012/06/27/javascript-is-point-in-triangle/
  function inTriangle(p, a, b, c) {
    var ax = a[0],
        ay = a[1],
        bx = b[0],
        by = b[1],
        cx = c[0],
        cy = c[1],
        px = p[0],
        py = p[1];

    var v0 = [cx-ax,cy-ay];
    var v1 = [bx-ax,by-ay];
    var v2 = [px-ax,py-ay];

    var dot00 = (v0[0]*v0[0]) + (v0[1]*v0[1]);
    var dot01 = (v0[0]*v1[0]) + (v0[1]*v1[1]);
    var dot02 = (v0[0]*v2[0]) + (v0[1]*v2[1]);
    var dot11 = (v1[0]*v1[0]) + (v1[1]*v1[1]);
    var dot12 = (v1[0]*v2[0]) + (v1[1]*v2[1]);

    var invDenom = 1/ (dot00 * dot11 - dot01 * dot01);

    var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
    var v = (dot00 * dot12 - dot01 * dot02) * invDenom;

    return ((u >= 0) && (v >= 0) && (u + v < 1));
  }

  // P1 is top, P2 is bottom right, P3 is bottom left
  function randomTrianglePoint(p1, p2, p3) {
    var x = Math.random() * p2[0],
        y = Math.random() * p2[1];

    if (inTriangle([x,y], p1, p2, p3)) {
      return [x,y];
    } else {
      return randomTrianglePoint(p1, p2, p3);
    }
  }

  function nextTrianglePoint(p, p1, p2, p3) {
    var i = Math.floor(Math.random() * 3),
        cp = [p1, p2, p3][i];

    return [(p[0] + cp[0])/2, (p[1] + cp[1])/2];
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

  var width = 600,
      height = 600;

  // Triangle
  var svg = d3.select("#canvas-triangle")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  var p1 = [width/2, 0],
      p2 = [width, height],
      p3 = [0, height],
      p = randomTrianglePoint(p1, p2, p3);

  drawPoint(svg, p1);
  drawPoint(svg, p2);
  drawPoint(svg, p3);
  drawPoint(svg, p);

  for (var i = 0; i < 10000; i++) {
    var p = nextTrianglePoint(p, p1, p2, p3);
    // console.log(p);
    drawPoint(svg, p);
  }
}(), false);
