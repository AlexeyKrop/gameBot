'use strict';
function gameBot(){
  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let randomNumber = getRandom(1, 100);
  console.log(randomNumber);
  function getNumber(){
    let userEnterNumber = prompt('Угадай число от 1 до 100');
    if(userEnterNumber === null){
      alert('Игра окончена');
    } else if(isNaN(userEnterNumber) || userEnterNumber.trim() === ''){
        alert('Введи число');
        getNumber();
    } else if (+userEnterNumber === randomNumber){
        alert('Поздравляю, Вы угадали!!!'); 
    } else if (+userEnterNumber > 100) {
        alert('Загаданное число меньше');
        getNumber();
    } else if(+userEnterNumber < 1){
        alert('Загаданное число больше');
        getNumber();
    } else if(+userEnterNumber !== randomNumber){
      alert('Вы проиграли(((');
    }
    }
    getNumber();
}
gameBot();
 


