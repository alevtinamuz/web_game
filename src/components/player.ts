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
    moveOnSkate: boolean;
    superRocket: boolean;
    width_img: number;
    height_img: number;
    scale: number;
    
    constructor() {
        this.x = 150;
        this.y = 250;
        this.img = "hamster";
        this.width_img = 60;
        this.height_img = 40;
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
        this.moveOnSkate = false;
        this.superRocket = false;
        this.scale = 100;
    }

    time() {
        this.count++;
    }

    move() {
        this.distance += this.speedX;
        this.height += this.speedY;
        if (this.scale < 100)
            this.scale += 0.1;

        if (!this.moveOnSkate && !this.superRocket) {
            if (this.v0 * Math.sin(this.angle) - this.g * this.count > -40)
                this.speedY = this.v0 * Math.sin(this.angle) - this.g * this.count;

            if (this.v0 > 20)
                this.v0 -= 0.05;

            if (this.height < 250 && this.height > 0) {
                this.y = 500 - this.height;
            } else if (this.height <= 0) {
                this.height = 0; 
                this.y = 500;
                this.v0 = 0;
                if (!this.skate)
                    this.speedX = 0;
            }
        } else if (this.moveOnSkate) {
            this.img = "hamsterOnSkate";
            this.width_img = 60;
            this.height_img = 70;
            this.height = 0; 
            this.y = 500;
            this.v0 = 0;
            this.speedX -= 0.1;
            if (this.speedX <= 0) {
                this.img = "hamster";
                this.width_img = 60;
                this.height_img = 40;
                this.moveOnSkate = false;
            }
        } else if (this.superRocket) {
            this.img = "hamsterInRocket";
            this.width_img = 100;
            this.height_img = 100;
            this.speedY = 0;
            this.speedX = 40;
            this.count++;
            if (this.count >= 500) {
                this.superRocket = false;
                if (this.ball == "red") {
                    this.img = "hamsterInRedBall";
                    this.width_img = 100;
                    this.height_img = 100;
                } else if (this.ball == "yellow") {
                    this.img = "hamsterInYellowBall";
                    this.width_img = 100;
                    this.height_img = 100;
                } else {
                    this.img = "hamster";
                    this.width_img = 60;
                    this.height_img = 40;
                }
                this.jump();
            }
        }
    }

    click() {
        if (this.scale > 10 && !this.moveOnSkate && !this.superRocket) {
            this.scale -= 10;
            if (this.v0 == 0)
                this.v0 = 30;
            else if (this.v0 < 40)
                this.v0++;
            else
                this.v0 = 40;

            this.angle = 35 * Math.PI / 180;
            this.speedX = this.v0 * Math.cos(this.angle);
            this.speedY = this.v0 * Math.sin(this.angle);
            this.count = 0;
        }
    }

    jump() {
        if (this.v0 == 0)
            this.v0 = 30;
        else if (this.v0 < 40)
            this.v0++;
        else
            this.v0 = 40;

        this.angle = 35 * Math.PI / 180;
        this.speedX = this.v0 * Math.cos(this.angle);
        this.speedY = this.v0 * Math.sin(this.angle);
        this.count = 0;
    }

    big_jump() {
        this.v0 = 35;
        this.angle = 45 * Math.PI / 180;
        this.speedX = this.v0 * Math.cos(this.angle);
        this.speedY = this.v0 * Math.sin(this.angle);
        this.count = 0;
    }

    blower() {
        if (this.v0 < 30) 
            this.v0 = 30;
        this.angle = 45 * Math.PI / 180;
        this.speedX = this.v0 * Math.cos(this.angle);
        this.speedY = this.v0 * Math.sin(this.angle);
        this.count = 0;
    }

    rocket() {
        if (this.v0 < 40)
            this.v0 += 2;

        this.angle = 15 * Math.PI / 180;
        this.speedX = this.v0 * Math.cos(this.angle);
        this.speedY = this.v0 * Math.sin(this.angle);
        this.count = 0;
    }
}

export {Player}