// Створіть програму, яка приймає рядок від користувача (як змінну) та замінює всі голосні літери на "*" у цьому рядку. 
// Виведіть отриманий рядок(із змінами) у консоль.

let userInput = "User text";
let changeString = "User text";

for (let i = 0; i < userInput.length; i++){
    let changeString = userInput[i];
    if (changeString.toLowerCase() === "u" || changeString === "a" || changeString === "e" || changeString === "i" || changeString === "o" || changeString === "y"){
        changeString = "*";
    } else (changeString = userInput[i]);
    
    console.log(changeString);
    
}


