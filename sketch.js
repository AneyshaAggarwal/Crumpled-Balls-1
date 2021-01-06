const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground, bin1, bin2, bin3;

function setup() 
{
 createCanvas(900, 300);
 engine = Engine.create();
 world = engine.world;

 ground= new Ground(450, 300, 1200, 20);
 paper= new Paper(200, 100, 20);
 bin1= new Dustbin(700, 280, 200, 20);
 bin2= new Dustbin(600, 240, 20, 100);
 bin3= new Dustbin(800, 240, 20, 100);

 paper.shapeColor= "white";

 Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("pink");
  Engine.update(engine);

  ground.display();
  paper.display();
  bin1.display();
  bin2.display();
  bin3.display();

  drawSprites();
 
}

function keyPressed()
  {
   if (keyCode === UP_ARROW)
   {
    Matter.Body.applyForce(paper.body, paper.body.position, {x: 60, y: -60})
   }
  }
