import Field from "./Field.js";
import Bird from "./Bird.js";
import Pipes from "./Pipes.js";
import Config from "./Config.js";

const field = new Field();
const bird = new Bird();
const pipes = new Pipes();
const config = new Config();
const audio = new Audio();
audio.src = './AudioForFlappyBirdGame/start-restart.mp3';

function render() {
    pipes.over = false;
    bird.over = false;
    field.draw();
    bird.draw();
    pipes.draw();
    pipes.collision();
    const animation = requestAnimationFrame(render);
    if (pipes.over) {
        cancelAnimationFrame(animation)
        document.querySelector('.main__btn-r').classList.add('active')
    }
};

document.querySelector('.main__score-best').innerHTML = `<div>${localStorage.getItem('key')}</div>`;

document.querySelector('.main__btn-s').addEventListener('click', () => {
    audio.play();
    if (document.querySelector('.main__score-best').textContent == 'null') {
        localStorage.setItem('key', 0);
        document.querySelector('.main__score-best').innerHTML = `<div>${localStorage.getItem('key')}</div>`;
    }
    render();
    bird.changeY();
    pipes.changeY();
    document.querySelector('.main__btn-s').classList.remove('active');
});

document.querySelector('.main__btn-rr').addEventListener('click', () => {
    audio.play();
    field.index = config.index;
    bird.index = config.index;
    bird.fall = config.fall;
    bird.flap = config.flap;
    bird.boostFall = config.boostFall;
    bird.increaseIndex = config.increaseIndex;
    pipes.index = config.index;
    pipes.fall = config.fall;
    pipes.boostFall = config.boostFall;
    pipes.increaseIndex = config.increaseIndex;
    render();
    document.querySelector('.main__btn-r').classList.remove('active');
});












