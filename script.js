const canvas = document.getElementById('abstractArtCanvas')
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function createRandomFigure() {
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
