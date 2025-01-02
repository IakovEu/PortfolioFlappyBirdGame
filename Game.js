import Field from "./Field.js";
import Bird from "./Bird.js";
import Pipes from "./Pipes.js";
import Config from "./Config.js";

const field = new Field();
const bird = new Bird();
const pipes = new Pipes();
const config = new Config();

function render() {
    pipes.over = false;
    bird.over = false;
    field.draw();
    bird.draw();
    pipes.draw();
    pipes.collision();
    const animation = requestAnimationFrame(render);
    pipes.over ? cancelAnimationFrame(animation) : pipes.over;
};

render();
bird.changeY();
pipes.changeY();

console.log(field);

console.log(bird);

console.log(pipes);









