[Colour](../)

# 1. Changing colour and size using the mouse

In this sketch the mouse x and y position is used to change the colour of the canvas and the size and colour of the rectangle created in the middle of the canvas.

## Step 1

[Test](step01/)

```js
'use strict';

// Setting up the canvas
function setup() {
    createCanvas(400, 400);
    noStroke();
    // Setting up the colour mode to HSB from the default RGB
    colorMode(HSB, 360, 100, 100);
    // Setting the rectangle mode to be drawn from the center point
    rectMode(CENTER);
}

function draw() {
    // Draw a rectangle in the middle of the page and give it a colour
    fill(100, 56, 34);
    rect(width/2, height/2, 100, 100);
}
```

## Step 2

[Test](step02/)

```js
'use strict';

function setup() {
    createCanvas(400, 400);
    noStroke();
    colorMode(HSB, 360, 100, 100);
    rectMode(CENTER);
}

function draw() {
    /* Background contains the mouseY to change the colour 
    depending on the mouse position */
    background(mouseY/2, 100, 100);
    /* MouseY was added to the fill to change the colour
    depending on the position of the mouse*/
    fill(360 - mouseY / 2, 100, 100);
    /* MouseX was added to the width and height of the rectangle
    so the size will change depending on the mouse position*/ 
    rect(width/2, height/2, mouseX + 1, mouseX + 1);
}
```

## Step 3

[Test](step03/)

```js
'use strict';

function setup() {
    createCanvas(400, 400);
    noStroke();
    colorMode(HSB, 360, 100, 100);
    rectMode(CENTER);
}

function draw() {
    background(mouseY/2, 100, 100);
    fill(360 - mouseY / 2, 100, 100);
    rect(width/2, height/2, mouseX + 1, mouseX + 1);
}

/* This function will save a png image of the canvas 
on your computer, when the S key is pressed */
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
```
Results:

![Colour Change 1](../images/colour_01a.png?raw=true "Colour changes")
![Colour Change 2](../images/colour_01b.png?raw=true "Colour changes")
