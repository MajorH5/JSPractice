import { Vector2 } from "../../PhysicsJS2D/src/vector2.js";
import { PongSocketClient } from "./pongSocketClient.js";

// first thing is to extract the canvas and context from the DOM
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const ARENA_WIDTH = 800;
const ARENA_HEIGHT = 800;

const PADDLE_WIDTH = 20;
const PADDLE_HEIGHT = 100;

const BALL_RADIUS = 20;

canvas.width = ARENA_WIDTH;
canvas.height = ARENA_HEIGHT;

function drawPongPaddle(point){
    context.fillStyle = "white";
    context.beginPath();
    context.rect(point.x, point.y, PADDLE_WIDTH, PADDLE_HEIGHT);
    context.fill();
    context.closePath();
}

function drawBall(point){
    context.fillStyle = "white";
    context.beginPath();
    context.arc(point.x, point.y, BALL_RADIUS, 0, 2*Math.PI);
    context.fill();
    context.closePath();
}

function drawGame(myPaddle, opponentPaddle, ball, myScore, opponentScore){
    // clear the entire screen for next frame
    context.clearRect(0,0,ARENA_WIDTH,ARENA_HEIGHT);

    // draw both pong paddles & ball
    drawPongPaddle(myPaddle);
    drawPongPaddle(opponentPaddle);
    drawBall(ball);

    // draw scores
    context.fillText(myScore, 100, 100);
    context.fillText(opponentScore, ARENA_WIDTH-100, 100)
}

function createGameState() {
    return {
        myPaddle: new Vector2(0, 0),
        opponentPaddle: new Vector2(0,0),
        myScore: 0,
        opponentScore: 0,
        ball: new Vector2(0,0)
    }
}

(function main () {
    const gameState = createGameState();
    const socket = new PongSocketClient('ws://localhost:3001');
    
    socket.on('scored', (data) => {

    });

    socket.on('ball', (data) => {

    });

    socket.on('opponentPaddle', (data) => {

    });
})();