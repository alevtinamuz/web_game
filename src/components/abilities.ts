class Abilities {
    type: string;
    x: number;
    y: number;
    img: string;
    constructor(type: string, 
                x: number, 
                y: number) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.img = type;
    }
    move(height: number, speedX: number, speedY: number) {
        this.x -= speedX;
        if (this.type == "trampoline") {
            if (height <= 250) {
                this.y = 550;
            } else {
                this.y += speedY;
            }
        }
        
        console.log('ability');
    }
}

export {Abilities}