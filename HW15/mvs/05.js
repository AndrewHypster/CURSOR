const getRandomArray = (length, min, max) => {
    const array = [];
    for(let i=0; i < length; i++){
        let random = Math.round(Math.random()*(max-min)+min);
        array[i] = random;
    }
    return(array.join(' '));
}

// Створює двовимірний масив, в який групує числа і потім дивиться який масив з числами найдовший
const getModa = (...numbers) => {
    numbers.push(Infinity)
    numbers.sort();
    // console.log(numbers);
    const groupNumb = [];
    const numbLenght = numbers.length;
    for (let i=0; i < numbLenght; i++) { // не forEach, бо масив numbers тут зменшується і на половині його довжини перестане працювати
        let index;
        numbers.every((item, i, array) => {
            if (item%1 ==0) {
                index = i;
                return array[0] == item;
            }
        });
        groupNumb.push(numbers.slice(0, index));
        numbers.splice(0, index);
    }
    let maxLength = 0;
    let moda;
    groupNumb.forEach((item) => {
        if (item.length > maxLength) {
            maxLength = item.length;
            moda = item;
        } 
    });
    return moda[0]; 
}

const getAverage = (...numbers) => {
    const newNumbers = delFractionalNumb(numbers);
    const sum = newNumbers.reduce((preValue, item) => preValue + item);
    return sum / newNumbers.length;
}

const getMedian = (...numbers) => {
    const newNumbers = delFractionalNumb(numbers);
    newNumbers.sort((a, b) => a-b );
    if (newNumbers.length%2 != 0)
        return newNumbers[Math.floor(newNumbers.length/2)];
    const centerIndex = newNumbers.length/2;
    return (newNumbers[Math.round(centerIndex)-1] + newNumbers[Math.ceil(centerIndex)])/2
}

const filterEvenNumbers = (...numbers) => {
    const newNumbers = [];
    numbers.forEach(item => {
        if (item%2 == 0) return
        newNumbers.push(item);
    });
    return newNumbers.join(' ');
}

const countPositiveNumbers = (...numbers) => {
    const newNumbers = [];
    numbers.forEach(item => {
        if (item <= 0) return
        newNumbers.push(item);
    });
    return newNumbers.length;
}

const divideByThree = (word) => {
    word = word.toLowerCase();
    word = word.split('');
    const wordArray = [];
    word.forEach(item => {
        if (item != ' ') wordArray.push(item);
    })
    const skladu = [];

    while(wordArray.length > 0) {
        let threeChars = wordArray.slice(0, 3).join('');
        wordArray.splice(0, 3);
        wordArray.join('')
        skladu.push(threeChars);
    }
    return skladu.join(' ');
}


/*const generateCombinations = (word) => {    воно працює лише до трьох букв
    if (word.length > 10) return 'Слово має мати до 10 букв';
    if (word.length < 2) return word;
    word = word.split('');
    let factorial = 1;  // кількість перестановок
    word.forEach((item, i) => {
        factorial *= ++i;
    });
    console.log(factorial);
    const combinations = [];
    const length = word.length;
    const length2 = word.length-1;
    for(let i=0; i < length; i++) {
        for(let j=0; j < length2; j++) {
            let secIndex = j+1;
            if(word[secIndex] == undefined) secIndex = 0;
            combinations.push(word.join(''));
            [word[j], word[secIndex]] = [word[secIndex], word[j]];
        }
    }
    return combinations;
}
console.log(generateCombinations("man"));*/

document.writeln('<b>getRandomArray(length, min, max):</b> ' + getRandomArray(15, 1, 100) + '</br>');
document.writeln('<b>getModa(...numbers):</b> ' + getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) + '</br>');
document.writeln('<b>getAverage(...numbers):</b> ' + getAverage(999.9, 6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) + '</br>');
document.writeln('<b>getMedian (...numbers):</b> ' + getMedian(999.9, 1, 2, 3, 4) + '</br>');
document.writeln('<b>filterEvenNumbers (...numbers):</b> ' + filterEvenNumbers(1, 2, 3, 4, 5, 6) + '</br>');
document.writeln('<b>countPositiveNumbers (...numbers):</b> ' + countPositiveNumbers(1, -2, 3, -4, -5, 6) + '</br>');
document.writeln('<b>divideByThree (word):</b> ' + divideByThree('I am front end developer') + '</br>');

// допоміжна функція
function delFractionalNumb (numbers) {
    const newNumbers = [];
    numbers.forEach((item, i) => {
        if(item%1 != 0) return;
        newNumbers.push(item);
    });
    return newNumbers;
}