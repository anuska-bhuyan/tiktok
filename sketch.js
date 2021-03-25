
var hr,min,sec;
var hrangle,minangle,secangle;






function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
 translate(500,200)
  hr=hour();
  min=minute();
  sec=second();


  hrangle=map(hr%12,0,12,0,360);
  minangle=map(min,0,60,0,360);
  secangle=map(sec,0,60,0,360);


push ()
rotate (secangle)
stroke (255,0,0)
strokeWeight (7)
line (0,0,100,0);
pop ()

push ()
rotate (minangle)
stroke (255,0,0)
strokeWeight (7)
line (0,0,75,0);
pop ()

push ()
rotate (hrangle)
stroke (255,0,0)
strokeWeight (7)
line (0,0,50,0);
pop ()


stroke (255,0,255)
point (0,0)

strokeWeight (12)
noFill ()
stroke (255,0,0)
arc (0,0,300,300,0,secangle);

stroke (0,255,0)
arc (0,0,280,280,0,minangle);

stroke (0,0,255)
arc (0,0,260,260,0,hrangle);













  drawSprites();
}