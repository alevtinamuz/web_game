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
<<<<<<< HEAD
        this.x--;
=======
        this.x -= 3;
>>>>>>> ede2fb18529983fd9b80372a770490d389fc684a
    }
}

export {Bushes}