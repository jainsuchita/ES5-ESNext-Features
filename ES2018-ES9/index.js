// Rest / Spread Properties

// ES2015
// Rest 
let numbers = [1, 2, 3, 4, 5]
let [first, second, ...others] = numbers

console.log(first); // 1
console.log(second); // 2
console.log(others); // [3, 4, 5]


// Spread

numbers = [1, 2, 3, 4, 5]
const sum = (a, b, c, d, e) => a + b + c + d + e
const sumFunction = sum(...numbers)


// ES2018
// Same but for objects

// Rest properties:
const person = { firstP: 1, secondP: 2, third: 3, fourth: 4, fifth: 5 }
let { firstP, secondP, ...othersP } = person

console.log(firstP); // 1
console.log(secondP); // 2
console.log(othersP); // { third: 3, fourth: 4, fifth: 5 }


// Spread
const items = { firstP, secondP, ...othersP }
console.log(items) //{ firstP: 1, secondP: 2, third: 3, fourth: 4, fifth: 5 }
