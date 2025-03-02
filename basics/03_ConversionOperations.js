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






