const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionheight = 300;

var backgroundImg;
function preload(){
  backgroundImg = loadImage("d5osgpf-de781f2c-d966-48b1-ad9f-9486f03e82ee.png");
}
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,790,480,20);
  
  

  

  for(var k=0; k<=width; k = k+80){
    divisions.push(new Divisions(k, height-divisionheight/2,10,divisionheight));
  }

  for(var j = 40; j <=width; j = j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j = 15; j <=width-10; j = j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j = 40; j <=width; j = j+50){
    plinkos.push(new Plinko(j,275));
  }
  for(var j = 15; j <=width-10; j = j+50){
    plinkos.push(new Plinko(j,375));
  }

  Engine.run(engine);
}

function draw() {
    background(backgroundImg);  
  
  drawSprites();
  Engine.update(engine);

  ground.display();
  
  for(var k =0; k < divisions.length; k++){
    divisions[k].display();
  }
  
  for(var j=0; j< plinkos.length; j++){
    plinkos[j].display();
  }
  
  for(var i=0; i< particles.length; i++){
    particles[i].display();
  }

  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,10));
  }

  
  
}