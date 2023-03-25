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
        console.log(`Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`);
    }

    getAverageMark() {
        if (this.isStudent) {
            this.averageMark = 0;
            this.#marks.forEach(mark => this.averageMark += mark);
            this.averageMark /= this.#marks.length
            console.log(this.averageMark);
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
        if (this.isStudent)
            console.log(this.#marks);
        else console.log('Такого студента не було і не буде');
    }

    set addMark(newMark) {
        if (this.isStudent)
            this.#marks.push(newMark);
        this.marksStudent;
    }
}

class BudgetStudent extends Student {
    constructor(university, course, fullName,) {
        super(university, course, fullName);
        this.scholarship = setInterval(this.getScholarship, 10000, 1400);
    }

    getScholarship(money) {
        if (ostap.isStudent) {
            if (ostap.averageMark >= 4)
            console.log(`Прийшла стипендія ${money}`);
            else console.log(`Середній бал менший 4.0`)
        }
        else console.log('Такого студента не було і не буде');
    }
}

const ostap = new Student('Вищої Школи Психотерапії м.Одеса', 1, 'Остап Родоманський Бендер');
const budgetOstap = new BudgetStudent;

ostap.getInfo();
ostap.marksStudent;
ostap.addMark = 5;
ostap.getAverageMark();

ostap.dismiss();
ostap.marksStudent;
ostap.addMark = 5;
ostap.getAverageMark();

ostap.recover();
