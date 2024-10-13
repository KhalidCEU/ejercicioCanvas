const canvas = document.getElementById('abstractArtCanvas')
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Rectangle{
    constructor(){
    }
}

class Circle{
    constructor() {
    }
}

class Square {
    constructor() {
    }
}

class Triangle {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y + this.size);
        ctx.lineTo(this.x + this.size, this.y + this.size );
        ctx.lineTo(this.x + this.size/2, this.y);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function createRandomShape() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 50 + 10;
    const color = getRandomColor();
    const triangle = new Triangle(x, y, size, color);
    triangle.draw(ctx);
}
