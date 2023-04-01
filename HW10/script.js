document.body.innerHTML += '<div id="allKeys"></div>';
const allKeys = document.querySelector('#allKeys');

alert('Створіть кнопки, нажимаючи на них на клавіатурі');

const instruments = ['clap', 'hihat', 'kick', 'openhat', 'boom', 'ride', 'snare', 'tom', 'tink',];
let indexInsrum = 0;
const write = (key) => {
    allKeys.innerHTML += `<div class="key" id="${key.keyCode}"><h1 class="${key.keyCode}">${key.key.toUpperCase()}</h1><p class="${key.keyCode}">${instruments[indexInsrum]}</p></div>`;
    indexInsrum++;
}

const keysCodes = []; // запишем 9 кнопок

const addLight = key => {
    keysCodes.forEach(code => { //видаляє підсвітку
        const key = document.getElementById(code);
        key.classList.remove('workKey');
    });
    if(key.keyCode != undefined){
        const workKey = document.getElementById(key.keyCode);
        workKey.classList.add('workKey'); // додає підсвітку
    }
    else {
        document.getElementById(`${key}`).classList.add('workKey'); // додає підсвітку
    }
}

const playSound = key => {
    let index = 0;
    keysCodes.forEach((code, i) => {
        if (typeof key == "number") {
            if(code == key)
                index = i;
        }
        else if(code == key.keyCode)
            index = i;
    });
    var audio = new Audio();
    audio.preload = 'auto';
    audio.src = `${instruments[index]}.wav`;
    audio.play();
}

let q = 0;
// При нажиманні на любу кнопку виконується функція
document.onkeydown = key => {
    const isAlready = keysCodes.some(itemKey => itemKey == key.keyCode); // чи створена ця кнопка
    if (q < 9 && !isAlready) { // добавляє лише 9 кнопок
        write(key);
        keysCodes.push(key.keyCode);
        q++;
    }
    else if(q < 9 && isAlready) {
        alert('Ця кнопка вже є, нажміть на іншу');
    }
    else if(q == 9 && isAlready) { // записали 9 кнопок, видаємо звуки
        addLight(key);
        playSound(key);
    }
    console.log(`${key.key.toUpperCase()} = ${key.keyCode}`);
}

allKeys.addEventListener('click', (e) => {
    if(q == 9) {
        addLight(+e.target.className);
        playSound(+e.target.className);
    }
    else alert(`Створіть ще ${9 - q} кнпок`);
});
