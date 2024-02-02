class Bushes {
    x: number;
    y: number;
    img: string;
    constructor(x: number,
                y: number) {
        this.x = x;
        this.y = y;
        this.img = "bush";
    }

    move(height: number, speedX: number, speedY: number) {
        this.x -= speedX;

        if (height <= 250) {
            this.y = 450;
        } else {
            this.y += speedY;
        }
    }
}

export {Bushes}