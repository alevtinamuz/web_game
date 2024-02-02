<template>
    <div>
        <canvas id="supercanvas" width="800" height="600"></canvas>
    </div>
</template>


<script lang="ts">
    import {Player} from './player';
    import {Bushes} from './bushes';
    import {Clouds} from './clouds';
    export default {
        mounted() {
            var canvas: any = document.getElementById("supercanvas");
            var ctx = canvas.getContext("2d");
            
            var player = new Player();
            
            var bushes = new Array(0);
            var clouds = new Array(0);

            function startGeneration() {
                bushes.push(new Bushes(750, 450));
                bushes.push(new Bushes(500, 450));

                clouds.push(new Clouds(430, 50));
                clouds.push(new Clouds(520, 120));
            }

            function generationBushes() {
                if (bushes[bushes.length - 1].x < 600)
                    bushes.push(new Bushes(Math.floor(Math.random() * 200) + 800,
                                           bushes[bushes.length - 1].y));
            }

            function generationClouds() {
                if (clouds[clouds.length - 1].x < 600)
                    clouds.push(new Clouds(Math.floor(Math.random() * 300) + 800,
                                           Math.floor(Math.random() * (-600)) + 400));
            }

            function clearBushes() {
                if (bushes[0].x < -50)
                    bushes.shift()
            }

            function clearClouds() {
                if (clouds[0].x < -50) 
                    clouds.shift()
            }

            function drawBushes() {
                for (let i = 0; i < bushes.length; i++) {
                    let imgBush = new Image();
                    imgBush.onload = () => {
                        if (bushes[i].y < 600 && bushes[i].y > 0)
                            ctx.drawImage(imgBush, bushes[i].x, bushes[i].y, 50, 50);
                    }
                    imgBush.src = require(`@/assets/${bushes[i].img}.png`);
                }
            }

            function drawClouds() {
                for (let i = 0; i < clouds.length; i++) {
                    let imgCloud = new Image();
                    imgCloud.onload = () => {
                        if (clouds[i].y < 600 && clouds[i].y > 0)
                            ctx.drawImage(imgCloud, clouds[i].x, clouds[i].y, 50, 50);
                    }
                    imgCloud.src = require(`@/assets/${clouds[i].img}.png`);
                }
            }

            function drawBackground() {
                let back = new Image();
                back.onload = () => {
                    ctx.drawImage(back, 0, 0, 800, 600);
                }
                back.src = require('/src/assets/autumn.png')
            }

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

                clearBushes();
                clearClouds();

                drawBackground();
                drawBushes();
                drawClouds();
                drawPlayer();

                player.time();

                movePlayer();
                moveBushes(player.height, player.speedX, player.speedY);
                moveClouds(player.height, player.speedX, player.speedY);


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