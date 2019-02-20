/* Object.values()

This method returns an array containing all the object own property values */

let person = { name: 'Fred', age: 87 }
console.log(Object.values(person)) // ['Fred', 87]


// Object.entries()

// This method returns an array containing all the object own properties, as an array of[key, value] pairs.

person = { name: 'Fred', age: 87 }
console.log(Object.entries(person)) // [['name', 'Fred'], ['age', 87]]


// Object.getOwnPropertyDescriptors()

// This method returns all own(non - inherited) properties descriptors of an object.

/* A descriptor is a set of attributes of a property, and it’s composed by a subset of the following: 

value: the value of the property
writable: true the property can be changed
get: a getter function for the property, called when the property is read
set: a setter function for the property, called when the property is set to a value
configurable: if false, the property cannot be removed nor any attribute can be changed, except its value
enumerable: true if the property is enumerable */

const person1 = {
    set name(newName) {
        console.log(newName)
    }
}

const person2 = {}
Object.defineProperties(person3,
    Object.getOwnPropertyDescriptors(person1))

// person2.name = 'x'
// "x"
