// ES2015 introduced the for-of loop, which combines the conciseness of 'forEach' with the ability to break:

//iterate over the value
for (const v of ['a', 'b', 'c']) {
    console.log(v); // a b c
}


//get the index as well, using `entries()`

for (const [i, v] of ['a', 'b', 'c'].entries()) {
    console.log(i) //index
    console.log(v) //value
}

// *******************************
// Map
// map-example.js
const iterable = new Map([['one', 1], ['two', 2]]);

for (const [key, value] of iterable) {
    console.log(`Key: ${key} and Value: ${value}`);
}

// Output:
// Key: one and Value: 1
// Key: two and Value: 2

// *****************************************
// Set

// The Set object allows you store unique values of any type, which could be primitive values or objects
// if you create a set that has the same element more than once, it is still considered as a single element.

const iterable = new Set([10, 10, 20, 20, 10]);

for (const value of iterable) {
    console.log(value);
}
// Output:
// 1
// 2

// *****************************
// Objects

const obj = { fname: 'foo', lname: 'bar' };

for (const value of obj) { // TypeError: obj[Symbol.iterator] is not a function
    console.log(value);
}

// we can by pass this as:
const obj = { length: 3, 0: 'foo', 1: 'bar', 2: 'baz' };

const array = Array.from(obj);
for (const value of array) {
    console.log(value);
}
// Output:
// foo
// bar
// baz


// **********************************************
// The difference with for...in is:

// for...of iterates over the property values
// for...in iterates the property names

// For...of doesn't considered non-enumerable properties of the constructor's prototype. It simply just looks for the enumerable properties and prints it out.

// For...in doesn't only enumerate the array declaration above, it also looks for inherited non-enumerable properties from the constructor's prototype.

for (const v in ['a', 'b', 'c']) {
    console.log(v); // 0 1 2 
}


for (const v of ['a', 'b', 'c']) {
    console.log(v); // a b c
}

//for-in-example.js
Array.prototype.newArr = () => { };
Array.prototype.anotherNewArr = () => { };
const array = ['foo', 'bar', 'baz'];

for (const value in array) {
    console.log(value);
}
// Outcome:
// 0
// 1
// 2
// newArr
// anotherNewArr

// **************************

// For.. of example
Array.prototype.newArr = () => { };
const array = ['foo', 'bar', 'baz'];

for (const value of array) {
    console.log(value);
}
// Outcome:
// foo
// bar
// baz


