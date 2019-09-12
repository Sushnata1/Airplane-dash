var s, w, h;
var bots;

function setup() {
    e = window.getComputedStyle(document.getElementById("game"));
    w = parseInt(e.getPropertyValue("width"), 10);
    h = parseInt(e.getPropertyValue("height"), 10);
    s = JSON.parse(localStorage.getItem("obj"));
    var canvas = createCanvas(w, h);
    canvas.parent("game");
    background(0);
    noStroke();
    bots = new Bot();
}

function draw() {
    if (frameCount % 40 == 0)
        bots.change();
    n = s["size"];
    clear();
    background(0);
    push();
    rectMode(CENTER);
    fill(random(20, 255), random(20, 255), random(20, 255));
    rect(mouseX, mouseY, n, n);
    pop();
    bots.show();
    bots.collide();
}