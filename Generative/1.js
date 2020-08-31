function setup() {
  createCanvas(550, 550);
  strokeCap(SQUARE);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  var lineNum = int(map(mouseY, 0, height, 2, 40));
  var radius = mouseX - width / 2;
  var angle = TAU / lineNum;
  
  strokeWeight(3);
  
  for (var i = 0; i <= lineNum; i++) {
    var x = cos(angle * i) * radius;
    var y = sin(angle * i) * radius;
    line(0, 0, x, y);
  }
}