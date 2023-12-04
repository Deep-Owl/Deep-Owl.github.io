class startMenu {
  constructor(m2x, m2y) {
    this.m1x = width / 2;
    this.m1y = height / 2;
    this.plx = 600;
    this.ply = height / 2;
    this.wx;
    this.wy;
    this.planet;
    this.story = "You are one of the few remaining Space Whales, an exotic life-form from the distant planet Orcaea. Your species has long surpassed the need for aquatic environments, but your planet remains a sacred relic of the past. The legions of the Cosmic Krill wish to devour your homeworld of its resources and use it to build their army. You must stop them at all costs...";
    this.inst = "Use the mouse to navigate and consume the Krill before they consume your home.";
  }

  drawstartMenu() {
    image(bg, width / 2, height / 2, width, height);
    push();
    translate(this.plx, this.ply);
    rotate(frameCount * 0.01);
    this.planet = loadImage("orcaea_planet.png");
    image(this.planet, 0, 0, 400, 400);
    translate(0, 0);
    pop();
    textSize(80);
    fill('#DC00FF');
    text("Orcaea", 100, 100);
    fill('#0AE3F5');
    textSize(20);
    text(this.story, 50, 150, 375, 400);
    fill('#DC00FF');
    textSize(18);
    text(this.inst, 35, 550, 775, 550);
    text("Press 'Space' to start...", 600, 25);
  }

  keyPressed() {
    if (key == ' ') {
      phase = 1;
    }
  }
}