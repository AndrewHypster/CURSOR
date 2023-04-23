const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }
}];

const getSubjects = (student = students[0]) => {
    const subjects = Object.keys(student.subjects);
    subjects.forEach((item, i) => {
        subjects[i] = item[0].toUpperCase() + item.slice(1); // робим першу букву велику
        subjects[i] = subjects[i].split('');
        subjects[i].forEach((char, j) => {
            if (char == '_' || char == '-' ) subjects[i][j] = ' ';
        });
        subjects[i] = subjects[i].join('');
    });
    const style = `["${subjects.join('", "')}"]`;
    return subjects;
}

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

const getStudentsNames = students => {
    const names = [];
    students.forEach(student => names.push(student.name));
    return names;
}

const getBestStudent = students => {
    let bestMark = 0;
    let studName;
    students.forEach(student => {
        if (bestMark < getAverageMark(student)) {
            bestMark = getAverageMark(student);
            studName = student.name;
        }
    });
    return studName;
}

const calculateWordLetters = word => {
    word = word.split('');
    const wordLetters = {};
    const chars = [];

    word.forEach(char => {
        if (!chars.some(item => item == char)) {
            wordLetters[char] = 1;
            chars.push(char);
        }
        else wordLetters[char]++;
    });

    return wordLetters;
}

console.log(getSubjects(students[0]));
console.log(getAverageMark(students[0]));
console.log(getStudentInfo(students[0]));
console.log(getStudentsNames(students));
console.log(getBestStudent(students));
console.log(calculateWordLetters("тест"));