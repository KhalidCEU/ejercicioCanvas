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
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.startAngle = 0;
        this.endAngle = 2 * Math.PI;
        this.color = color;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle)
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

class Square {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.width = size;
        this.height = size;
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

class RandomShape {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color
    }

    draw(ctx) {
        const nbPoints = Math.floor(Math.random() * 10) ;
        const points = [];

        for (let i = 0; i < nbPoints; i++) {
            const randomX = Math.random() * 100 - 50;
            const randomY = Math.random() * 100 - 50;
            points.push({ x: this.x + randomX, y: this.y + randomY });
        }

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y);
        }

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
    const radius = Math.random() * 20;
    const color = getRandomColor();

    const figures = [
        ['Triangle', [x, y, size, color]],
        ['Rectangle', [x, y, height, width, color]],
        ['Circle', [x, y, radius, color]],
        ['Square', [x, y, size, color]],
        ['RandomShape', [x, y, color]]
    ];
    const index = Math.floor(Math.random() * figures.length);
    const [figureType, params] = figures[index];

    const FigureConstructor = {
        'Rectangle': Rectangle,
        'Triangle': Triangle,
        'Circle': Circle,
        'Square': Square,
        'RandomShape': RandomShape
    }

    const figure = new FigureConstructor[figureType](...params);
    figure.draw(ctx);
}
