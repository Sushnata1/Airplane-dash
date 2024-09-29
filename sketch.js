var s, w, h, po;
var d;
var bots;
var nm;

let img;

function setup() {
  img = loadImage('pointer.jpg');
  po = 0;
  e = window.getComputedStyle(document.getElementById("game"));
  w = parseInt(e.getPropertyValue("width"), 10);
  h = parseInt(e.getPropertyValue("height"), 10);
  s = JSON.parse(localStorage.getItem("level"));
  var scontext = new (window.AudioContext || window.webkitAudioContext)();
  nm = s["number"];
  nm1 = Math.floor(nm / 4) + 1;
  nm += nm1;
  var canvas = createCanvas(w, h);
  canvas.parent("game");
  background(0);
  noStroke();
  bots = [];
  for (let i = 0; i < nm1; i++) {
    bots[i] = new Bomb();
  }
  for (let i = nm1; i < nm; i++) {
    bots[i] = new Bot(scontext);
  }
  start_time = new Date(Date.now());
  localStorage.setItem("start_time",start_time);
}

function showPointer() {
  push();
  size = s["size"];
  image(img, mouseX - size / 2, mouseY - size / 2, size, size);
  pop();
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
  strokeWeight(n / 5);
  stroke(255);
  showPointer();
  pop();
  for (b of bots) {
    b.collide();
    b.show();
  }
}