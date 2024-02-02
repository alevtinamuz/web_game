class Player {
    x: number;
    y: number;
    img: string;
    angle: number;
    v0: number;
    count: number;
    g: number;
    speedX: number;
    speedY: number;
    distance: number;
    height: number;
    dead: boolean;
    ball: string;
    skate: boolean;
    superRocket: boolean;
    
    constructor() {
        this.x = 150;
        this.y = 250;
        this.img = "cat";
        this.angle = 30 * Math.PI / 180;
        this.v0 = 30;
        this.count = 0;
        this.g = 0.5;
        this.speedX = this.v0 * Math.cos(this.angle);
        this.speedY = this.v0 * Math.sin(this.angle);
        this.distance = 0;
        this.height = 250;
        this.dead = false;
        this.ball = "no";
        this.skate = false;
        this.superRocket = false;
    }

    time() {
        this.count++;
    }

    move() {
        this.speedY = this.v0 * Math.sin(this.angle) - this.g * this.count;

        this.distance += this.speedX;
        this.height += this.speedY;

        if (this.height < 250 && this.height > 0) {
            this.y = 500 - this.height;
        } 
        else if (this.height <= 0) {
            this.height = 0;
            this.y = 500;
            this.count = 0;
            this.v0 = 0;
            this.angle = 0;
            this.speedX = this.v0 * Math.cos(this.angle);
            this.speedY = this.v0 * Math.sin(this.angle);
        }
        

        // if (this.angle >= 0 && this.speedX >= 0.18) {
        //     this.speedX -= 0.2;
        // } else if (this.angle < 0 && this.height != 0) {
        //     this.speedX += 0.2;
        // }
    }

    click() {
        this.v0 = 30;
        this.angle = 30 * Math.PI / 180;
        this.speedX = this.v0 * Math.cos(this.angle);
        this.speedY = this.v0 * Math.sin(this.angle);
        this.count = 0;
    }

    blower() {
        console.log("HelloWorld")
    }

    rocket() {
        console.log("HelloWorld")
    }


}

export {Player}