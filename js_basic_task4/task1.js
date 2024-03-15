// Є масив чисел 

// const numbers = [5, -4, 0, 6, 7, -1, 0, 0]
// Використовуючи звичайний цикл for, порахуйте кількість позитивних та негативних чисел та нулів. 
// Приклад результату:

// Positive numbers:3
// Negative numbers:2
// Zeros:3

    const numbers = [5, -4, 0, 6, 7, -1, 0, 0];
    let posNumbers = 0;
    let negNumbers = 0;
    let zeroNumbers = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            posNumbers++;
        } else if (numbers[i] < 0) {
            negNumbers++;
        } else if (numbers[i] === 0) {
            zeroNumbers++;
        }

    }

    console.log (`Positive numbers:${posNumbers}`);
    console.log (`Negative numbers:${negNumbers}`);
    console.log (`Zeros:${zeroNumbers}`);