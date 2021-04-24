var canvas;
var music;
var brick1,brick2,brick3,brick4;
var box1;

function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
var brick1 = createSprite(200,100,20,10);
var brick2 = createSprite(350,100,20,10);
 brick2.shapeColor = "pink";
brick1.shapeColor = "red";
var brick3 = createSprite(450,100,200,10);
brick3.shapeColor = "yellow";
var brick4 = createSprite(550,100,200,10);
brick4.shapeColor = " blue";
var box = createSprite("300,300,10,10");
box.shapeColor = "white";
box.velocityX = 2;
box.velocityY = 3;


    //create box sprite and give velocity

}

function draw() {
    background ("white");
    //create edgeSprite
edges = createEdgeSprites();
if(box.isTouching(edges)){
box.bounceOff(edges)
}
if(box.isTouching(brick1) || box.isTouching(brick2) || box.isTouching(brick3)){
    music.play();
box.bounceOff(brick1);
box.bounceOff(brick2);
box.bounceOff(brick3)
}
if(box.isTouching(brick4)){
    box.setVelovity(0,0);
    music.stop();
    ball.shapeColor = "blue"
    
}   
}
