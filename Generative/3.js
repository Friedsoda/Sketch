var tileCount = 20;
var seed = 0;
var offset = new Array(8);

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100);
  fill(233, 63, 72, 40);
  noStroke();
}

function randomOffset() {
  offset[0] = mouseX / 20 * random(-2, 2);
  offset[1] = mouseY / 20 * random(-2, 2);
  offset[2] = mouseX / 20 * random(-2, 2);
  offset[3] = mouseY / 20 * random(-2, 2);
  offset[4] = mouseX / 20 * random(-2, 2);
  offset[5] = mouseY / 20 * random(-2, 2);
  offset[6] = mouseX / 20 * random(-2, 2);
  offset[7] = mouseY / 20 * random(-2, 2);
}

function draw() {
  clear();
  randomSeed(seed);

  var shapeSize = width / tileCount;
  for (var x = 0; x < tileCount; x++) {
    for (var y = 0; y < tileCount; y++) {

      var posX = width / tileCount * x;
      var posY = height / tileCount * y;

      randomOffset();

      push();
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