console.log(typeof(null))
console.log(typeof(undefined))

console.log(typeof(NaN))

console.log(typeof([]))

console.log(typeof({}))

console.log(typeof(function(){}))

console.log(typeof(true))
console.log(typeof(false))

// type are dynamic in javascript vs static in other languages like java, c, c++, c# etc
// we can change the type of variable at any time
let a = 10
console.log(typeof(a))
a = "hello" 
// but in java, c, c++ etc we cannot change the type of variable once defined

// nan type mean not a number and it is of type number, and also it has a function isNaN() to check if a value is NaN or not
console.log(isNaN(NaN)) // true
console.log(isNaN(10)) // false
