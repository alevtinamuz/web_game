<template>
    <div class="center">
        <canvas id="supercanvas" width="1300" height="600"></canvas>
    </div>
</template>


<script lang="ts">
    import {Player} from './player';
    import {Bushes} from './bushes';
    import {Clouds} from './clouds';
    import {Trampoline, Rocket, Blower, YellowBall, RedBall, SuperRocket, Skate} from './abilities';
    import { move } from './move';
    import { generation, startGeneration } from './generation';
    import { draw, Button } from './draw';
    import { check, clear } from './check'
    import { getDatabase, ref as dbRef, set, get } from 'firebase/database';
    export default {
        mounted() {

            const db = getDatabase();
            var userId = localStorage.getItem('userId');
            var userRef = dbRef(db, `users/${userId}`);
            var currentRecord = 0;

            if (userId) {
                userRef = dbRef(db, `users/${userId}/record`); // Ссылка на текущего пользователя и его рекорд
                get(userRef).then((snapshot) => {
                if (snapshot.exists()) {
                    currentRecord = snapshot.val(); // Получение значения рекорда текущего пользователя
                    console.log("Текущий рекорд пользователя:", currentRecord);
                } else {
                    console.log("Запись не найдена для текущего пользователя.");
                }
                }).catch((error) => {
                    console.error("Ошибка при получении записи пользователя:", error);
                });
            } else {
                console.log("ID пользователя не найден.");
            }

            function updateRecord(userId, newRecord) {
                const userRef = dbRef(db, `users/${userId}/record`);
                set(userRef, newRecord);
            }

            const canvasWidth = 1300;
            const canvasHeight = 600;

            var canvas: any = document.getElementById("supercanvas");
            var ctx = canvas.getContext("2d");

            var gameOver = false;
            var start = false;
            var newRecord = false;

            var startButton: Button = {
                label: "Start",
                x: 500,
                y: 400,
                width: 300,
                height: 100,
                visible: true
            };
            
            var player = new Player();
            
            var bushes = new Array(0);
            var clouds = new Array(0);
            var trampolines = new Array(0);
            var rockets = new Array(0);
            var superRockets = new Array(0);
            var blowers = new Array(0);
            var yellowBalls = new Array(0);
            var redBalls = new Array(0);
            var skates = new Array(0);


            function checkFall() {
                if (player.y >= 500) {
                    for (let i = 0; i < trampolines.length; i++) {
                        if (trampolines[i].x - player.x <= player.width_img &&
                            trampolines[i].x > player.x ||
                            player.x <= trampolines[i].x + trampolines[i].width_img &&
                            player.x > trampolines[i].x) {
                            if (player.ball == "red") {
                                player.img = "hamsterInRedBall";
                                player.width_img = 100;
                                player.height_img = 100;
                            } else if (player.ball == "yellow") {
                                player.img = "hamsterInYellowBall";
                                player.width_img = 100;
                                player.height_img = 100;
                            } else {
                                player.img = "hamster";
                                player.width_img = 60;
                                player.height_img = 40;
                            }
                            
                            player.big_jump();
                            player.moveOnSkate = false;
                            return;
                        }
                    }

                    if (player.ball == "yellow") {
                        player.big_jump();
                        player.ball = "no";
                        player.img = "hamster";
                        player.width_img = 60;
                        player.height_img = 40;
                        return;
                    } 

                    if (player.ball == "red") {
                        player.jump();
                        player.ball = "no";
                        player.img = "hamster";
                        player.width_img = 60;
                        player.height_img = 40;
                        return;
                    }

                    if (player.skate) {
                        player.moveOnSkate = true;
                        player.skate = false;

                        return;
                    }

                    if (player.moveOnSkate)
                        return;

                    gameOver = true;
                    startButton.visible = true;

                    if (Math.floor(player.distance / 100) > currentRecord) {
                        currentRecord = Math.floor(player.distance / 100); // Обновляем текущий рекорд
                        updateRecord(userId, Math.floor(player.distance / 100)); // Отправляем новый рекорд на сервер
                        newRecord = true;
                    }

                }
            }

            addEventListener('keydown', (e: any) => {
                if (e.keyCode == '32' && !player.moveOnSkate && !player.superRocket && !gameOver)
                    player.click();
            }); 

            function isInsideButton(x: number, y: number, button: Button) {
                return x > button.x && x < button.x + button.width && y > button.y && y < button.y + button.height;
            }

            canvas.addEventListener('click', function (e: any) {
                var rect = canvas.getBoundingClientRect();
                var mouseX = e.clientX - rect.left;
                var mouseY = e.clientY - rect.top;

                if (isInsideButton(mouseX, mouseY, startButton) && startButton.visible) {
                    start = true;
                    gameOver = false;
                    startButton.visible = true;
                    startButton.label = "Replay";
                    startButton.visible = false;
                    newRecord = false;

                    player = new Player();
                    clear(bushes, clouds, trampolines, rockets, superRockets, blowers, yellowBalls, redBalls, skates)
                    startGeneration(player, bushes, clouds, trampolines, rockets, superRockets, blowers, yellowBalls, redBalls, skates);
                }
            });
            
            function step() {
                if (!gameOver && start) {
                    generation(player, bushes, clouds, trampolines, rockets, superRockets, blowers, yellowBalls, redBalls, skates);

                    move(player, bushes, clouds, trampolines, rockets, superRockets, blowers, yellowBalls, redBalls, skates);

                    checkFall();
                    check(player, rockets, superRockets, blowers, yellowBalls, redBalls, skates);
                }

                draw(player, bushes, clouds, trampolines, rockets, superRockets, blowers, yellowBalls, redBalls, skates, ctx, startButton, gameOver, start, newRecord, currentRecord);

                window.requestAnimationFrame(step);
            }

            startGeneration(player, bushes, clouds, trampolines, rockets, superRockets, blowers, yellowBalls, redBalls, skates);

            window.requestAnimationFrame(step);
        }
    }
</script>

<style>
    .center {
        display: flex;
        justify-content: center;
    }

    #supercanvas {
        border: 2px solid black;
    }
</style>