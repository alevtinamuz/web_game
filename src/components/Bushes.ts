class Bushes {
    x: number;
    y: number;
    img: string;
    constructor(x: number,
                y: number, 
                img: string) {
        this.x = x;
        this.y = y;
        this.img = img;
    }

    move() {
        this.x -= 3;
    }
}

export {Bushes}