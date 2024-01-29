class Abilities {
    type: string;
    x: number;
    y: number;
    img: string;
    constructor(type: string, x: number, y: number, img: string) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.img = img;
    }
    move() {
        console.log('ability');
    }
}