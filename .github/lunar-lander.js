
let width = 600;
let height = 600;
let starsGenerated = false;
let starX = [];
let starY = [];
let starAlpha = [];
let centerX = 300;
let ufoY = -200;
let ufoX = 300;
let velocity = 1;
const acceleration = 0.2 ;
let thrusterY = ufoY - 100;
let gameIsRunning = false;
let gameStart = true;
let gameOver = false;
let gameWon = false;




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
    scale(0.8); 
    push();
    translate(x, y);
    translate(70, y);
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
    translate(200, ufoY);
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

function explosion(){
    fill(233, 200, 245);
    ellipse(280, 350, 80);
    ellipse(320, 330, 60);
    ellipse(340, 360, 60);
    ellipse(320, 390, 60);
    ellipse(280, 390, 60);
    fill(233, 200, 245, 80);
    ellipse(280, 350, 100);
    ellipse(320, 330, 80);
    ellipse(340, 360, 80);
    ellipse(320, 390, 80);
    ellipse(280, 390, 80);
    fill(233, 200, 245, 60);
    ellipse(280, 350, 150);
    ellipse(320, 330, 130);
    ellipse(340, 360, 130);
    ellipse(320, 390, 130);
    ellipse(280, 390, 130);


}

function draw(){
 
 spaceSky();


 



 noStroke();
 for (let index in starX){
    fill(255,255,255, Math.abs(Math.sin(starAlpha [index ])* 255));
    ellipse(starX [index], starY [index], 1);
    starAlpha [index] = starAlpha [index] + 0.02;
 }



 if (gameStart === true) {
    gameIsRunning = false;
    gameOver = false;
    gameWon = false;
    textSize(60);
    textStyle(BOLD);
    textAlign(CENTER);
    fill(233, 200, 245);
    text('LUNAR LANDER', 300, 225);
    fill(233, 200, 245, 80);
    text('LUNAR LANDER', 295, 225);
    fill(233, 200, 245, 60);
    text('LUNAR LANDER', 290, 225);
    fill(233, 200, 245, 40);
    text('LUNAR LANDER', 285, 225);
    textSize(20);
    textStyle(NORMAL);
    fill(233, 200, 245);
    text('Control the thrust by clicking space  and do not die...', 300, 280);
    textSize(15);
    text('click B to change the theme', 300, 310);
    textSize(30);
    text('press space to start!', 300, 390);
    if  (keyIsPressed && key === " "){
        gameStart = false;
        gameIsRunning = true;
    }
 }
 
 if (gameIsRunning===true){

    ufoY = ufoY + velocity;
    velocity = velocity + acceleration;
  
 ufo(0, ufoY);
  if (keyIsPressed && key === " "){
     velocity = velocity -0.5  ;
     thruster(-130, ufoY + 200);
  }

  
 }


  if (ufoY > 100 && velocity > 2.5){
    gameIsRunning = false;
    gameOver = true;
   }

   
 if (gameOver === true){
    textSize(60);
    textStyle(BOLD);
    textAlign(CENTER);
    fill(233, 200, 245);
    text('OUCH!', 300, 210);
    fill(233, 200, 245, 80);
    text('OUCH!', 295, 210);
    fill(233, 200, 245, 60);
    text('OUCH!', 290, 210);
    fill(233, 200, 245, 40);
    text('OUCH!', 285, 210);
    fill(233, 200, 245);
    textStyle(NORMAL);
    textSize(20);
    text('press space to restart', 300, 250);
    explosion();
    if (keyIsPressed && key === " "){
        gameOver = false;
        gameIsRunning = true;
        ufoY = -200;
        velocity = 1;
    }
    
  }

  if(ufoY > 90 && velocity < 2.5){
    gameIsRunning = false;
    gameWon = true;
  }

  if (gameWon === true){
    gameOver = false;
    gameIsRunning = false;
    textSize(60);
    textStyle(BOLD);
    textAlign(CENTER);
    fill(233, 200, 245);
    text('YOU WIN!', 300, 225);
    fill(233, 200, 245, 80);
    text('YOU WIN!', 295, 225);
    fill(233, 200, 245, 60);
    text('YOU WIN!', 290, 225);
    fill(233, 200, 245, 40);
    text('YOU WIN!', 285, 225);
    fill(233, 200, 245);
    textStyle(NORMAL);
    textSize(20);
    text('press space to restart', 300, 250);
    ufo(0, 100);
    if (keyIsPressed && key === " "){
        gameWon = false;
    gameIsRunning = true;
    ufoY = -200;
    velocity = 1;
    }
  }
  




  
}






