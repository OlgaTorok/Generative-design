'use strict';

var colorCount = 20;
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
// Adding an alpha value
var alphaValue = 27;


function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
}

function draw() {
    noLoop();
    background(0);

    for (var i = 0; i < colorCount; i++) {
        if (i % 2 == 0) {
            hueValues[i] = random(360);
            saturationValues[i] = 100;
            brightnessValues[i] = random(100);
        } else {
            hueValues[i] = 195;
            saturationValues[i] = random(100);
            brightnessValues[i] = 100;
        }
    }

    var counter = 0;

    var rowCount = int(random(5, 30));
    var rowHeight = height / rowCount;

    for (var i = rowCount; i >= 0; i--) {
        var partCount = i + 1;
        var parts = [];

        for (var ii = 0; ii < partCount; ii++) {
            parts.push(random(2, 20));
        }

        var sumPartsTotal = 0;
        for (var ii = 0; ii < partCount; ii++) {
            sumPartsTotal += parts[ii];
        }

        var sumPartsNow = 0;
        for (var j = 0; j < parts.length; j++) {

            // If the fragments are less than 0.45 then map and draw the rectangles
            if (random() < 0.45) {
                var x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
                var y = rowHeight * i;
                var w = map(parts[j], 0, sumPartsTotal, 0, width);
                var h = rowHeight * 1.5;

                var index = counter % colorCount;
                // Adding two colours for the gradient
                var col1 = color(0);
                // Add the alpha value to the second colour
                var col2 = color(hueValues[index], saturationValues[index], brightnessValues[index], alphaValue);
                // Draw the rectangles using the gradient function
                gradient(x, y, w, h, col1, col2);
            }

            sumPartsNow += parts[j];
            counter++;
        }
    }
}

/** Gradient function that contains the p5 global canvas context.
 * Rectangles are created using the p5 context and the colours
 * are set using the linear gradient method.
 */
function gradient(x, y, w, h, c1, c2) {
    var ctx = drawingContext;
    // Define the start and end point of the gradient line
    var grd = ctx.createLinearGradient(x, y, x, y + h);
    // Define colour and position in the gradient
    grd.addColorStop(0, c1.toString());
    grd.addColorStop(1, c2.toString());
    ctx.fillStyle = grd;
    ctx.fillRect(x, y, w, h);
}