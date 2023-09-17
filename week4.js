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
    canvas.parent('canvas_location')
}

function draw() {
    background(bgColor);
    calcCirclePos()
    drawLogo()
}

const drawLogo = () => {
    drawCircleShadow();
    drawBarShadow();
    drawOuterCircle();
    drawBar();
    //drawShape()
}

const drawOuterCircle = () => {
    stroke('white');
    strokeWeight(rad/15);
    fill('rgba(0,0,0, 0)');
    circle(x_c, y_c, rad);

}

const drawCircleShadow = () => {
    stroke(shadowColor);
    strokeWeight(rad/15);
    fill('rgba(0,0,0, 0)');
    circle(x_c + shadowDirection, y_c + shadowDirection, rad)
}

const drawBarShadow = () => {
    stroke(shadowColor);
    strokeWeight(rad/10);
    line(x_c - (0.45 * rad) + shadowDirection, y_c + shadowDirection, x_c + (0.45 * rad) + shadowDirection, y_c + shadowDirection);
}

const drawBar = () => {
    stroke('white');
    strokeWeight(rad/10);
    line(x_c - (0.45*rad), y_c, x_c + (0.45*rad), y_c)
}

const drawShape = () => {
    stroke('red');
    strokeWeight(rad/20);
    beginShape();
    vertex(x_c + rad * cos(0.785398), y_c + rad * cos(0.785398));
    vertex(x_c + rad * cos(-0.785398), y_c + rad * cos(-0.785398));
    endShape();
}
