import HWs from './html.js';

HWs[7].innerHTML += `<p>Рандомна зарплата в певній країні (Ukraine, Latvia, Litva)</p><input type="text" value="Країна"><br><button>Send</button><p></p>`;

const Countries = [{
        name: 'Ukraine',
        tax: 0.195,
        middleSalary: 1789,
        vacancies: 11476
    },{
        name: 'Latvia',
        tax: 0.25,
        middleSalary: 1586,
        vacancies: 3921
    },{
        name: 'Litva',
        tax: 0.15,
        middleSalary: 1509,
        vacancies: 1114
    },
]

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// рандомна зарплата кожні 10с.
const getMySalary= counry => {
    const salary = Math.round(Math.random() * (2000 - 1500) + 1500);
    const taxes = +(counry.tax * salary).toFixed(2);
    const profit = +(salary - taxes).toFixed(2);
    HWs[7].children[5].innerHTML = `Країна: ${counry.name}<br>Зарплата: ${salary}<br>Податок: ${taxes}<br>Прибуток: ${profit}`;
    console.log({ salary, taxes, profit });
}

const HW7 = () => {
    const countryInp = HWs[7].children[2].value;
    if (isCountry(countryInp)) getMySalary (Countries[indCountry(countryInp)])
    else HWs[7].children[5].innerHTML = 'Введеть одну з запропонованих країн';
}

function isCountry (countryInp) {
    let is = false;
    Countries.forEach(country => { if (countryInp.toUpperCase() == country.name.toUpperCase()) is = true });
    return is;
}

function indCountry (countryInp) {
    let id;
    Countries.forEach((country, i) => { if (countryInp.toUpperCase() == country.name.toUpperCase()) id = i });
    return id;
}
export default HW7;