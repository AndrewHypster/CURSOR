document.body.innerHTML += '<div id="block"></div>'
const block = document.querySelector('#block');

block.style.cssText = 'margin-top: 50px; font-size: 0px;'

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
    const interval = setInterval(generateBlocks, 4000);
};

generateBlocks();
generateBlocksInterval();
