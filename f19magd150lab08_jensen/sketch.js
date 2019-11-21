//this is the least I think I've ever been able to complete one of these... sorry.
//I have been too shy to ask questions but this time I think I will try to ask you where
//I went wrong.

var lines = 'placeholder';
var h = 57;
var over = false;
var font1;
var font2;
var direct;
var pdf;

function setup() {
//I feel like I followed the instructions for preloading, but none of these appear to
//load properly.
  let font1 = loadFont("GILLSANUB.tff")
  let font2 = loadFont("LTYPE.tff")
  createCanvas(400,500);
  colorMode(HSB,100);
  angleMode(DEGREES);
  lines = loadStrings("anna robuck.txt")
//also had problems with the PDF library but I left the code in so you can see my attempt.
  //pdf = createPDF();
  //pdf.beginRecord();
}

function draw() {
  background(20,10,100,100);
  noStroke();
  fill(55,70,100,100);
  rect(0,150,width,350);

  var cursor = createVector(mouseX, mouseY);
  var base = createVector(width/2, 500);
  cursor.sub(base);
  direct = map(cursor.x,0,360,0,20);

  textAlign(CENTER,TOP);
  //textFont(font2);
  fill(constrain(h,57,100),70,97,100);
  textSize(18);
  text(lines,30,155,340,440);
  textSize(20);
  fill(0,0,0,100);
  text('The',width / 2,35);
  text('Effect',width / 2,130);
  //textFont(font1);
  textSize(100);
  fill(2,95,95,100);
  text('JAWS',width / 2,50);

  shark(width/2,500);

  fill(20,0,0,100);
  rect(0,0,30,height);
  rect(370,0,30,height);
  rect(0,0,width,30);
  rect(0,470,width,30);

//this makes a button that you could click to print the composition.
  //button = createButton('Print!');
  //  button.position(336,500);
  //  button.mousePressed(pdf.save());;

  update();
}

function update() {
//this function makes the hue of the text block shift to red when moused over,
//and shift to the original color otherwise. since the text doesn't display this
//effect isn't visible, but it was meant to be my "animation."
  if (mouseX >= 30 && mouseX <= 370 && 
  mouseY >= 150 && mouseY <= 470){
    h = h+1
}
  else{
    h--;
  }
  constrain(h,57,100);
}

function shark(x,y) {
push();
translate(x,y);
rectMode(CENTER);
angleMode(DEGREES);
rotate(direct);

noStroke();
fill(0,0,0,100);
ellipse(90,-150,20,20);
ellipse(-90,-150,20,20);
fill(52,30,85,100);
rect(0,0,200,200);
ellipse(0,-100,200,350);
fill(97,80,20,100);
ellipse(0,-30,150,300);
fill(52,30,85,100);
ellipse(0,-30,150,150);
rect(0,20,200,100);
pop();
}