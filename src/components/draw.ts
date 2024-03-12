const canvasWidth = 1300;
const canvasHeight = 600;

import {Player} from './player';
import {Bushes} from './bushes';
import {Clouds} from './clouds';
import {Trampoline, Rocket, Blower, YellowBall, RedBall, SuperRocket, Skate} from './abilities';

interface Button {
    label: string;
    x: number,
    y: number,
    width: number,
    height: number,
    visible: boolean
}

function drawButton(ctx: CanvasRenderingContext2D, button:Button) {
    if (button.visible) {
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.strokeRect(button.x, button.y, button.width, button.height);

        ctx.font = '60px Arial';
        ctx.fillStyle = 'white';
        if (button.label == "Start")
            ctx.fillText(button.label, button.x + 80, button.y + 70);
        else
            ctx.fillText(button.label, button.x + 60, button.y + 70);
    }
}

function drawGameOver(ctx: CanvasRenderingContext2D, gameOver: boolean, player: Player) {
    if (gameOver) {
        ctx.font = '110px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText("GAME OVER", 300, 200);

        // height
        ctx.font = '50px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText(`Distance: ${Math.floor(player.distance / 100)}`, 500, 300);
    }
}

function drawBackGround(ctx: CanvasRenderingContext2D, gameOver: boolean, start: boolean) {
    if (gameOver || !start) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    }
}


function clearCanvas(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}

function drawBushes(ctx: CanvasRenderingContext2D, bushes: Bushes[]) {
    const imgB = new Image();
    imgB.onload = () => {
        clearCanvas(ctx);
        for (let i = 0; i < bushes.length; i++) {
            ctx.drawImage(imgB, bushes[i]?.x, bushes[i]?.y, bushes[i].width_img, bushes[i].height_img);
            
        }
    }
    imgB.src = require(`@/assets/bush.png`);
}

function drawClouds(ctx: CanvasRenderingContext2D, clouds: Clouds[]) {
    const imgC = new Image();
    imgC.onload = () => {
        for (let i = 0; i < clouds.length; i++) {
            ctx.drawImage(imgC, clouds[i]?.x, clouds[i]?.y, clouds[i].width_img, clouds[i].height_img);
        }
    }
    imgC.src = require(`@/assets/cloud.png`);
}

function drawTrampolines(ctx: CanvasRenderingContext2D, trampolines: Trampoline[]) {
    const imgA = new Image();
    imgA.onload = () => {
        for (let i = 0; i < trampolines.length; i++) {
            ctx.drawImage(imgA, trampolines[i]?.x, trampolines[i]?.y, trampolines[i].width_img, trampolines[i].height_img);
        }
    }
    imgA.src = require(`@/assets/trampoline.png`);
}

function drawRockets(ctx: CanvasRenderingContext2D, rockets: Rocket[]) {
    const imgA = new Image();
    imgA.onload = () => {
        for (let i = 0; i < rockets.length; i++) {
            ctx.drawImage(imgA, rockets[i]?.x, rockets[i]?.y, rockets[i].width_img, rockets[i].height_img);
        }
    }
    imgA.src = require(`@/assets/rocket.png`);
}

function drawSuperRockets(ctx: CanvasRenderingContext2D, superRockets: SuperRocket[]) {
    const imgA = new Image();
    imgA.onload = () => {
        for (let i = 0; i < superRockets.length; i++) {
            ctx.drawImage(imgA, superRockets[i]?.x, superRockets[i]?.y, superRockets[i].width_img, superRockets[i].height_img);
        }
    }
    imgA.src = require(`@/assets/superRocket.png`);
}

function drawBlowers(ctx: CanvasRenderingContext2D, blowers: Blower[]) {
    const imgA = new Image();
    imgA.onload = () => {
        for (let i = 0; i < blowers.length; i++) {
            ctx.drawImage(imgA, blowers[i]?.x, blowers[i]?.y, blowers[i].width_img, blowers[i].height_img);
        }
    }
    imgA.src = require(`@/assets/blower.png`);
}

function drawYellowBalls(ctx: CanvasRenderingContext2D, yellowBalls: YellowBall[]) {
    const imgA = new Image();
    imgA.onload = () => {
        for (let i = 0; i < yellowBalls.length; i++) {
            ctx.drawImage(imgA, yellowBalls[i]?.x, yellowBalls[i]?.y, yellowBalls[i].width_img, yellowBalls[i].height_img);
        }
    }
    imgA.src = require(`@/assets/yellowBall.png`);
}

function drawRedBalls(ctx: CanvasRenderingContext2D, redBalls: RedBall[]) {
    const imgA = new Image();
    imgA.onload = () => {
        for (let i = 0; i < redBalls.length; i++) {
            ctx.drawImage(imgA, redBalls[i]?.x, redBalls[i]?.y, redBalls[i].width_img, redBalls[i].height_img);
        }
    }
    imgA.src = require(`@/assets/redBall.png`);
}

function drawSkates(ctx: CanvasRenderingContext2D, skates: Skate[]) {
    const imgA = new Image();
    imgA.onload = () => {
        for (let i = 0; i < skates.length; i++) {
            ctx.drawImage(imgA, skates[i]?.x, skates[i]?.y, skates[i].width_img, skates[i].height_img);
        }
    }
    imgA.src = require(`@/assets/skate.png`);
}

function drawPlayer(ctx: CanvasRenderingContext2D, player: Player) {
    const img = new Image();
    img.onload = () => {
        ctx.drawImage(img, player.x, player.y, player.width_img, player.height_img);
    }
    img.src = require(`@/assets/${player.img}.png`);
}

function drawPlayerInfo(ctx: CanvasRenderingContext2D, player: Player) {
    // height
    ctx.font = '24px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(`Distance: ${Math.floor(player.distance / 100)}`, 20, 40);

    // scale
    ctx.beginPath();
    ctx.rect(1250, 30, 20, 100);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(1250, 30, 20, player.scale - player.scale % 10);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();

    //skate
    if (player.skate) {
        const img = new Image();
        img.onload = () => {
            ctx.drawImage(img, 1235, 145, 50, 19);
        }
        img.src = require(`@/assets/skateTrue.png`);
    }
}

export function draw(
    player: Player,
    bushes: Bushes[],
    clouds: Clouds[],
    trampolines: Trampoline[],
    rockets: Rocket[],
    superRockets: SuperRocket[],
    blowers: Blower[],
    yellowBalls: YellowBall[],
    redBalls: RedBall[],
    skates: Skate[],
    ctx: CanvasRenderingContext2D,
    button: Button,
    gameOver: boolean,
    start: boolean) {
        drawBushes(ctx, bushes);
        drawClouds(ctx, clouds);
        drawTrampolines(ctx, trampolines);
        drawRockets(ctx, rockets);
        drawSuperRockets(ctx, superRockets);
        drawBlowers(ctx, blowers);
        drawYellowBalls(ctx, yellowBalls);
        drawRedBalls(ctx, redBalls);
        drawSkates(ctx, skates);
        drawPlayer(ctx, player);
        drawPlayerInfo(ctx, player);
        drawBackGround(ctx, gameOver, start);
        drawButton(ctx, button);
        drawGameOver(ctx, gameOver, player);
}

export {Button}