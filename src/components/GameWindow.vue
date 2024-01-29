<template>
    <div>
        <canvas id="supercanvas" ref="supercanvas" width="800" height="600"></canvas>
    </div>
</template>

<script>
    const x = 750;
    const y = 550;
    export default {
        mounted: function() {
            const canvas = this.$refs.supercanvas;
            const ctx = canvas.getContext('2d');
            const pic = new Image();
            pic.src = require('/src/assets/autumn.png');
            pic.onload = function() {
                ctx.drawImage(pic, 0, 0, 800, 600);
            }
        }
    }
</script>

<style>
    #supercanvas {
        border: 2px solid black;
    }
</style>