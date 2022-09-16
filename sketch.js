
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ball;
var ground;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;


  var ball_prop ={
    restitution: 1.5,
    frictionAir: 0.01
  }


  ball = Bodies.circle(100,10,20, ball_prop);
  World.add(world,ball)

  var ground_prop ={
    isStatic: true
  }
  

  ground = Bodies.rectangle(0,390,800,40,ground_prop)
  World.add(world,ground)




}

function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 20);

  rect(ground.position.x, ground.position.y, 400,40);

 
}

