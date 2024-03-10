class Trampoline {
    x: number;
    y: number;
    constructor(x: number, 
                y: number) {
        this.x = x;
        this.y = y;
    }
    move(height: number, speedX: number, speedY: number) {
        this.x -= speedX;
        if (height <= 250) {
            this.y = 550;
        } else {
            this.y += speedY;
        }
    }
}


class Rocket {
    x: number;
    y: number;
    constructor(x: number, 
                y: number) {
        this.x = x;
        this.y = y;
    }
    move(height: number, speedX: number, speedY: number) {
        this.x -= speedX;
        if (height <= 250) {
            this.y = 550;
        } else {
            this.y += speedY;
        }
    }
}





export {Trampoline}