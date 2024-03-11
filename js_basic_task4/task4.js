// Є масив рядків імен

// const names = ["John", "Fernando", "Alexandra", "Anatolii", "Arina", "Elon"]
//  Використовуючи .find(), виведіть перше ім'я, з довжиною більше 6 символів

const names = ["John", "Fernando", "Alexandra", "Anatolii", "Arina", "Elon"];

const firstBigName = names.find ((nameBig) => nameBig.length > 6 );
console.log (`The first name greater than 6 characters is: ${firstBigName}`);

