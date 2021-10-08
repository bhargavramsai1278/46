//write code here
var PLAY=1
var END=0

var gameState=PLAY
var mario,mario_running,mario_collided
var ground,invisibleground,groundImg
var obstaclesGroup,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5
var score=0
var gameOver,restart
var coinGroup,coinImg,coin
var bgImg

function preload() {
mario_running=loadAnimation("mario.png")
mario_collided=loadAnimation("mario_colided.png")   
groundImg=loadImage("ground2.jpg")
obstacle1=loadImage("obstacle1.jpg") 
obstacle2=loadImage("obstacle2.jpg") 
obstacle3=loadImage("obstacle3.png") 
obstacle4=loadImage("obstacle4.png") 
obstacle5=loadImage("obstacle5.png") 
coinImg=loadImage("coin.png")
bgImg=loadImage("bg.png")
}

function setup() {
    createCanvas(800,200)
    mario=createSprite(50,170,20,50)
   mario.addAnimation("running",mario_running)
   mario.addAnimation("collided",mario_collided)
mario.scale=0.07
ground=createSprite(200,150,400,20)
ground.addImage("ground",groundImg)
ground.x=ground.width/2


obstaclesGroup=new Group()
coinGroup=new Group()

score=0




}


function draw() {
    background("white")
    text("score"+score,500,50);
    if(gameState===PLAY){
     score=score+Math.round(getFrameRate()/600)
     mario.changeAnimation("running",mario_running)
    
     if(keyDown(UP_ARROW)&& mario.y>=150){
         mario.velocityY=-12

     }
mario.velocityY=mario.velocityY+0.8
if(keyDown(RIGHT_ARROW)){
mario.velocityX=+5
}
if(ground.x<0){
    ground.x=ground.width/2
}
mario.collide(ground)
obstacles()
if (obstaclesGroup.isTouching(mario)){
    gameState=END

}

    }
drawSprites()


    }
 function obstacles() {
     if(frameCount%60===0){
         var obstacle= createSprite(600,165,10,40)
         obstacle.velocityX=-6

         var rand = Math.round(random(1,6)); 
         switch(rand) {
              case 1: obstacle.addImage(obstacle1);
               break;
                case 2: obstacle.addImage(obstacle2);
                 break;
                 case 3: obstacle.addImage(obstacle3);
                  break; 
                  case 4: obstacle.addImage(obstacle4); 
                  break; 
                  case 5: obstacle.addImage(obstacle5);
                   break;
                    
                     default: break; }
                     obstacle.scale=0.3
                     obstacle.lifetime=300
                     obstaclesGroup.add(obstacle)
     }

 }   