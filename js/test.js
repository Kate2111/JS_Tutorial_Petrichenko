/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, 
    actors: {},
    genres: [],
    privat: false,
};


/* const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; */

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


// Код возьмите из предыдущего домашнего задания


function  rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '');
        const b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPerconalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    } 
}

detectPerconalLevel();


/* switch (personalMovieDB.count) {
    case 9:
        console.log('Просмотрено довольно мало фильмов');
        break;
    case 10:
        console.log('Вы классический зритель');
        break;
    case 30:
        console.log('Вы киноман');
        break;
}
 */
console.log(personalMovieDB);

/* Условия */

/* if (4 == 9) {
    console.log('OK!');
} else {
    console.log('error');
} */

/* const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}
 */



const num = 51;

switch (num) {
    case 49: 
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('Верно');
        break;
    default:
        console.log('Не в этот раз');
        break;
} 



/* Циклы */

/* while (условие) {
    код, тело цикла
}  */

let one = 50; 

while (one < 55) {
    console.log(one);
    one++;
} 

/* do {
    тело цикла, призыв к действию
}
while (условие); */

let two = 50; 

do {
    console.log(two);
    two++;
}
while (two < 55);

/* 
for (начало, условие, шаг) {
    тело цикла,
    действия
}  */

/* let three = 50; 

for (let i = 1; i < 8; i++) {
    console.log(three);
    three++
}  */





/* Функции */

/* function declaration - создается до начала выполнения скрипта, можно вызвать до объявления. */

/* function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage('Hello word');

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(6, 7)); */



/* function expression - функция в функции, ставим в концу ; т.к. это все значение переменной
Создается только тогда, когда доходит поток кода, можно вызвать только после объявления. */

const logger = function() {
    console.log('Hello');
};

logger();

/* function стрелочная - не имеет своего контекста (this), ее нельзя вызвать */

/* const calc = (a, b) => a + b;

 */


/* Методы и свойства строк и чисел  */

const str = 'test';
const arr = [1, 2, 3];

console.log(str[2]);



const logg = 'Hello world';

console.log(logg.slice(6, 11));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 11));

const g = 12.2;
console.log(Math.round(g));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();

/* callback функции - которая должна быть выполнена после того, как другая функция завершила своевыполнение */

/* function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJS('JavaScript', function() { АНОНИМНАЯ ФУНКЦИЯ
    console.log('Я прошел этот урок!');
}); */

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!')
}

learnJS('JavaScript', done);

/* Объекты, диструктуризация объектов  */

/* const obj = new Object(); */
const options = {
    mane: 'test',
    widrh: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    makeTest: function() {
        console.log('Test');
    }
}

options.makeTest();

const {border, bg} = options.colors; /* - деструктуризация - вытащили свойства из объекта */
console.log(border);

console.log(Object.keys(options).length); /* - количество свойств в объекте */

/* console.log(Object.keys(options)); - какие свойства есть в объекте */

/* delete options.name;

console.log(options); */

/* Перебор объектов for ... in */

/* let counter = 0

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}

console.log(counter); */





/* Массивы и псевдомассивы */

const brr = [1, 2, 3, 6 , 8];

brr.pop(); /* - удаляет последний элемент */
brr.push(10); /* добавляет элемент */
brr.sort(compareNum);
console.log(brr);

function compareNum(c, d) {
    return c - d;
}

/* способ перебора элементов в массиве через цикл for  */
/* for (let i = 0, i < brr.lengt; i++) {
    console.log(brr[i]);
} */


/* способ перебора элементов в массиве через метод for ... of, этот цикл можем остановить(break) или пропустить(countinua) элемент */
for (let value of brr) {
    console.log(value);
}

/* гибкий медом перебрать элементы втнутри массива forEach(), проходит по каждому элементу массива и применяет к нему функцию, нельзя остановить*/

brr.forEach(function(item, i, brr) {
    console.log(`${i}: ${item} внутри массива ${brr}`)
});

/* метод split форматирует сообщение пользователя в массив, sort-метод сортировки(работает только со строками, с цифрами нет) , join - формирует обратно в строку */
const mtr = prompt('', '');
const products = mtr.split(', ');
products.sort();
console.log(products.join('; '));

/* передача по ссылке или значению, Spread оператор */

/* let f = 5,
    e = f;

e = e + 5;

console.log(e);
console.log(f);

const obj = {
    f: 5,
    e: 1,
}

const copy = obj; //ссылку

copy.f = 10;

console.log(copy);
console.log(obj); */

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4,
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20,
};

console.log(Object.assign(numbers, add));

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); //slice помогает скопировать массив

newArray[1] = 'lkms'
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      interten = [...video, ...blogs, 'vk', 'facebook'];

console.log(interten);

function log(a, b ,c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const nud = [2, 5, 7];

log(...nud)

const array = ['a', 'b'];

const newArray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

/* Основы объектно-ориентированного программирования */

let rtr = 'some';
let rtrObj = new String(rtr);

console.log(typeof(rtr));
console.log(typeof(rtrObj));

console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100
};


/* 1 вариант создания протатипа */

/* const jonh = {
    health: 100
};
 */
Object.setPrototypeOf(jonh, soldier); /* jonh- объект,которому хотим назначчить протатип. soldier - тот объект, протатип которого мы устанавливаем */

/* 2 вариант создания протатипа */

const jonh = Object.create(soldier);




/* Динамическая типизация */

/* 1) String */

console.log(typeof(String(null)));

/* 2) Конкритиниция */

console.log(typeof(5 + ''));

const fontSize = 26 + 'px';

/* To number */

console.log(typeof(Number('4')));

console.log(typeof(+ '4'));

console.log(typeof(parseInt('15px', 10)));

/* To boolean */

/* 0, '', null, underfined, NaN - это всегда будет значить false */

/* 1) */

let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

/* 2) */

console.log(typeof(Boolean('4')));

/* 3) */

console.log(typeof(!!'444'));





/* Задачи с собеседования  */

 /* 1) */
 
 let x = 5; alert(x++); /* в итоге получим 5, так как постфиксная запись сначла возвращает нам х=5, а потом увеличивает
  если хапишем ++х, то тогда получим 6 */

/* 2) */

[] + false - null + true /* получается NaN */

console.log(typeof([] + false));

/* 3) */

let y = 1; 
let h = y = 2; 
alert(h); /*  последовательное присваивание, сначала 2 присваевается к y , а потом значение y присваевается h, h=2 */

console.log([] + 1 + 2); // получится строка '12', тк массив это страка, строка + число 1 = "1", строка '1' + число2 = '12'

alert( '1'[0]); //символ под номером 0 это 1

console.log(2 && 1 && null && 0 && undefined) 
//Оператор и(&&) всегда запинается на лжи и не идет дальше. Null-это ложь
// Оператор ИЛИ || всегда запинается на правде
 
console.log(!!(1 && 2) === (1 && 2));/*  ответ false, так как !! дает отризательный результат */

alert( null || 2 && 3 || 4); //сначала нужно посмотреть таблицу приоритетор операторов JS, 2 && 3 = значение 2 и 3 - правда, но оператор позвращает последнее значение 3. null || 2 && 3 = возвращается 3, тк нал это ложь, 3 правда

const a = [1, 2, 3];
const b = [1, 2, 3];
//а == b? нет, так как это разные хранилища информации

alert( +'infinity'); //числовой тип данных infinity

console.log('Ёжик' > 'яблоко'); //посимвольное сравнение, воспользоваться юникод символами

0 || '' || 2 || undefined || true || false //ответ 2, тк 0 - ложь, '' - пустая строка ложь, 2 - правда. Оператор ИЛИ останавливается на правде