class Config {
    index = 0;
    increaseIndex = 0.3;  // 0.3 \ 0.4 условие на 360 и 357 \ 0.5 условине на 355
    fall = 270;
    boostFall = 1.5;
    increaseBoostFall = 0.07;
    arr = [150, 150];
    flap = 63;
    delayForPipes = 320;
    pipesLength = 375;
    topPipe = {
        x: 554,
        y: 0,
        w: 52,
        h: 400,
        y2: -220, // чтобы изображение меньше сжималось
        w2: 80,
    };
    bottomPipe = {
        x: 502,
        y: 0,
        w: 52,
        w2: 80,
    };
    brd = {
        x: 432,
        x2: 80,
        size: [51, 36, 40, 25],
    };
    bottom = {
        x: 277,
        y: 0,
        w: 222,
        h: 600,
        y2: 500,
    };
    bgImg = {
        x: 0,
        y: 0,
        w: 430,
        h: 768,
        h2: 500,
    };
    img = new Image();
    img2 = new Image();
    src() {
        this.img.src = 'https://raw.githubusercontent.com/CodeExplainedRepo/Original-Flappy-bird-JavaScript/refs/heads/master/img/sprite.png';
        this.img2.src = 'https://i.ibb.co/Q9yv5Jk/flappy-bird-set.png';
    };
}

export default Config;