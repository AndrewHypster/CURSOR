// Товари
const bun = 15.678,
      book = 123.965,
      butter = 90.2345;

console.log(`* Товари *\n\nБулка = ${bun}\nКнижка = ${book}\nМасло = ${butter}`);

// Max
console.log('Найдорожче: ' + Math.max(bun, book, butter));

// Min
console.log('Найдешевше: ' + Math.min(bun, book, butter));

// Sum
const sum = bun + book + butter;
console.log('Сума: ' + (sum));

// Floor та сума
const floorSum = (Math.floor(bun) + Math.floor(book) + Math.floor(butter));
console.log('Floor та сума: ' + floorSum);

// Округлення до сотень
console.log('Округлення до сотень: ' + (Math.round(((Math.round(bun) + Math.round(book) + Math.round(butter)))/100))*100);

// Буля
const isEven = ((floorSum) % 2) == 0 ? 'число парне':'число не парне';
console.log(isEven);

// Решта
console.log(`Решта з 500: ${500 - (sum)}`);

// Середнє
console.log('Середнє значення: '+((sum)/3).toFixed(2));

console.log('\n* Завдання з зірочкою *');

// Знижка
const discount = Math.round(Math.random()*50); // знижка від 0 до 50
console.log(`\nЗнижка: ${discount}%`);
const discountedPrice = ((sum)*(discount/100)).toFixed(2);
console.log('Ціна зі знижкою: ' + discountedPrice);
console.log(`Прибуток: ${(((sum)/2)-(discountedPrice)).toFixed(2)}`);

// Шаблонний рядок
console.log('\n* Шаблонний рядок *');
console.log(`Максимальна ціна: ${Math.max(bun, book, butter)}\nМінімальна ціна: ${Math.min(bun, book, butter)}\nВартість всіх товарів: ${sum}\nВартість з округленням: ${(Math.floor(bun) + Math.floor(book) + Math.floor(butter))}\nОкруглення до сотень: ${(Math.round(((Math.round(bun) + Math.round(book) + Math.round(butter)))/100))*100}\nЧи вартість товарів є парним числом: ${isEven}\nЗдача з 500: ${500 - (sum)}\nСереднє значення: ${(sum).toFixed(2)}\nЗнижка: ${discount}%\nЦіна зі знижкою: ${discountedPrice}\nПрибуток: ${(((sum)/2)-(discountedPrice)).toFixed(2)}`);
