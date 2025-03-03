// all about dates in js 
let myDate = new Date()  // here what we create we create an object and its instance
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);



let myCreatedDate = new Date(2003, 7, 31, 5,30)
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())



let myCreatedDate2 = new Date("2023-01-31")   // date format YY_MM_DD
console.log(myCreatedDate2.toLocaleDateString())

let myCreatedDate3 = new Date("07-31-2003")    // date format MM_DD_YY
console.log(myCreatedDate3.toLocaleString())



/*      In JavaScript, a timestamp is a number that represents the current date and time in milliseconds since January 1, 1970 (UTC).
        👉 It is often used to measure time, compare dates, or create unique IDs.


        Timestamps in JavaScript are used in many platforms, including:

        👉 Web apps – To track time, show dates, and sort data.
        👉 Backend servers – To store logs, schedule tasks, and manage databases.
        👉 Databases – To save timestamps for records (e.g., user sign-ups, messages).
        👉 APIs – To send date-related data between systems.
        👉 Blockchain & Security – To verify transaction times.

        In short, timestamps help track and manage time everywhere in tech! ⏳🚀
        👉 Type: number (integer)
        👉 Unit: Milliseconds
*/

const mytimestamp = Date.now()  //a timestamp gives a number (integer) representing milliseconds
console.log(mytimestamp)  

console.log(myCreatedDate.getTime())    // getTime convert a date value into a milisecond for comparison
console.log(Math.floor(Date.now()/1000))  // this gives a value into a seconds

mydate.toLocaleString('default',       //toLocaleString(locale, options) formats dates/times based on language & region.
    { 
    weekday: "long" 
    }
)


/*
How It Works:
new Date("2025-03-04") → Creates a date object for March 4, 2025.
toLocaleString('default', { weekday: "long" }) → Extracts only the full name of the weekday.
'default' → Uses the system/browser's default language (e.g., English if your system is in English).
{ weekday: "long" } → Returns the full day name ("Monday", "Tuesday", etc.).
*/