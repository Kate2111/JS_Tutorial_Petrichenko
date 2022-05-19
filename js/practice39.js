/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    
    /* const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

     */

    /* adv.remove() */ //Так нельзя, тк мы выбрали метод querySelectorAll, просто удалить элементы мы не можем, нужно удалить поочередно через метод forEarch

   /*  const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'Драма';

        poster.style.backgroundImage = `url('../img/bg.jpg')`;
    };

    const sortArr = (arr) => {
        arr.sort(); //movieDB.movies.sort(); сортируем содержимое элемента по алфавиту
    };

    function createMovieList(films, parent) {
        parent.innerHTML = ''; //удаляем блок, который сейчас есть в html, чтобы поместить на его место новый
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    } */

    /* a = a + 1; или a += 1; */

   /*  addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }

        if (favorite) {
            console.log('Добавляем любимый фильм');
        }

        event.target.reset();
    });

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);*/

}); 

//УРОК 39
//setTimeout - код для запуска операции через какое -то время (2000 милисекнду, это 2 сек)
//setInterval - код для запуска операции с какой то переодичностью

/* const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setImmediate(frame, 10);
    function frame() {
        if (pos == 300) {
            clearImmediate(id);
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

}); */

/* let id = setTimeout(function log() {
    console.log('Hello');
    id = setTimeout(log, 500);
}, 500); */ 


//УРОК 40

//const now = new Date('2022-05-04');
 //new Date.parse('2022-05-04');

/* console.log(now.getFullYear());
console.log(now.getMonth()); //нумерация месяца начинается с 0
console.log(now.getDate()); //метод чтобы узнать дату в месяце
console.log(now.getDay()); //метод чтобы узнать номер дня недели, начинается с воскресенья - 0 день, суббота - 6 день
console.log(now.getUTCHours());//время по UTC 
console.log(now.getTimezoneOffset()); //разница в минутах между UTC и местным временем
console.log(now.getTime());//количетсво милисекунд, которые прошли с 1970г */


/* console.log(now.setHours(18));
console.log(now); */

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i **3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);