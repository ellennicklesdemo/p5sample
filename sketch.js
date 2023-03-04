
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250, 250, 0);

  fill(0, 150, 220);
  textSize(sin(frameCount/10) * 50);
  textAlign(CENTER);
  text("Spring break 🎉", width/2, height/2);
}
