/** Using the triangles added an overlay function where
    keys 1 and 2 can be pressed*/

'use strict';

// added new variables
var segments = 10;
var radius;
var drawMode = 1;
// add the angle
var angleStep = 360 / segments;

function setup() {
    createCanvas(1240, 1748);
    colorMode(HSB, 360, 100, 100, 10);
}

function draw() {
    // added the color mode and background in draw
    background(95);
    strokeWeight(3);
    // translate(width/2, height/2);
    radius = width/2;
    overlay();

    // create the shapes
    // beginShape(TRIANGLE_FAN);
    // vertex(width / 2, height -100);
    // for (var angle = 0; angle <= 180; angle += angleStep) {
    //     var vx = width / 2 + cos(radians(-angle)) * radius;
    //     var vy = height / 2 + sin(radians(-angle)) * radius;
    //     vertex(vx, vy);
    //     fill(angle, 100, 100, 5);
    // }
    // endShape();
}

function overlay() {

    if (drawMode == 1) {
        // create the shapes
        beginShape(TRIANGLE_FAN);
        vertex(width / 2, height -100);
        for (var angle = 0; angle <= 180; angle += angleStep) {
            var vx = width / 2 + cos(radians(-angle)) * radius;
            var vy = height / 2 + sin(radians(-angle)) * radius;
            vertex(vx, vy);
            fill(angle, 100, 100, 5);
        }
        endShape();
    }

    if (drawMode == 2) {
        // create the shapes
        beginShape(TRIANGLE_FAN);
        vertex(width / 2, height -100);

        for (var i = 0; i <= 180; i += angleStep) {
            var vx = width / 2 + cos(radians(-i)) * (radius + 1);
            var vy = height / 2 + sin(radians(-i)) * (radius/2);
            vertex(vx, vy);
            fill(i, 100, 100, 5);
        }
        endShape();
    }


}

function keyPressed() {
    console.log(segments);
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp() + '_seg_' + segments + '_rad_' + radius + 'png');

    // change draw mode
    if (key == '1') drawMode = 1;
    if (key == '2') drawMode = 2;

}
