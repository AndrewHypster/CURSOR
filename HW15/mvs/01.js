// Товари
let bun = 15.678,
    book = 123.965,
    butter = 90.2345;

// Info
const info = (a, b, q) => `* Товари *<br><br>Булка = ${a}<br>Книжка = ${b}<br>Масло = ${q}`;

// Max
const max = (a, b, q) => 'Найдорожче: ' + Math.max(a, b, q);
// export max;

// Min
const min = (a, b, q) => 'Найдешевше: ' + Math.min(a, b, q);
// export min;

// Sum
const sum = (a, b, q) => a + b + q;
// export sum;

// Floor та сума
const floorSum = (a, b, q) => `Floor та сума:  ${Math.floor(a) + Math.floor(b) + Math.floor(q)}`;
// export floorSum;

// Округлення до сотень
const roundHundredths = (a, b, q) => `Округлення до сотень: ${(Math.round(((Math.round(a) + Math.round(b) + Math.round(q)))/100))*100}`;
// export roundHundredths;

// Буля
const isEven = (a, b, q) => ((floorSum(a,b,q)) % 2) == 0 ? 'число парне':'число не парне';
// export isEven;

// Решта
const rest = (a, b, q) => `Решта з 500: ${500 - (sum(a, b, q))}`;

// Середнє
const average = (a, b, q) => 'Середнє значення: '+((sum(a, b, q))/3).toFixed(2);

// console.log('<br>* Завдання з зірочкою *');

// Знижка
const discount = () => Math.round(Math.random()*50); // знижка від 0 до 50

const discountedPrice = (a, b, q) => ((sum(a, b, q))*(discount()/100)).toFixed(2);

const profit = (a, b, q) => `Прибуток: ${(((sum(a, b, q))/2)-(discountedPrice(a, b, q))).toFixed(2)}`;

// Шаблонний рядок
// console.log('<br>* Шаблонний рядок *');
const finalInformation = (a = 15.678, b = 123.965, q = 90.2345) => `${max (a, b, q)}<br>${min (a, b, q)}<br>Сума: ${sum (a, b, q)}<br>${floorSum (a, b, q)}<br>${roundHundredths (a, b, q)}<br>${isEven (a, b, q)}<br>${rest (a, b, q)}<br>${average (a, b, q)}<br>Знижка: ${discount()}%<br>Ціна зі знижкою: ${discountedPrice (a, b, q)}<br>${profit (a, b, q)}`;
export default finalInformation;