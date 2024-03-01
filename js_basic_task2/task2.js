let basicCost = 10000;
let addedCost;
let finalPrice;

let carYear = 2021
let carMileage = 70000;
let hasClimate = "Yes";
let securityPack = "Yes";
let electricCar = "Yes";

let message = "Car does not meet the stated criteria for changing the base price";


// If the car year is from 2019 to 2022 + 10% to the price 
if (carYear>=2019 && carYear<=2022){
    addedCost = ((basicCost/100)*10);
    finalPrice = (basicCost + addedCost);

    console.log(`1. Base price was ${basicCost}, if car has year-made 2019-2022 +${addedCost} to the final price`);
    console.log(`Final price is ${finalPrice}`);
} else {
    console.log(`1. ${message}`);
}


// If the car's mileage is from 50,000 km to 100,000 km - 5% of the price
if (carMileage>=50000 && carMileage<=100000){
    addedCost = ((basicCost/100)*5);
    finalPrice = (basicCost - addedCost);

    console.log(`2. Base price was ${basicCost}, if car has mileage from 50,000 km to 100,000 km -${addedCost} from the final price`);
    console.log(`Final price is ${finalPrice}`);
} else{
    console.log(`2. ${message}`); 
}


// If the car has climate control + 7% to the price
if(hasClimate){
    addedCost = ((basicCost/100)*7);
    finalPrice = (basicCost + addedCost);

    console.log(`3. Base price was ${basicCost}, if car has climate control +${addedCost} to the final price`);
    console.log(`Final price is ${finalPrice}`);
} else{
    console.log(`3. ${message}`);
}


// If the car with an additional security package +8% to the price
if(securityPack){
    addedCost = ((basicCost/100)*8);
    finalPrice = (basicCost + addedCost);
    
    console.log(`4. Base price was ${basicCost}, if car with an additional security package +${addedCost} to the final price`);
    console.log(`Final price is ${finalPrice}`);
} else{
    console.log(`4. ${message}`);
}


// If an electric car +15% to the price
if(electricCar){
    addedCost = ((basicCost/100)*15);
    finalPrice = (basicCost + addedCost); 

    console.log(`5. Base price was ${basicCost}, if the car is an electric car +${addedCost} to the final price`);
    console.log(`Final price is ${finalPrice}`);
} else{
    console.log(`5. ${message}`);
}


















