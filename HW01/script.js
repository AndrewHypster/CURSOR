const div = document.querySelector('.text');
let inner ="";

function consoleLog (text) {
    inner += text;
    div.innerHTML = inner;
}

// Товари
// let egg = 15.678,
//     book = 123.965,
//     butter = 90.2345;

let goods = ['булочка', 'книжка', 'масло'],     // товари
    price = [15.678, 123.965, 90.2345];   // ціна

consoleLog(`<b>Товари</b> <br/> ${goods[0]} = ${price[0]}; ${goods[1]} = ${price[1]}; ${goods[2]} = ${price[2]}. <br/>`);

// Max
const max = Math.max(price[0], price[1], price[2]);

if (max == price[0]) 
    consoleLog(`<br/> Max: ${goods[0]} = ${price[0]}`);
else if (max == price[1]) 
    consoleLog(`<br/> Max: ${goods[1]} = ${price[1]}`);
else if (max == price[2]) 
    consoleLog(`<br/> Max: ${goods[2]} = ${price[2]}`);
else
    consoleLog(`<br/> Max: ERROR`);

// Min
const min = Math.min(price[0], price[1], price[2]);

if (min == price[0]) 
consoleLog(`<br/> Min: ${goods[0]} = ${price[0]}`);
else if (min == price[1]) 
    consoleLog(`<br/> Min: ${goods[1]} = ${price[1]}`);
else if (min == price[2]) 
    consoleLog(`<br/> Min: ${goods[2]} = ${price[2]}`);
else
    consoleLog(`<br/> Min: ERROR`);

// Sum
consoleLog('<br/> Сума: ' + (price[0] + price[1] + price[2]));

// Floor and sum
let floor = [Math.floor(price[0]), Math.floor(price[1]), Math.floor(price[2])]  // масив з заокругленою ціною
consoleLog('<br/> Floor та сума: ' + (floor[0] + floor[1] + floor[2])); // додаємо та виводимо

// Округляння до сотень та сума
let hundreds = [];    // округлені ціни то сотень
for (let i = 0; i <= floor.length; i++) {
    hundreds[i] =  floor[i] / 100;
    hundreds[i] = Math.ceil(hundreds[i]);   // округлення до більшого
    hundreds[i] = hundreds[i] * 100;
}
consoleLog(`<br/> Округляння до сотень та сума: ${hundreds[0] + hundreds[1] + hundreds[2]}`);

// Буля
const isEven = ((floor[0] + floor[1] + floor[2]) % 2) == 0 ? 'число парне':'число не парне';
consoleLog(`<br/> ${isEven}`);

// Решта
if ((price[0] + price[1] + price[2]) <= 500)
    consoleLog(`<br/> Решта: ${500 - (price[0] + price[1] + price[2])}`); // проста сума - floor сума

// Середнє
consoleLog('<br/> Середнє значення: '+(price[0] + price[1] + price[2]).toFixed(2));

consoleLog('<br/><br/><b>Завдання з зірочкою</b><br/><br/>');

// Знижка
const discount = Math.round(Math.random()*50); // знижка від 0 до 50
consoleLog(`Знижка: ${discount}% <br/>`);
const discountedPrice = ((price[0] + price[1] + price[2])*(discount/100)).toFixed(2);
consoleLog('Ціна зі знижкою: '+ discountedPrice +'<br/>');
consoleLog(`Прибуток: ${((price[0] + price[1] + price[2])/2)-(discountedPrice)}`);

// Шаблонний рядок
consoleLog('<br/><br/><b>Шаблонний рядок</b><br/><br/>');

consoleLog(`Максимальна ціна: ${max} Мінімальна ціна: ${min} Вартість всіх товарів: ${(price[0] + price[1] + price[2])} Вартість з округленням: ${(floor[0] + floor[1] + floor[2])} Округлення до сотень: ${hundreds[0] + hundreds[1] + hundreds[2]} Чи вартість товарів є парним числом: ${isEven} Здача з 500: ${500 - (price[0] + price[1] + price[2])} Середнє значення: ${(price[0] + price[1] + price[2]).toFixed(2)} Знижка: ${discount}% Ціна зі знижкою: ${discountedPrice} Прибуток: ${((price[0] + price[1] + price[2])/2)-(discountedPrice)}`);