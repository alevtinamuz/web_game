const canvas_width = 1300;
const canvas_height = 600;

import {Player} from './player';

class Trampoline {
    x: number;
    y: number;
    width_img: number;
    height_img: number;
    img: string;
    constructor(x: number, 
                y: number) {
        this.x = x;
        this.y = y;
        this.width_img = 50;
        this.height_img = 50;
        this.img = "trampoline";
    }
    move(player: Player) {
        this.x -= player.speedX;
        if (player.height <= 250) {
            this.y = 550;
        } else {
            this.y += player.speedY;
        }
    }
}


class Rocket {
    x: number;
    y: number;
    height: number;
    width_img: number;
    height_img: number;
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
        this.width_img = 50;
        this.height_img = 50;
        this.img = "rocket";
    }
    move(player: Player) {
        this.x -= player.speedX;

        if (player.height > 250) {
            this.y = player.y - (this.height - player.height - 100);
        } 
    }
}


class Blower {
    x: number;
    y: number;
    height: number;
    width_img: number;
    height_img: number;
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
        this.width_img = 50;
        this.height_img = 50;
        this.img = "blower";
    }
    move(player: Player) {
        this.x -= player.speedX;

        if (player.height > 250) {
            this.y = player.y - (this.height - player.height - 100);
        } 
    }
}


class YellowBall {
    x: number;
    y: number;
    height: number;
    width_img: number;
    height_img: number;
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
        this.width_img = 50;
        this.height_img = 50;
        this.img = "yellowBall"
    }
    move(player: Player) {
        this.x -= player.speedX;

        if (player.height > 250) {
            this.y = player.y - (this.height - player.height - 100);
        } 
    }
}


class RedBall {
    x: number;
    y: number;
    height: number;
    width_img: number;
    height_img: number;
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
        this.width_img = 50;
        this.height_img = 50;
        this.img = "redBall";
    }
    move(player: Player) {
        this.x -= player.speedX;

        if (player.height > 250) {
            this.y = player.y - (this.height - player.height - 100);
        } 
    }
}


class SuperRocket {
    x: number;
    y: number;
    height: number;
    width_img: number;
    height_img: number;
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
        this.width_img = 50;
        this.height_img = 50;
        this.img = "superRocket";
    }
    move(player: Player) {
        this.x -= player.speedX;

        if (player.height > 250) {
            this.y = player.y - (this.height - player.height - 100);
        } 
    }
}


class Skate {
    x: number;
    y: number;
    height: number;
    width_img: number;
    height_img: number;
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
        this.width_img = 50;
        this.height_img = 50;
        this.img = "skate";
    }
    move(player: Player) {
        this.x -= player.speedX;

        if (player.height > 250) {
            this.y = player.y - (this.height - player.height - 100);
        } 
    }
}


export {Trampoline, Rocket, Blower, YellowBall, RedBall, SuperRocket, Skate}