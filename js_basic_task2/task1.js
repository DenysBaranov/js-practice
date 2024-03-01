let baseIncome
let tax;
let incomeAfterTax;

if (baseIncome<10000){
    tax = 5;
    incomeAfterTax = baseIncome - ((baseIncome/100)*tax);
    } else if (baseIncome>=10000 && baseIncome<=50000){
        tax = 10;
        incomeAfterTax = baseIncome - ((baseIncome/100)*tax);
    } else if (baseIncome>50000 && baseIncome<=100000){
        tax = 15;
        incomeAfterTax = baseIncome - ((baseIncome/100)*tax);
    } else if (baseIncome>100000 && baseIncome<=200000){
        tax = 20;
        incomeAfterTax = baseIncome - ((baseIncome/100)*tax);
    } else if (baseIncome>200000){
        tax = 25;
        incomeAfterTax = baseIncome - ((baseIncome/100)*tax);
    }


    console.log(`Base income:${baseIncome}`);
    console.log(`Tax:${tax}%`);
    console.log(`Income after tax:${incomeAfterTax}`);
