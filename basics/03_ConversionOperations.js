//                                       *************    Conversion     ************

let score = "33abc"
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof (valueInNumber));
console.log(score);
console.log(valueInNumber);

let value  = null
console.log(value);
let valueINnumber = Number(value)
console.log(valueINnumber);

/*
     "33" => 33
     "33abc" => Nan               it means not a number ( this will show when we not writing a valid number)
     undefined => Nan              this means when any number is not defined then it is showing 
     null => null
     true => 1 and false => 0


     "" => false                empty string always show a false value 
     "akash" => true            when we any string then it gives a true value
*/

console.log("now we are going to check a conversion for a boolean value ");

let isLogeedIn = 1
let boleanIsLoggedIn = Boolean(isLogeedIn)
console.log(boleanIsLoggedIn);

console.log("now we going for string conversion");
let num = 33
let stringNum = String(num)
console.log(stringNum)
console.log(typeof stringNum);


//                                        ***********   Operations    *************

let number = 3
let negNumber = -number 
console.log(negNumber);

console.log(1+1);
console.log("1" + 2 + 2);             // when we first right string then adding a value then it will actually not adding any value it will do a concatenation
console.log(2 + 1 + "2");            // here when we first right a number and then add a string then it will be adding a number 

// because this is a rule in ecma script that when u right first a string then it will concate... and if u write a number first and then add a string then it will add a value


