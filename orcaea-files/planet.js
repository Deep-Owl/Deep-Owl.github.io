class Orcaea {
    constructor(ox, oy) {
        this.x2 = ox;
        this.y2 = oy;
        this.planet = loadImage("/orcaea-files/orcaea_planet.png");
    }

    // Spinning planet
    drawOrcaea() {
        push();
        translate(this.x2, this.y2);
        rotate(frameCount * 0.01);
        image(this.planet, 0, 0, this.planet.width, this.planet.height);
        pop();
    }
}