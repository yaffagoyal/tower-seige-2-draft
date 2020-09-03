const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, polygon_img;
 

function preload() {
polygon_img= loadImage("polygon.png");}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  engine= Engine.create()
  world= engine.world;
  Engine.run(engine);

  ground= new Ground(390,400,200,30);

  box1= new Box(330,225,30,40);
  box2= new Box(360,225,30,40);
  box3= new Box(390,225,30,40);
  box4= new Box(420,225,30,40);
  box5= new Box(450,225,30,40);

  box6= new Box(360,195,30,40);
  box7= new Box(390,195,30,40);
  box8= new Box(420,195,30,40);

  box9= new Box(390,155,30,40);

  polygon= Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot= new SlingShot(this.polygon,{x:100,y:200});

}


function draw() {
  background(0);  
  //drawSprites()
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  slingShot.display();
  imageMode(CENTER)
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY}) 
}
function mouseReleased(){
slingShot.fly()
}
function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(this.polygon);
  }
}