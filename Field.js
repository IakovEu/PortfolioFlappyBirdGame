import Config from "./Config.js";

class Field {
    config = new Config();
    canvas = document.getElementById('canvas').getContext('2d');
    img = this.config.img;
    img2 = this.config.img2;
    index = this.config.index;
    fall = this.config.fall;
    boostFall = this.config.boostFall;
    arr = this.config.arr;
    over = false;
    width = this.canvas.canvas.width;    
    height = this.canvas.canvas.height;  // просто для удобства, сократить запись в этом и следующих модулях
    draw() {
        this.config.src();
        this.index += this.config.increaseIndex;
        const backgroudX = -((this.index * 11) % this.width); 
        this.canvas.drawImage(
            this.img,
            this.config.bottom.x,
            this.config.bottom.y,
            this.config.bottom.w,
            this.config.bottom.h,
            backgroudX + this.width,
            this.config.bottom.y2,
            this.width,
            this.height,
        );
        this.canvas.drawImage(
            this.img,
            this.config.bottom.x,
            this.config.bottom.y,
            this.config.bottom.w,
            this.config.bottom.h,
            backgroudX,
            this.config.bottom.y2,
            this.width,
            this.height,
        );
        this.canvas.drawImage(
            this.img2,
            this.config.bgImg.x,
            this.config.bgImg.y,
            this.config.bgImg.w,
            this.config.bgImg.h,
            backgroudX + this.width,
            this.config.bgImg.y,
            this.width,
            this.config.bgImg.h2,
        );
        this.canvas.drawImage(
            this.img2,
            this.config.bgImg.x,
            this.config.bgImg.y,
            this.config.bgImg.w,
            this.config.bgImg.h,
            backgroudX,
            this.config.bgImg.y,
            this.width,
            this.config.bgImg.h2,
        );
    };
}

export default Field;   