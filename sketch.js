
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var tree, stone,ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;


 function preload(){
  treeimg=loadImage("images/tree.png");
	boyimg=loadImage("images/boy.png");
}

function setup() {
	createCanvas(1300, 650);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(); 
  stones = new Stone(320,200,20);
	mango1 = new Mango(1000,100,30);
  mango2 = new Mango(1010,130,50);
	mango3 = new Mango(1020,140,50);
	mango4 = new Mango(1040,70,50);
	mango5 = new Mango(1030,70,60);
	mango6 = new Mango(1060,250,30);
	mango7 = new Mango(1050,230,50);
	mango8 = new Mango(1120,230,40);
	mango9 = new Mango(1230,230,30);
	mango10 = new Mango(1010,100,20);
	
  attach=new Throw(stones.body,{x:100,y:465});

	tree=createSprite(1050,300);
  tree.addImage(treeimg);
  tree.scale=0.42;

  boy=createSprite(160,550);
  boy.addImage(boyimg);
  boy.scale=0.125;

	Engine.run(engine);
}

function draw() {

  rectMode(CENTER);
  background(255);

  fill("black");
  textSize(18);
  
 image(boyimg,200,400,200,300);
  tree.display();
  stones.display();


  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  

  stones.display();
  ground.display();
  


  detectollision(stones,mango1);
  detectollision(stones,mango2);
  detectollision(stones,mango3);
  detectollision(stones,mango4);
  detectollision(stones,mango5);
  detectollision(stones,mango6);
  detectollision(stones,mango7);
  detectollision(stones,mango8);
  detectollision(stones,mango9);
  detectollision(stones,mango10);
 
}

function mouseDragged()
{
 
	Matter.Body.setPosition(stones.body, {x:mouseX, y:mouseY});
}

function mouseReleased()
{
	attach.fly();
}



function detectollision(lstone,lmango){
  var mangoPosition=lmango.body.position
  var stonePosition=lstone.body.position
  var distance=dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y)
  if(distance<=lmango.diameter+lstone.diameter){
    Matter.Body.setStatic(lmango.body,false)
  }
}

function KeyPressed(){
  if(keyCode===32){
    Matter.body.setPosition(stones.body,{x:100,y:465});
    attach.launch(stones.body);
  }
}


  