var a, b;

function setup() {
  createCanvas(900,300);
  
  a = createSprite(100, 150, 50, 50);
  b = createSprite(900, 150, 20, 300);

  b.shapeColor = "lightgreen";
  a.shapeColor = "white";

  var speed = Math.round(random(5,20));

  a.velocityX = speed;
}

function draw() {
  background("lightgray");  
  
  if (isTouching(a, b)) {
    a.velocityX = 0;
    a.shapeColor = "red";
  }

  drawSprites();
}
