import HWs from './html.js'

HWs[2].innerHTML += `<input type="number"><br><input type="number"><br><button style="background-color: #fa8181">Не пропускати парні</button><button>Send</button><h4></h4>`;

let isTrue = false;
const btn1 = HWs[2].children[5], // Пропускати парні числа
      h4 = HWs[2].children[7];  // запишемо відповідь

let i = 1;
btn1.addEventListener('click', () => {
    if (i%2 == 0) {
        btn1.style.backgroundColor = '#fa8181';
        btn1.innerHTML = 'Не пропускати парні';
    }
    else {
        btn1.style.backgroundColor = '#acfa81';
        btn1.innerHTML = 'Пропускати парні';
    };
    isTrue = !isTrue; i++;
});

function HW2 () {
    let N = HWs[2].children[1].value,  // first input
        M = HWs[2].children[3].value; // second input

    while (true) {
        if(N > M) { // Якщо першим було більше число
            h4.innerText = 'Перше число має бути меншим за друге!';
            break;
        }

        if((+N) && (+M) && +N > 0) {       // користувач ввів нормальні значення
            if((+N)%1==0 && (+M)%1==0){   // користувач ввів ціле число
                let sum = 0;             // відповідь
                for(N; N <= M; N++){    // цикл додавання
                    if(isTrue && N%2==0) continue;
                    sum += +N;  // перетворюємо N в число і додаємо до sum
                }
                h4.innerText = `${sum}`;
                break ;  // закінчення роботи програми
            } else {
                h4.innerText = 'Введіть цілі числа!!!';
                break;
            }
        } else {
            h4.innerText = 'Введіть нормальні числа!!!';
            break;
        }
    }
}
export default HW2;