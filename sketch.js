const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2,box3,box4;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(200,200,50,50);   
    box2=new Box(230,50,70,140);  
    box3=new Box(200,20,50,60);
    box4=new Box(230,15,70,40);
    ground=new Ground(200,385,400,15);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display(); 
    box4.display();
    ground.display();
    
}

