<template>
    <div>
        <canvas id="supercanvas" ref="supercanvas" width="800" height="600"></canvas>
    </div>
</template>


<script lang="ts">
    import {Player} from './player';
    import {Clouds} from './clouds';
    import {Bushes} from './Bushes';
    export default {
        mounted: function() {
            // const canvas = this.$refs.supercanvas;
            const ctx = canvas.getContext('2d');
            
            var player = new Player(150, 250, '/src/assets/cat.png', 30, 50, 0, 30, false, '', false, false);
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
        }
    }
</script>

<style>
    #supercanvas {
        border: 2px solid black;
    }
</style>