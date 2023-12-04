class gameOver {
  constructor(gox, goy) {
    this.gx = gox;
    this.gy = goy;
  }

  drawgameOver() {
    image(bg, width / 2, height / 2, width, height);
    textSize(40);
    fill('#0AE3F5');
    text("Game Over", 300, 150);
    fill('#DC00FF');
    textSize(18);
    text("Press 'R' to play again...", 300, 200);
    sl.drawScores();
  }

  keyPressed() {
    if (key === 'r') {
      console.log("restart");
      restartGame();
    }
  }
}