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
maths library default comes with js



