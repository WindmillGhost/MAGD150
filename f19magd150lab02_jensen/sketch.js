function setup() {
  // put setup code here
createCanvas(128,128);
 colorMode(HSB,100);
  background(75,75,25,100);}

function draw() {
  // put drawing code here
  colorMode(RGB,100);
  noFill();
  strokeWeight(2);
  stroke(50,10,75,70);
  bezier(15,128,64,64,64,30,123,0)
  bezier(0,128,130,64,20,10,128,30)
  bezier(0,110,64,64,64,100,100,0)
  bezier(0,100,100,64,64,64,128,5)
  stroke(100,100,0,100);
  point(100,100);
  point(100,20);
  point(110,15);
  point(95,15);
  point(93,14);
  point(100,5);
  point(121,3);
  point(124,1);
  point(90,30);
  point(80,1);
  point(124,25);
  point(85,70);
  point(5,120);
  point(30,110);
  point(2,123);
  point(10,90);
  point(67,80);
  point(25,100);
  point(17,115);
  colorMode(HSB,100);
  strokeWeight(1);
  stroke(30,100,90,75);
  fill(33,100,40,50);
  beginShape();
   vertex(46,45);
   vertex(48,77);
   vertex(45,93);
   vertex(34,128);
   vertex(92,128);
   vertex(83,93)
   vertex(80,77);
   vertex(82,45);
   endShape(CLOSE);
  noStroke();
  fill(60,10,75,100);
  ellipse(64,45,100,30)
  fill(55,50,100,50)
  arc(64,40,40,40,PI,TWO_PI);
  fill(50,30,60,100)
  ellipse(64,40,40,10)
}