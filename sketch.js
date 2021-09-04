var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  wall = createSprite(200,200,50,80);
Car=createSprite(600,200,30,30)
Car.velocityX=-4

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,wall)){
  textSize(22)
  text ("Congratulations", 500,500);
}
 bounceOff(wall,Car)
  drawSprites();
}

