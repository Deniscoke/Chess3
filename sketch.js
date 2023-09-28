let wins = 0;
let losses = 0;
let draws = 0;

function setup() {
  createCanvas(400, 200);
  let winButton = createButton('Win');
  winButton.position(150, 50);
  winButton.mousePressed(addWin);

  let lossButton = createButton('Loss');
  lossButton.position(200, 50);
  lossButton.mousePressed(addLoss);

  let drawButton = createButton('Draw');
  drawButton.position(250, 50);
  drawButton.mousePressed(addDraw);
}

function draw() {
  background(220);
  fill(0);
  textSize(16);
  text('Wins: ' + wins, 10, 30);
  text('Losses: ' + losses, 10, 60);
  text('Draws: ' + draws, 10, 90);
}

function addWin() {
  wins++;
}

function addLoss() {
  losses++;
}

function addDraw() {
  draws++;
}
