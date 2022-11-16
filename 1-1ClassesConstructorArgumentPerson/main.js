console.log("test");

class Ball {
    constructor(ballType = 'regular') {
        this.ballType = ballType;

        // this.type = ballType === undefined ? "regular" : ballType;
        // if(ballType == undefined) {
        //     this.ballType = 'regular';
        // }
    }    
}

let ball1 = new Ball();
let ball2 = new Ball('super');

console.log(ball1.ballType);
console.log(ball1);
console.log(ball2.ballType);