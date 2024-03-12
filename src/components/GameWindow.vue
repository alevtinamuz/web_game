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
    import { draw, Button } from './draw';
    export default {
        mounted() {
            const canvasWidth = 1300;
            const canvasHeight = 600;

            var canvas: any = document.getElementById("supercanvas");
            var ctx = canvas.getContext("2d");

            var gameOver = false;
            var start = false;

            let startButton: Button = {
                label: "Start",
                x: 500,
                y: 400,
                width: 300,
                height: 100,
                visible: true
            };
            
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

            function checkRedBalls() {
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
                        if (trampolines[i].x - player.x <= player.width_img &&
                            trampolines[i].x > player.x ||
                            player.x <= trampolines[i].x + trampolines[i].width_img &&
                            player.x > trampolines[i].x) {
                            if (player.ball == "red") {
                                player.img = "hamsterInRedBall";
                                player.width_img = 100;
                                player.height_img = 100;
                            } else if (player.ball == "yellow") {
                                player.img = "hamsterInYellowBall";
                                player.width_img = 100;
                                player.height_img = 100;
                            } else {
                                player.img = "hamster";
                                player.width_img = 60;
                                player.height_img = 40;
                            }
                            
                            player.big_jump();
                            player.moveOnSkate = false;
                            return;
                        }
                    }

                    if (player.ball == "yellow") {
                        player.big_jump();
                        player.ball = "no";
                        player.img = "hamster";
                        player.width_img = 60;
                        player.height_img = 40;
                        return;
                    } 

                    if (player.ball == "red") {
                        player.jump();
                        player.ball = "no";
                        player.img = "hamster";
                        player.width_img = 60;
                        player.height_img = 40;
                        return;
                    }

                    if (player.skate) {
                        player.moveOnSkate = true;
                        player.skate = false;

                        return;
                    }

                    if (player.moveOnSkate)
                        return;

                    gameOver = true;
                    startButton.visible = true;
                }
            }

            addEventListener('keydown', (e: any) => {
                if (e.keyCode == '32' && !player.moveOnSkate && !player.superRocket && !gameOver)
                    player.click();
            }); 

            function isInsideButton(x: number, y: number, button: Button) {
                return x > button.x && x < button.x + button.width && y > button.y && y < button.y + button.height;
            }

            function play() {
                start = true;
                gameOver = false;
                startButton.visible = true;
                startButton.label = "Replay";
                startButton.visible = false;

                player = new Player();
            
                bushes = new Array(0);
                clouds = new Array(0);
                trampolines = new Array(0);
                rockets = new Array(0);
                superRockets = new Array(0);
                blowers = new Array(0);
                yellowBalls = new Array(0);
                redBalls = new Array(0);
                skates = new Array(0);

                startGeneration();
            }

            canvas.addEventListener('click', function (e: any) {
                var rect = canvas.getBoundingClientRect();
                var mouseX = e.clientX - rect.left;
                var mouseY = e.clientY - rect.top;

                if (isInsideButton(mouseX, mouseY, startButton) && startButton.visible) {
                    play();
                }
            });
            
            function step() {
                if (!gameOver && start) {
                    generation(player, bushes, clouds, trampolines, rockets, superRockets, blowers, yellowBalls, redBalls, skates);

                    move(player, bushes, clouds, trampolines, rockets, superRockets, blowers, yellowBalls, redBalls, skates);

                    checkFall();
                    checkRockets();
                    checkSuperRockets();
                    checkBlowers();
                    checkYellowBalls();
                    checkRedBalls();
                    checkSkate();
                }

                draw(player, bushes, clouds, trampolines, rockets, superRockets, blowers, yellowBalls, redBalls, skates, ctx, startButton, gameOver, start);

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