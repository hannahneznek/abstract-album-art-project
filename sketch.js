  var x=0;
  var y=225;
  var x1=221;
  var y1=90;
  var x2=220;
  var y2=105;
  var x3=230;
  var y3=119;
  var x4=235;
  var y4=135;
  var x5=247;
  var y5=150;
  var x6=256;
  var y6=165;
  var xspeed=8
  var yspeed=1
  
function setup() {
  createCanvas(500, 300);
  frameRate(45);
}

function draw() {
  background(0);
  print(mouseX, mouseY);
  noFill();
  strokeWeight(6);
  stroke(100);
  line(0,225,x,y);
  x=x+1.72
  y=y-1
  if(x>110){
     x=110};
  if(y<160){
     y=160};
  strokeWeight(15);
  //red line
  stroke(random(225),random(0),random(0));
  line(211,90,x1,y1);
  if(mouseX>200){
    x1=x1+xspeed};
  if(mouseX>211){
    y1=y1+yspeed};
  //orange line
  stroke(random(225),random(120),random(0));
  line(220,105,x2,y2);
  if(mouseX>220){
    x2=x2+xspeed};
  if(mouseX>220){
    y2=y2+yspeed};
  //yellow line
  stroke(random(255),random(255),random(0));
  line(230,119,x3,y3);
  if(mouseX>230){
    x3=x3+xspeed};
  if(mouseX>230){
    y3=y3+yspeed};
  //green line
  stroke(random(0),random(128),random(0));
  line(235,135,x4,y4);
  if(mouseX>235){
    x4=x4+xspeed};
  if(mouseX>235){
    y4=y4+yspeed};
  //blue line
  stroke(random(0),random(0),random(225));
  line(247,150,x5,y5);
  //x5=x5+8
  //y5=y5+1
  if(mouseX>247){
    x5=x5+xspeed};
  if(mouseX>247){
    y5=y5+yspeed};
  //purple line
  stroke(random(225),random(0),random(225));
  line(256,165,x6,y6);
  if(mouseX>256){
    x6=x6+xspeed};
  if(mouseX>256){
    y6=y6+yspeed};
  stroke(100);
  strokeWeight(5);
  fill(30,30,30,random(800));
   if(x6>width){
     triangle(180,45,180,250,62,245)
     fill(random(200),random(200),random(200))};
  triangle(180,45,60,250,300,250);
  
  
  
  
}