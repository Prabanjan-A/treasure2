//Game States
var PLAY=1;
var END=0;
var gameState=1;

var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var gameOver,gameOverImage;


function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  gameOverImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.10;
  

  
 
//gameOver = createSprite(width/2,height-20,20,20)
//gameOver.addImage(gameOverImg); 
//gameOver.scale=2
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {


  
  if(gameState === PLAY){
    
      background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
    //code to reset the background
  if(path.y > height ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
    
    if (cashG.isTouching(boy)) {
       cashG.destroyEach();
      cashG.setVelocityYEach(0);
  treasureCollection=treasureCollection+50;
    
  }else if (diamondsG.isTouching(boy)) {
    diamondsG.destroyEach();
    diamondsG.setVelocityYEach(0);
  treasureCollection=treasureCollection+100;
  
  }else if (jwelleryG.isTouching(boy)) { 
    jwelleryG.destroyEach(); 
    jwelleryG.setVelocityYEach(0);
  treasureCollection=treasureCollection+150;
    
  }else{
    if (swordGroup.isTouching(boy)){
      //swordGroup.destroyEach();
      //swordGroup.setVelocityYEach(0);
       gameState = END;
      boy.addAnimation("SahilRunning",gameOverImg);
      boy.x=200;
      boy.y=300;
      boy.scale=0.6;
      //gameOver.visible = true;
   
        cashG.destroyEach();
  diamondsG.destroyEach();
  jwelleryG.destroyEach();  
  swordGroup.destroyEach();
  
  cashG.setVelocityYEach(0);
  diamondsG.setVelocityYEach(0);
  jwelleryG.setVelocityYEach(0);
  swordGroup.setVelocityYEach(0);
    
    } 
  }
  


  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);
  }
}
function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.18;
  cash.velocityY = 3;
  cash.lifetime = 250;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, width-100),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.10;
  diamonds.velocityY = 3;
  diamonds.lifetime = 250;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(50, width-150),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.17;
  jwellery.velocityY = 3;
  jwellery.lifetime = 250;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, width-200),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.2;
  sword.velocityY = 3;
  sword.lifetime = 250;
  swordGroup.add(sword);
  }
}