/*
    Paste the code for your week 4 exercise below.
*/
const canvasX = 600
const canvasY = 600

const bgColor = "#12d3fc"
const logoColor = "FFFFFF"
const shadowColor = "#c0c0c0"

const input = document.getElementsByClassName("radInput");

let rad = 400;
let iterator = 7.09;
let rgb_value = 0

let circlePos = 0;

let shadowDirection = Math.floor(rad/50);

let x_c = 0
let y_c = 0
let x_r = 0
let y_r = 0

const updateRadius = () => {
    rad = input[0].value;
    shadowDirection = Math.floor(rad/50);
}

const calcCirclePos = () => {
    const middlePoint = [(canvasX/2), (canvasY/2)];
    x_c = middlePoint[0];
    y_c = middlePoint[1];
    x_r = rad;
    y_r = rad;
}



function setup() {
    let canvas = createCanvas(canvasX, canvasY);
    canvas.parent('canvas_location');
    frameRate(60);
    rectMode(CENTER);
}

function draw() {
    background(bgColor);
    calcCirclePos();
    drawLogo();
    iterator += 0.1;
}

const drawLogo = () => {
    drawShape();
    drawSecondShape();
    drawCircleShadow();
    drawOuterCircle();
    drawBar();
    
}

const drawOuterCircle = () => {
    stroke(logoColor);
    strokeWeight(rad/15);

    fill('rgba(0,0,0, 0)');
    circle(x_c, y_c, rad);

}

const drawCircleShadow = () => {
    stroke(shadowColor);
    strokeWeight(rad/15);
    fill('rgba(0,0,0,0)');
    circle(x_c + shadowDirection, y_c + shadowDirection, rad)
}


const drawBar = () => {
    fill('white');
    strokeWeight()
    translate(x_c, y_c)
    rotate(iterator)
    rect(0, 0, rad, rad/9)
}

const drawShape = () => {
   
    stroke('rgba(255, 255, 255, 0.7)');
    strokeWeight(rad/20);
    beginShape();
    vertex(x_c + rad/2 * sin(iterator) , y_c + rad/2 * cos(iterator));
    vertex(x_c + rad/2 * cos(iterator), y_c + rad/2 * sin(iterator));
    endShape();
}

const drawSecondShape = () => {
    stroke('rgba(255, 255, 255, 0.7)');
    strokeWeight(rad/20);
    beginShape();
    vertex(x_c + rad/2 * -cos(iterator) , y_c + rad/2 * -sin(iterator));
    vertex(x_c + rad/2 * sin(iterator), y_c + rad/2 * cos(iterator));
    endShape();

}

function mousePressed(){
}
