// Напишіть функцію, яка приймає як параметри два числа та рядок operator(+,-,/,*). 
// Поверніть результат операції. За допомогою if-else зробіть перевірки на корректність передаваємих даних та викидайте помилку(throw new Error() ), якщо дані невірні:

// Якщо операція ділення("/"), то другий параметр не може бути 0
// Для всіх операцій перший та другий параметр повинні бути числами
// Третій параметр повинен бути рядком та дорівнювати одному із 4 значень : +-/*
// Кількість аргументів не повинна бути більше 3-х
// Інші перевірки по бажанню
// Приклад використання:

// Виклик функції:

// calculate(100,5,"*");
// Вивід:

// 100 помножити на 5 = 500
// ______

// Виклик функції:

// calculate(100,5,"string");
// Вивід:

// Error: Третій параметр повинен бути +,-,/ або *
// ______

// Виклик функції:

// calculate(10,0,"/");
// Вивід:

// Error: Коли операція ділення, другий параметр повинен не дорівнювати 0

function calculate (num1, num2, operator) {
   let formula = eval(num1 + operator + num2);
   let operators = ["+","-","/","*"];
   if (arguments.length != 3) {
      throw new Error ("Invalid number of arguments. Enter 3 arguments");
   } else if (typeof num1 === "number" && !isNaN(num1) && typeof num2 === "number" && !isNaN(num2)) {
      if ( operator === "/" && num2 === 0){
         throw new Error ("Error. Dividing by zero");
         } else {
            return formula
         }
   } else if ( operator === "/" && num2 === 0){
      throw new Error ("Error. Dividing by zero");
      }  
   else { throw new Error ("The first and second parameters must be numbers")}
                       
   } 
   
console.log(calculate(3, 2, "/"));

   
   