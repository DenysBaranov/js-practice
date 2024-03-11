//Створіть програму, яка приймає дві змінні(числа) і виводить список парних чисел, які знаходяться між ними.

//Підказка для імплементації: Спочатку треба вирахувати, яке з двох чисел більше, а яке менше, щоб встановити межи циклу. 
//Для цього можна використовувати Math.min(number1, number2) та Math.max(number1,number2)

let number1 = 15;
let number2 = 3;

let minNumber = Math.min (number1, number2);
let maxNumber = Math.max (number1, number2);


for (let i = minNumber; i <= maxNumber; i++){
    if (i % 2 == 0){

        console.log(i);
    }   
}