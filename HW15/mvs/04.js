import HWs from './html.js'

HWs[4].innerHTML += '<p>Напишіть що небуть в кожен інпут</p><input type="text"><br></input><input type="text"><br></input><input type="text"></input><br><button>Send</button><p></p>';

const HW4 = (index = 2) => {
    const value1 = HWs[4].children[2].value,
          value2 = HWs[4].children[4].value,
          value3 = HWs[4].children[6].value,
          output = HWs[4].children[9];
    let array = [value1, value2, value3,];
    /* якщо index = 1, перетворюємо двовимірний масив в одновимірний.
    Наприклад: [['Ігор', 'Оля'], ['Володя', 'Іра']] -> ['Ігор Оля', 'Володя Іра']*/
    /* якщо index = 2, перетворюємо одновимірний в строку.
    Наприклад: ['Ігор Оля', 'Володя Іра'] -> 'Ігор Оля Володя Іра'*/

    const newArray = [];
    if(index == 1){
        for(let i=0; i<array.length; i++) {
            array[i].push('<br/>');   // в масив після кожного елементу додаємо <br/>, для читабельності
            newArray[i] = array[i].join(' ');   // перетворюємо в string
        }
        HW4(newArray, 2);
    }
    else {
        output.innerHTML = `[${array}]  --> `;
        array = array.join(' ');    // перетворюємо в string
        output.innerHTML += array;
    }
}
export default HW4;
