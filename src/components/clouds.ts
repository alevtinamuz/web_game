const canvas_width = 1300;
const canvas_height = 600;

import {Player} from './player';

class Clouds {
    x: number; 
    y: number;
    height: number;
    img: string;
    constructor(x: number, 
                height: number, 
                player: Player) {
        this.height = height;
        this.x = x;
        if (player.height > 600) {
            this.y = player.y + (height - player.height);
        } else {
            this.y = canvas_height - height;
        }
        this.img = "cloud";
    }

    move(player: Player) {
        if (player.speedX == 0) {
            this.x--;
        } else {
            this.x -= player.speedX;
        }


        if (player.height > 250) {
            this.y = player.y - (this.height - player.height - 100);
        } 
        // else {
            // this.y = canvas_height - this.height;
        // }
        // if (player.height >= 250) {
            // this.y += player.speedY;
        // } 
        // else {
        //     this.y = canvas_height - this.height;
        // }
    }
}

export {Clouds}