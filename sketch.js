var helicopterIMG, helicopterSprite,groundImg, packageSprite,packageIMG,bgImg;
var packageBody,ground,bg
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	groundImg=loadImage("ground.png")
	bgImg = loadImage("bg.jpg")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
bgSprite =createSprite(400,300,10,10)
bgSprite.addImage(bgImg)

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.8

	


	engine = Engine.create();
	world = engine.world;
ground = new Ground(width/2,height-20,200,20)
leftWall = new Ground(width/2-90,height-80,20,100)
rightWall = new Ground(width/2+90,height-80,20,100)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

  
}
 

function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine)
  drawSprites();
 ground.display();
 leftWall.display();
  rightWall.display();
  packageBody.position.x=helicopterSprite.x;
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Body.setStatic(packageBody,false)
  }

  if (keyCode === LEFT_ARROW) {
    helicopterSprite.x-= 10
  }

  if (keyCode === RIGHT_ARROW) {
    helicopterSprite.x += 10
  }
}



