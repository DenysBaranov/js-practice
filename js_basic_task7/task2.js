// Створити 2 об'єкти через new Object();, до кожного об'єкту додати як мінімум 3 властивості та 1 метод.

// Приклади об'єктів: person, car, book, phone, city, building etc...

// Object 1

const person = new Object();
person.fname = "John";
person.lname = "Doe";
person.age = 27;
person.hi = function () {
    console.log(`His name is ${person.fname} ${person.lname} He is ${person.age} years old`);
}

person.hi();
console.log(`------------`);

// Object 2

const fruits = new Object();
fruits.cherry = 5;
fruits.apple = 3;
fruits.banana = 7;

fruits.count = function() {
    console.log(`We have ${fruits.cherry} red fruits, ${fruits.apple} green and ${fruits.banana} yellow fruits.
    The total quantity is ${fruits.cherry+fruits.apple+fruits.banana}`);
};

fruits.count();
