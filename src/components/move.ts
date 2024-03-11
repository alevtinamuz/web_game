import {Player} from './player';
import {Bushes} from './bushes';
import {Clouds} from './clouds';
import {Trampoline, Rocket, Blower, YellowBall, RedBall, SuperRocket, Skate} from './abilities';


function moveBushes(player: Player, bushes: Bushes[]) {
    for (let i = 0; i < bushes.length; i++)
        bushes[i].move(player);
}

function moveClouds(player: Player, clouds: Clouds[]) {
    for (let i = 0; i < clouds.length; i++)
        clouds[i].move(player);
}

function moveTrampolines(player: Player, trampolines: Trampoline[]) {
    for (let i = 0; i < trampolines.length; i++)
        trampolines[i].move(player);
}

function moveRockets(player: Player, rockets: Rocket[]) {
    for (let i = 0; i < rockets.length; i++)
        rockets[i].move(player);
}

function moveBlowers(player: Player, blowers: Blower[]) {
    for (let i = 0; i < blowers.length; i++)
        blowers[i].move(player);
}

function moveYellowBalls(player: Player, yellowBalls: YellowBall[]) {
    for (let i = 0; i < yellowBalls.length; i++)
        yellowBalls[i].move(player);
}

function moveRedBalls(player: Player, redBalls: RedBall[]) {
    for (let i = 0; i < redBalls.length; i++)
        redBalls[i].move(player);
}

function moveSuperRockets(player: Player, superRockets: SuperRocket[]) {
    for (let i = 0; i < superRockets.length; i++)
        superRockets[i].move(player);
}

function moveSkates(player: Player, skates: Skate[]) {
    for (let i = 0; i < skates.length; i++)
        skates[i].move(player);
}

function movePlayer(player: Player) {
    player.move();
    player.time();
}

export function move(
    player: Player,
    bushes: Bushes[],
    clouds: Clouds[],
    trampolines: Trampoline[],
    rockets: Rocket[],
    superRockets: SuperRocket[],
    blowers: Blower[],
    yellowBalls: YellowBall[],
    redBalls: RedBall[],
    skates: Skate[]) {
    moveBushes(player, bushes);
    moveClouds(player, clouds);
    moveTrampolines(player, trampolines);
    moveRockets(player, rockets);
    moveSuperRockets(player, superRockets);
    moveBlowers(player, blowers);
    moveYellowBalls(player, yellowBalls);
    moveRedBalls(player, redBalls);
    moveSkates(player, skates);
    movePlayer(player);
}
