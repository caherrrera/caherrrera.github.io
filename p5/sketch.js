let img;
let maze;

let playerX, playerY;
let speed = 5;

//need to add : space to reload + link to contact page

function preload() {
  maze = loadImage('assets/maze.png');
  img = loadImage('assets/player.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  playerX = windowWidth / 2;
  playerY = windowHeight / 2;
}

function draw() {
  background(230);

  let offsetX = windowWidth / 2 - playerX;
  let offsetY = windowHeight / 2 - playerY;

  translate(offsetX, offsetY); // Keep player in center

  // Render the maze and player
  image(maze, 0, 0);
  //imageMode(CENTER);
  image(img, playerX, playerY, 40, 40);

  // Movement
  let nextX = playerX;
  let nextY = playerY;

  if (keyIsDown(LEFT_ARROW)) {
    nextX -= speed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    nextX += speed;
  }
  if (keyIsDown(UP_ARROW)) {
    nextY -= speed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    nextY += speed;
  }

  // Map player coordinates to maze image space
  let mazeX = nextX;// - offsetX;
  let mazeY = nextY;// - offsetY;

  // Collision detection using `get()`
  //if (mazeX >= 0 && mazeX < windowWidth && mazeY >= 0 && mazeY < windowHeight) {
    let pixelColor = maze.get(mazeX, mazeY); //returns RGBA array

    // Extract RGB values
    let r = pixelColor[0];
    let g = pixelColor[1];
    let b = pixelColor[2];

    console.log("Pixel RGB:", r, g, b);

    // Collision detection logic
    if (r < 6 && g < 6 && b < 6) { // Example condition: white areas are passable
      playerX = nextX;
      playerY = nextY;
    }
}
