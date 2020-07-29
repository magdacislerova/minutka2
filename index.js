'use strict';

const inputElm = document.querySelector('.time-input');
const buttonElm = document.getElementById('button');
const secondsElm = document.querySelector('.alarm__seconds');
const audioElm = document.querySelector('audio');
const alarmElm = document.querySelector('.alarm');

const countdown = () => {
  let time = Number(inputElm.value);
  secondsElm.innerHTML = time; /* tady je to kvůli zobrazení počátečního čísla odpočtu */
  const timerId = setInterval(() => {
    if (time > 0) {
      time -= 1;
      secondsElm.innerHTML = time; /* tady aby to zobrazovalo odečítání */
      console.log(time);
    } else {
      alarmElm.classList.add('alarm--ring');
      audioElm.play();
      clearTimeout(timerId);
    }
  }, 1000);
  inputElm.value = '';
};

buttonElm.addEventListener('click', countdown);

console.log('funguju!');