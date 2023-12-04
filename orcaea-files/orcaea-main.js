// My game is done!
// Orcaea is a game where you use the mouse to control your character
// eat the enemies before they reach the planet
// the enemy speed increases with each wave (every 30 points)
// you lose when 50 enemies reach the planet (damage = 50)
// all the art is original, hope you like it!

let bg;
let knum;
let phase;
let ktot;
let wave;
let score;
let damage;
let k1;
let o1;
let w1;
let sm;
let go;
let sl;

function setup() {
  createCanvas(800, 600);
  noCursor();
  lost = false;

  bg = loadImage("/orcaea-files/nebula.png");
  imageMode(CENTER);

  k1 = [];
  for (let i = 0; i < 100; i++) {
    k1.push(new CKrill());
  }

  o1 = new Orcaea();
  w1 = new sWhale();
  sm = new startMenu();
  go = new gameOver();
  sl = new scoreList();

  restartGame();
}

function draw() {
  background(255);

  if (phase == 2) {
    go.drawgameOver();
    go.keyPressed();
    console.log("phase =", phase);
  } else {
    if (phase == 0) {
      sm.drawstartMenu();
      sm.keyPressed();
    }

    if (phase == 1) {
      // background image
      image(bg, width / 2, height / 2, width, height);

      fill(0);
      rect(0, 0, width, 30);
      fill('#DC00FF');
      textSize(18);
      text("Score: " + score, 100, 25);
      text("Damage: " + damage, 600, 25);
      fill('#0AE3F5');
      text("Wave: " + wave, 350, 25);

      // loop of (10 * wave) krill with class properties
      for (let i = 0; i < ktot; i++) {
        k1[i].drawCKrill();
        k1[i].attack();
      }

      // other class properties (whale and planet)
      o1.drawOrcaea();
      w1.drawsWhale();

      if (damage > 50) {
        sl.saveScore(score);
        phase = 2;
      }
    }

    console.log("phase =", phase);
    console.log("score =", score);
    console.log("damage =", damage);
  }
}

function restartGame() {
  redraw();
  phase = 0;
  wave = 1;
  ktot = wave * 10;
  score = 0;
  damage = 0;
}