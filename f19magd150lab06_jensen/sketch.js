var hits = 1
var jitter = false
var jitterCount = 0
var overBox = false

function setup() {
	createCanvas(450,400);
	colorMode(HSB,100);
}

function draw() {
	background(70,65,10,100);
	noStroke();
	fill(30,45,15,100)
	rectMode(CENTER);
	angleMode(DEGREES);
	shake();
	rect(width/2,height/2-20,350,325)
	fill(65,50,50,100)
	character(width/2,height/2);
	quad(50,335,400,335,450,400,0,400);
	rectMode(CORNER);
	rect(40,15,370,40);
	rect(50,55,350,10);
	rect(50,65,40,350);
	rect(360,65,40,350);
	rect(50,65,40,350);
	rect(50,330,350,10);
	fill(9,100,90,100);
	textSize(35)
	text('DO NOT SHAKE',width/2-130,50)
	hand(mouseX,mouseY);
	update();
}

function update() {
	if(hitBox(width/2,height/2-20,350,325,width/2,360,width,40)){
		overBox = true;
		print('Over box.');}
	else{overBox = false}
	if(jitterCount == 7){
		jitter = false;
		jitterCount = 0;}
	}
//Determines whether the mouse is over the cabinet, and whether the
//jitter effect has run up its time, every frame. 

function mousePressed() {
	if (overBox == true){
		print('click');
		jitter = true;
		hits+=1}
}

function hand(x,y) {
	push();
	fill(9,100,90,100);
	rectMode(CENTER);
	translate(x,y);
	rotate(10);
	rect(-15,-30,9,30);
	rect(-5,-30,9,40);
	rect(5,-30,9,50);
	rect(15,-30,9,40);
	rect(0,0,40,40);
	quad(10,3,35,-13,43,-5,15,20)
	pop();
}

function character() {
	push();
	fill(20,100,80,100);
	translate(225,200)
	if (hits <= 6){
		scale(hits,hits);
	}
	else{
		scale(6)
	}
	//Stops the character from scaling outside the bounds of the 
	//box.
	rect(0,0,40,50);
	rect(0,0,50,40);
	if(hits<6){
		rect(0,10,70,10);
		rect(20,25,20,5);
		rect(-20,25,20,5);}
	//Removes the limbs at the characters' max size to keep it
	//in the box.
	if(hits>=6){
		fill(0,0,0,100);
	}
	else{fill(0,0,100,100);}
	//Change eye color at max size.
	rect(0,0,25,25);
	rect(0,1,35,15);
	if(hits>=6){
		fill(0,95,90,100);
	}
	else{fill(0,0,0,100);}
	rect(0,0,5,10)
	pop();
}

function shake() {
	if(jitter == true){
		translate(random(0-10,0+10),0);
		push();
		jitterCount+=1}
	else{
		translate(0,0);
		}
}
//"Shakes" the screen when the cabinet is clicked.

function hitBox(x1,y1,w1,h1,x2,y2,w2,h2) {
	if ((mouseX >= x1-w1/2 && mouseX <= x1+w1/2 && 
		mouseY >= y1-h1/2 && mouseY <= y1+h1/2) ||
		(mouseX >= x2-w2/2 && mouseX <= x2+w2/2 && 
		mouseY >= y2-h2/2 && mouseY <= y2+h2/2)){
		return true;} 
	else {
		return false;}
	}
//Use the bounds of two rectangular areas to represent the cabinet
//when detecting the mouse.