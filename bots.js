class Bot {
    constructor() {
        this.x = random(w);
        this.y = random(h);
        this.n = s["size"];
        this.r = random(20, 255);
        this.g = random(0, 255);
        this.b = random(0, 255);
    }

    change = function() {
        this.x = random(w);
        this.y = random(h);
        this.r = random(20, 255);
        this.g = random(20, 255);
        this.b = random(20, 255);
    }

    show = function() {
        push();
        fill(this.r, this.g, this.b);
        rectMode(CENTER);
        rect(this.x, this.y, this.n, this.n);
        pop();
    }

    collide = function() {
        if ((this.x > mouseX - 20 && this.x < mouseX + 20) || (this.y > mouseY - 20 && this.y < mouseY + 20)) {
            var p = document.getElementById("points");
            po++;
            p.innerHTML = po;
            this.change();
        }
    }
}