import Bird from "./Bird.js";

class Pipes extends Bird {
    #score = 0;
    #increaseScore() {
        return this.#score += 1;
    };

    #deleteScore() {
        return this.#score = 0;
    };

    draw() {
        this.#score >= 5 ? this.increaseIndex = 0.4 : this.increaseIndex;
        this.#score >= 30 ? this.increaseIndex = 0.5 : this.increaseIndex;
        this.config.src();
        this.index += this.increaseIndex;
        this.boostFall += this.increaseBoostFall;
        let backgroudX = -((this.index * 10) % this.width);
        let fix = this.config.topPipe.y2 * (-1);

        if (this.#score >= 5) {
            if (Math.floor(backgroudX) === -this.width + 3 || Math.floor(backgroudX) === -this.width + 2 || Math.floor(backgroudX) === -this.width) {
                let y = Math.ceil(Math.random() * (300 - 75) + 75);
                this.arr.shift();
                this.arr.push(y);
                fix = 0;          // чтобы меньше было заметно дергание верхней трубы при смене у 
                this.#increaseScore();
            };
        } else if (this.#score >= 30) {
            if (Math.floor(backgroudX) === -this.width + 5) {
                let y = Math.ceil(Math.random() * (300 - 75) + 75);
                this.arr.shift();
                this.arr.push(y);
                fix = 0;          // чтобы меньше было заметно дергание верхней трубы при смене у 
                this.#increaseScore();
            };
        } else {
            if (Math.floor(backgroudX) === -this.width + 2 || Math.floor(backgroudX) === -this.width + 1 || Math.floor(backgroudX) === -this.width) {
                let y = Math.ceil(Math.random() * (300 - 75) + 75);
                this.arr.shift();
                this.arr.push(y);
                fix = 0;          // чтобы меньше было заметно дергание верхней трубы при смене у 
                this.#increaseScore();
            };
        };

        document.querySelector('.main__score-current').innerHTML = `<div>${this.#score}</div>`;
        if (this.#score > +document.querySelector('.main__score-best').textContent) {
            localStorage.clear();
            localStorage.setItem('key', this.#score);
        };
        document.querySelector('.main__score-best').innerHTML = `<div>${localStorage.getItem('key')}</div>`;

        this.canvas.drawImage(
            this.img,
            this.config.topPipe.x,
            this.config.topPipe.y,
            this.config.topPipe.w,
            this.config.topPipe.h,
            backgroudX + this.width + this.config.delayForPipes, // так меньше заметно, что дергает изменение трубы и убирает отрисовку на старте
            this.config.topPipe.y2,
            this.config.topPipe.w2,
            this.arr[1] + fix,
        );
        this.canvas.drawImage(
            this.img,
            this.config.topPipe.x,
            this.config.topPipe.y,
            this.config.topPipe.w,
            this.config.topPipe.h,
            backgroudX + this.config.delayForPipes,
            this.config.topPipe.y2,
            this.config.topPipe.w2,
            this.arr[1] + fix,
        );
        this.canvas.drawImage(
            this.img,
            this.config.bottomPipe.x,
            this.config.bottomPipe.y,
            this.config.bottomPipe.w,
            this.config.pipesLength - this.arr[1],
            backgroudX + this.width + this.config.delayForPipes,
            this.config.bgImg.h2 - (this.config.pipesLength - this.arr[1]),
            this.config.bottomPipe.w2,
            this.config.pipesLength - this.arr[1],
        );
        this.canvas.drawImage(
            this.img,
            this.config.bottomPipe.x,
            this.config.bottomPipe.y,
            this.config.bottomPipe.w,
            this.config.pipesLength - this.arr[1],
            backgroudX + this.config.delayForPipes,
            this.config.bgImg.h2 - (this.config.pipesLength - this.arr[1]),
            this.config.bottomPipe.w2,
            this.config.pipesLength - this.arr[1],
        );
    };
    changeY() {
        document.querySelector('#canvas').addEventListener('click', () => {
            this.fall > this.config.flap ? this.fall -= this.config.flap : this.fall = 0;
            this.boostFall = this.config.boostFall;
        });
        window.addEventListener('keydown', () => {
            this.fall > this.config.flap ? this.fall -= this.config.flap : this.fall = 0;
            this.boostFall = this.config.boostFall;
        });
    };
    collision() {
        const backgroudX = -((this.index * 10) % this.width);

        if (this.fall < this.config.bgImg.h2 - this.config.brd.size[3]) {
            this.fall += this.boostFall
        } else {
            this.over = true;
            this.#deleteScore();
        };

        if (this.config.brd.x2 + this.config.brd.size[2] + this.config.topPipe.w2 < Math.floor(backgroudX * (-1)) &&
            this.config.brd.x2 + 230 > Math.floor(backgroudX * (-1)) &&     // на 230 птица только прошла трубу по х
            Math.floor(this.fall) < this.arr[1]) {
            this.over = true
            this.#deleteScore();
        } else if (this.config.brd.x2 + this.config.brd.size[2] + this.config.bottomPipe.w2 < Math.floor(backgroudX * (-1)) &&
            this.config.brd.x2 + 230 > Math.floor(backgroudX * (-1)) &&
            Math.ceil(this.fall - (this.config.bgImg.h2 - this.config.brd.size[3])) * (-1) < this.config.pipesLength - this.arr[1]) {
            this.over = true
            this.#deleteScore();
        };
    };
}

export default Pipes;
