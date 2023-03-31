document.body.innerHTML += '<div id="allKeys"></div>';
allKeys = document.querySelector('#allKeys');

alert('Створіть кнопки, нажимаючи на них на клавіатурі');

const instruments = ['clap', 'hihat', 'kick', 'openhat', 'boom', 'ride', 'snare', 'tom', 'tink',];
let indexInsrum = 0;
const write = (key) => {
    allKeys.innerHTML += `<div class="key" id="${key.keyCode}"><h1>${key.key.toUpperCase()}</h1><p>${instruments[indexInsrum]}</p></div>`;
    indexInsrum++;
}

const keysCodes = []; // запишем 9 кнопок

const addLight = key => {
    keysCodes.forEach(code => { //видаляє підсвітку
        const key = document.getElementById(code);
        key.classList.remove('workKey');
    });
    const workKey = document.getElementById(key.keyCode);
    workKey.classList.add('workKey'); // додає підсвітку
}

const playSound = key => {
    let index = 0;
    keysCodes.forEach((code, i) => {
        if(code == key.keyCode)
            index = i;
    });
    var audio = new Audio();
    audio.preload = 'auto';
    audio.src = `/sounds/${instruments[index]}.wav`;
    audio.play();
}

let i=0;

// При нажиманні на любу кнопку виконується функція
document.onkeydown = key => {
    const isAlready = keysCodes.some(itemKey => itemKey == key.keyCode); // чи створена ця кнопка
    if (i < 9 && !isAlready) { // добавляє лише 9 кнопок
        write(key);
        keysCodes.push(key.keyCode);
        i++;
    }
    else if(i < 9 && isAlready) {
        alert('Ця кнопка вже є, нажміть на іншу');
    }
    else if(i == 9 && isAlready) { // записали 9 кнопок, видаємо звуки
        addLight(key);
        playSound(key);
    }
    console.log(`${key.key.toUpperCase()} = ${key.keyCode}`);
}
