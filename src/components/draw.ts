// generation.ts
import {Player} from './player';
import {Bushes} from './bushes';
import {Clouds} from './clouds';
import {Trampoline, Rocket, Blower, YellowBall, RedBall, SuperRocket, Skate} from './abilities';

function clearCanvas(ctx: CanvasRenderingContext2D, canvas_width: number, canvas_height: number) {
    ctx.clearRect(0, 0, canvas_width, canvas_height);
}

function drawBushes(ctx: CanvasRenderingContext2D, canvas_width: number, canvas_height: number, bushes: Bushes[]) {
    const imgB = new Image();
    imgB.onload = () => {
        clearCanvas(ctx, canvas_width, canvas_height);
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
    canvas_width: number,
    canvas_height: number) {
        drawBushes(ctx, canvas_width, canvas_height, bushes);
        drawClouds(ctx, clouds);
        drawTrampolines(ctx, trampolines);
        drawRockets(ctx, rockets);
        drawSuperRockets(ctx, superRockets);
        drawBlowers(ctx, blowers);
        drawYellowBalls(ctx, yellowBalls);
        drawRedBalls(ctx, redBalls);
        drawSkates(ctx, skates);
        drawPlayer(ctx, player);
}
