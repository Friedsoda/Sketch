var xoff = 0.2;

function setup() {
  createCanvas(800, 800);
  smooth();  
}

function draw() {
  background(0); 
  textSize(50);  
  xoff = xoff + 0.01;
  var n = noise(xoff) * 2 * width;
  fill(255);
  noStroke();
  ellipse(width/2 - 50, height - 50, n, n);
  noFill();
  strokeWeight(n/17);
  stroke(0);
  point(width/2-50 - 0.5 * 0.25 * n, height - 50 - 0.7 * 0.43 * n);
  point(width/2-50 + 0.5 * 0.43 * n, height - 50 - 0.7 * 0.25 * n);
}