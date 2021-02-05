
function preload() {
    //load the images here
    cat1=loadAnimation("images/cat1.png")
    cat2=loadAnimation("images/cat2.png","images/cat3.png")
    cat3=loadAnimation("images/cat4.png")
    mouse1=loadAnimation("images/mouse1.png")
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse3=loadAnimation("images/mouse4.png")
    Bg=loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    Tom=createSprite(870,600)
    Tom.addAnimation("Tom_sleepy",cat1)
    Tom.scale=0.2

    Jerry=createSprite(200,600)
    Jerry.addAnimation("Jerry_standing",mouse1)
    Jerry.scale=0.15

}

function draw() {
     background(Bg);
    //Write condition here to evalute if tom and jerry collide
    if(Tom.x-Jerry.x<(Tom.width+Jerry.width)/2){
        Tom.velocityX=0
        Jerry.addAnimation("Jerry_finding",mouse3)
        Jerry.changeAnimation("Jerry_finding")
        Tom.addAnimation("Tom_siting",cat3)
        Tom.changeAnimation("Tom_siting")
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      Tom.velocityX=-5
      Tom.addAnimation("Tom_running",cat2)
      Tom.changeAnimation("Tom_running")
      Jerry.addAnimation("Tom_teasing",mouse2)
      Jerry.changeAnimation("Tom_teasing")
  }

}
