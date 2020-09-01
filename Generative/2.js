var tileCount = 20;
var actRandomSeed = 0;
var colorLeft;
var colorRight;

function setup() {
  createCanvas(600, 600);
  strokeCap(ROUND);
  colorLeft = color('#f5adb2');
  //colorRight = color('#bdadf5');
  colorRight = color('#76b2db');
}

function draw() {
  clear();
  randomSeed(actRandomSeed);
  
  for (var x = 0; x < tileCount; x++) {
    for (var y = 0; y < tileCount; y++) {
      
      var posX = width / tileCount * x;
      var posY = height / tileCount * y;
      
      var direction = int(random(0, 2));
      
      if (direction == 0) {
        stroke(colorLeft);
        strokeWeight(mouseX / (tileCount * 2));
        line(posX, posY, posX + width / tileCount, posY + height / tileCount);
      }
      else {
        stroke(colorRight);
        strokeWeight(mouseY / (tileCount * 2));
        line(posX, posY + height / tileCount, posX + width / tileCount, posY);
      }
    }
  }
}

function mousePressed() {
  actRandomSeed = random(1000);
}