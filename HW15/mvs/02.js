import HWs from './html.js'

const inp = `<input type="number" id="firstInput"><br><input type="number" name="secondInput"><br><button id="firstbtn">Send</button>`;
HWs[2].innerHTML += inp;

let N = HWs[2].children[1].value;
let M = HWs[2].children[3].value;
const btn = HWs[2].children[5];

btn.onClick(() => console.log('btn work'));
document.querySelector('#firstbtn').addEventListener(() => console.log('btn work'));

export default '123';
//     // const isTrue = confirm('Пропускати парні числа?');

//     if(N > M) { // Якщо першим було більше число
        //  div.innerHTML += 'Перше число має бути меншим за друге!';
//         continue;
//     }

//     if((+N) && (+M) && +N > 0) {       // користувач ввів нормальні значення
//         if((+N)%1==0 && (+M)%1==0){   // користувач ввів ціле число
//             let sum = 0;             // відповідь
//             for(N; N <= M; N++){    // цикл додавання
//                 if(isTrue && N%2==0){
//                     continue;
//                 }
//                 sum += +N;  // перетворюємо N в число і додаємо до sum
//             }
//             document.writeln(`<h2>${sum}</h2>`);
//             break;  // закінчення роботи програми
//         } else {
//             div.innerHTML += 'Введіть цілі числа!!!';
//             continue;   // вертає на 1 строку коду
//         }
//     } else {
//         div.innerHTML += 'Введіть нормальні числа!!!';
//         continue;   // вертає на 1 строку коду
//     }

// export {sendBtn, input};