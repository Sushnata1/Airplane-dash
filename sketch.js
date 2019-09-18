var s, w, h, po;
var d;
var bots;
var nm;

function setup() {
    po = 0;
    e = window.getComputedStyle(document.getElementById("game"));
    w = parseInt(e.getPropertyValue("width"), 10);
    h = parseInt(e.getPropertyValue("height"), 10);
    s = JSON.parse(localStorage.getItem("obj"));
    nm = s["number"];
    console.log(nm);
    var canvas = createCanvas(w, h);
    canvas.parent("game");
    background(0);
    noStroke();
    bots = [];
    bots[0] = new Bomb();
    for (let i = 1; i < nm; i++) {
        bots[i] = new Bot();
    }
}

function draw() {
    if (frameCount % s["delay"] == 0) {
        for (let i = 0; i < nm; i++)
            bots[i].change();
        if (d > 80)
            d -= 2;
    }
    n = s["size"];
    clear();
    background(0);
    push();
    rectMode(CENTER);
    noFill();
    strokeWeight(14);
    stroke(255);
    //fill(random(20, 255), random(20, 255), random(20, 255));
    rect(mouseX, mouseY, n / 2, n / 2);
    pop();
    for (let i = 0; i < nm; i++) {
        //bots[i].show();
        //--
        bots[i].collide();
        bots[i].show();
    }
}