

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
 
  fixedRect1 = createSprite(500, 400, 50, 80);
  fixedRect1.shapeColor = "green";
  fixedRect1.debug = true;
  
  fixedRect2 = createSprite(100, 400, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
 
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouchingByPayal(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  
  if(isTouchingByPayal(movingRect,fixedRect1)){
    movingRect.shapeColor = "red";
    fixedRect1.shapeColor = "red";
  }else{
    movingRect.shapeColor = "green";
    fixedRect1.shapeColor = "green";
  }
  
  if(isTouchingByPayal(fixedRect2,movingRect)){
    movingRect.shapeColor = "red";
    fixedRect2.shapeColor = "red";
  }else{
    movingRect.shapeColor = "green";
    fixedRect2.shapeColor = "green";
  }

  bounceOff(movingRect,fixedRect);
  
  drawSprites();
}


