// Створити об'єкт Library, який має:

// Масив books [] - масив, де містяться об'єкти.
// Метод addBook - метод, який приймає параметри bookName, bookAuthor, bookYear та bookId та додає новий об'єкт із цими параметрами до масиву books
// Метод printBookInfo - метод, який приймає параметр bookId та виводить всю інформацію(ім'я, автор, рік) книжки з таким айді
// Метод printAllBooks - метод, який виводить інформацію про всі книжки в наявності(їх ім'я, авторів, роки та айді)
// Потренуватись додавати нові книжки та викликати інші методи об'єкта Library

const books = [];

const library = {
    
    addBook (bookName, bookAuthor, bookYear, bookId) {
        books.push ({bookName, bookAuthor, bookYear, bookId});
    },
    printBookInfo (bookId) {
        const findBookById = books.find (bk => bk.bookId === bookId);                         //Object.values (books(bookId));
        console.log (findBookById);
    },
    printAllBooks () {
        console.log (books);
    }


}

// Додаємо новi об'єкти до масиву books:

library.addBook ("Book1", "Author1", 2015, 1);
library.addBook ("Book2", "Author2", 2017, 2);
library.addBook ("Book3", "Author3", 2019, 3);
// console.log(books);

// Виводимо всю інформацію (ім'я, автор, рік) книжки за зазначеним айді:

library.printBookInfo (2);
console.log(`------------`);

//  Виводимо інформацію про всі книжки в наявності(їх ім'я, авторів, роки та айді):

library.printAllBooks();