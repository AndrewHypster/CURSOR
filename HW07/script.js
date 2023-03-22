const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// мої податки
function getMyTaxes(salary) {
    document.writeln(this.tax * salary + '</br>');
}

getMyTaxes.call(ukraine, 1800);

// середні податки
function getMiddleTaxes() {
    document.writeln(this.tax * this.middleSalary + '</br>');
}

getMiddleTaxes.call(ukraine)

// всього податків
function getTotalTaxes() {
    document.writeln(this.tax * this.middleSalary * this.vacancies + '</br>');
}

getTotalTaxes.call(ukraine)

// рандомна зарплата кожні 10с.
function getMySalary(counry) {
    const salary = Math.round(Math.random() * (2000 - 1500) + 1500);
    const taxes = +(counry.tax * salary).toFixed(2);
    const profit = +(salary - taxes).toFixed(2);

    console.log({ salary, taxes, profit });
}

const interval = setInterval(getMySalary, 10000, ukraine);
