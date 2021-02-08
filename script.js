'use strict';
let n = 10;
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
        let newGame = confirm(`Поздравляю, Вы угадали!!! Хотели бы сыграть еще?`); 
        if(newGame === true) {
          n = 10;
          getNumber();
        } else {
          alert('Пока');
        }
    } else if (+userEnterNumber > 100) {
        alert(`Загаданное число меньше, осталось попыток ${--n}`);
        if(n < 1){
          alert('Игра закончена');
        }else{
          getNumber();
        }
    } else if(+userEnterNumber < 1){
        alert(`Загаданное число больше, осталось попыток ${--n}`);
        if(n < 1){
          alert('Игра закончена');
        }else{
          getNumber();
        }
    } else if(+userEnterNumber !== randomNumber){
      alert(`Вы проиграли(((`);
    }
    }
    getNumber();
}
gameBot();
 


