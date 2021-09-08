const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var c1, p1, c2, p2;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
c1= new ComputerBase(width-200, random(450, height-300), 180, 150)
p1= new PlayerBase (width-900, random(450, height-300), 180, 150)
c2= new ComputerPlayer(c1.body.position.x, c1.body.position.y-150, 50, 180)
p2= new Player(p1.body.position.x, p1.body.position.y-150, 50, 180)
 }

function draw() {

  background(180);

  Engine.update(engine);

     //Display Playerbase and computer base 
     c1.display();
     p1.display();

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);



   //display Player and computerplayer
c2.display();
p2.display();

}
