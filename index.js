'use strict';

console.log('funguju!');

const inputElm = document.querySelector('.time-input'); //vybírám pole, kam uživatel zadá číslo
const alarmElm = document.querySelector('.alarm__seconds') //vybírám pole, kam se propisuje čas
const audioElm = document.querySelector('audio');

const countdown = (event) => {
  let time = Number(inputElm.value); //převádím vzniklý řetězec na číslo a ukládám do proměnné time
  alarmElm.textContent = time;
  console.log(time);

  const timerId = setInterval(() => {
    time = time - 1;
    alarmElm.textContent = time;
    if (time === 0) {
     alarmElm.className = 'alarm alarm--ring';
     audioElm.play();
     clearInterval(timerId);
    };
  }, 1000);
  
}

document.querySelector('button').addEventListener('click', countdown);



