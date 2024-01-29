class Player {
    x: number;
    y: number;
    img: string;
    angle: number;
    speed: number;
    distance: number;
    height: number;
    dead: boolean;
    ball: string;
    skate: boolean;
    superRocket: boolean;
    constructor(x: number, 
                y: number, 
                img: string, 
                angle: number, 
                speed: number, 
                distance: number, 
                height: number, 
                dead: boolean, 
                ball: string,
                skate: boolean,
                superRocket: boolean) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.angle = angle;
        this.speed = speed;
        this.distance = distance;
        this.height = height;
        this.dead = dead;
        this.ball = ball;
        this.skate = skate;
        this.superRocket = superRocket;
    }

    move() {
        this.x++
    }

    blower() {
        console.log("HelloWorld")
    }

    rocket() {
        console.log("HelloWorld")
    }
}

export {Player}