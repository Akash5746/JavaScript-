// there is 2 types of memory in javascript
/*
    stack (for Primitive datatypes ) and heap (for Non Primitive datatypes)
    means whenever we are using stack memory then hamne jo variable declare kiya hota hia uska copy milta hai
    and when memory is defining into the heap or any object or anything is declare in the heap 
        then waha se hame milta hai reference original value means tbh ham jo bhi change krenge wo hamare original value me hoga

*/
let myYoutubeName = "akashmi5746@gmail.com"
let anotherName = myYoutubeName
anotherName = "miakash@gmail.com"

console.log(myYoutubeName);
console.log(anotherName);    // this will print miakash@gmail.com because we provide a copy of myYoutubeName not a reference

let userOne = {
    email : "akashmi@gmai.com",
    upi   : "user@ybl"
}
let userTwo = userOne
console.log(userOne);
console.log(userTwo);
console.log("now print after changing in the reference variable value");

userTwo.email = "mi@gmail.com"

console.log("now here we print userOne after changing in the reference of the userTwo email",userOne);
console.log("now here we print userTwo ",userTwo);
console.log(userTwo.email);



