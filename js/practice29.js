'use strict';

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

//          УРОК 29. Действия с элементами на страницу

//  Работа со стилями элемента

/* console.log(btns[0].classList.length); */ //если хотим узнать сколько склассов у тега
/* console.log(btns[0].classList.item(0)); */ //позволяет получить класс, который находится по определенным индексом
/* console.log(btns[0].classList.add('red')); *///добавляем класс
/* console.log(btns[0].classList.remove('blue')); *///удаляем класс
/* console.log(btns[0].classList.toggle('blue')); *///если класса не было - добавляет, если был- удаляет 
/* btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
}); */

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log('Hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);