console.log(null == 0);
console.log(null <= 0);
console.log(null >= 0);

console.log(null > 0) 

// a conversion of same data type gives a valid result but when we write a conversion of different data type then a value conversion problem is arrise and it gives a unpredictable result 
/*
    The reason is that an equality check == and comparisons > < >= <= work differently. 
    Comparisons convert null to a number, treating it as 0. 
    That's why (3) null >= 0 is true and (1) null > 0 is false
*/

console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 0); // when we comparing undefind with anyone it always give a false value


// when we check with  === then it means it will check strictly means it will not only check a value also it will check a datatype of the values