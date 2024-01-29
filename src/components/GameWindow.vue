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
            // const ctx = this.$refs.supercanvas.getContext('2d');
            var canvas : any = document.getElementById("supercanvas");
            var ctx = canvas.getContext("2d");
            
            var player = new Player(150, 250, 'cat', 30, 50, 0, 30, false, '', false, false);
            
            var bushes = new Array(0);
            var clouds = new Array(0);
            bushes.push(new Bushes(750, 400, ''));
            bushes.push(new Bushes(690, 550, ''));

            clouds.push(new Clouds(430, 50, ''));
            clouds.push(new Clouds(520, 120, ''));
            
            function step() {
                window.requestAnimationFrame(step);
                ctx.clearRect(0, 0, 800, 600);
                // player.move();
                ctx.fillRect(player.x, player.y, 50, 50);
                var img = new Image()
                img.onload = () => {
                    ctx.drawImage(img, player.x, player.y)
                }
                img.src = require('/src/assets/cat.png')

                for (let i = 0; i < 2; i++) {
                    clouds[i].move();
                    bushes[i].move();
                    ctx.fillRect(clouds[i].x, clouds[i].y, 50, 50)
                    ctx.fillRect(bushes[i].x, bushes[i].y, 50, 50)
                }
            }
            window.requestAnimationFrame(step);
        
            

            // setInterval(() => {
            //     ctx.clearRect(0, 0, 800, 600)
            //     for (let i = 0; i < 2; i++) {
            //         clouds[i].move();
            //         bushes[i].move();
            //     }
            // }, 10);
        }
    }
</script>

<style>
    #supercanvas {
        border: 2px solid black;
    }
</style>