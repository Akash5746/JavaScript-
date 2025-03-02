/*                          ***    Primitive datatypes   ***
In JavaScript, primitive data types are the fundamental building blocks of data.
These types are immutable (cannot be changed) and are stored by value. JavaScript has 7 primitive data types:

primitive data types are the call by value
means when we copied this datatypes values then it will actually gives a copied value not an actual value means 
inka memory ka reference hame nahi diya jata hai inki value ko copy krke diya jata hai hame it means jo bhi ham changes krte hai wo copy me hote hai
        Number            →        42, 3.14 (integers & floats)
        String            →        "Hello" (text values)
        Boolean           →        true, false (logical values)
        Undefined         →        let x; (unassigned variable)
        Null              →        let y = null; (intentional empty value)             it means null nor means empty or 0
        Symbol            →        Symbol('id') (unique identifiers)
        BigInt            →        123456789n (large numbers beyond Number.MAX_SAFE_INTEGER)

*/

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

/*                          ***  Non Primitive datatypes or Refernce type   ***


In JavaScript, non-primitive data types (also called reference types) are mutable and stored by reference. They include:

        Object → { name: "Akash", age: 22 } (key-value pairs)
        Array → [1, 2, 3, 4] (ordered list)
        Function → function greet() {} (reusable block of code)
        Date → new Date() (date & time handling)
        RegExp → /pattern/ (regular expressions)
 */

let heroes = ["Shaktiman ", " Nagraj", "Doga"]         // this is the array example
let myobj = {             // we declare object inside the curly braces{}
        name : "Akash",
        age  : 21,
}

const myfunction = function(){
        console.log("hello akash");
}


/*


             Type of val	                       Result
        Undefined	                      "undefined"
        Null	                              "object"
        Boolean	                              "boolean"
        Number	                              "number"
        String	                              "string"
        Object                                (native and does not implement [[Call]])	        "object"
        Object                                (native or host and does implement [[Call]])	"function"
        Object                                n(host and does not implement [[Call]])	Implementation-defined except may not be
                                             "undefined", "boolean", "number", or "string".


*/
        