//УРОК 5. Переменные и строгий режим
// = знак присваивания

//Прямых констант не бывает,даже переменную const можно изменить, ниже пример

/* const obj = {
    a: 50
};

obj.a = 10;

console.log(obj); //ответ будет 10 */

/* //Хостинг (всплытие переменной) - это когда переменную вызываем раньше ее объявления
console.log(name);
var name = 'Ivan'; //var устаревшее обозначение переменной */



//УРОК 6. Классификация типов данных
//      Простые:
// числа(1, 2, 3); NaN - "не число", если операция не подлежит математической логике; Infinity - числовой тип данных, обозначает бесконечность 
// Строки "string", 'name', `your`; 
// Логический тип(boolean) - true, false;
// null - чего-то не существует;
// undefind - существует,но значения нет (something is not defind);
// symbol;
// bigint - 'большое число' - отображает большие числа;

//      Объекты:
// Массивы []; частный случай объекта, НЕ ЯВЛЯЕТСЯ отдельным типом данных, хранит данные строго по порядку
// Функции ;
// Объект Даты ;
// Регулярные выражения ;
// Ошибки ;

/* 
const obj = {
    name: 'Jone'; свойство = ключ: значение;
    age: 25;
    isMarried: false; //не женат
} 

//Чтобы обратиться к значению объекта:
console.log(obj.name);
console.log(obj['name']);
*/


/* 
//в массив можно поместить любой тип данных, элементы лежат строго по порядку. 
//массив имеет только значения, поэтому он является частным случаем объекта , а не отдельным типом данных, т.к. объект содержит свойство=ключ: значение
//1 элемент = 0, 2 элемент  = 1, 3 элемент = 2 и т.д.

let arr = ['plum.png', 'orange.jpg', 5, 'apple.bmp', {}, []];
 */



// УРОК 7. Простое взаимодействие с пользователем

//вся информация, которая прихордит от пользователя будет тип данных String
/* 
alert('Hello'); // Команда предназначена для вывода в браузере предупреждающего модального диалогового окна с сообщением и кнопкой "Ок"
 */0

/* 
const result = confirm('Are you here?') // Команда для вывода модального диалогового окна с сообщением и кномками "Ок" и "Отмена"
 */

/* 
//
const answer = promt('Вам есть 18?', ''); // это строка
//Мы можем преобразовать тип данных String добавив оператор - унарный плюс(плюс который ставится перед чем то) +
const answer = +promt('Вам есть 18?', ''); // это уже число 
*/




// УРОК 8. Интрополяция
// Интрополяция - внутри сроки можем вставлять знаение переменной с помощью бектиков `` и  ${}

//const category = 'toys';
// console.log('https://someurl.com/ + category + '/' + '4'); запись без интрополяции
// console.log(`https://someurl.com/${category}/5`); - запись с принципом интрополяции




//УРОК 9. Операторы

/* let incr = 10;
let decr = 10;
*/
/* 
//Постфиксная форма записи
incr++; //оператор инкремента, т.е. увеличение на еденицу
decr--; //оператор декримента, т.е. уменьшение на еденицу
 */
/* 
//Префиксная форма записи
++incr; 
--decr;
 */

//  ! отрицание
//  % возвращает остаток от деления двух чисел
//  && и  - возвращает true, если все елементы true
//  || или  - возвращает true, если хотя бы один элемент true




//УРОК 13. Условия

/* 
if (условие) {  //условия в круглых скобках должны быть булинового типо, чтобы мы могли проверить их правдивость true или false
    если условие верное, то выполняем следующее задание;
} else {
    если условие неверное, то выполняем следующее задание;
}  
*/


/* 
if (4 == 9) {
    console.log('OK!');
} else {
    console.log('error');
} 
*/
/* 
//Разветвление условия
const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) { //else if делаем разветвление условия
    console.log('Много');
} else {
    console.log('Ok!');
}
 */

//    Тернарный оператор - так называется, потому что участвует аж три аргумента
// Условие ? Если условие выполнено, пишем действие в случае true : пишем действие, если условие не выполнелось
//  (num === 50) ? console.log('Ok!') : console.log('Error');

/* 
// конструкция на switch всегда идет на строгое сравнение, нужно обязательно записывать 
// break - при выполнении условия, перебор условий останавливается 
// default = на случай если никакое условие не выполнится
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
 */




// УРОК 14. Циклы

//while - пока что условие не выполнено, совершать какие то действия
/* while (условие) {
    код, тело цикла
}  */
/* 
let one = 50; 

while (one < 55) {
    console.log(one);
    one++;
} 
 */



/* do {
    тело цикла, призыв к действию
}
while (условие); */

/* 
let two = 50; 

do {
    console.log(two);
    two++;
}
while (two < 55);
 */


/* 
for (начало; условие; шаг) {
    тело цикла,
    действия
}  
*/
/* 
let three = 50; 

for (let i = 1; i < 8; i++) {
    console.log(three);
    three++
    if (i === 6) {
        break; //так же используем данные оператор, чтобы прервать цикл ( как и в условиях)
        continue; //этот оператор позволяет пропустить шаг, не прерывая цикл, если мы например хотим избежать каких то четных и т.д. значений
    }
}
 */



// УРОК 16. Функции, стрелочные функц
// в скобках указываем аргумкент - данные, которые она будет использовать внутри себя
/* 
function showFirstMessage() {
    console.log('Hello world;')
}

showFirstMessage();
 */

//Замыкание функции

/* 
function showFirstMessage() {
    console.log('Hello world;')
}

showFirstMessage();
 */


//    function declaration - создается до начала выполнения скрипта, можно вызвать до объявления. 

/* function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage('Hello word');

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(6, 7)); */


//    function expression - функция в переменной, ставим в концу ; т.к. это все значение переменной
// Создается только тогда, когда доходит поток кода, можно вызвать только после объявления.
/* 
const logger = function() {
    console.log('Hello');
};

logger();
 */


//     function стрелочная - не имеет своего контекста (this), ее нельзя вызвать 

/* 
const calc = (a, b) => a + b;
 */






// УРОК 17. Методы и свойства строк и чисел  

/* 
const str = 'test';
const arr = [1, 2, 3];
 */
//console.log(str.length); // получаем кол-во символом в строке
//console.log(str[2]); //получим третий символ в строке
//console.log(str.toUpperCase()); // str.toUpperCase() - возвращает нам новое значение 'TEST', но не изменяяет саму строку 'test'
//console.log(str.toLowerCase()); // превращает строку в нижний регистр 

/* 
const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit')); // Ответ 5. fruit начинаемся с 5 значения
console.log(fruit.indexOf('q')); // Ответ -1. Это значит, что это не найдено
 */
/* 
const logg = 'Hello world';

console.log(logg.slice(6, 11)); //Ответ world. Метод чтобы вырезать кусок в строке. Первый аргумент 6-с какой буквы начинаем, 11-на какой заканчваем, но не включаем
console.log(logg.substring(6, 11)); //похожий метод как и slice
console.log(logg.substr(6, 11)); // второй аргумент указывает сколько символов необходимо вырезать
 */
/* 
const g = 12.2;
console.log(Math.round(g)); // ответ 12. Округление к ближайшему целомц

const test = '12.2px';
console.log(parseInt(test)); //превращаетчисло в дургую систему исчисления
console.log(parseFloat(test)); //
 */



// УРОК 19. Callback функции

/* callback функции - которая должна быть выполнена после того, как другая функция завершила своевыполнение */

/* 
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJS('JavaScript', function() { //АНОНИМНАЯ ФУНКЦИЯ
    console.log('Я прошел этот урок!');
}); 
*/
/* 
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!')
}

learnJS('JavaScript', done);
 */




// УРОК 20. Объекты, деструктуризация объектов  

// const obj = new Object(); //старая форма записи, сейчас желательно не использовать
/* 
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
console.log(options);
*/

// delete options.name; // удалить какое-либо свойство
//const {border, bg} = options.colors; // деструктуризация - вытащили свойства из объекта 
// console.log(Object.keys(options)); // получим массив со всеми ключами
// console.log(Object.keys(options).length); // количество свойств в объекте
//console.log(Object.keys(options)); // какие свойства есть в объекте 

 
//     Перебор объектов for ... in 

/* let counter = 0  //переменная для подсчета свойств в объект и counter++

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




            //  УРОК 21. Массивы и псевдомассивы
/*             
const brr = [1, 2, 3, 6 , 8];
console.log(brr.length);
//Ответ: 5.  
//Как соотносится свойство length и порядковые номера внутри массива? Ответ: length состоит из последнего индекса , кот есть в массиве +1 (инддекс+1)
 */
/* 
const brr = [1, 2, 3, 6 , 8];

brr.pop(); // удаляет последний элемент 
brr.push(10); // добавляет элемент 
brr.sort(compareNum); //перебор
console.log(brr);
 */

    //  способ перебора элементов в массиве через цикл for
    //  i < brr.lengt - чтобы перебрал все элементы и знал точно сколкьо раз запускается, цикл будет перебирать до тех пор, пока не закончатся элементы внутри массива
/* 
const brr = [1, 2, 3, 6 , 8];

for (let i = 0, i < brr.lengt; i++) {      
    console.log(brr[i]);
} 
*/

    // способ перебора элементов в массиве через метод for ... of, этот цикл можем остановить(break) или пропустить(countinua) элемент 
    //for ... of - работает с массивоподобными сущностями (массив, строку, псевдомасси)
    //for ... in - работает с объектами
/* 
for (let value of brr) {
    console.log(value); //value - каждый отдельный элемент
}
 */


    // гибкий медом перебрать элементы втнутри массива forEach(), проходит по каждому элементу массива и применяет к нему функцию, нельзя остановить
/* 
const brr = [1, 2, 3, 6 , 8];

brr.forEach(function(item, i, brr) {  
    console.log(`${i}: ${item} внутри массива ${brr}`)
});

// item - элемент, который сейчас перебираем 1, 2, 3, 6 , 8
// i - номер по порядку
// brr - ссылка на тот массив,который перебираем brr = [1, 2, 3, 6 , 8]
 */


    // метод split, sort, join 
/* 
// split - форматирует сообщение пользователя в массив
const mtr = prompt('', '');
const products = mtr.split(', ');
console.log(products);
 */
/* 
// join - формирует обратно в строку 
const mtr = prompt('', '');
const products = mtr.split(', ');
console.log(products.join('; '));
 */
/* 
// sort-метод сортировки(работает только со строками)
const mtr = prompt('', '');
const products = mtr.split(', ');
products.sort();
console.log(products.join('; '));
 */

/* 
const brr = [1, 2, 3, 6, 8];
brr.sort();
console.log(brr);

function compareNum(c, d) {
    return c - d;
}
*/ 
  

            // УРОК 22. Передача по ссылке или значению, Spread оператор

/* 
let f = 5,
    e = f;

e = e + 5;

console.log(e);
console.log(f);
 */
/* 
const obj = {
    f: 5,
    e: 1,
};

const copy = obj; // в переменную copy кладется ссылка на объект obj, модифицируя копию copy, мы модефицируем изначальный объект, потому что мы работаем не с копией, а с ссылкой на объект

copy.f = 10;

console.log(copy);
console.log(obj); 

// Ответ: 
// { a: 10, b: 1} = console.log(copy);
// { a: 10, b: 1} = console.log(obj); 
 */

/* 
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
// newNumbers.с = 10; // мы  создали поверхностную копию объекта, поэтому во вложенном объекта с значение поменялось

console.log(newNumbers);
console.log(numbers);

//Ответ: { a: 10, b: 5, с: { x: 10, y: 4} } = console.log(newNumbers);
//Ответ: { a: 2, b: 5, с: { x: 10, y: 4} } = console.log(numbers);
 */

/* 
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4,
    }
};

const add = {
    d: 17,
    e: 20,
};

    //assign - метод,помогает объеденить два объекта

console.log(Object.assign(numbers, add));
 */
/* 
    //slice помогает скопировать массив

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); 

newArray[1] = 'lkms'
console.log(newArray);
console.log(oldArray);
 */
/* 
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      interten = [...video, ...blogs, 'vk', 'facebook']; // ...video - это Spread оператор, помогает вытащить и развернуть элементы с массива

console.log(interten);
 */
/* 
    // оператор Spread помогает разложить массив на элементы
function log(a, b ,c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const nud = [2, 5, 7];

log(...nud) // так как функция принимает три отдельных элемента, а у нас массив, мы используем оператор Spread чтобы разложить массив на элементы
 */
/* 
const array = ['a', 'b'];

const newArray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
 */



            // УРОК 23.Основы объектно-ориентированного программирования 
/* 
let rtr = 'some';
let rtrObj = new String(rtr);

console.log(typeof(rtr)); //Ответ: String
console.log(typeof(rtrObj)); //Ответ: Object
 */

//Когда мы создаем строки или массивы , они могут содержать разное наполнение,но каждый из них обладает одними и теми же методами

    // 1 вариант создания протатипа(устаревший)

/* 
const soldier = {
    health: 400,
    armor: 100
};

const jonh = {
    health: 100
};

jonh.__proto__ = soldier;
consol.log(jonh)
 */

    // 2 вариант создания протатипа
/* 
Object.setPrototypeOf(jonh, soldier); // jonh- объект,которому хотим назначчить протатип. soldier - тот объект, протатип которого мы устанавливаем 

const jonh = Object.create(soldier);
 */



//          УРОК 26. Динамическая типизация 
// Динамическая типизация - возможность одного типа данных превращаться в другой

//      1) String 

//console.log(typeof(String(null)));

//      2) Конкритиниция - сложение со строкой

//console.log(typeof(5 + ''));

//const fontSize = 26 + 'px';

//      To number 

//console.log(typeof(Number('4'))); этим способом не часто пользуются

//console.log(typeof(+ '4')); чаще используют метод унарный плюс

//console.log(typeof(parseInt('15px', 10)));

//      To boolean 

// 0, '', null, underfined, NaN - это всегда будет значить false 

//   1) 
/* 
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}
 */

//    2) 
/* 
console.log(typeof(Boolean('4'))); //этим способом почти не пользуются
 */
//    3) 
/* 
console.log(typeof(!!'444')); //через ДВА знака отрицания
 */



//          УРОК 27. Задачи с собеседования 

//  1) 
 /* 
 let x = 5; alert(x++); // в итоге получим 5, так как постфиксная запись сначла возвращает нам х=5, а потом увеличивает
  если хапишем ++х, то тогда получим 6 
 */

// 2) 
/* 
[] + false - null + true // получается NaN 

console.log(typeof([] + false)); //тут получим строку "false", так как пустой массив будет приведен к строке, а при сложении со строкой получим строку
 */

// 3) 
/* 
let y = 1; 
let h = y = 2; 
alert(h); //  последовательное присваивание, сначала 2 присваевается к y , а потом значение y присваевается h, h=2 
 */

// 4)
/* 
console.log([] + 1 + 2); // получится строка '12', тк массив это строка, строка + число 1 = "1", строка '1' + число2 = '12'
 */

// 5)
/* 
alert( '1'[0]); //символ под номером 0 это 1
 */

// 6)
/* 
console.log(2 && 1 && null && 0 && undefined) 
//Оператор и(&&) всегда запинается на лжи и не идет дальше. Null-это ложь
// Оператор ИЛИ || всегда запинается на правде
  */

// 7)
/* 
console.log(!!(1 && 2) === (1 && 2)); // ответ false, так как !! дает отризательный результат 
 */

// 8)
/* 
alert( null || 2 && 3 || 4); //сначала нужно посмотреть таблицу приоритетор операторов JS, 2 && 3 = значение 2 и 3 - правда, но оператор позвращает последнее значение 3. null || 2 && 3 = возвращается 3, тк нал это ложь, 3 правда
 */

// 9)
/* 
const a = [1, 2, 3];
const b = [1, 2, 3];
//а == b? нет, так как это разные хранилища информации
 */

// 10)
/* 
alert( +'infinity'); //числовой тип данных infinity
 */

// 11)
/* 
console.log('Ёжик' > 'яблоко'); //посимвольное сравнение, воспользоваться юникод символами
 */

// 12)
/* 
0 || '' || 2 || undefined || true || false //ответ 2, тк 0 - ложь, '' - пустая строка ложь, 2 - правда. Оператор ИЛИ останавливается на правде
 */