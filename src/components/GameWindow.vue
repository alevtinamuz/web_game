<template>
    <div>
        <canvas id="supercanvas" width="800" height="600"></canvas>
    </div>
</template>


<script lang="ts">
    import {Player} from './player';
    import {Bushes} from './bushes';
    import {Clouds} from './clouds';
    import {Trampoline} from './abilities';
    export default {
        mounted() {
            var canvas: any = document.getElementById("supercanvas");
            var ctx = canvas.getContext("2d");
            
            var player = new Player();
            
            var bushes = new Array(0);
            var clouds = new Array(0);
            var trampolines = new Array(0);

            function startGeneration() {
                bushes.push(new Bushes(750, 450));
                bushes.push(new Bushes(500, 450));

                clouds.push(new Clouds(430, 50));
                clouds.push(new Clouds(520, 120));

                trampolines.push(new Trampoline(500, 550))
            }

            function generationBushes() {
                if (bushes[bushes.length - 1].x < 600) {
                    bushes.push(new Bushes(Math.floor(Math.random() * 200) + 800, 
                                           bushes[bushes.length - 1].y));
                }
            }

            function generationClouds() {
                if (clouds[clouds.length - 1].x < 600) {
                    clouds.push(new Clouds(Math.floor(Math.random() * 300) + 800, 
                                           Math.floor(Math.random() * (-600)) + 400));
                }
            }

            function generationTrampolines() {
                if (trampolines[trampolines.length - 1].x < 600) {
                    trampolines.push(new Trampoline(Math.floor(Math.random() * 400) + 1300, 
                                                    trampolines[trampolines.length - 1].y));
                }
            }

            function clearBushes() {
                while (bushes[0].x < -50 && bushes.length > 1)
                    bushes.shift()
            }

            function clearClouds() {
                while (clouds[0].x < -50 && clouds.length > 1) 
                    clouds.shift()
            }

            function clearTrampolines() {
                while (trampolines[0].x < -50 && trampolines.length > 1)
                    trampolines.shift()
            }

            function drawBushes() {
                let imgB = new Image();
                imgB.onload = () => {
                    ctx.clearRect(0, 0, 800, 600);
                    for (let i = 0; i < bushes.length; i++) {
                        ctx.drawImage(imgB, bushes[i]?.x, bushes[i]?.y, 50, 50);
                        
                    }
                }
                imgB.src = require(`@/assets/bush.png`);
            }

            function drawClouds() {
                let imgC = new Image();
                imgC.onload = () => {
                    for (let i = 0; i < clouds.length; i++) {
                        ctx.drawImage(imgC, clouds[i]?.x, clouds[i]?.y, 50, 50);
                    }
                }
                imgC.src = require(`@/assets/cloud.png`);
            }

            function drawTrampolines() {
                let imgA = new Image();
                imgA.onload = () => {
                    for (let i = 0; i < trampolines.length; i++) {
                        ctx.drawImage(imgA, trampolines[i]?.x, trampolines[i]?.y, 70, 50);
                    }
                }
                imgA.src = require(`@/assets/trampoline.png`);
            }

            // function drawBackground() {
            //     let back = new Image();
            //     back.onload = () => {
            //         ctx.drawImage(back, 0, 0, 800, 600);
            //     }
            //     back.src = require('/src/assets/autumn.png')
            // }

            function drawPlayer() {
                let img = new Image();
                img.onload = () => {
                    ctx.drawImage(img, player.x, player.y, 50, 50);
                }
                img.src = require(`@/assets/${player.img}.png`);
            }

            function moveBushes(height: number, speedX: number, speedY: number) {
                for (let i = 0; i < bushes.length; i++)
                    bushes[i].move(height, speedX, speedY);
            }

            function moveClouds(height: number, speedX: number, speedY: number) {
                for (let i = 0; i < clouds.length; i++)
                    clouds[i].move(height, speedX, speedY);
            }

            function moveTrampolines(height: number, speedX: number, speedY: number) {
                for (let i = 0; i < trampolines.length; i++)
                    trampolines[i].move(height, speedX, speedY)
            }

            function movePlayer() {
                player.move()
            }

            addEventListener('keydown', (e: any) => {
                if (e.keyCode == '32')
                    player.click()
            }); 
            
            function step() {
                generationBushes();
                generationClouds();
                generationTrampolines()

                clearBushes();
                clearClouds();
                clearTrampolines();
                
                // drawBackground();
                drawBushes();
                drawClouds();
                drawTrampolines();
                drawPlayer();

                player.time();

                movePlayer();
                moveBushes(player.height, player.speedX, player.speedY);
                moveClouds(player.height, player.speedX, player.speedY);
                moveTrampolines(player.height, player.speedX, player.speedY);

                window.requestAnimationFrame(step);
            }

            startGeneration()
            window.requestAnimationFrame(step);
        }
    }
</script>

<style>
    #supercanvas {
        border: 2px solid black;
    }
</style>