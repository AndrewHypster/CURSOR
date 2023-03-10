menu();
function menu () {
    const numFunc = prompt('Виберіть одну з функцій від 1 до 6\nФункції йдуть по порядку як і в завданні', '');

    let num = '';
    switch (+numFunc) {
        case 1:
            num = prompt('Найбільша цифра з даного числа\nВведіть ціле число', '');
            if (checkingNumber(num))
                getMaxDigit(num);
            break;

        case 2:
            num = prompt('Піднесення до степення\nВведіть ціле число', '');
            const pover = prompt('Піднесення до степення\nВведіть ступінь числа', '');
            if (checkingNumber(num)) { // дві провірки на числа
                if (checkingNumber(pover))
                    raiseToPover(num, pover);
            }
            break;

        case 3:
            const name = prompt("Робить першу букву великов\nВведіть ім'я", '');
            creatName(name);
            break;

        case 4:
            const salary = prompt('Віднімає % від зарплати\nВведіть свою зарплату', '');
            const percent = prompt('Віднімає % від зарплати\nВідсоток податку: ', '');
            if(percent == '') {
                if (checkingNumber(salary)) // провірка на число
                    deductTax (salary);
            }
            else {
                if (checkingNumber(salary)) {
                    if (+percent)
                        deductTax (salary, percent);
                    alert('Error: Ви ввели неправильний %');
                    menu();
                }
            }
            break;

        case 5:
            num = prompt('Рандом в межах\nВведіть перше число', '');
            const num2 = prompt('Рандом в межах\nВведіть друге число', '');
            if (checkingNumber(num)) {
                if (checkingNumber(num2))
                    getRandomNumber(num, num2);
            }
            break;

        case 6:
            const string = prompt('Рахує букви в слові\nВведіть слово', '');
            const char = prompt('Рахує букви в слові\nВведіть букву', '');
            countLetter(string, char);
            break;

        default:
            menu();
    }
}

function getMaxDigit(number) {
    let max = 0;
    while (number > 0) {
        figure = number - Math.floor(number/10)*10;    // бере останю цифру: 123 -> 123 мінус 120 -> 3
        if (figure > max) max = figure;               // якщо нова цифра більша за макс
        number = Math.floor(number/10);              // видаляється останя перевірена цифра: 123 -> 12 -> 1 -> 0
    }
    alert('Найбільша цифра: ' + max);
    menu();
}

function raiseToPover(num, pover) {
    let vidpov = 1;
    for(let i=1; i<=pover; i++){
        vidpov *= num;
    }
    alert(vidpov);
    menu();
}

function creatName(name) {
    name = name.toLowerCase();
    let loverChars = '';
    for(let i=1; i < name.length; i++) {
        loverChars += name[i];
    }
    name = name[0].toUpperCase() + loverChars;
    alert(name);
    menu();
}

function deductTax (salary, percent = 19.5) {
    alert(salary - salary*(percent/100));
    menu();
}

function getRandomNumber(min, max) {
    alert(Math.raund(Math.random() * (max - min) + (+min)));
    menu();
}

function countLetter(string, char) {
    let stringLower = string.toLowerCase();
    let charLower = char.toLowerCase();
    let numberMatches = 0;
    for (let i = 0; i < string.length; i++) {
        let indexChar = stringLower.charAt(i);
        if (indexChar == charLower)
            numberMatches++;
    }
    alert(`В слові '${string}' є ${numberMatches} букв ${char}.`);
    menu();
}

// Функція для перевірки чи це є числом чи якимось NaN чи undefine
function checkingNumber(num) {
    if(+num && num > 0){    // чи значення є чслом
        const isFloor = (+num - Math.floor(+num)) > 0 ? false : true;
        if (isFloor) return true;  // чи число є цілим
        alert('Error: Ви ввели дробове число замість цілого.')
        menu();
    }
    else {
        alert('Error: ви ввели букву або відємне число');
        menu();
    }
}
