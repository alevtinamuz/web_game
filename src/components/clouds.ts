class Clouds {
    x: number; 
    y: number;
    img: string;
    constructor(x: number, 
                y: number) {
        this.x = x;
        this.y = y;
        this.img = "cloud";
    }

    move(height: number, speedX: number, speedY: number) {
        this.x -= speedX;

        if (height > 250) {
            this.y += speedY;
        }
    }
}

export {Clouds}