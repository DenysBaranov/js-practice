// Використовуючи замикання, створіть функцію divider, яка приймає дільник(число, на яке треба ділити)
// та повертає іншу функцію, яка у свою чергу приймає ділене(число, яке потрібно поділити на дільник)
// та повертає результат ділення

// Приклад використання:

// const divideByFive = divider(5);
// console.log(divideByFive(10)); // Виведе 2 (10/5=2)

function divider(number1) {
  return function (number2) {
    return number2 / number1;
  };
}

const divideByFive = divider(5);
console.log(divideByFive(10));

// console.log(divider(5)(10));