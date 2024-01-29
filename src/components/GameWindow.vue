<template>
    <div>
        <canvas id="supercanvas" width="800" height="600"></canvas>
    </div>
</template>


<script lang="ts">
    import {Player} from './player';
    import {Bushes} from './bushes';
    export default {
        mounted() {
            // const ctx = this.$refs.supercanvas.getContext('2d');
            var canvas : any = document.getElementById("supercanvas");
            var ctx = canvas.getContext("2d");
            
            // var bushes = new Array(0);
            // var clouds = [];
            // bushes.push(new Bushes(750, 400, 'bush'));
            // bushes.push(new Bushes(690, 550, ''));
            // var img = new Image()
            //     img.onload = () => {
            //         ctx.drawImage(img, player.x, player.y)
            //     }
            // img.src = require('/src/assets/cat.png')
            // function step() {
            //     window.requestAnimationFrame(step);
            //     ctx.clearRect(0, 0, 800, 600);
            //     player.move();
            //     // ctx.fillRect(player.x, player.y, 50, 50);
            //     var img = new Image()
            //     img.onload = () => {
            //         ctx.drawImage(img, player.x, player.y)
            //     }
                
            //     img.src = player.img
            // }
            // window.requestAnimationFrame(step);
        
            // var player = new Player(150, 250, 'cat', 30, 50, 0, 30, false, '', false, false);

            // setInterval(() => {
            //     ctx.clearRect(player.x, player.y, 50, 50)
            //     const pic = new Image();
            //     const bush = new Image();
            //     pic.src = require(`@/assets/${player.img}.png`);
            //     bush.src = require(`@/assets/${bushes[0].img}.png`);
            //     pic.onload = function() {
            //         ctx.drawImage(pic, player.x, player.y, 50, 50);
            //         ctx.drawImage(bush, bushes[0].x, bushes[0].y, 50, 50)
            //     }
            //     player.move();
            //     bushes[0].move()
            // }, 10);
        }
    }
</script>

<style>
    #supercanvas {
        border: 2px solid black;
    }
</style>