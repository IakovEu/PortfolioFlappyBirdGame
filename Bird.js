import Field from "./Field.js";

class Bird extends Field {
    draw() {
        this.config.src();
        this.boostFall += this.increaseBoostFall;
        this.fall < this.config.bgImg.h2 - this.config.brd.size[3] ? this.fall += this.boostFall : this.over = true;
        this.index += this.increaseIndex;
        this.canvas.drawImage(
            this.img2,
            this.config.brd.x,
            Math.floor((this.index % 9) / 3) * this.config.brd.size[1],
            this.config.brd.size[0],
            this.config.brd.size[1],
            this.config.brd.x2,
            this.fall,
            this.config.brd.size[2],
            this.config.brd.size[3],
        );
    };
    changeY() {
        let audio = new Audio();
        audio.src = './AudioForFlappyBirdGame/flap.mp3';
        document.querySelector('#canvas').addEventListener('click', () => {
            this.fall > this.config.flap ? this.fall -= this.config.flap : this.fall = 0;
            this.boostFall = this.config.boostFall;
            audio.play();
        });
        window.addEventListener('keydown', () => {
            this.fall > this.config.flap ? this.fall -= this.config.flap : this.fall = 0;
            this.boostFall = this.config.boostFall;
            audio.play();
        });
    };
}
export default Bird;

