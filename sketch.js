const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //create player base body
  playerBase = Bodies.rectangle(width/3,height/2,5,15)
  World.add(world, playerBase)

  //create player body
  player = Bodies.rectangle(width/5 + 5,height/3 + 5,5,15)
  World.add(world, player)



}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  push();
  imageMode(CENTER);
  image(playerimage,player.position.x, player.position.y, 45, 150);
  pop();

  //show the playerbase image using image() function
  push();
  imageMode(CENTER);
  image(baseimage,Base.x, Base.position.y, 50, 100);
  pop();


  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
