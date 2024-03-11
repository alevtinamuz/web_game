// generation.ts
import {Player} from './player';
import {Bushes} from './bushes';
import {Clouds} from './clouds';
import {Trampoline, Rocket, Blower, YellowBall, RedBall, SuperRocket, Skate} from './abilities';


function generationBushes(bushes: Bushes[], canvas_width: number) {
    if (bushes[bushes.length - 1]?.x < canvas_width - 200) {
        const x = Math.floor(Math.random() * 200) + canvas_width;
        const y = bushes[bushes.length - 1].y
        bushes.push(new Bushes(x, y));
    }
}

function generationClouds(player: Player, clouds: Clouds[], canvas_width: number) {
    if (clouds[clouds.length - 1]?.x < canvas_width - 10) {
        const x = Math.floor(Math.random() * 100) + canvas_width;
        const height = Math.floor(Math.random() * 5000) + 300;
        clouds.push(new Clouds(x, height, player));
    }
}

function generationTrampolines(trampolines: Trampoline[], canvas_width: number) {
    if (trampolines[trampolines.length - 1]?.x < canvas_width - 500) {
        const x = Math.floor(Math.random() * 400) + canvas_width;
        const y = trampolines[trampolines.length - 1].y
        trampolines.push(new Trampoline(x, y));
    }
}

function generationRockets(player: Player, rockets: Rocket[], canvas_width: number) {
    if (rockets[rockets.length - 1]?.x < canvas_width - 100) {
        const x = Math.floor(Math.random() * 1000) + canvas_width;
        const height = Math.floor(Math.random() * 2000) + 300;
        rockets.push(new Rocket(x, height, player));
    }
}

function generationSuperRockets(player: Player, superRockets: SuperRocket[], canvas_width: number) {
    if (superRockets[superRockets.length - 1]?.x < canvas_width - 100) {
        const x = Math.floor(Math.random() * 1000) + canvas_width;
        const height = Math.floor(Math.random() * 2000) + 300;
        superRockets.push(new SuperRocket(x, height, player));
    }
}

function generationBlowers(player: Player, blowers: Blower[], canvas_width: number) {
    if (blowers[blowers.length - 1]?.x < canvas_width - 100) {
        const x = Math.floor(Math.random() * 1000) + canvas_width;
        const height = Math.floor(Math.random() * 2000) + 300;
        blowers.push(new Blower(x, height, player));
    }
}

function generationYellowBalls(player: Player, yellowBalls: YellowBall[], canvas_width: number) {
    if (yellowBalls[yellowBalls.length - 1]?.x < canvas_width - 100) {
        const x = Math.floor(Math.random() * 1000) + canvas_width;
        const height = Math.floor(Math.random() * 2000) + 300;
        yellowBalls.push(new YellowBall(x, height, player));
    }
}

function generationRedBalls(player: Player, redBalls: RedBall[], canvas_width: number) {
    if (redBalls[redBalls.length - 1]?.x < canvas_width - 100) {
        const x = Math.floor(Math.random() * 1000) + canvas_width;
        const height = Math.floor(Math.random() * 2000) + 300;
        redBalls.push(new RedBall(x, height, player));
    }
}

function generationSkates(player: Player, skates: Skate[], canvas_width: number) {
    if (skates[skates.length - 1]?.x < canvas_width - 100) {
        const x = Math.floor(Math.random() * 1000) + canvas_width;
        const height = Math.floor(Math.random() * 2000) + 300;
        skates.push(new Skate(x, height, player));
    }
}

function clearBushes(bushes: Bushes[]) {
    while (bushes[0].x < -50 && bushes.length > 1)
        bushes.shift();
}

function clearClouds(clouds: Clouds[]) {
    while (clouds[0].x < -50 && clouds.length > 1) 
        clouds.shift();
}

function clearTrampolines(trampolines: Trampoline[]) {
    while (trampolines[0].x < -50 && trampolines.length > 1)
        trampolines.shift();
}

function clearRockets(rockets: Rocket[]) {
    while (rockets[0]?.x < -50 && rockets.length > 1)
        rockets.shift();
}

function clearSuperRockets(superRockets: SuperRocket[]) {
    while (superRockets[0].x < -50 && superRockets.length > 1)
        superRockets.shift();
}

function clearBlowers(blowers: Blower[]) {
    while (blowers[0].x < -50 && blowers.length > 1)
        blowers.shift()
}

function clearYellowBalls(yellowBalls: YellowBall[]) {
    while (yellowBalls[0].x < -50 && yellowBalls.length > 1)
        yellowBalls.shift()
}

function clearRedBalls(redBalls: RedBall[]) {
    while (redBalls[0].x < -50 && redBalls.length > 1)
        redBalls.shift()
}

function clearSkates(skates: Skate[]) {
    while (skates[0].x < -50 && skates.length > 1)
        skates.shift()
}

export function generation (
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
    canvas_width: number) {
        generationBushes(bushes, canvas_width);
        generationClouds(player, clouds, canvas_width);
        generationTrampolines(trampolines, canvas_width);
        generationRockets(player, rockets, canvas_width);
        generationSuperRockets(player, superRockets, canvas_width);
        generationBlowers(player, blowers, canvas_width);
        generationYellowBalls(player, yellowBalls, canvas_width);
        generationRedBalls(player, redBalls, canvas_width);
        generationSkates(player, skates, canvas_width);

        clearBushes(bushes);
        clearClouds(clouds);
        clearTrampolines(trampolines);
        clearRockets(rockets);
        clearSuperRockets(superRockets);
        clearBlowers(blowers);
        clearYellowBalls(yellowBalls);
        clearRedBalls(redBalls);
        clearSkates(skates);
}
