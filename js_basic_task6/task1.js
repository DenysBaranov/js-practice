// Використовуючи рекурсію, напишіть функцію, яка приймає два параметри - start та finish.
// За допомогою рекурсії, виведіть всі числа від start до finish.

// Приклад використання:

// printIntervalRec(10,15);
// Результат:

// 10
// 11
// 12
// 13
// 14
// 15

function printIntervalRec(start, finish) {
  if (start <= finish) {
    console.log(start);
    start++;
    printIntervalRec(start, finish);
  }
}

printIntervalRec(10, 15);
