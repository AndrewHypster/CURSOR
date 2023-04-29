import HWs from './html.js';

HWs[6].innerHTML += `<p>Інформація про студента</p><input type="text" value="Ім'я"><br><input type="text" value="Курс"><br><input type="text" value="Оцінки: 1 2 3"><br><button>Send</button><p></p>`;

const students = [{
    name: "",
    course: 0,
    subjects: {
        statistics: []
    }
}];

const getAverageMark = (student = students[0]) => {
    const subValue = Object.values(student.subjects);
    let sum;
    let divider = 0;
    let sum2 = 0;
    subValue.forEach(marks => {
        marks.forEach(mark => sum2 += mark );
        sum = sum2;
        divider += marks.length;
    });
    const averageMark = Math.ceil(sum / divider * 100)/100;
    return averageMark;
}

const getStudentInfo = (student = students[0]) => {
    const info = {
        course: student.course,
        name: student['name'],
        averageMark: getAverageMark(student),
    }
    return info;
}

let isNumbs; // чи всі числа з input є числами;
function HW6 () {
    const nameInp =   HWs[6].children[2].value,
          courseInp = HWs[6].children[4].value;
    let marksInp =  HWs[6].children[6].value;
    marksInp = marksInp.split(' ');

    // провірка на числа
    isNumbs = true;
    isNumb (courseInp);
    marksInp.forEach(mark => isNumb (mark));

    if (isNumbs) {
        // записуємо отримані значення в об'єкт студунт
        students[0].name = nameInp;
        students[0].course = courseInp;
        marksInp.forEach(mark => students[0].subjects.statistics.push(+mark))
        HWs[6].children[9].innerHTML = `<p>Ім'я: ${getStudentInfo().name}</p> <p>Курс: ${getStudentInfo().course}</p> <p>Середня оцінка: ${getStudentInfo().averageMark}</p>`;
    } else { // якщо в курсі чи оцінках написана буква, від'ємне або дробове число
        HWs[6].children[9].innerHTML = `<p>Впишіть нормальні значення, Наприклад:</p> <p>Алекс</p> <p>1</p> <p>1 2 3</p>`;
    }
}

function isNumb (numb) {
    if (numb%1 == 0 && numb >= 0) {
        console.log('numb is');
    } else {
        isNumbs = false;
    }
}
export default HW6;