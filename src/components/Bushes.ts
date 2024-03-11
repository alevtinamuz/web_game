const canvas_width = 1300;
const canvas_height = 600;

import {Player} from './player';

class Bushes {
    x: number;
    y: number;
    height: number;
    img: string;
    width_img: number;
    height_img: number;
    constructor(x: number,
                y: number) {
        this.x = x;
        this.y = y;
        this.height = 150;
        this.img = "bush";
        this.width_img = 100;
        this.height_img = 50;
    }

    move(player: Player) {
        this.x -= player.speedX;

        if (player.height <= 250) {
            this.y = canvas_height - this.height;
        } else {
            this.y += player.speedY;
        }
    }
}

export {Bushes}