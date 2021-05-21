const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgImage;
var snow = [];
 
function preload() {
  bgImage = loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800, 400);
  
  engine = Engine.create();
  world = engine.world;
  
}
 


function draw() {
  background(bgImage);

  Engine.update(engine)
  if(frameCount % 60 === 0){
    snow.push(new Snow(random(width/2-350,width/2+350), -10,40));
  }
  
  for (var s = 0; s < snow.length; s++) {
    snow[s].display(); 
  }
}