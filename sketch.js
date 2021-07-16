const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone;
var iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
  

    plane = new Plane(600,height,1200,20);
   
    hammer = new Hammer(10,100);
  
  
    stone = new Stone(50,110);
  
    iron = new Iron(200,100);

    rubber = new Rubber(100,100,50);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    ellipseMode(RADIUS);


    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    rubber.display();
    
    
 
}