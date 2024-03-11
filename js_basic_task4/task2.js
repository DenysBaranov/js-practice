// Є масив рядків
// const strings = ["String one", "String two", "string three"]
// За допомогою циклу for of пройтись по всім елементам та вивести у консоль всі рядки великими буквами. 

// Приклад:
// STRING ONE
// STRING TWO
// STRING THREE

const strings = ["String one", "String two", "string three"]

for (const string of strings) {
    
    console.log (string.toUpperCase());
}

// Або
console.log(`------------`);

const stringsUpper = [];

for (const string of strings) {
    stringsUpper.push(string.toUpperCase());   
}

console.log(stringsUpper[0]);
console.log(stringsUpper[1]);
console.log(stringsUpper[2]);