var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var gameState="start"
var count=0;
var particle

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20);
 text("Score : "+score,20,30);
 text("  500 ",5,550)
 text("  500 ",80,550)
 text("  500 ",160,550)
 text("  500 ",240,550)
 text("  100 ",320,550)
 text("  100 ",400,550)
 text("  100 ",480,550)
 text("  200 ",560,550)
 text("  200 ",640,550)
 text("  200 ",720,550)
  Engine.update(engine);
 if(gameState==="End"){
textSize(50);
text("gameOver",200,400)
 }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(particle!=null){
    particle.display();
    var p=particle.body.position;
    if(p.y>720){
      if(p.x<300){
        score=score+500
        particle=null
        if(count>=5)
        gameState="End"
      }
      else if(p.x>300&&p.x<600){
        score=score+100
        particle=null
        if(count>=5)
        gameState="End"
      }
      else if(p.x<600&&p.x>900){
        score=score+200
        particle=null
        if(count>=5)
        gameState="End"
      }
   }
  }
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function keyPressed(){
  if(keyCode===32){
    if(gameState!="End"){
      count++
      particle=new Particle(mouseX,10,10);
    }
  }
}