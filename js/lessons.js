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



//      УРОК 28. Получение элементов со страницы

/* const box = document.getElementById('box');

const btns = document.getElementsByTagName('button')[1]; //  Данный метод возвращает псевдомасив. В данную переменную получаем псевдомассив HTML Collection. [1] - так мы указываем индекс, то есть нам нужна вторая кнопка, нумерация в js начинается с 0, поэтому вторая кнопка дет под индексом 1

const circles = document.getElementsByClassName('circle'); //данный методизначально предполагает, то мы работаем с классами, поэтому точку перед названием класса не ставим!
console.log(circles);

const hearts = document.querySelectorAll('.heart'); // В отличии от других методов, данный возвращает псевдомассив, к которому пременим метод forEach. Перед классом ставим точку, так как этот медот обращается к любому виду селекторов
hearts.forEach(item => {
    console.log(item);
}); 

const oneHeart = document.querySelector('.heart'); //это метод позволят получить только один элемент со страницы, тот который попопал первым под сочетание этого селектора 

 */



//          УРОК 29. Действия с элементами на страницу

//  Работа со стилями элемента

/* 
const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');
 */

// Стили должны быть прописаны так же как в css, так мы формаируем инлайн стили, а они самые важные по приоритету 
//box.style.backgroundColor = 'blue'; 
//box.style.width = '500px'; 
//box.style.cssText = 'background-color: blue; width: 500px'; //метод cssText, чтобы назначить сразу несколько стилей

//  Для изменения стиля нужно указачать четко элемент [0], если укажем просто circles, а это псевдомассив, у которого нет стилей
//btns[1].style.borderRadius = '100%';
//circles[0].style.backgroundColor = 'red';

/* for (let i =0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue'
}; */


// Чаще используется метод forEach для querySelectorAll

/* hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});
 */


//  Основные медоты длработы с элементаи на странице

/* 
const div = document.createElement('div'); //создание нового элемента(нод),этот элемент сохраняется только внутри JS файла и на страницу не появится
const text = document.createTextNode('Тут был я'); 

div.classList.add('black'); //создаем блок в js

wrapper.append(div); //перемещаем этот блок в конец родителя wrapper 
// wrapper.appendChild(div);//устаревший код appendChild 

document.querySelector('.wrapper').append(div); // это способ размещения блока в обертке сразу, без создания новой переменной, в случае, если этот блок используется один раз
 
wrapper.prepend(div); //перемещает наш блок в самый вверх 

hearts[0].before(div); //вставить элемент перед чем-то, insertBefore - устаревший код 

hearts[0].after(div); //вставить элемент после чего-то 

circles[0].remove(); //удаление элемента. wrapper.removeChild[1]  - устаревший код 

hearts[0].replaceWith(circles[0]); //заменить один элемент на другой. wrapper.replaceChild(circles[0], heart[0])  - устаревший код

div.innerHTML = '<h1>Hello world</h1>'; //можем вставить как просто тект , так и HTML структуру 
// div.textContent = 'Hello world'; //можем вставить только текст  

div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>'); 
*/




//          Урок 31. События и их обработчики

// Чтобы сработало событие, мы должны назначить обработчик событий.Обработчик это функция ,которая срабатывает как только событие произошло


/* btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
});  */
/* 
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log('Hello');
    }
});
 */
//      Назначаем действие на одну кнопку, первую на странице

/* const btn = document.querySelector('button');

btn.onclick = function() {  //onclick - свойство дом дерево УСТАРЕВШИЙ КОД
    alert('Hello');
}; 

btn.addEventListener('click', () => {  //'click' - название события!
    alert('Hello');
});
 */

//      Назначаем действие на все кнопи с помощью метода querySelectorAll, но тк это псевдомассив, делаем это через forEach, перебирая и назначая действие на каждую кнопку

/* 
const deleteElement = (e) => {
    console.log(e.target);
}; 

const btns = document.querySelectorAll('button');

btns.forEach(item => {
    item.addEventListener('click', deleteElement, {once: true}); // {once: true}- Объект options, который определяет характеристики объекта, прослушивающего событие
});
 */

/* const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault(); //отменяем действие браузера, чтобы назначить свое

    console.log(event.target);
}); */


//          УРОК 32. Навигация по DOM - элементам, data-атрибуты, преимущество for_of
/* 
console.log(document.querySelector('#btn').parentNode.parentNode); //получаем элемент по id


console.log(document.querySelector('[data-current="3"]').nextElementSibling); //получаем следующего соседа для data-атрибута или любого другого

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
} */ 



//          УРОК 37. ClassList и делигирование событий


//console.log(btns[0].classList.length);  //если хотим узнать сколько склассов у тега
//console.log(btns[0].classList.item(0));  //позволяет получить класс, который находится по определенным индексом
//console.log(btns[0].classList.add('red')); //добавляем класс
//console.log(btns[0].classList.remove('blue')); //удаляем класс
//console.log(btns[0].classList.toggle('blue')); //если класса не было - добавляет, если был- удаляет


//          УРОК 39. Скрипты и время их выполнения

//setTimeout - код для запуска операции через какое -то время (2000 милисекнду, это 2 сек)
//setInterval - код для запуска операции с какой то переодичностью

/* const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}


btn.addEventListener('click', myAnimation); */


/* btn.addEventListener('click', () => {
    // timerId = setTimeout(logger, 2000); 
    timerId = setInterval(logger, 2000);
});
 */

/* setTimeout(logger, 2000)  */

/* function logger () {
    if (i === 3) {
        clearInterval(timerId);//оперция останавливает setInterval или setTimeout 
    }
    console.log('text');
    i++;
}
*/

//  этой фукнции setTimeout будет ждать 0,5с после выполнения всех действий функции
/* let id = setTimeout(function log() {
    console.log('Hello');
    id = setTimeout(log, 500);
}, 500); */ 


//          УРОК 40. Работа с датами
//Для измерения времени работы функции, как быстро она работает и сравнить с другой функцией. Вывод текущей даты (таймер или часы). Хранение времени создания какого либо документы

//const now = new Date(); //получим в консоль текущую дату и время 
//const now = new Date('2022-05-04'); //передаем дату в виде строки, в консоль получим эту дату без времени 
//const now = new Date(2022, 5, 4, 20); //так мы передаем определенные параметры(числа состоящие из одного символа указываем без нуля), в консоле получим 2020-06-01Т17:00:00 - 06месяц потому что месяцы считаются с нуля, 17 часов. а не 20 из-за часовой пояс
//new Date.parse('2022-05-04');

//Методы объекта Date - получение компонентов
/* console.log(now.getFullYear());
console.log(now.getMonth()); //нумерация месяца начинается с 0
console.log(now.getDate()); //метод чтобы узнать дату в месяце
console.log(now.getDay()); //метод чтобы узнать номер дня недели, начинается с воскресенья - 0 день, суббота - 6 день
console.log(now.getUTCHours());//время по UTC 
console.log(now.getTimezoneOffset()); //разница в минутах между UTC и местным временем
console.log(now.getTime());//количетсво милисекунд, которые прошли с 1970г */

/* console.log(now.setHours(18));
console.log(now); */

/* 
let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`); 
*/



//      Урок 45. Функции конструкторы

/* 
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    }
} 

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`)
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit();
alex.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex); 
*/



//         Урок 46. Контекст вызова. This


// 1) Обычная функция: this = window, но если use strict - underfined
/* 
function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }

    console.log(sum());
}

showThis(4, 5);
 */

// 2) Контекст у методов объекта это будет - сам объект 
/* 
const obj = {
    a: 20,
    b: 15,
    sum: function() {
        function shout() {
            console.log(this);
        }
        shout();
    }
}

obj.sum();
 */

// 3) this  в конструкторах и классах - эьто новый экземпляр объекта
/* 
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
} 

let ivan = new User('Ivan', 23);

 */

// 4) Ручная привязка this: call, apply, bind
/* 
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
    return this*num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(15));
  */



//          Урок 47. Классы

/* 
class Rectangle {
    constructor(height, width) {
        this.height = height; // с помощью this мы обращаем к экземпляру нового созданного объект, в каждый новый объект мы записываем свойство height
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}
 */
/* 
class ColoredRecrangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);  // вызываем свойство объекта родителя(Rectangle, super - всегда должно быть в начале конструктора первой строчкой
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`); 
    }
}


const div = new ColoredRecrangleWithText(25, 10, 'Hello word', 'red');
div.showMyProps();
console.log(div.calcArea()); 
*/

/* const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea());
console.log(long.calcArea()); */



//          Урок 49. Rest оператор и параметры по умолчанию
/* 
const log = function(a, b, ...rest) {
    console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage');

function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(3);
 */


//          Урок 51. JSON формат передачи данных, глубокое клонирование объектов

//   JSON - текстовый формат для обмена данными, используется для передачи и хранения. Это набор пар: "ключ"="значение" (всегда заключается в кавычки)

/* 
const person = {
    name: 'Alex',
    tel: '+744444444'
}

console.log(JSON.stringify(person)); //превращает объекты js в формат json

console.log(JSON.parse(JSON.stringify(person))); //превращает формат json в объекты js

 */
/* 
const persone = {
    name: 'Alex',
    tel: '+744444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
}

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';  // при клонировании объекта изначальный объект остается без изменений
console.log(persone);
console.log(clone);
 */
//Ответ консоли ниже

/* 
//это const persone
{ 
    name: 'Alex',
    tel: '+744444444',
    parents: { mom: 'Olga', dad: 'Mike' }
  }

//это const clone
  {
    name: 'Alex',
    tel: '+744444444',
    parents: { mom: 'Ann', dad: 'Mike' }
  } 
*/



//          Урок 51. AJAX и общение с сервером

//Это ассинхронное(без перезагрузки страницы) выполнение задач и общение с сервером



//          Урок 55. Promise.
/* 
console.log('Запрос данных...');

const req = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Подготовка данных...');
    
        const product = {
            name: 'TV',
            price: 2000
        };

        resolve(product);
    },2000);

});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
        },2000);
    });
});then(data => {
    data.modify = true;
    return data;
});then(data => {    
    console.log(data);
}).catch(() => {
    console.log('Произошла ошибка');
}).finally(() => {
    console.log('Finally');
});
*/  
/* 
const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

//test(1000).then(() => console.log('1000 ms'));
//test(2000).then(() => console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All');
}); // метод all ждет выполнения всех Promise и только тогда начинает что-то делать 

Promise.rase([test(1000), test(2000)]).then(() => {
    console.log('All');
}); // метод rase выполняет свои действия только когда первый Promise правильно отработал 
*/


//          Урок 57. Методы перебора массивов
/* 
filter //фильмтруем элементы внутри массива

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemar'];

const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames); 
*/
/* 
map //позволяет трансформировать каждый элементы внутри массива, выдает новый массив из измененных элементов

const answers = ['IvAn', 'AnnA', 'Hello'];

const result = answers.map(item => item.toLowerCase());

console.log(result); 
*/
/* 
every/some //возвращают булиновое значение. some - переберается массив, если хотя бы один элемент подходит, возвращает true. Every - возвращает true, если ВСЕ элементы подходят 

const some = [4, 'wks', 'emlxsm'];

//console.log(some.some(item => typeof(item) === 'number'));
//console.log(some.every(item => typeof(item) === 'number')); 
*/

reduce

const arr = [4, 5, 1, 3, 2, 6];
                    // 0       4
                    // 4       5
                    // 9       1
                    // 10      3
                    // 21
const res = arr.reduce((sum, current) => sum + current);

console.log(res);
