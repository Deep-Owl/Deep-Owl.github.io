class sWhale {
  constructor(wx, wy) {
    this.whale = loadImage("/orcaea-files/spacewhale.png");
  }

  drawsWhale() {
    image(this.whale, mouseX, mouseY, this.whale.width, this.whale.height);
  }
}