class Bot {
    constructor() {
        this.n = s["size"];
        this.x = random(this.n, w - this.n);
        this.y = random(this.n, h - this.n);
        this.r = random(20, 255);
        this.g = random(0, 255);
        this.b = random(0, 255);
        this.img = loadImage("assets/allgorythm.png");//image
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
        image(this.img,this.x, this.y, this.n, this.n);// rect(this.x,this.y,this.n,this.n);
        pop();
    }

    collide = function() {
        if ((mouseX >= this.x && mouseX <= this.x + this.n) && (mouseY >= this.y && mouseY <= this.y + this.n)) {
            var p = document.getElementById("points");
            po++;
            p.innerHTML = "Score : " + po;
            this.change();
        }
    }
}

class Bomb {
    constructor() {
        this.n = s["size"];
        this.x = random(this.n, w - this.n);
        this.y = random(this.n, h - this.n);
    }

    change = function() {
        this.x = random(this.n, w - this.n);
        this.y = random(this.n, h - this.n);
    }

    show = function() {
        push();
        fill(255);
        rect(this.x, this.y, this.n, this.n);
        pop();
    }

    collide = function() {
        if ((mouseX >= this.x && mouseX <= this.x + this.n) && (mouseY >= this.y && mouseY <= this.y + this.n)) {
            noLoop();
            var p = document.getElementById("points");
            p.innerHTML = "Game Over | Score : " + po;
            localStorage.setItem("po", po);
            window.open("gameover.html", "_self");
        }
    }
}