//Створіть програму, яка приймає такі змінні: базовий рядок та символ, який потрібно замінити(як змінні), 
//а потім замінює вказаний символ у базовому рядку на "*" та записує у новий рядок, який потім виводить у консоль.

let userInput = "User text";
let changeString = "User text";
const stringToChange = "t";

for (let i = 0; i < userInput.length; i++) {
    let changeString = userInput[i];
    if (changeString === stringToChange) {
    changeString = "*";
    } else (changeString = userInput[i]);

console.log(changeString);

}
