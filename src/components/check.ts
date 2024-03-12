const canvasWidth = 1300;
const canvasHeight = 600;

import {Player} from './player';
import {Bushes} from './bushes';
import {Clouds} from './clouds';
import {Trampoline, Rocket, Blower, YellowBall, RedBall, SuperRocket, Skate} from './abilities';
import {startGeneration} from './generation'
import {Button} from './draw'

function checkRockets(player: Player, rockets: Rocket[]) {
    if (!player.superRocket) {
        for (let i = 0; i < rockets.length; i++) {
            if (player.x + player.width_img > rockets[i].x &&
                player.x < rockets[i].x + rockets[i].width_img &&
                player.y + player.height_img > rockets[i].y &&
                player.y < rockets[i].y + rockets[i].height_img) {
                player.rocket();
                rockets.splice(i, 1);
                return;
            }
        }
    }
}

function checkSuperRockets(player: Player, superRockets: SuperRocket[]) {
    if (!player.superRocket) {
        for (let i = 0; i < superRockets.length; i++) {
            if (player.x + player.width_img > superRockets[i].x &&
                player.x < superRockets[i].x + superRockets[i].width_img &&
                player.y + player.height_img > superRockets[i].y &&
                player.y < superRockets[i].y + superRockets[i].height_img) {
                player.superRocket = true;
                superRockets.splice(i, 1);
                return;
            }
        }
    }
}

function checkBlowers(player: Player, blowers: Blower[]) {
    if (!player.superRocket) {
        for (let i = 0; i < blowers.length; i++) {
            if (player.x + player.width_img > blowers[i].x &&
                player.x < blowers[i].x + blowers[i].width_img &&
                player.y + player.height_img > blowers[i].y - 100 &&
                player.y < blowers[i].y + blowers[i].height_img) {
                player.blower();
                return;
            }
        }
    }
}

function checkYellowBalls(player: Player, yellowBalls: YellowBall[]) {
    if (!player.superRocket) {
        for (let i = 0; i < yellowBalls.length; i++) {
            if (player.x + player.width_img > yellowBalls[i].x &&
                player.x < yellowBalls[i].x + yellowBalls[i].width_img &&
                player.y + player.height_img > yellowBalls[i].y &&
                player.y < yellowBalls[i].y + yellowBalls[i].height_img) {

                player.img = "hamsterInYellowBall";
                player.width_img = 100;
                player.height_img = 100;
                player.ball = "yellow";
                yellowBalls.splice(i, 1);
                return;
            }
        }
    }
}

function checkRedBalls(player: Player, redBalls: RedBall[]) {
    if (!player.superRocket) {
        for (let i = 0; i < redBalls.length; i++) {
            if (player.x + player.width_img > redBalls[i].x &&
                player.x < redBalls[i].x + redBalls[i].width_img &&
                player.y + player.height_img > redBalls[i].y &&
                player.y < redBalls[i].y + redBalls[i].height_img) {
                player.img = "hamsterInRedBall";
                player.width_img = 100;
                player.height_img = 100;
                player.ball = "red";
                redBalls.splice(i, 1);
                return;
            }
        }
    }
}

function checkSkate(player: Player, skates: Skate[]) {
    if (!player.skate && !player.superRocket) {
        for (let i = 0; i < skates.length; i++) {
            if (player.x + player.width_img > skates[i].x &&
                player.x < skates[i].x + skates[i].width_img &&
                player.y + player.height_img > skates[i].y &&
                player.y < skates[i].y + skates[i].height_img) {
                player.skate = true;
                skates.splice(i, 1);
                return;
            }
        }
    }
}

export function check(
    player: Player,
    rockets: Rocket[],
    superRockets: SuperRocket[],
    blowers: Blower[],
    yellowBalls: YellowBall[],
    redBalls: RedBall[],
    skates: Skate[]) {
    checkRockets(player, rockets);
    checkSuperRockets(player, superRockets);
    checkBlowers(player, blowers);
    checkYellowBalls(player, yellowBalls);
    checkRedBalls(player, redBalls);
    checkSkate(player, skates);
}

export function clear(
    bushes: Bushes[],
    clouds: Clouds[],
    trampolines: Trampoline[],
    rockets: Rocket[],
    superRockets: SuperRocket[],
    blowers: Blower[],
    yellowBalls: YellowBall[],
    redBalls: RedBall[],
    skates: Skate[]) {

    bushes = new Array(0);
    clouds = new Array(0);
    trampolines = new Array(0);
    rockets = new Array(0);
    superRockets = new Array(0);
    blowers = new Array(0);
    yellowBalls = new Array(0);
    redBalls = new Array(0);
    skates = new Array(0);
}