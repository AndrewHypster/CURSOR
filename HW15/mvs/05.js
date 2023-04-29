import HWs from './html.js'

HWs[5].innerHTML += '<p>Середнє арифметичне</p><input type="number"><br><input type="number"><br><input type="number"><br><button>Send</button><p></p>';

const getAverage = (...numbers) => {
    const newNumbers = delFractionalNumb(numbers),
          sum = newNumbers.reduce((preValue, item) => preValue + item),
          output = HWs[5].children[9];
    output.innerHTML = (sum / newNumbers.length);
}

const HW5 = () => {
    const value1 = +HWs[5].children[2].value,
          value2 = +HWs[5].children[4].value,
          value3 = +HWs[5].children[6].value;
          console.log(value1, value2, value3);
    getAverage (value1, value2, value3);
}

// допоміжна функція
function delFractionalNumb (numbers) {
    const newNumbers = [];
    numbers.forEach(item => {
        if(item%1 != 0) return;
        newNumbers.push(item);
    });
    return newNumbers;
}
export default HW5;