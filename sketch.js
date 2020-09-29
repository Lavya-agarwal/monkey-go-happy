
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,food;
var score
var invisibleGround;
var bananaGroup;
var survivaltime=0;
var score=0;
var gameState="PLAY"
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,600);
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;

  
   invisibleGround = createSprite(400,350,900,10);
  invisibleGround.visible = false;
  
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-15;
  ground.x=ground.width/2;
  
  
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background("white");
  if(gameState=="PLAY"){
    survivaltime=survivaltime+1;
    if (ground.x < 200){
     ground.x = ground.width/2;
    }
  if(ground.x>600){
    ground.x=300;
     }
    
    //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
      
        monkey.velocityY = -12;
    }
    
    
    if(bananaGroup.isTouching(monkey)){
      score=score+1;
    bananaGroup.destroyEach();
      
       }
    
    
    //add gravity
    monkey.velocityY = monkey.velocityY+0.6
  }
  
   monkey.collide(invisibleGround);
  
  food();
  stone();
  
  
  

  
  text("score: "+score, 400,50);
  textSize(20);
  
   stroke("black");
  textSize(20);
  fill("black");
  survialtime=Math.ceil(frameCount/frameRate());
  text("survival time: "+ survivaltime, 100,50);
  drawSprites();
}


function food() {
 if (frameCount % 200 === 0) {
     banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(160,300));
   banana.addImage(bananaImage);
  banana.scale=0.07;
    banana.velocityX = -3;
    
    banana.lifetime = 300
   bananaGroup.add(banana); 
 }
 }



function stone() {
 if (frameCount % 300 === 0) {
   obstacle = createSprite(500,330,40,10);
    // obstacle.y = Math.round(random(305,330));
   obstacle.addImage(obstacleImage);
 obstacle.scale=0.1;
   obstacle.velocityX=-7;
   
    
    obstacle.lifetime = 100;
   obstacleGroup.add(obstacle); 
 }
 }

