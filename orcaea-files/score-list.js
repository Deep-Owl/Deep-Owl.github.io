class scoreList {
  constructor() {
    this.scores = [];
  }

  saveScore(score) {
    this.scores.push(score);
  }

  drawScores() {
    textSize(32);
    fill('#0AE3F5');
    text("Recent Scores: ", 300, 300);
    fill('#DC00FF');
    for (let i = 0; i < this.scores.length; i++) {
      text(this.scores[i], 390, 350 + i * 50);
    }
  }
}

// Example usage
function setup() {
  createCanvas(800, 600); // Adjust canvas size as needed
  sl = new scoreList();
}

function draw() {
  background(255); // Set background color as needed
  sl.drawScores();
}