var canvas;
var car,background;

function preload() {
carImage = loadImage("assets/car1.png");
coneImage = loadImage("assets/cone.png")

  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  car = createSprite(120,550,50,50);
  car.addImage(carImage)
  car.scale = 0.15;

  cone1 = createSprite(220,620,20,20)
  cone1.addImage(coneImage);
  cone1.scale = 0.02

  
  cone2 = createSprite(220,500,20,20)
  cone2.addImage(coneImage);
  cone2.scale = 0.02

  cone3 = createSprite(220,350,20,20)
  cone3.addImage(coneImage);
  cone3.scale = 0.02

  cone4 = createSprite(20,620,20,20)
  cone4.addImage(coneImage);
  cone4.scale = 0.02

  cone5 = createSprite(20,450,20,20)
  cone5.addImage(coneImage);
  cone5.scale = 0.02

  cone6 = createSprite(20,300,20,20)
  cone6.addImage(coneImage);
  cone6.scale = 0.02

  cone7 = createSprite(20,150,20,20)
  cone7.addImage(coneImage);
  cone7.scale = 0.02

  cone8 = createSprite(20,50,20,20)
  cone8.addImage(coneImage);
  cone8.scale = 0.02

  
  cone9 = createSprite(250,50,20,20)
  cone9.addImage(coneImage);
  cone9.scale = 0.02

  cone10 = createSprite(450,50,20,20)
  cone10.addImage(coneImage);
  cone10.scale = 0.02
  
  cone11= createSprite(650,50,20,20)
  cone11.addImage(coneImage);
  cone11.scale = 0.02

  cone12= createSprite(450,350,20,20)
  cone12.addImage(coneImage);
  cone12.scale = 0.02
  
  cone13= createSprite(650,350,20,20)
  cone13.addImage(coneImage);
  cone13.scale = 0.02
  
}

function draw() {
  background("GREEN");
  text(mouseX + ',' + mouseY, mouseX, mouseY)

  if(keyDown(UP_ARROW)){
    car.velocityY = -10
  }

  drawSprites()

  
  

 
  }

  function keyPressed(){
 if(keyCode === 38){
   car.y = car.y -20
 }
  }
  

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
