let xSize = 1200;
let ySize = 700;

let triParam = 50;

let tri_X = [];
let tri_Y = [];

let vector_L1 = [];
let vector_L2 = [];
let vector_L3 = [];

let vector_R1 = [];
let vector_R2 = [];
let vector_R3 = [];

let midPoint = null;



function setup() {

    //frameRate(60);

    // Canvas size (x, y)
    let myCanvas = createCanvas(xSize, ySize);

    // Attach to html div with id "myContainer"
    myCanvas.parent('myCanvas');

    // X Coordinates
    tri_X[0] = xSize / 2 - triParam;  // Bottom-L
    tri_X[1] = xSize / 2;             // Top
    tri_X[2] = xSize / 2 + triParam;  // Bottom-R

    // Y Coordinates
    tri_Y[0] = ySize / 2 + triParam   // Bottom-L
    tri_Y[1] = ySize / 2 - triParam;  // Top
    tri_Y[2] = ySize / 2 + triParam;  // Bottom-R

    // Left Vector Coordinates
    vector_L1[0] = createVector((1/16) * xSize, (14/16) * ySize);
    vector_L1[1] = createVector((2/16) * xSize, (10/16) * ySize);
    vector_L1[2] = createVector((3/16) * xSize, (15/16) * ySize);
    vector_L1[3] = createVector((4/16) * xSize, (8/16) * ySize);
    vector_L1[4] = createVector((5/16) * xSize, (12/16) * ySize);

    vector_L2[0] = createVector((1/16) * xSize, (14/16) * ySize);
    vector_L2[1] = createVector((2/16) * xSize, (10/16) * ySize);
    vector_L2[2] = createVector((3/16) * xSize, (15/16) * ySize);
    vector_L2[3] = createVector((4/16) * xSize, (8/16) * ySize);
    vector_L2[4] = createVector((5/16) * xSize, (12/16) * ySize);

    vector_L3[0] = createVector((1/16) * xSize, (14/16) * ySize);
    vector_L3[1] = createVector((2/16) * xSize, (10/16) * ySize);
    vector_L3[2] = createVector((3/16) * xSize, (15/16) * ySize);
    vector_L3[3] = createVector((4/16) * xSize, (8/16) * ySize);
    vector_L3[4] = createVector((5/16) * xSize, (12/16) * ySize);


    // Right Vector Coordinates
    vector_R1[0] = createVector((15/16) * xSize, (14/16) * ySize);
    vector_R1[1] = createVector((14/16) * xSize, (10/16) * ySize);
    vector_R1[2] = createVector((13/16) * xSize, (15/16) * ySize);
    vector_R1[3] = createVector((12/16) * xSize, (8/16) * ySize);
    vector_R1[4] = createVector((11/16) * xSize, (12/16) * ySize);

    vector_R2[0] = createVector((15/16) * xSize, (14/16) * ySize);
    vector_R2[1] = createVector((14/16) * xSize, (10/16) * ySize);
    vector_R2[2] = createVector((13/16) * xSize, (15/16) * ySize);
    vector_R2[3] = createVector((12/16) * xSize, (8/16) * ySize);
    vector_R2[4] = createVector((11/16) * xSize, (12/16) * ySize);

    vector_R3[0] = createVector((15/16) * xSize, (14/16) * ySize);
    vector_R3[1] = createVector((14/16) * xSize, (10/16) * ySize);
    vector_R3[2] = createVector((13/16) * xSize, (15/16) * ySize);
    vector_R3[3] = createVector((12/16) * xSize, (8/16) * ySize);
    vector_R3[4] = createVector((11/16) * xSize, (12/16) * ySize);

    midPoint = createVector(xSize/2, (11/20) * ySize);

    

}

function draw() {

    // Refresh Background
    background(0);

    // Triangle setup
    stroke(5, 195, 215);
    noFill();

    triangle(tri_X[0], tri_Y[0],
             tri_X[1], tri_Y[1],
             tri_X[2], tri_Y[2]);

    point(midPoint.x, midPoint.y);

    line(midPoint.x, midPoint.y, tri_X[0], tri_Y[0]);
    line(midPoint.x, midPoint.y, tri_X[1], tri_Y[1]);
    line(midPoint.x, midPoint.y, tri_X[2], tri_Y[2]);

    // Left vector setup
    stroke(220, 105, 240);

    // Left vector 1 setup
    beginShape();
    curveVertex(0, ySize);
    curveVertex(0, ySize);
        curveVertex(vector_L1[0].x, vector_L1[0].y);
        curveVertex(vector_L1[1].x, vector_L1[1].y);
        curveVertex(vector_L1[2].x, vector_L1[2].y);
        curveVertex(vector_L1[3].x, vector_L1[3].y);
        curveVertex(vector_L1[4].x, vector_L1[4].y);
    curveVertex(tri_X[0], tri_Y[0]);
    curveVertex(tri_X[0], tri_Y[0]);
    endShape();

    // Left vector 2 setup
    beginShape();
    curveVertex(0, ySize);
    curveVertex(0, ySize);
        curveVertex(vector_L2[0].x, vector_L2[0].y);
        curveVertex(vector_L2[1].x, vector_L2[1].y);
        curveVertex(vector_L2[2].x, vector_L2[2].y);
        curveVertex(vector_L2[3].x, vector_L2[3].y);
        curveVertex(vector_L2[4].x, vector_L2[4].y);
    curveVertex(tri_X[1], tri_Y[1]);
    curveVertex(tri_X[1], tri_Y[1]);
    endShape();

    // Left vector 3 setup
    beginShape();
    curveVertex(0, ySize);
    curveVertex(0, ySize);
        curveVertex(vector_L3[0].x, vector_L3[0].y);
        curveVertex(vector_L3[1].x, vector_L3[1].y);
        curveVertex(vector_L3[2].x, vector_L3[2].y);
        curveVertex(vector_L3[3].x, vector_L3[3].y);
        curveVertex(vector_L3[4].x, vector_L3[4].y);
    curveVertex(midPoint.x, midPoint.y);
    curveVertex(midPoint.x, midPoint.y);
    endShape();

    // Right vector 1 setup
    beginShape();
    curveVertex(xSize, ySize);
    curveVertex(xSize, ySize);
        curveVertex(vector_R1[0].x, vector_R1[0].y);
        curveVertex(vector_R1[1].x, vector_R1[1].y);
        curveVertex(vector_R1[2].x, vector_R1[2].y);
        curveVertex(vector_R1[3].x, vector_R1[3].y);
        curveVertex(vector_R1[4].x, vector_R1[4].y);
    curveVertex(tri_X[2], tri_Y[2]);
    curveVertex(tri_X[2], tri_Y[2]);
    endShape();

    // Right vector 2 setup
    beginShape();
    curveVertex(xSize, ySize);
    curveVertex(xSize, ySize);
        curveVertex(vector_R2[0].x, vector_R2[0].y);
        curveVertex(vector_R2[1].x, vector_R2[1].y);
        curveVertex(vector_R2[2].x, vector_R2[2].y);
        curveVertex(vector_R2[3].x, vector_R2[3].y);
        curveVertex(vector_R2[4].x, vector_R2[4].y);
    curveVertex(tri_X[1], tri_Y[1]);
    curveVertex(tri_X[1], tri_Y[1]);
    endShape();

    beginShape();
    curveVertex(xSize, ySize);
    curveVertex(xSize, ySize);
        curveVertex(vector_R3[0].x, vector_R3[0].y);
        curveVertex(vector_R3[1].x, vector_R3[1].y);
        curveVertex(vector_R3[2].x, vector_R3[2].y);
        curveVertex(vector_R3[3].x, vector_R3[3].y);
        curveVertex(vector_R3[4].x, vector_R3[4].y);
    curveVertex(midPoint.x, midPoint.y);
    curveVertex(midPoint.x, midPoint.y);
    endShape();

    // Update triangle coordinates
    tri_X[0] += random(-1,1);
    tri_X[1] += random(-1,1);
    tri_X[2] += random(-1,1);
    tri_Y[0] += random(-1,1);
    tri_Y[1] += random(-1,1);
    tri_Y[2] += random(-1,1);

    midPoint.x += random(-1, 1);
    midPoint.y += random(-1, 1);

    // Update lines
    //vector_L[0].y += random(-1, 1);
    vector_L1[1].y += random(-1, 1);
    vector_L1[2].y += random(-1, 1);
        if (vector_L1[2].y >= ySize) { vector_L1[2].y++; }
    vector_L1[3].y += random(-1, 1);
    vector_L1[4].y += random(-1, 1);

    vector_L2[1].y += random(-1, 1);
    vector_L2[2].y += random(-1, 1);
        if (vector_L2[2].y >= ySize) { vector_L2[2].y++; }
    vector_L2[3].y += random(-1, 1);
    vector_L2[4].y += random(-1, 1);

    vector_L3[1].y += random(-1, 1);
    vector_L3[2].y += random(-1, 1);
        if (vector_L3[2].y >= ySize) { vector_L3[2].y++; }
    vector_L3[3].y += random(-1, 1);
    vector_L3[4].y += random(-1, 1);

    vector_R1[1].y += random(-1, 1);
    vector_R1[2].y += random(-1, 1);
        if (vector_R1[2].y >= ySize) { vector_R1[2].y++; }
    vector_R1[3].y += random(-1, 1);
    vector_R1[4].y += random(-1, 1);

    vector_R2[1].y += random(-1, 1);
    vector_R2[2].y += random(-1, 1);
        if (vector_R2[2].y >= ySize) { vector_R2[2].y++; }
    vector_R2[3].y += random(-1, 1);
    vector_R2[4].y += random(-1, 1);

    vector_R3[1].y += random(-1, 1);
    vector_R3[2].y += random(-1, 1);
        if (vector_R3[2].y >= ySize) { vector_R3[2].y++; }
    vector_R3[3].y += random(-1, 1);
    vector_R3[4].y += random(-1, 1);

    
}