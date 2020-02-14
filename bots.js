class Bot {
    constructor(_sc) {
        this.n = s["size"];
        this.x = random(this.n, w - this.n);
        this.y = random(this.n, h - this.n);
        this.r = random(20, 255);
        this.g = random(0, 255);
        this.b = random(0, 255);
        this.img = loadImage("assets/allgorhythm.png");//image
        this.scontext = _sc;
    }

    change = function() {
        this.x = random(this.n, w - this.n);
        this.y = random(this.n, h - this.n);
        this.r = random(20, 255);
        this.g = random(20, 255);
        this.b = random(20, 255);
    }

    show = function() {
        push();
        tint(this.r, this.g, this.b);// fill(this.r,this.b,this.g);
        image(this.img,this.x, this.y, this.n, this.n);// 
        stroke(this.r,this.g,this.b);
        noFill();
        rect(this.x,this.y,this.n,this.n);
        pop();
    }

    collide = function() {
        if ((mouseX >= this.x && mouseX <= this.x + this.n) && (mouseY >= this.y && mouseY <= this.y + this.n)) {
            var p = document.getElementById("points");
            po++;
            p.innerHTML = "Score : " + po;
            this.change();
            var soscillator;
            soscillator = this.scontext.createOscillator();
            console.log("oscillator");
            //console.log(soscillator);
            soscillator.type = 'sine';
            soscillator.frequency.value = 523;
            soscillator.connect(this.scontext.destination);
            var now = this.scontext.currentTime;
            soscillator.start(0);
            //console.log("sound");--
            soscillator.stop(now + 0.5);
        }
    }
}

class Bomb {
    constructor() {
        this.n = s["size"];
        this.x = random(this.n, w - this.n);
        this.y = random(this.n, h - this.n);
        this.img = loadImage("assets/allgorhythm.png");//image
    }

    change = function() {
        this.x = random(this.n, w - this.n);
        this.y = random(this.n, h - this.n);
    }

    show = function() {
        push();
        stroke(255);
        strokeWeight(4);
        noFill();
        rect(this.x, this.y, this.n, this.n);
        image(this.img,this.x, this.y, this.n, this.n);
        pop();
    }

    collide = function() {
        if ((mouseX >= this.x && mouseX <= this.x + this.n) && (mouseY >= this.y && mouseY <= this.y + this.n)) {
            noLoop();
            var p = document.getElementById("points");
            p.innerHTML = "Game Over | Score : " + po;
            /*
            // not working :<
            --
            var soscillator;
            soscillator = scontext.createOscillator();
            soscillator.type = 'sine';
            soscillator.frequency.value = 523;
            soscillator.connect(scontext.destination);
            var now = scontext.currentTime;
            soscillator.start(0);
            soscillator.stop(now + 1);
            //delete soscillator;
            /*--*/
            localStorage.setItem("po", po);
            window.open("gameover.html", "_self");
        }
    }
}