var bg,bgImg;
var player, shooterImg,player2, shooterImg2, aimer, aimerImg ,aimer2, aimerImg2;
var hp;
var border,ground;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooterImg2 = loadImage("assets/SHOOTER-1.png")
 
aimerImg = loadImage("assets/aimer.png")
aimerImg2 = loadImage("assets/aimer2.png")

  bgImg = loadImage("assets/bg.jpg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 2.4


  

border= createSprite(displayWidth-1600, displayHeight-900, 10000, 50);
ground= createSprite(displayWidth-1600, displayHeight-100, 10000, 50);



//creating the player sprite
player = createSprite(displayWidth-1700, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.5
   player.debug = false
   player.setCollider("rectangle",300,0,300,300)

  

   player2 = createSprite(displayWidth-70, displayHeight-300, 50, 50);
 player2.addImage(shooterImg2)
   player2.scale = 0.7
   player2.debug = false
   player2.setCollider("rectangle",300,0,300,300)
   player2.velocityY=-6

   aimer = createSprite(displayWidth-70, displayHeight-300, 50, 50)
  aimer.addImage(aimerImg)
   aimer.scale = 0.1
 

   aimer2 = createSprite(displayWidth-1700, displayHeight-300, 50, 50)
   aimer2.addImage(aimerImg2)
    aimer2.scale = 0.2 

   

}

function draw() {
  background(0); 

  aimer.y=player.y;
  aimer2.y=player2.y;
  player.collide(border);
  player.collide(ground);
  border.visible=false;
  ground.visible=false;
  

//moving the player up and down and making the game mobile compatible using touches

player2.bounceOff(border);
player2.bounceOff(ground);

//release bullets and change the image of shooter to shooting position when space is pressed
if(keyDown("UP_ARROW")){
player.y-=3
}

//player goes back to original standing image once we stop pressing the space bar
if(keyDown("DOWN_ARROW")){
  player.y+=3
}
if(keyDown("SPACE")){

}


drawSprites();

}

function spawnBullet(){

}
