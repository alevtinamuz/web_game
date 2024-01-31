class Player {
    x: number;
    y: number;
    img: string;
    angle: number;
    speedX: number; //прибавление к оси X за шаг
    speedY: number; //прибавление к оси Y за шаг
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
        this.speedX = 30;
        this.speedY = this.speedX * Math.tan(this.angle);
        this.distance = 0;
        this.height = 250;
        this.dead = false;
        this.ball = "no";
        this.skate = false;
        this.superRocket = false;
    }

    fall () {
        console.log('jazz')
    }

    move() {
        if (this.angle > - Math.PI / 2)
            this.angle -= Math.PI / 180

        if (this.speedX <= 0.02 && this.angle > 0) {
            this.angle = -this.angle;
            this.speedX = 0;
        } 

        if (this.angle >= 0 && this.speedX >= 0.18) {
            this.speedX -= 0.2;
        } else if (this.angle < 0 && this.height != 0) {
            this.speedX += 0.2;
        }
            
        this.speedY = this.speedX * Math.tan(this.angle);

        this.distance += this.speedX;
        this.height += this.speedY;

        if (this.height < 250 && this.height > 0) {
            this.y -= this.speedY;
        } else if (this.height <= 0) {
            this.height = 0;
            this.y = 500;
            this.speedX = 0;
            this.angle = 0;
        } else
            this.y = 250
    }

    click() {
        this.angle = 30 * Math.PI / 180;
        this.speedX = 10;
        this.speedY = this.speedX * Math.tan(this.angle);
    }

    blower() {
        console.log("HelloWorld")
    }

    rocket() {
        console.log("HelloWorld")
    }


}

export {Player}