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

    move(height: number) {
        this.x -= 3;
        if (height > 250) {
            this.y += 5;
        }
        else if(height <= 250 && this.y >= 450) {
            this.y -= 5;
        }

    }
}

export {Bushes}