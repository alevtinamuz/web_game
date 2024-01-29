<template>
    <div>
        <canvas id="supercanvas" ref="supercanvas" width="800" height="600"></canvas>
    </div>
</template>

<script>

    export default {
        mounted: function() {
            const canvas = this.$refs.supercanvas;
            const ctx = canvas.getContext('2d');
            // const pic = new Image();
            // pic.src = require('/src/assets/cat.png');
            // pic.onload = function() {
            //     ctx.drawImage(pic, 0, 0, 800, 600);
            // }
            ctx.fillRect(100, 100, 50, 50);
            
            var x = 750;
            var y = 550;

            ctx.fillRect(x, y, 50, 50);

            setInterval(() => {
                ctx.clearRect(x, y, 50, 50)
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