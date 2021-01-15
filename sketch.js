var dog,happyDog,dogImg;
var database;
var foodS,foodStock;

function preload(){
  dogImg = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(800, 800);

  database = firebase.database();
  
   dog = createSprite(400,600,150,150);
  dog.addImage(dogImg);
  dog.scale = 0.4;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
  drawSprites();
  fill(255,255,254);
  textSize(35);
  stroke("black");
  text("Food remaning :"+foodS,170,200);
  text("Press up_arrow key to feed milk to the dog",110,30);

}
function readStock(data){
  foodS = data.val();
  }
  
  function writeStock(x){
    if(x <= 0){
      x = 0;
    }
    else{
      x = x-1;
      console.log(x);
    }
      database.ref("/").update({
        Food : x,
      })
    }