var jamaica = "JAMAICA";
var yellowOne = 400;
var yellowTwo = 0;
var jamSize = 50;
var strokeSize = 0;

function setup() {
  // This is the size of the workspace;
    createCanvas(500,500);
}

function draw() {
  //The backgrond is green;
    background("#238911");
    noStroke();
    
    /*The rectangles are yellow;
    They are moving up and down the screen*/
    fill("#f9f107");
    rect(0,yellowOne,500,100);
    yellowOne--;
    if(yellowOne < 0) {
        yellowOne = 500;
    } 

    rect(0,yellowTwo,500,100);
    yellowTwo++;
    if(yellowTwo > 500) {
        yellowTwo = 0;
    }


    //Jamaica follows the mouse;
    stroke("#ff0000");
    strokeWeight(strokeSize);
    fill("#000");
    textSize(jamSize);
    textStyle(BOLD);
    text(jamaica,mouseX,mouseY);
}


//The variables revert when they reach 100/50;
function mousePressed() {
    stroke("#ff0000");
    strokeSize++;
   jamSize++;
    if(jamSize > 100) {
        jamSize = 50;
    }
    if(strokeSize > 50) {
        strokeSize = 0;
    }
}
