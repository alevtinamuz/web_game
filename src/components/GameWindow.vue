<template>
    <div>
        <canvas id="supercanvas" width="800" height="600"></canvas>
    </div>
</template>


<script lang="ts">
    import {Player} from './player';
    import {Bushes} from './Bushes';
    import {Clouds} from './clouds';
    export default {
        mounted() {
            var canvas: any = document.getElementById("supercanvas");
            var ctx = canvas.getContext("2d");
            
            var player = new Player(150, 250, 'cat', 30, 50, 0, 250, false, '', false, false);
            
            var bushes = new Array(0);
            var clouds = new Array(0);

            function startGeneration() {
                bushes.push(new Bushes(750, 450, 'bush'));
                bushes.push(new Bushes(500, 450, 'bush'));

                clouds.push(new Clouds(430, 50, ''));
                clouds.push(new Clouds(520, 120, ''));
            }

            function generationBushes() {
                if (bushes[bushes.length - 1].x < 600) {
                    let x = Math.floor(Math.random() * 200) + 800;
                    bushes.push(new Bushes(x, bushes[bushes.length - 1].y , 'bush'));
                }
            }

            function generationClouds() {
                if (clouds[clouds.length - 1].x < 600) {
                    let x = Math.floor(Math.random() * 300) + 800;
                    let y = Math.floor(Math.random() * 400);
                    clouds.push(new Clouds(x, y, 'cloude'));
                }
            }

            function clearBushes() {
                if (bushes[0].x <= -50)
                    bushes.shift()
            }

            function clearClouds() {
                if (clouds[0].x <= -50) 
                    clouds.shift()
            }

            function drawBushes() {
                for (let i = 0; i < bushes.length; i++) {
                    let imgBush = new Image();
                    imgBush.onload = () => {
                        ctx.drawImage(imgBush, bushes[i].x, bushes[i].y, 50, 50);
                    }
                    imgBush.src = require('/src/assets/bush.png');
                }
            }

            function drawClouds() {
                for (let i = 0; i < clouds.length; i++) {
                    let imgCloud = new Image();
                    imgCloud.onload = () => {
                        ctx.drawImage(imgCloud, clouds[i].x, clouds[i].y, 50, 50);
                    }
                    imgCloud.src = require('/src/assets/cloude.png');
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
                img.src = require('/src/assets/cat.png');
            }

            function moveBushes() {
                for (let i = 0; i < bushes.length; i++){
                    bushes[i].move();
                    if (player.height > 250) {
                        bushes[i].y += 5;
                        player.height--;
                    }
                    else if(player.height <= 250 && bushes[i].y >= 450) {
                        bushes[i].y -= 1;
                    }
                }
            }

            function moveClouds() {
                for (let i = 0; i < clouds.length; i++)
                    clouds[i].move();
            }

            addEventListener('keydown', (e: any) => {
                if (e.keyCode == '32') {
                    player.height += 50;
                    console.log(player.height)
                }
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

                moveBushes();
                moveClouds();

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