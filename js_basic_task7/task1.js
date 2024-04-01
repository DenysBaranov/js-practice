// Створити 3 об'єкти через {}, кожен об'єкт повинен мати як мінімум 3 властивості і 2 методи.

// Приклади об'єктів: person, car, book, phone, city, building etc...


// Object 1

const car = {
    brand : "Volswagen",
    model : "Golf",
    year : 2014,
    mileage (distance){
        console.log (`This car has covered distance ${distance} km`);
    },
    price (price){
        console.log(`Car price ${price}$`);
    },
}

car.mileage(150000);
car.price(7500);
console.log(car.brand, car.model, car.year);
console.log (`------------`);

// Object 2

const phone = {
    homePhone : 12345,
    workPhone : 67890,
    mobilePhone : +3801234567,
    mobileOperator : "Vodafone",
    call (){
        console.log (`Better call this number ${this.mobilePhone}`);
    },
    operator (){
        console.log (`It is ${this.mobileOperator}`);
    },
}

phone.operator();
console.log (phone.mobilePhone);
console.log (`------------`);

// Object 3

const person = {
    firstName : "John",
    lastName : "Doe",
    age : 25,
    sayHello(){
        console.log (`Hello ${this.firstName} ${this.lastName}`);
    },
    sayBye(){
        console.log (`Bye ${this.firstName}`);
    },
}

console.log(`This is ${person.firstName}`);
person.sayHello();