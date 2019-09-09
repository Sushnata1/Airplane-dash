function setup() {
    e = window.getComputedStyle(document.getElementById("game"));
    w = parseInt(e.getPropertyValue("width"), 10);
    h = parseInt(e.getPropertyValue("height"), 10);
    console.log(w + "$" + h);
    var canvas = createCanvas(w, h);
    canvas.parent("game");
    background(0);
    noStroke();
}


function draw() {
    clear();
    background(0);
    rectMode(CENTER);
    fill(random(20, 255), random(20, 255), random(20, 255));
    rect(mouseX, mouseY, 40, 40);
}