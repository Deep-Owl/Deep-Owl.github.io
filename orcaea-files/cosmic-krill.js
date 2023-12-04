class CKrill {
    constructor(kx, ky) {
        this.x1 = kx;
        this.y1 = ky;
        this.krill = loadImage("/orcaea-files/cosmickrill.png");
    }

    drawCKrill() {
        image(
            this.krill,
            this.x1,
            this.y1,
            this.krill.width,
            this.krill.height
        );
    }

    attack() {
        // Movement towards Orcaea - random value of 1 through 15 + (number of waves * 5)
        this.x1 -= int(random(1, 15)) + wave * 5;

        // Scoring conditions - Mouth parameters of Whale. If eaten krill, reset, and score goes up by 1
        if (
            this.x1 <= mouseX + 85 &&
            this.x1 >= mouseX + 40 &&
            this.y1 >= mouseY - 55 &&
            this.y1 <= mouseY + 55
        ) {
            this.x1 = int(random(800, 1600));
            score += 1;
            if (score % 30 == 0) {
                wave = wave + 1;
            }
        } else {
            // If missed krill, reset, and Orcaea damage counter goes up by 1
            if (this.x1 < 80) {
                this.x1 = int(random(800, 1600));
                damage += 1;
            }
        }
    }
}