let synth;
let notes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5"];
let interval;
let button;

function preload() {
  skyImg = loadImage("imgs/sky.JPG");
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  background(skyImg);
  textAlign(CENTER);
  textSize(32);
  fill(255);
  stroke(0);
  strokeWeight(2);

  button = createButton("Endless Stroll");
  button.position(width / 2 - button.width / 2, height / 2 - button.height / 2);

  button.mousePressed(startMusic);

  button.style('background-color', '#ffffff');
  button.style('border', '2px solid #333333');
  button.style('border-radius', '20px');
  button.style('padding', '10px 20px');
  button.style('font-size', '24px');
  button.style('box-shadow', '0px 4px 8px rgba(0, 0, 0, 0.2)');
}

function startMusic() {
  synth = new p5.PolySynth();
  playNote();

  button.hide();
}

function playNote() {
  try {
    let noteCount = int(random(1, 4)); 
    let duration = random(2, 6);
    let index = 0;

    while (index < noteCount) {
      let note = random(notes);
      let velocity = random(0.2, 0.5);
      synth.play(note, velocity, 0, duration);
      index++; 
    }
  } catch (error) {
    console.error(error);
  } finally {
    between();
  }
}

function between() {
  let space = random(300, 1000);
  interval = setTimeout(playNote, space);
}
