const query = e => document.querySelector(e);

/*** Кнопнки та стилі ***/
document.body.innerHTML += `<b> <p></p> </b> <div id="buttons"> <h1 id="up">Up</h1> <h1 id="down">Down</h1> </div>`;
const pHTML = query('p');
const upHTML = query('#up');
const downHTML = query('#down');
const buttonsHTML = query('#buttons');

document.body.style.cssText = 'text-align: center; font-family: sans-serif; user-select: none;'
buttonsHTML.style.cssText = 'display: flex; justify-content: space-evenly; color: aliceblue;';
upHTML.style.cssText = 'padding: 5px; background-color: #5e721d; border-radius: 5px; border: solid black 3px; cursor: pointer;';
downHTML.style.cssText = 'padding: 5px; background-color: #283482; border-radius: 5px; border: solid black 3px; cursor: pointer;';

/*** Скрипт ***/
function* newFontGenerator(fontSize) {
    let itemFS = fontSize;
    while(true) {
        pHTML.innerText = itemFS + 'px';
        pHTML.style.fontSize = itemFS + 'px';
        const value = yield;
        switch (value) {
            case 'up':
                itemFS += 2;
                break;
            case 'down':
                itemFS -= 2;
                break;
        }
    }
}
const fontGenerator = newFontGenerator(14);

buttonsHTML.addEventListener('mousedown', e => fontGenerator.next(e.srcElement.id).value);
// e.srcElement знаходить в класі елемент на який нажали