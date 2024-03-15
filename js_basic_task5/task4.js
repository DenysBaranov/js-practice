// Напишіть функцію, яка приймає 3 параметри-оцінки: математика, література, фізика. Кожен від 1 до 100.

// В функції порахуйте середній бал і поверніть(return) наступний рядок в залежності від середнього балу:

// 1-49 - Low performance
// 50-69 - Medium performance
// 70-89 - Good performance
// 90-100 - Very good perfomance

function ratings (math, literature, physics){
    let average = 0;
    average = (math + literature + physics)/3;
    if (average >= 0.01 && average <= 49.99) {
        console.log ("Low performance");
    } if (average >= 50 && average <= 69.99){
        console.log ("Medium performance");
    } if (average >= 70 && average <= 89.99){
        console.log ("Good performance");
    } if (average >= 90 && average <= 100){
        console.log ("Very good perfomance");
    }
    return average;
}

ratings(90, 90, 89);
