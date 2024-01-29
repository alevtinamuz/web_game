<template>
    <div>
        <canvas id="supercanvas" width="800" height="600"></canvas>
    </div>
</template>


<script lang="ts">
    import {Player} from './player';
    export default {
        mounted() {
            // const ctx = this.$refs.supercanvas.getContext('2d');
            var canvas : any = document.getElementById("supercanvas");
            var ctx = canvas.getContext("2d");
            
            // var bushes = [];
            // var clouds = [];
            // bushes.push(new Bushes(400, 750, ''));
            // bushes.push(new Bushes(550, 690, ''));
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
        
            var player = new Player(150, 250, 'cat', 30, 50, 0, 30, false, '', false, false);

            setInterval(() => {
                const pic = new Image();
                pic.src = require(`@/assets/${player.img}.png`);
                pic.onload = function() {
                    ctx.drawImage(pic, player.x, player.y, 50, 50);
                }
                player.move();

            }, 10);
        }
    }
</script>

<style>
    #supercanvas {
        border: 2px solid black;
    }
</style>