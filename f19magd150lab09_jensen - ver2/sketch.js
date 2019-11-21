//I'm still having trouble loading the files so I can't run this to see if it works. 
//Let's hope I got everything right!
var loc = 0;
var sprite = 1;
var leftKey, rightKey;
var speed = 2;
var sprite1, sprite2, sprite3, sprite4, paint1, paint2, bgm, sound1;
var jinglePlayed = false;
var leftKeyPressed, rightKeyPressed = false;

function preload(){
sprite1 = loadImage('sprites/sprite1.png')
sprite2 = loadImage('sprites/sprite2.png')
sprite3 = loadImage('sprites/sprite3.gif')
sprite4 = loadImage('sprites/sprite4.gif')
paint1 = loadImage('sprites/psprite1.png')
paint2 = loadImage('sprites/psprite2.png')
// remember to change file names 
     bgm = loadSound('sounds/moor.mp3')
sound1 = loadSound('sounds/ballerina.wav')
}

function setup() {
  createCanvas(500,400);
  colorMode(HSB,100);
  leftKey = 'a';
  rightKey = 'd';
  bgm.play();
}

function draw() {
  background(5,50,30,100);
  noStroke();
  fill(45,65,30,100);
  rect(0,0,width,70);
  fill(5,50,25,100);
  rect(0,220,width,200);
   update();
  character(40);

//The mirror is just a hole in the rectangle of the wall with another character behind it.
  fill(40,70,25,100);
  rect(0,0,200,220);
  rect(300,0,225,220);
  rect(200,0,100,20);
  fill(5,50,25,100);
  rect(190,20,10,220);
  rect(300,20,10,220);
  rect(190,10,120,10);
  rect(190,210,120,10);

  image(paint1,30,50);
  image(paint2,340,50);

  character(200);

  update();
}

function update() {
//Moves the character every frame according to the key being pressed.
if(rightKeyPressed == true){
loc += speed;
sprite = 3;
}
if(leftKeyPressed == true){
loc -= speed;
sprite = 4;
    }
//If the location enters a space in front of the mirror, a chime plays.
//After the first time, it won't play.
if(loc <= 225 && loc >= 275 && jinglePlayed == false){
sound1.play();
jinglePlayed = true
}
}

function keyPressed(){
if(key == rightKey){
rightKeyPressed = true;
}
if(key == leftKey){
leftKeyPressed = true;
}
}

function keyReleased(){
if(rightKeyPressed == true){
rightKeyPressed = false;
sprite = 1;
}
if(leftKeyPressed == true){
leftKeyPressed = false;
sprite = 2;
}
}

function character(y) {
push();
translate(loc,y);
//These are meant to change the sprite, so the character can face two ways and walk.
if(sprite == 1){
image(sprite1,0,0);
} else
if(sprite == 2){
image(sprite2,0,0);
} else
if(sprite == 3){
image(sprite3,0,0);
} else
if(sprite == 4){
image(sprite4,0,0);
}
pop();
}
