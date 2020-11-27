
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var wall1,wall2,wall3;

function preload()
{
}

function setup() {
	var canvas=createCanvas(900, 400);


	engine = Engine.create();
	world = engine.world;

	var ground_options={
		isStatic:true
	}

	//Create the Bodies Here.
 ground=Bodies.rectangle(450,350,900,20,ground_options);
 World.add(world,ground);
	Engine.run(engine);
  ball=new Paper(50,200,20);
// wall1=new Dustbin(850,295,20,90);
 //wall2=new Dustbin(700,295,20,90);
 wall3=new Dustbin(775,330,170,20);
 
}


function draw() {
	background("gray");
  rectMode(CENTER);
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,900,20);
  ball.display();
 // wall1.display();
 // wall2.display();
  wall3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
Matter.Body.applyForce(ball.body,ball.body.position,{x:40,y:-40});
	}
}

