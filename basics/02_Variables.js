const accountId = 14453;
let accountEmail = "akash@gmail.com"
var accountPassword = "Mi3234@"
accountCity = "Jaipur"

/*





Scope:

var is function-scoped (accessible throughout the function).
let is block-scoped (only accessible within the enclosing {} block).
Hoisting:

var is hoisted and initialized with undefined.
let is hoisted but not initialized (accessing it before declaration causes a ReferenceError).
Re-declaration:

var allows re-declaration within the same scope.
let does not allow re-declaration in the same scope.



prefer not to use var 
because of issue in block scope and functional scope

*/

console.log(accountId);

accountEmail = "mishra@gmail.com"
accountPassword = "139i4@"
accountCity = "Chandigarh"
console.table([accountId,accountEmail, accountPassword, accountCity]);
