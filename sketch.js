var boy,Junglebg,obstacle1,ground
var boyImg,obstacle1Img,JunglebgImg,groundImg


function preload(){
JunglebgImg=loadImage("Junglebg.jpg")
boyImg=loadAnimation("boy3.png","boy4.png")
obstacle1Img=loadImage("obstacle1.png")
groundImg=loadImage("ground.png")


}

function setup() {
    createCanvas(windowWidth, windowHeight);

    Junglebg=createSprite(600,140,200,200)
    Junglebg.addImage(JunglebgImg)
    Junglebg.scale=2.5
    Junglebg.velocityX=-2

    boy=createSprite(100,500,20,20)
    boy.addAnimation("running",boyImg)
    boy.scale=0.4

    ground=createSprite(600,390,400,10)
    ground.addImage(groundImg)
    ground.scale=4
    ground.visible=false;

    obstacle1=createSprite(690,500,20,20)
    obstacle1.addImage(obstacle1Img)
    obstacle1.scale=0.5
    obstacle1.velocityX=-8
}

function draw() {

   
if(Junglebg>400){
    Junglebg.x=100
}

if(keyDown("space")&& boy.y>=400 && boy.y>=-10){
    boy.velocityY=-8
}

    boy.velocityY=boy.velocityY+0.2


 drawSprites();
}