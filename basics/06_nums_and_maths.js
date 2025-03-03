let score = 400
console.log(score);
const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));    // here we pass a precision value 

const OtherNumber = 123.8943
console.log(OtherNumber.toPrecision(3));
const otherNumer1 = 123.98786
console.log(otherNumer1.toPrecision(5));       

const OtherNumber2 = 1324.8730
console.log(OtherNumber2.toPrecision(3));        // it always gives priority to before the decimal number or if the precision is before the decimal and some number is left before the decimal after the precision then it will give in exponential

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));   // it is used to format dates and numbers based on the user's local language and region settings.



//               ++++++++++++++++++            Maths               +++++++++++++++++++

//      maths library is bydefault comes with javascipt
console.log(Math);
console.log(Math.abs(-4));      // Math.abs() is used to get the absolute value of a number. 👉 It removes the negative sign and returns only the positive value.
console.log(Math.round(4.3));
console.log(Math.round(4.6));

console.log(Math.ceil(4.2));   //Returns the smallest integer greater than or equal to its numeric argument.
console.log(Math.floor(4.9));  //Returns the greatest integer less than or equal to its numeric argument.

console.log(Math.sqrt(4));

console.log("the min value that present in the array (4,2,6,8) is : ",Math.min(4,2,6,8));
console.log("the max value that present in the array (4,2,6,8) is : ",Math.max(4,2,6,8));

let num = Math.random();
console.log(num);
console.log(`math.random always gives a value between 0 and 1 as here it gives an value ${num} `)

let num1 = (Math.random()*10 )+ 1;   // here we writing +1 to avoit the value 0.0119382493 if something to like 0.01*10 = 0.1 for this type of value
console.log(`it also gives an value between any numbers here i multiplied the Math.random()*10 then now it will give a value between 0 to 10
u can see here it gives an value : ${num1}`);


console.log(Math.floor(num1))

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max - min + 1) + min))  // we writing max - min for defining range and +1 is for avoiding 0 value cases 