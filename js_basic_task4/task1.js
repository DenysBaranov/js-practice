// Є масив чисел 

// const numbers = [5, -4, 0, 6, 7, -1, 0, 0]
// Використовуючи звичайний цикл for, порахуйте кількість позитивних та негативних чисел та нулів. 
// Приклад результату:

// Positive numbers:3
// Negative numbers:2
// Zeros:3

const numbers = [5, -4, 0, 6, 7, -1, 0, 0]
let posNumbers = 0;
let negNumbers = 0;
let zeroNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
   
    posNumbers = numbers.filter((num) => num > 0); 
    negNumbers = numbers.filter((num) => num < 0);
    zeroNumbers = numbers.filter((num) => num === 0); 
} 

console.log (`Positive numbers: ${posNumbers.length}`);
console.log (`Negative numbers: ${negNumbers.length}`);
console.log (`Zeros: ${zeroNumbers.length}`);

