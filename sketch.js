let synth;
let notes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5",
];
let interval;

//for recording & audio file creation 

// let recorder;
// let soundFile;

function preload() {
  skyImg = loadImage("imgs/sky.JPG");
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  // skyImg.filter(BLUR, 7);
  background(skyImg);
  textAlign(CENTER);
  textSize(32);
  fill(255);
  stroke(0);
  strokeWeight(2)
  text("Endless Stroll", width / 2, height / 2);

  synth = new p5.PolySynth();

//for recording & audio file creation 

  // recorder = new p5.SoundRecorder();
  // soundFile = new p5.SoundFile();
  // setTimeout(startRecording, 1000);
  between();
}

function playNote() {
  try {
    let noteCount = int(random(1, 4));
    let duration = random(2, 6);
    for (let i = 0; i < noteCount; i++) {
      let note = random(notes);
      let velocity = random(0.2, 0.5);
      synth.play(note, velocity, 0, duration);
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

//for recording & audio file creation 

// function startRecording() {
//     recorder.setInput();
//     recorder.record(soundFile, 30, saveRecording);
// }

// function saveRecording() {
//     save(soundFile, 'chillGenMelody.mp3');
// }
