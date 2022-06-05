//УРОК 39
//setTimeout - код для запуска операции через какое -то время (2000 милисекнду, это 2 сек)
//setInterval - код для запуска операции с какой то переодичностью


const btn = document.querySelector('.btn');
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

btn.addEventListener('click', myAnimation); 


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

