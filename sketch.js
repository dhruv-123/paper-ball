
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paper;
var world;


function setup() {
	createCanvas(1400, 400);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject= new ground(700,400,1400,20);
	dustbinObj= new dustbin(1200,390);
	paper = new Paper(300,200,70);

	
  
}


function draw() {
//background("red")
Engine.run(engine);   
  rectMode(CENTER);
  background(230);
 Engine.update(engine);

  groundObject.display();
  dustbinObj.display();
  paper.display();

}

