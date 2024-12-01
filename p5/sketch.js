let img; 
let maze;

let playerX, playerY; 
let nextX, nextY;
let speed = 8;

function preload() { 
  maze = loadImage('assets/maze.png');
  img = loadImage('assets/player.png'); }

function setup() { 
  createCanvas(windowWidth, windowHeight);

  playerX = windowWidth/2; 
  playerY = windowHeight/2;

  nextX = windowWidth/2;
  nextY = windowHeight/2;
}

function draw() { 
  background(230);
  translate(windowWidth/2-playerX, windowHeight/2-playerY); //keep in center

  image(maze,windowWidth/2,windowHeight/2); 

  imageMode(CENTER); 
  image(img, playerX, playerY, 40,40);

  playerX = lerp(playerX, nextX, 0.1); // Adjust the lerp amount for smoothness 
  playerY = lerp(playerY, nextY, 0.1);

  let pixel = get(playerX,playerY);

  //controls 
    if(keyIsDown(LEFT_ARROW)) { 
      nextX -= speed; 
    } else if (keyIsDown(RIGHT_ARROW)) { 
      nextX += speed; 
    } else if (keyIsDown(UP_ARROW)) { 
      nextY -= speed; 
    } else if (keyIsDown(DOWN_ARROW)) { 
      nextY += speed; 
    } 

}