'use strict';

let randomNumberResult;

function gameBot(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNumber);
  return function () {
    let userEnterNumber = prompt('Угадай число от 1 до 100');
      if(userEnterNumber === null){
        alert('Игра окончена');
      } else if(isNaN(userEnterNumber) || userEnterNumber.trim() === '') {
        alert('Введи число');
        randomNumberResult();
      } else if(+userEnterNumber > 100){
        alert('Загаданное число меньше');
        randomNumberResult();
      } else if(+userEnterNumber < 1){
        alert('Загаданное число больше');
        randomNumberResult();
      } else if(+userEnterNumber === randomNumber){
        alert(`Поздравляю, Вы угадали!!!`); 
      } else if(+userEnterNumber !== randomNumber){
      alert(`Вы проиграли(((`);
    }
  };
}
// Тут ошибку выдает, потому что мы используем переменную, до ее объявления, но как иначе вызвать функцию?
randomNumberResult = gameBot(1,100);
randomNumberResult();
 


