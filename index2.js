import { Vector2 } from './PhysicsJS2D/src/vector2.js';

// get the canvas element and its context
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = 300;
canvas.height = 300;

const player = new Vector2(150, 150);

function drawCircle (position, radius, color) {
    context.fillStyle = color;
    context.beginPath();
    context.arc(position.x, position.y, radius, 0, Math.PI * 2);
    context.fill();
}

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        player.x -= 1;
    } else if (event.key === "ArrowRight") {
        player.x += 1;
    }
});

(function main () {
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawCircle(player, 5, 'red');

    requestAnimationFrame(main);
})();

