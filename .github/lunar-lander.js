
let width = 600;
let height = 600;
let starsGenerated = false;
let starX = [];
let starY = [];
let starAlpha = [];
let centerX = 300;
let ufoY =-200;
let ufoX = 300;
let velocity = 0.5;
const acceleration = 0.1;
let thrusterY = ufoY - 100;
let thrusterAlpha = [];


function setup() {
    createCanvas(width, height);

}


//Sky
function spaceSky(){
    background(48, 25, 52);
    noStroke();
    fill(255,245,255);
    rect(0,450,width);

    fill(245, 245, 245);
    ellipse(95, 520, 60,40); 
    ellipse(220,500, 70, 30);
    ellipse(420, 510, 60, 30);

    fill(211,211,211);
    ellipse(95, 520, 50, 30);
    ellipse(220, 500, 60, 20);
    ellipse(420, 510, 50, 20);
    ellipse(20, 460, 30, 10);
    ellipse(500, 465, 50, 20);
    ellipse(105, 475, 30, 10);
    ellipse(530, 510, 60, 30);

    fill(233, 200, 245);
    ellipse(width-150, height - 500, 90);
    fill(233, 200, 245, 80);
    ellipse(width-150, height - 500, 120);
    fill(233, 200, 245, 60);
    ellipse(width-150, height - 500, 150);

    if(!starsGenerated) {
        push();
        for (let i = 0; i < 400; i ++){
            const x = Math.floor(Math.random () * width);
            const y = Math.floor(Math.random () * height);
            const alpha = Math.random();
            starX.push(x);
            starY.push(y);
            starAlpha.push(alpha);
        }
        starsGenerated = true;
        pop();

    }

}

//Stars




function ufo(x, y){
    push();
    translate(x, y);
    stroke(87, 87, 87);
    strokeWeight(40);
    strokeJoin(ROUND);
    fill(87,87,87);
    rect(285, 355, 30, 3);
    stroke(97, 40, 64);
    fill(97, 40, 64);
    triangle(300, 200, 250, 255, 350, 255);
    rect(270,275, 60,60);
    noStroke();
    fill(87, 87, 87);
    ellipse(300, 240, 45);
    fill(211,211,211);
    ellipse(300, 240, 35);
    fill(87, 30, 56);
    ellipse(260, 275, 4);
    ellipse(270, 275, 4);
    ellipse(280, 275, 4);
    ellipse(290, 275, 4);
    ellipse(300, 275, 4);
    ellipse(310, 275, 4);
    ellipse(320, 275, 4);
    ellipse(330, 275, 4);
    ellipse(340, 275, 4);
    ellipse(260, 285, 4);
    ellipse(260, 295, 4);
    ellipse(260, 305, 4);
    ellipse(260, 315, 4);
    ellipse(260, 325, 4);
    ellipse(260, 335, 4);
    ellipse(260, 345, 4);
    ellipse(340, 285, 4);
    ellipse(340, 295, 4);
    ellipse(340, 305, 4);
    ellipse(340, 315, 4);
    ellipse(340, 325, 4);
    ellipse(340, 335, 4);
    ellipse(340, 345, 4);
    ellipse(300, 195, 4);
    ellipse(240, 260, 4);
    ellipse(300, 195, 4);
    ellipse(360, 260, 4);
    stroke(87, 87, 87);
    strokeJoin(BEVEL);
    beginShape();
    vertex(300, 320);
    vertex(300, 355);
    vertex(300, 320);
    endShape();
    strokeWeight(30);
    stroke(211,211,211);
    beginShape();
    vertex(300, 320);
    vertex(300, 355);
    vertex(300, 320);
    endShape();
    strokeWeight(2);
    stroke(87, 87, 87);
    line(290, 335, 293, 335);
    pop();
}

function thruster(x, y){
    push();
    translate(x , y);
    fill(255, 127, 80);
    ellipse(300, 210, 40);
    ellipse(300, 260, 30);
    ellipse(300, 300, 20);
    fill(255, 127, 80, 80);
    ellipse(300, 210, 50);
    ellipse(300, 260, 40);
    ellipse(300, 300, 30);
    fill(255, 127, 80, 60);
    ellipse(300, 210, 60);
    ellipse(300, 260, 50);
    ellipse(300, 300, 40);
    pop();
}



function draw(){
 
 spaceSky();
 
 noStroke();
 for (let index in starX){
    fill(255,255,255, Math.abs(Math.sin(starAlpha [index ])* 255));
    ellipse(starX [index], starY [index], 1);
    starAlpha [index] = starAlpha [index] + 0.02;
 }
 
 

  ufoY = ufoY + velocity;
  thrusterY = thrusterY + velocity;
  velocity = velocity + acceleration;
  

  if (mouseIsPressed){
     velocity = velocity -0.5 ;
     thruster(0, ufoY+200);
  }

  ufo(0, ufoY);
}





