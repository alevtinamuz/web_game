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
            
            var player = new Player(150, 250, '', 30, 50, 0, 30, false, '', false, false);
            var x = 750;
            var y = 550;

            ctx.fillRect(x, y, 50, 50);

            setInterval(() => {
                ctx.clearRect(x, y, 50, 50);
                x--;
                y--;
                ctx.fillRect(x, y, 50, 50);
            }, 10);
        }
    }
</script>

<style>
    #supercanvas {
        border: 2px solid black;
    }
</style>