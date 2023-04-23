// document.body.innerHTML += '<div id="block"></div>'
// const block = document.querySelector('#block');

// block.style.cssText = 'margin-top: 50px; font-size: 0px;'
let iSect = -1;

const generateBlocks = (typeBoard, block) => {
    block.innerHTML = ''; // щоб при повторі нижче не створювалися ще 25 нивих квадратів
    for(let i=0; i<5; i++) {
        for(let i=0; i<5; i++)
            block.innerHTML += '<div class="square"></div>';
        block.innerHTML += '</br>'
    }
    const square = document.querySelectorAll('.square');
    square.forEach((item, index) => typeBoard(item, index));
};

const generateBlocksInterval = (typeBoard, section) => {
    document.body.innerHTML = '';
    section.forEach((item, q) => {
        if(item === undefined)
            section.pop();
        else document.body.innerHTML += item;
    });
    console.log(document.body.innerHTML);
    let sectionHtml;
    section.forEach((item, w) => {
        sectionHtml += document.querySelector(`#sec${w}`);
        sectionHtml.innerHTML += '<div id="block"></div>'
    })
    const block = document.querySelectorAll('#block');
    block.forEach(item => {
        item.style.cssText = 'margin-top: 50px; font-size: 0px; width: 50px; height: 50px; ';
    })
    generateBlocks(typeBoard, block);
};

// типи блоків / дошок
const originBoard = (item) => {
    const bgColor = [Math.round(Math.random()*255), Math.round(Math.random()*255), Math.round(Math.random()*255),];
    item.style.cssText = `background-color: rgb(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]}); display: inline-block;`;
}

const schessBoard = (item, index) => {
    let bgColor;
    if (index%2 == 0)
        bgColor = [Math.round(Math.random()*90), Math.round(Math.random()*90), Math.round(Math.random()*90),];
    else 
        bgColor = [Math.round(Math.random()*(255-170)+170), Math.round(Math.random()*(255-170)+170), Math.round(Math.random()*(255-170)+170),];
    item.style.cssText = `width: 50px; height: 50px; background-color: rgb(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]}); display: inline-block;`;
}

let index = -1;
const section = [];
function start (...boards) {
    index++;
    iSect++;
    if (iSect == boards.length)
        iSect = 0;
    
    section.push(createSection());
    generateBlocksInterval(boards[index], section);
    if (index == --boards.length)
        index = -1;
}

setInterval(start, 1000, schessBoard, originBoard);

function createSection() {
    const sec = `<section id="sec${iSect}"></section>`;
    let itIs = false;
    section.forEach(item => {
        if(item == sec)
            itIs = true;
    });
    if (!itIs)
        return sec;
}