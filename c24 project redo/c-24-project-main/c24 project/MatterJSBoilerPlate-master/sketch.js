
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1,stone1;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  ground=new Ground(600,690,1500,20);
	//Create the Bodies Here.
	hammer1= new Hammer(400,350,120,30);
  stone1= new stone(600,350,100,100);
  
  sand1= new sand(200,350,70,70);
  sand2= new sand(500,350,5,5);
  sand3= new sand(450,350,5,5);
  sand4= new sand(300,350,5,5);
  sand5= new sand(250,350,5,5);
  sand6= new sand(270,350,5,5);
  sand7= new sand(470,350,5,5);
  sand8= new sand(480,350,5,5);
  sand9= new sand(100,350,5,5);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
    hammer1.display();
    stone1.display();
    ground.display();

    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
    sand7.display();
    sand8.display();
    sand9.display();
  drawSprites();
 
}



