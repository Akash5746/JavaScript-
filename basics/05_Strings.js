let name = "akash"
let repoCount = 6
console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}` );   // this ` ` method of concatenation is called string interpolation

const gameName = new String('Akash-5757') // it is a second method of declaring string in js 
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.length);

console.log(gameName.charAt(3));     // charAt Gives the letter at a specific position.
console.log(gameName.indexOf('s'));  // indexOf Tells where a letter first appears.

const newString = gameName.substring(0,3)   // last value will not included { Treats negative values as 0.}
console.log(newString);
const anotherString = gameName.slice(-8, 4)   // in slice we also can pass a negative value  {Accepts negative values (counts from the end).}
console.log(anotherString);

const newStringOne = "         Hello         "
console.log(newStringOne);
console.log(newStringOne.trim());    // trim is used to remove starting and ending whitespaces

const newStringTwo = "      hello             world         "
console.log(newStringTwo.trim());

const url = "https://akash.com/akash%20@mishra"
console.log(url.replace('%20','_'));

console.log(url.includes('akash')); // includes is used for to check a string is present or not

const gameName2 = "Hello-my-name-is-akash"
console.log(gameName2.split('-'));
