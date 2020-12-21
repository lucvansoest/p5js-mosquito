let xOffset1 = 0;
let xOffset2 = 1000;
let xOffset3 = 2000;
let increment = 0.02;

function setup() {

    createCanvas(windowWidth, windowHeight);
	
}
  
function draw() {

    //background(50);

    clear();

    noStroke();
    fill(50);


    ellipse(noise(xOffset1) * width, noise(xOffset2) * height, noise(xOffset3) * 25, noise(xOffset3) * 25);

    xOffset1 += increment;
    xOffset2 += increment;
    xOffset3 += increment;
}
  