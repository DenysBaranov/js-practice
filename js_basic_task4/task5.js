// Є масив із числами

// const numbers = [150, 23, 1, -53, 49]
// За допомогою .every() перевірити, чи всі елементи масиву менше 50

const numbers = [150, 23, 1, -53, 49];

const lessNumbers = numbers.every ((number) => number < 50);

if (lessNumbers == false) {
    console.log (`Not all array elements are less than 50`);
}