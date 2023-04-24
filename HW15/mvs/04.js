// Вхідні дані
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана",],
      themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних",],
      marks = [4, 5, 5, 3, 4, 5,];


// Хлопчик, дівчинка
const first = (stud) => {
    const boyAndGirl = new Array(new Array(), new Array(), new Array(),);
    boyAndGirl[0].splice(0, 0, stud[0], stud[2]);
    boyAndGirl[1].splice(0, 0, stud[1], stud[3]);
    boyAndGirl[2].splice(0, 0, stud[4], stud[5]);
    return boyAndGirl;
}

// Теми та студенти
const second = (boyGirl, themes) => {
    const themsAndStudents = [[], [], [],];
    for (let i=0; i<themsAndStudents.length; i++){
        themsAndStudents[i].push(boyGirl[i][0]);
        themsAndStudents[i].push(boyGirl[i][1]);
        themsAndStudents[i].push(themes[i]);
    }
    return themsAndStudents;
}

// Оцінки студентів
const third = (stud, marks) => {
    const marksStud = [];
    for (let i=0; i<stud.length; i++)
        marksStud[i] = new Array();

    for (let i=0; i<stud.length; i++) {
        marksStud[i].push(marks[i]);
        marksStud[i].unshift(stud[i]);
    }
    return marksStud;
}

// Рандомна оцінка за тему
const fourth = (themStudents) => {
    const marksTheme = themStudents;
    for (let i=0; i<marksTheme.length; i++) {
        marksTheme[i].push(Math.round(Math.random()*(5-1)+1))
    }
    return marksTheme;
}

const createStr = (array, index = 1) => {
    /* якщо index = 1, перетворюємо двовимірний масив в одновимірний.
    Наприклад: [['Ігор', 'Оля'], ['Володя', 'Іра']] -> ['Ігор Оля', 'Володя Іра']*/
    /* якщо index = 2, перетворюємо одновимірний в строку.
    Наприклад: ['Ігор Оля', 'Володя Іра'] -> 'Ігор Оля Володя Іра'*/
    const newArray = [];
    if(index == 1){
        for(let i=0; i<array.length; i++) {
            array[i].push('<br/>');   // в масив після кожного елементу додаємо <br/>, для читабельності
            newArray[i] = array[i].join(' ');   // перетворюємо в string
        }
        createStr(newArray, 2);
    }
    else {
        array = array.join(' ');    // перетворюємо в string
        document.writeln(array +'<br/>')
        return;
    }
}

document.writeln('<b>Хлопчик, дівчинка</b><br/>');
createStr(first(students));  // перетворюємо масив в строку та виводим на екран
document.writeln('<br/><b>Теми та студенти</b><br/>');
createStr(second(first(students),themes));
document.writeln('<br/><b>Оцінки студентів</b><br/>');
createStr(third(students, marks));
document.writeln('<br/><b>Рандомна оцінка за тему</b><br/>');
createStr(fourth(second(first(students),themes)));