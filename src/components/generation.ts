const canvasWidth = 1300;
const canvasHeight = 600;

import {Player} from './player';
import {Bushes} from './bushes';
import {Clouds} from './clouds';
import {Trampoline, Rocket, Blower, YellowBall, RedBall, SuperRocket, Skate} from './abilities';


function generationBushes(bushes: Bushes[]) {
    if (bushes[bushes.length - 1]?.x < canvasWidth - 300) {
        const x = canvasWidth;
        const y = bushes[bushes.length - 1].y
        bushes.push(new Bushes(x, y));
    }
}

function generationClouds(player: Player, clouds: Clouds[]) {
    if (clouds[clouds.length - 1]?.x < canvasWidth - 10) {
        const x = canvasWidth;
        const height = Math.floor(Math.random() * 5000) + 300;
        clouds.push(new Clouds(x, height, player));
    }
}

function generationTrampolines(trampolines: Trampoline[]) {
    if (trampolines[trampolines.length - 1]?.x < canvasWidth - 100) {
        if (Math.floor(Math.random() * 65) + 1 == 15) {
            const x = canvasWidth;
            const y = trampolines[trampolines.length - 1].y
            trampolines.push(new Trampoline(x, y));
        }
        
    }
}

function generationRockets(player: Player, rockets: Rocket[]) {
    if (rockets[rockets.length - 1]?.x < canvasWidth - 100) {
        if (Math.floor(Math.random() * 25) + 1 == 15) {
            const x = canvasWidth;
            const height = Math.floor(Math.random() * 4000) + 300;
            rockets.push(new Rocket(x, height, player));
        }
    }
}

function generationSuperRockets(player: Player, superRockets: SuperRocket[]) {
    if (superRockets[superRockets.length - 1]?.x < canvasWidth - 1200) {
        if (Math.floor(Math.random() * 100) + 1 == 15) {
            const x = canvasWidth;
            const height = Math.floor(Math.random() * 3000) + 300;
            superRockets.push(new SuperRocket(x, height, player));
        }
    }
}

function generationBlowers(player: Player, blowers: Blower[]) {
    if (blowers[blowers.length - 1]?.x < canvasWidth - 300) {
        if (Math.floor(Math.random() * 30) + 1 == 15) {
            const x = canvasWidth;
            const height = Math.floor(Math.random() * 3000) + 300;
            blowers.push(new Blower(x, height, player));
        }
        
    }
}

function generationYellowBalls(player: Player, yellowBalls: YellowBall[]) {
    if (yellowBalls[yellowBalls.length - 1]?.x < canvasWidth - 300) {
        if (Math.floor(Math.random() * 40) + 1 == 15) {
            const x = canvasWidth;
            const height = Math.floor(Math.random() * 3000) + 300;
            yellowBalls.push(new YellowBall(x, height, player));
        }
        
    }
}

function generationRedBalls(player: Player, redBalls: RedBall[]) {
    if (redBalls[redBalls.length - 1]?.x < canvasWidth - 100) {
        if (Math.floor(Math.random() * 25) + 1 == 15) {
            const x = canvasWidth;
            const height = Math.floor(Math.random() * 2000) + 300;
            redBalls.push(new RedBall(x, height, player));
        }
    }
}

function generationSkates(player: Player, skates: Skate[]) {
    if (skates[skates.length - 1]?.x < canvasWidth - 100) {
        if (Math.floor(Math.random() * 50) + 1 == 15) {
            const x = canvasWidth;
            const height = Math.floor(Math.random() * 2000) + 300;
            skates.push(new Skate(x, height, player));
        }
        
    }
}

function clearBushes(bushes: Bushes[]) {
    while (bushes[0]?.x < -1000 && bushes.length > 1)
        bushes.shift();
}

function clearClouds(clouds: Clouds[]) {
    while (clouds[0]?.x < -1000 && clouds.length > 1) 
        clouds.shift();
}

function clearTrampolines(trampolines: Trampoline[]) {
    while (trampolines[0]?.x < -1000 && trampolines.length > 1)
        trampolines.shift();
}

function clearRockets(rockets: Rocket[]) {
    while (rockets[0]?.x < -1000 && rockets.length > 1)
        rockets.shift();
}

function clearSuperRockets(superRockets: SuperRocket[]) {
    while (superRockets[0]?.x < -1000 && superRockets.length > 1)
        superRockets.shift();
}

function clearBlowers(blowers: Blower[]) {
    while (blowers[0]?.x < -1000 && blowers.length > 1)
        blowers.shift()
}

function clearYellowBalls(yellowBalls: YellowBall[]) {
    while (yellowBalls[0]?.x < -1000 && yellowBalls.length > 1)
        yellowBalls.shift()
}

function clearRedBalls(redBalls: RedBall[]) {
    while (redBalls[0]?.x < -1000 && redBalls.length > 1)
        redBalls.shift()
}

function clearSkates(skates: Skate[]) {
    while (skates[0]?.x < -1000 && skates.length > 1)
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
    skates: Skate[]) {
        generationBushes(bushes);
        generationClouds(player, clouds);
        generationTrampolines(trampolines);
        generationRockets(player, rockets);
        generationSuperRockets(player, superRockets);
        generationBlowers(player, blowers);
        generationYellowBalls(player, yellowBalls);
        generationRedBalls(player, redBalls);
        generationSkates(player, skates);

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
