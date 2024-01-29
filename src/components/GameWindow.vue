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

        }
    }
</script>

<style>
    #supercanvas {
        border: 2px solid black;
    }
</style>