// Напишіть функцію, яка приймає масив чисел в якості аргументу і повертає суму всіх чисел у масиві.

function arraySum (arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum);
}
arraySum([1,2,30]);
