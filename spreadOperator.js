let arr = [1,2,3,4]
let arr2 = [4, 5, 6, ...arr]
console.log(arr2) // [1, 2, 3, 4, 5, 6]

let obj = {a:1, b:2}
let obj2 = {c:3, d:4, ...obj}
console.log(obj2) // {a: 1, b: 2, c: 3, d: 4}

function sum(x, y, z) {
    return x + y + z;
}

let numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

let arr3 = [0, ...arr, 5]
console.log(arr3) // [0, 1, 2, 3, 4, 5]

let obj3 = {a:0, ...obj, c:3}
console.log(obj3) // {a: 0, b: 2, c: 3}

let str = "hello"
let chars = [...str]
let str1 = str.split('')
console.log(str1) // ['h', 'e', 'l', 'l', 'o']
console.log(chars) // ['h', 'e', 'l', 'l', 'o']

let arr4 = [1, 2, 3]
let arr5 = [...arr4, 4, 5, 6]
console.log(arr5) // [1, 2, 3, 4, 5, 6]

var fruits = ["Apples", "Oranges", "Bananas"];
console.log("Mangoes", ...fruits);
