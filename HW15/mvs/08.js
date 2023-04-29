import HWs from './html.js';

HWs[8].innerHTML += `<p>Інформація про студента</p><input type="text" value="Навчальний заклад"><br><input type="text" value="Курс"><br><input type="text" value="Ім'я"><br><input type="text" value="Додати оцінки"><br><button>Send</button><p></p>`;

class Student {
    #marks;
    constructor (university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.isStudent = true;
        this.#marks = [5, 4, 4, 5,];
    }

    getInfo() {
        HWs[8].children[11].innerHTML += `<br>Студент ${this.course}-го курсу ${this.university}, ${this.fullName}<br>`;
    }

    getAverageMark() {
        if (this.isStudent) {
            this.averageMark = 0;
            this.#marks.forEach(mark => this.averageMark += mark);
            this.averageMark /= this.#marks.length
            HWs[8].children[11].innerHTML += `<br>${this.averageMark}`;
        }
        else console.log('Такого студента не було і не буде');
    }

    dismiss() {
        console.log('*** Студент вилетів ***');
        this.isStudent = false;
    }

    recover() {
        console.log('*** Додали студента ***');
        this.isStudent = true;
    }

    get marksStudent() {
        if (this.isStudent) HWs[8].children[11].innerHTML += this.#marks;
        else console.log('Такого студента не було і не буде');
    }

    set addMark(newMark) {
        if (this.isStudent)
            this.#marks.push(newMark);
        this.marksStudent;
    }
}

let q = true, student;
const HW8 = () => {
    const university = HWs[8].children[2].value,
          course = HWs[8].children[4].value,
          fullName = HWs[8].children[6].value,
          newMark = +HWs[8].children[8].value;
    if (q) student = new Student(university, course, fullName); // щоб не створювати нового студента
    student.getInfo();
    if((newMark && newMark > 0)) student.addMark = newMark;
    else student.marksStudent;
    student.getAverageMark();
    q = false;
}
export default HW8;