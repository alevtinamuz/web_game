<template>
    <div>
        <canvas id="supercanvas" width="1300" height="600"></canvas>
    </div>
</template>


<script lang="ts">
    import {Player} from './player';
    import {Bushes} from './bushes';
    import {Clouds} from './clouds';
    import {Trampoline, Rocket, Blower, YellowBall, RedBall, SuperRocket, Skate} from './abilities';
    import { move } from './move';
    import { generation } from './generation';
    import { draw } from './draw';
    export default {
        mounted() {
            const canvas_width = 1300;
            const canvas_height = 600;

            var canvas: any = document.getElementById("supercanvas");
            var ctx = canvas.getContext("2d");
            
            var player = new Player();
            
            var bushes = new Array(0);
            var clouds = new Array(0);
            var trampolines = new Array(0);
            var rockets = new Array(0);
            var superRockets = new Array(0);
            var blowers = new Array(0);
            var yellowBalls = new Array(0);
            var redBalls = new Array(0);
            var skates = new Array(0);

            

            function startGeneration() {
                bushes.push(new Bushes(750, 450));
                bushes.push(new Bushes(500, 450));

                clouds.push(new Clouds(830, 500, player));
                clouds.push(new Clouds(1000, 250, player));

                trampolines.push(new Trampoline(500, 500));
                rockets.push(new Rocket(600, 300, player));
                superRockets.push(new SuperRocket(1400, 100, player));
                blowers.push(new Blower(1000, 100, player));
                yellowBalls.push(new YellowBall(2000, 100, player));
                redBalls.push(new RedBall(1500, 300, player));
                skates.push(new Skate(1200, 100, player));
            }

            function checkRockets() {
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

            function checkSuperRockets() {
                if (!player.superRocket) {
                    for (let i = 0; i < superRockets.length; i++) {
                        if (player.x + player.width_img > superRockets[i].x &&
                            player.x < superRockets[i].x + superRockets[i].width_img &&
                            player.y + player.height_img > superRockets[i].y &&
                            player.y < superRockets[i].y + superRockets[i].height_img) {
                            player.superRocket = true;
                            rockets.splice(i, 1);
                            return;
                        }
                    }
                }
            }

            function checkBlowers() {
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

            function checkYellowBalls() {
                if (!player.superRocket) {
                    for (let i = 0; i < yellowBalls.length; i++) {
                        if (player.x + player.width_img > yellowBalls[i].x &&
                            player.x < yellowBalls[i].x + yellowBalls[i].width_img &&
                            player.y + player.height_img > yellowBalls[i].y &&
                            player.y < yellowBalls[i].y + yellowBalls[i].height_img) {
                            player.ball = "yellow";
                            yellowBalls.splice(i, 1);
                            return;
                        }
                    }
                }
            }

            function checkRedBalls() {
                if (!player.superRocket) {
                    for (let i = 0; i < redBalls.length; i++) {
                        if (player.x + player.width_img > redBalls[i].x &&
                            player.x < redBalls[i].x + redBalls[i].width_img &&
                            player.y + player.height_img > redBalls[i].y &&
                            player.y < redBalls[i].y + redBalls[i].height_img) {
                            player.ball = "red";
                            redBalls.splice(i, 1);
                            return;
                        }
                    }
                }
            }

            function checkSkate() {
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

            function checkFall() {
                if (player.y >= 500) {
                    for (let i = 0; i < trampolines.length; i++) {
                        if (Math.abs(trampolines[i].x - player.x) <= 50) {
                            player.big_jump();
                            player.moveOnSkate = false;
                            return;
                        }
                    }

                    if (player.ball == "yellow") {
                        player.big_jump();
                        player.ball = "no";
                        return;
                    } 

                    if (player.ball == "red") {
                        player.jump();
                        player.ball = "no";
                        return;
                    }

                    if (player.skate) {
                        player.moveOnSkate = true;
                        player.skate = false;

                        return;
                    }
                }
            }

            addEventListener('keydown', (e: any) => {
                if (e.keyCode == '32' && !player.moveOnSkate && !player.superRocket)
                    player.jump();
            }); 
            
            function step() {
                generation(player, bushes, clouds, trampolines, rockets, superRockets, blowers, yellowBalls, redBalls, skates, canvas_width);

                player.time();

                move(player, bushes, clouds, trampolines, rockets, superRockets, blowers, yellowBalls, redBalls, skates);

                draw(player, bushes, clouds, trampolines, rockets, superRockets, blowers, yellowBalls, redBalls, skates, ctx,  canvas_width, canvas_height);

                checkFall();
                checkRockets();
                checkSuperRockets();
                checkBlowers();
                checkYellowBalls();
                checkRedBalls();
                checkSkate();

                console.log(player.speedX);
                window.requestAnimationFrame(step);
            }

            startGeneration();
            window.requestAnimationFrame(step);
        }
    }
</script>

<style>
    #supercanvas {
        border: 2px solid black;
    }
</style>