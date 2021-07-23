var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var runners, player1, player2,player3,player4;
var player1Img,player2Img,player3Img,player4Img,track,ground;
var cactus1,cactus2,cactus3,cactus4;
var redCoinGroup,blackCoinGroup,yellowCoinGroup,greenCoinGroup;
var coinImg;

var redCactusGroup,blackCactusGroup,greenCactusGroup,yellowCactusGroup
function preload(){
 // track=loadImage("images/track.jpg");
  ground=loadImage("images/desert image.jpg");
  player1Img=loadAnimation("images/red1.png","images/red2.png","images/red3.png","images/red4.png");
  player2Img=loadAnimation("images/black1.png","images/black2.png","images/black3.png","images/black4.png");
  player3Img=loadAnimation("images/green1.png","images/green2.png","images/green3.png","images/green4.png");
  player4Img=loadAnimation("images/yellow1.png","images/yellow2.png","images/yellow3.png","images/yellow4.png");
  cactus1=loadImage("images/cactus1.png");
  cactus2=loadImage("images/cactus2.png");
  cactus3=loadImage("images/cactus3.png");
  cactus4=loadImage("images/cactus5.png");
  coinImg=loadImage("images/gold_coin.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();

  redCactusGroup=new Group();
  
  greenCactusGroup=new Group();
  yellowCactusGroup=new Group();
  blackCactusGroup=new Group();
  redCoinGroup=new Group();
  yellowCoinGroup=new Group();
  blackCoinGroup=new Group();
  greenCoinGroup=new Group();
  obstacles();

  game = new Game();
  game.getState();
  game.start();
  
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    player1.isTouching(redCoinGroup,removeCoin());
  } 
  
  if(gameState===2){
    game.end();
  
}
}
  

function obstacles(){
  for(var i=40;i<displayWidth*5;i=i+300){
    var obstacle1=createSprite(i,165,10,40);
    var rand=Math.round(random(1,4));
    switch (rand){
      case 1: obstacle1.addImage(cactus1);
      break;
      case 2: obstacle1.addImage(cactus2);
      break;
      case 3: obstacle1.addImage(cactus3);
      break;
      case 4: obstacle1.addImage(cactus4);
      break;
      default : break;
      
    }
    obstacle1.scale=0.2;
    redCactusGroup.add(obstacle1);
    for(var j=i+60; j<i+300; j+=60){
      
      var coin=createSprite(j,160,10,10);
      coin.addImage(coinImg);
      coin.scale=0.1;
      redCoinGroup.add(coin);

    }
  }

  for(var i=160;i<displayWidth*5;i=i+300){
    var obstacle1=createSprite(i,325,10,40);
    var rand=Math.round(random(1,4));
    switch (rand){
      case 1: obstacle1.addImage(cactus1);
      break;
      case 2: obstacle1.addImage(cactus2);
      break;
      case 3: obstacle1.addImage(cactus3);
      break;
      case 4: obstacle1.addImage(cactus4);
      break;
      default : break;
      
    }
    obstacle1.scale=0.2;
    blackCactusGroup.add(obstacle1);

    for(var j=i+60; j<i+300; j+=60){
      
      var coin=createSprite(j,325,10,10);
      coin.addImage(coinImg);
      coin.scale=0.1;
      blackCoinGroup.add(coin);

    }
    
  }

  for(var i=250;i<displayWidth*5;i=i+300){
    var obstacle1=createSprite(i,470,10,40);
    var rand=Math.round(random(1,4));
    switch (rand){
      case 1: obstacle1.addImage(cactus1);
      break;
      case 2: obstacle1.addImage(cactus2);
      break;
      case 3: obstacle1.addImage(cactus3);
      break;
      case 4: obstacle1.addImage(cactus4);
      break;
      default : break;
      
    }
    obstacle1.scale=0.2;
    greenCactusGroup.add(obstacle1);

    for(var j=i+60; j<i+300; j+=60){
      
      var coin=createSprite(j,470,10,10);
      coin.addImage(coinImg);
      coin.scale=0.1;
      greenCoinGroup.add(coin);

    }
  }

  for(var i=0;i<displayWidth*5;i=i+300){
    var obstacle1=createSprite(i,630,10,40);
    var rand=Math.round(random(1,4));
    switch (rand){
      case 1: obstacle1.addImage(cactus1);
      break;
      case 2: obstacle1.addImage(cactus2);
      break;
      case 3: obstacle1.addImage(cactus3);
      break;
      case 4: obstacle1.addImage(cactus4);
      break;
      default : break;
      
    }
    obstacle1.scale=0.2;
    yellowCactusGroup.add(obstacle1);

    for(var j=i+60; j<i+300; j+=60){
      
      var coin=createSprite(j,620,10,10);
      coin.addImage(coinImg);
      coin.scale=0.1;
      yellowCoinGroup.add(coin);

    }
  }

}

function removeCoin(player1,coin){
  coin.remove();
}
  
