<template>
    <div>
        <canvas id="supercanvas" ref="supercanvas" width="800" height="600"></canvas>
    </div>
</template>


<script lang="ts">
    import {Player} from './player';
    export default {
        mounted: function() {
            const canvas = this.$refs.supercanvas;
            const ctx = canvas.getContext('2d');
        
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