'use strict';



function gameBot(min,max) {
  let n = 10;
  min = Math.ceil(min);
  max = Math.floor(max);
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNumber);
  function getNumberOfAttempts() {
    if(n < 1){
      alert('Игра закончена');
    } else {
      randomNumberResult();
      }
  }
  function MyFunc() {
    let userEnterNumber = prompt('Угадай число от 1 до 100');
      if(userEnterNumber === null){
        alert('Игра окончена');
      } else if(isNaN(userEnterNumber) || userEnterNumber.trim() === '') {
        alert('Введи число');
        randomNumberResult();
      } else if(+userEnterNumber === randomNumber){
          let newGame = confirm(`Поздравляю, Вы угадали!!! Хотели бы сыграть еще?`); 
          if (newGame === true) {
            randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            console.log(randomNumber);
            n = 10;
            randomNumberResult();
          } else {
            alert('Приходи еще');
          }
      } else if(+userEnterNumber > 100){
          alert(`Загаданное число меньше 100, осталось попыток ${--n}`);
          getNumberOfAttempts();
      } else if(+userEnterNumber < 1){
          alert(`Загаданное число больше 1, осталось попыток ${--n}`);
          getNumberOfAttempts();
      } else if(+userEnterNumber !== randomNumber){
      alert(`Осталось попыток ${--n}`);
      getNumberOfAttempts();
    }
  }
  return MyFunc;
} 
let randomNumberResult = gameBot(1,100);
randomNumberResult();
 


