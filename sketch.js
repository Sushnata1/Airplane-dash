function setup() {
    w = parseFloat(document.getElementById("game").style.width) * 0.01 * windowWidth;
    h = parseFloat(document.getElementById("game").style.height) * 0.01 * windowWidth;
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