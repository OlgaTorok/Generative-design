'use strict';

var colorCount = 20;
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
var alphaValue = 100;
// Declare a seed value
var actRandomSeed = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
}

function draw() {
    noLoop();
    background(0);
    // Returns a constant parameter
    randomSeed(actRandomSeed);

    for (var i = 0; i < colorCount; i++) {
        if (i % 2 == 0) {
            hueValues[i] = random(180);
            saturationValues[i] = random(50)
            brightnessValues[i] = 100;
        } else {
            hueValues[i] = random(360);
            saturationValues[i] = 100;
            brightnessValues[i] = random(100);
        }
    }

    var counter = 0;
    var rowCount = int(random(5, 30));
    var rowHeight = height / rowCount;

    for (var i = rowCount; i >= 0; i--) {
        var partCount = i + 1;
        var parts = [];

        for (var ii = 0; ii < partCount; ii++) {
            if (random() < 0.075) {
                var fragments = int(random(2, 20));
                partCount = partCount + fragments;
                for (var iii = 0; iii < fragments; iii++) {
                    parts.push(random(2));
                }
            } else {
                parts.push(random(2, 20));
            }
        }

        var sumPartsTotal = 0;
        for (var ii = 0; ii < partCount; ii++) {
            sumPartsTotal += parts[ii];
        }

        var sumPartsNow = 0;
        for (var j = 0; j < parts.length; j++) {

            if (random() < 0.45) {
                var w = map(parts[j], 0, sumPartsTotal, 0, width);
                var h = rowHeight * 1.5;
                var px1 = map(sumPartsNow, 0, sumPartsTotal, 0, width);
                var px2 = px1 + w;
                var py1 = rowHeight * i;
                var py2 = py1 + h;

                var index = counter % colorCount;
                var col1 = color(hueValues[index], saturationValues[index], brightnessValues[index], alphaValue);
                var col2 = color(hueValues[index] - 180, saturationValues[ index], brightnessValues[index], alphaValue);
                centerGradient(px1, py1, 0, px2, py2, max(w, h), col1, col2);
            }
            sumPartsNow += parts[j];
            counter++;
        }
    }
}

function centerGradient(x1, y1, r1, x2, y2, r2, c1, c2) {
    var ctx = drawingContext;
    var cx = x1 + (x2 - x1) / 2;
    var cy = y1 + (y2 - y1) / 2;
    var grd = ctx.createRadialGradient(cx, cy, r1, cx, cy, r2);
    grd.addColorStop(0, c1.toString());
    grd.addColorStop(1, c2.toString());
    ctx.fillStyle = grd;
    ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
}

// Using the mouse create random patterns
function mouseReleased() {
    actRandomSeed = random(100000);
    loop();
}

// Create a keyPressed funtion to save the canvas as a .png or .ase file
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
    if (key == 'c' || key == 'C') {
        // Save the canvas as ase file
        var colors = [];
        for (var i = 0; i < hueValues.length; i++) {
            colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
        }
        writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
    }
}