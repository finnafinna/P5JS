const snowflakes = [];
const snowballs = [];
const ground = [];


let screen_width = window.innerWidth
let screen_height = window.innerHeight



function setup(){
    createCanvas(screen_width, screen_height);
    rectMode(CENTER);
    frameRate(60);

    createSnowball();

    for (let i = 0; i < 150; i++){
        
        let snowflake= createVector(random(screen_width), random(height), random(1,3));
        snowflakes.push(snowflake);
        
    }


    for (let x = 0; x < screen_width; x++){
        ground[x] = screen_height;
    }
}

function repeatSnowflakes(index) {
    snowflakes[index].x = random(screen_width);
    snowflakes[index].y = random(screen_height);
}

function createSnowball() {
    let snowball = new Object()
    snowball.vector = createVector(random(screen_width), 100, 7)
    snowball.size = random(20, 100)
    snowballs.push(snowball);
}

function replaceSnowball() {
    snowballs.pop();
    let snowball = new Object()
    snowball.vector = createVector(random(screen_width), 100, 7)
    snowball.size = random(20, 100)
    snowballs.push(snowball);

}

function draw(){
    background('black');
    let snowball = snowballs[0]
    
    snowball.vector.y += snowball.vector.z
    circle(snowball.vector.x, snowball.vector.y, snowball.size)
    
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)){
        if (snowball.vector.x - (snowball.vector.z * 5) > 0){
            snowball.vector.x -= snowball.vector.z
        }
        
    }
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
        if (snowball.vector.x + (snowball.vector.z * 5) < screen_width){
            snowball.vector.x += snowball.vector.z
        }
        
    }

    if (Math.floor(snowball.vector.y) >= ground[Math.floor(snowball.vector.x)]){
        for (let left = 0; left < Math.floor(snowball.size); left++){
            ground[Math.floor(snowball.vector.x)- Math.floor(snowball.size) + left] -= left;
        }
        for (let left = 0; left < Math.floor(snowball.size); left++){
            ground[Math.floor(snowball.vector.x)+ Math.floor(snowball.size) - left] -= left;
        }
        replaceSnowball();
    }

    for (const snowflake in snowflakes){
        stroke('white');
        fill('white');
        snowflakes[snowflake].y += snowflakes[snowflake].z;
        circle(snowflakes[snowflake].x, snowflakes[snowflake].y, 1);
        
        if (Math.floor(snowflakes[snowflake].y) >= ground[snowflake]){
            repeatSnowflakes(snowflake);
        }
        
    }
  

    for(let x = 0; x < screen_width; x++) {
        rect(x, screen_height, 1, screen_height - ground[x]);
      }
}
