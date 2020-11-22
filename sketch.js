
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var ground;
var FoodGroup, obstacleGroup;
var score;
var survivalTime;

function preload(){
  createCanvas(600, 600);
  
  FoodGroup = new Group();
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.09;
  
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  
  console.log(ground.x);
  
}


function draw() {
  background("white");
  
  ground.x = ground.width/2;
  
  
  monkey.velocityY = 10;
  if (keyDown("space")) {
    monkey.velocityY = -20;
  }
  
  monkey.collide(ground);
  
  
  if (frameCount%60==0){
    banana();
  }
  
  
  if (frameCount%300==0){
    fobstacle();
  }
  
  if (monkey.isTouching(FoodGroup)) {
    FoodGroup.destroyEach();
  }
  
  
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survivalTime : " + survivalTime, 100, 20);

  
  
  drawSprites();
}

function banana() {  
  var banana = createSprite(610, 10);
  banana.addImage("bananaImage", bananaImage);
  banana.y = Math.round(random(60, 270));
  banana.velocityX = -4;
  banana.scale = 0.09;
  FoodGroup.add(banana);
}

function fobstacle(){
  obstacle = createSprite(400, 335, 10, 10);
  //obstacle.addImage("obstacleImage", obstacleImage);
  
  obstacle.scale = 2;
  obstacle.velocityX = -4;
}





