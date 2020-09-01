var tileCount = 20;
var seed = 0;
var offset = new Array(8);
var colors = new Array(10);

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
  setColors();
}

function randomOffset() {
  offset[0] = (mouseX / 20 + 14) * random(-1, 1);
  offset[1] = (mouseY / 20 + 1) * random(-1, 1);
  offset[2] = (mouseX / 20 + 1) * random(-1, 1);
  offset[3] = (mouseY / 20 + 1) * random(-1, 1);
  offset[4] = (mouseX / 20 + 1) * random(-1, 1);
  offset[5] = (mouseY / 20 + 1) * random(-1, 1);
  offset[6] = (mouseX / 20 + 1) * random(-1, 1);
  offset[7] = (mouseY / 20 + 1) * random(-1, 1);
}

function setColors() {
  colors[0] = color(233, 63, 72, 40);
  colors[1] = color(2, 63, 90, 40);
  colors[2] = color(2, 63, 90, 40);
  colors[3] = color(2, 63, 90, 40);
  colors[4] = color(50, 25, 90, 40);
  colors[5] = color(50, 25, 90, 40);
  colors[6] = color(50, 25, 90, 40);
  colors[7] = color(50, 25, 90, 40);
  colors[8] = color(50, 25, 90, 40);
  colors[9] = color(233, 63, 72, 40);
}

function draw() {
  clear();
  randomSeed(seed);

  var shapeSize = width / tileCount;
  for (var x = 0; x < tileCount; x++) {
    for (var y = 0; y < tileCount; y++) {

      var posX = width / tileCount * x;
      var posY = height / tileCount * y;
      
      var colorIndex = int(random(0,10));

      randomOffset();

      push();
      fill(colors[colorIndex]);
      translate(posX, posY);
      beginShape();
      vertex(offset[0], offset[1]);
      vertex(shapeSize + offset[2], offset[3]);
      vertex(shapeSize + offset[4], shapeSize + offset[5]);
      vertex(offset[6], shapeSize + offset[7]);
      endShape();
      pop();
    }
  }
}

function mousePressed() {
  seed = random(1000);
}