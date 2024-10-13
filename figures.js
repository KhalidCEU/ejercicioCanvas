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
