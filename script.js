const canvas = document.getElementById('abstractArtCanvas')
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Rectangle{
    constructor(x, y, height, width, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.fill();
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
    const height = Math.random() * 100;
    const width = Math.random() * 100 + 10;
    const size = Math.random() * 50 + 10;
    const color = getRandomColor();

    const figures = [
        ['Triangle', [x, y, size, color]],
        ['Rectangle', [x, y, height, width, color]]
    ];
    const index = Math.floor(Math.random() * figures.length);
    const [figureType, params] = figures[index];

    const FigureConstructor = {
        'Rectangle': Rectangle,
        'Triangle': Triangle,
    }

    const figure = new FigureConstructor[figureType](...params);
    figure.draw(ctx);
}
