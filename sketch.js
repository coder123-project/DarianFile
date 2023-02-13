var player, playerAnimation;


function preload(){
  playerAnimation=loadAnimation("p1.png","p2.png");
}

function setup() {
  createCanvas(1000,1000);
    player=createSprite(200,200,10,10);
   player.addAnimation("running",playerAnimation)
}

function draw() {
background("grey")

drawSprites()
}

