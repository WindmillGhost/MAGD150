var on = false
var channel = 1
var rect1X, rect1Y, rect2X, rect2Y;
var circleX, circleY;
var rectSize = 25;
var circleSize = 50;
var rect1Over = false;
var rect2Over = false;
var circleOver = false;
var bloodX, bloodY;
var x = 0

function setup() {
	createCanvas(500,400);
	colorMode(HSB,100);
	circleX = 65;
	circleY = 260;
	rect1X = 35;
	rect1Y = 300;
	rect2X = 35;
	rect2Y = 330;
}

function draw() {
	background(7,85,10,100);
	stroke(7,85,10,100);
	noStroke();
	fill(65,50,30,100);
	rect(40,20,200,175);
	fill(7,85,10,100);
	rect(135,0,10,height);
	rect(0,105,width,10);
	fill(3,50,20,100);
	noStroke();
	rect(75,350,415,50);
	fill(0,5,30,100);
	rect(130,50,325,300);
	fill(100,100,0,100);
	rect(155,75,250,250);
	//static
	if(on == true && channel == 1){
		stroke(0,0,100,100)
		for(let x = 0; x < 8000; x++){
			point(random(155,404),random(75,324));}
	}
	noStroke();
	//face
	if(on == true && channel == 2){
		stroke(0,0,20,100)
		for(let x = 0; x < 8000; x++){
			point(random(155,404),random(75,324));}
		for(let y = 0; y < 20; y++){
			noStroke();
			fill(0,0,95,10)
			ellipse(random(265,285),random(190,210),100,140,);
			fill(0,0,0,30)
			ellipse(random(250,260),random(180,190),30,30,);
			ellipse(random(285,300),random(175,180),25,30,);
			ellipse(random(273,279),random(240,255),35,30,);}
	}
	//blood
	if(on == true && channel == 3){
		bloodX = random(155,404)
		bloodY = 75
		bloodY++
		fill(100,0,80,100);
		rect(155,75,250,250);
		stroke(0,0,100,100)
		for(let x = 0; x < 8000; x++){
			point(random(155,404),random(75,324));}
	noStroke();
	fill(1,80,90,100);
	rect(155,75,250,10);
	for(let x = 0; x < 8000; x++){
			point(random(155,404),random(75,324));}
	rect(336,75,10,10+x)
	if (x < 265){
		x++}
	else{}
	}
	fill(0,5,30,100);
	quad(105,225,115,400,15,400,25,225);
	fill(1,80,50,100);
	ellipse(circleX,circleY,circleSize,circleSize);
	rect(rect1X,rect1Y,rectSize,rectSize);
	rect(rect2X,rect2Y,rectSize,rectSize);
	fill(0,0,0,100)
	text('power',50,265);
	text('+',45,317);
	text('-',45,347);
	update();
}

function update(){
	if (overCircle(circleX, circleY, circleSize)) {
		circleOver = true;
		rect1Over = false;
		rect2Over = false} 
    else if ( overRect(rect1X, rect1Y, rectSize, rectSize)) {
		rect1Over = true;
		rect2Over = false;
		circleOver = false;}
	else if ( overRect(rect2X, rect2Y, rectSize, rectSize)) {
		rect2Over = true;
		rect1Over = false;
		circleOver = false;} 
	else {
		circleOver = rect1Over = rect2Over = false;}
	}

function mousePressed() {
	if (circleOver == true) {
		if (on == false){
			on = true;}
		else{on = false;}}
	if(rect1Over) {
		channel+= 1
		if(channel == 4){
			channel = 1}
		}
	if(rect2Over) {
		channel-= 1
		if(channel == 0){
		channel = 4}}
    }

function overRect( x,  y,  width,  height)  {
	if (mouseX >= x && mouseX <= x+width && 
	mouseY >= y && mouseY <= y+height) {
	return true;} 
	else {
	return false;}
}

function overCircle( x,  y,  diameter) {
  var disX = x - mouseX;
  var disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;}
}