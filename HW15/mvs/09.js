import HWs from '../mvs/html.js';

HWs[9].innerHTML += '<div id="block"></div>';

const block = document.querySelector('#block');
block.style.cssText = 'font-size: 0;'

const generateBlocks = () => {
    block.innerHTML = ''; // щоб при повторі нижче не створювалися ще 25 нивих квадратів
    for(let i=0; i<5; i++) {
        for(let i=0; i<5; i++)
            block.innerHTML += '<div class="square"></div>';
        block.innerHTML += '</br>'
    }
    const square = document.querySelectorAll('.square');
    square.forEach(item => {
        const bgColor = [Math.round(Math.random()*255), Math.round(Math.random()*255), Math.round(Math.random()*255),];
        item.style.cssText = `width: 50px; height: 50px; background-color: rgb(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]}); display: inline-block;`
    });
};

const generateBlocksInterval = () => {
    const interval = setInterval(generateBlocks, 2000);
};

function HW9 () {
    generateBlocks();
    generateBlocksInterval();
}

export default HW9;