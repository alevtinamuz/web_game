class Clouds {
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

    move (height: number) {
        this.x--;

        // if (height > 250) {
        //     this.y += 5;
        // }
        // else if(height <= 250 && this.y >= 450) {
        //     this.y--;
        // }
    }
}

export {Clouds}