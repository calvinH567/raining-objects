const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




function preload() {
    
}

function setup(){
    var canvas = createCanvas(500,1000);
    engine = Engine.create();
    world = engine.world;
    d1 = new Drops(100,50);
    d2 = new Drops(110,50);
    d3 = new Drops(120,50);
    d4 = new Drops(130,50);
    d5 = new Drops(140,50);
    d6 = new Drops(150,50);
    d7 = new Drops(150,50);
    d8 = new Drops(150,50);
    d9 = new Drops(150,50);
    d10 = new Drops(150,50);
    d11 = new Drops(150,50);
    s1 = new Drops(150,50);
    s2 = new Drops(150,50);
    s3 = new Drops(150,50);
    s4 = new Drops(150,50);
    s5 = new Drops(150,50);
    s6 = new Drops(150,50);
    s7 = new Drops(150,50);
    s8 = new Drops(150,50);
    s9 = new Drops(150,50);

}

function draw(){
    background(rgb(100,50,255));
    Engine.update(engine);
    d1.display();
    d2.display();
    d3.display();
    d4.display();
    d5.display();
    d6.display();
    d7.display();
    d8.display();
    d9.display();
    d10.display();
    d11.display();
    s1.display();
    s2.display();
    s3.display();
    s4.display();
    s5.display();
    s6.display();
    s7.display();
    s8.display();
    s9.display();
}

