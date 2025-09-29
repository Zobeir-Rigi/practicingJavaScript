const obj = {name: "Zobeir", age :"33", city:"London" }
// const {name:first}=obj
// const {age:second}=obj

const{age, city}=obj
console.log(city)

const arr = [1,2,3,4,5]
// const first = arr[0]
// const second = arr[1]

const[first,second,...other]=arr
console.log(other)
console.log(...arr, second)

function destruct([first, second]){
    console.log(first, second)
}
destruct(arr)

