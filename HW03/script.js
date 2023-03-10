const numFunc = prompt('Виберіть одну з функцій від 1 до 3', '');

let num;
switch (+numFunc) {
    case 1:
        num = prompt('Введіть ціле число', '');
        getMaxDigit(num);
        break;

    case 2:
        num = prompt('Введіть ціле число', '');
        const pover = prompt('Введіть ступінь числа', '');
        raiseToPover(num, pover);
        break;

    case 3:
        const name = prompt("Введіть ім'я", '');
        creatName(name);
        break;

    case 4:
        const salary = prompt('Введіть свою зарплату', '');
        deductTax (salary);
        break;

    default:
        break;
}

function getMaxDigit(number) {
    let max = 0;
    while (number > 0) {
        figure = number - Math.floor(number/10)*10;    // бере останю цифру: 123 -> 123 мінус 120 -> 3
        if (figure > max) max = figure;               // якщо нова цифра більша за макс
        number = Math.floor(number/10);              // видаляється останя перевірена цифра: 123 -> 12 -> 1 -> 0
    }
    document.writeln(max);
}

function raiseToPover(num, pover) {
    let vidpov = 1;
    for(let i=1; i<=pover; i++){
        vidpov *= num;
    }
    document.writeln(vidpov);
}

function creatName(name) {
    name = name.toLowerCase();
    let loverChars = '';
    for(let i=1; i < name.length; i++) {
        loverChars += name[i];
    }
    name = name[0].toUpperCase() + loverChars;
    document.writeln(name);
}

function deductTax (salary) {
    
}
