// Є масив ємейлів

// const emails = ["example1@yahoo.com", "myemail@mail.com", "trueemail@gmail.com"]
// Використовуючи .filter(), запишіть у новий масив тільки ємейли, які містять 'gmail.com'. 
// Виведіть новий відфільтрований масив.

const emails = ["example1@yahoo.com", "myemail@mail.com", "trueemail@gmail.com"]

const gmails = emails.filter((mail) => mail.includes("gmail.com"));

console.log(gmails);


