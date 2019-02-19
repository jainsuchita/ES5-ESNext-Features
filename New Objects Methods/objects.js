// This methods aims to help comparing values.
Object.is(a, b)

// The result is always false unless:

// a and b are the same exact object
// a and b are equal strings(strings are equal when composed by the same characters)
// a and b are equal numbers(numbers are equal when their value is equal)
// a and b are both undefined, both null, both NaN, both true or both false

// ***************************************************

Object.assign()
// Its primary use case is to create a shallow copy of an object.
// Being a shallow copy, values are cloned, and objects references are copied(not the objects themselves),


const original = {
    name: 'Fiesta',
    car: {
        color: 'blue'
    }
}
const copied = Object.assign({}, original)

original.name = 'Focus'
original.car.color = 'yellow'

copied.name //Fiesta
copied.car.color //yellow


// one or more objects can be copied..
const wisePerson = {
    isWise: true
}
const foolishPerson = {
    isFoolish: true
}
const wiseAndFoolishPerson = Object.assign({}, wisePerson, foolishPerson)

console.log(wiseAndFoolishPerson) //{ isWise: true, isFoolish: true }


// ******************************************************************
Object.setPrototypeOf()

Object.setPrototypeOf(object, prototype)

// Example

const animal = {
    isAnimal: true
}
const mammal = {
    isMammal: true
}

mammal.__proto__ = animal
mammal.isAnimal //true

const dog = Object.create(animal)

dog.isAnimal  //true
console.log(dog.isMammal)  //undefined

Object.setPrototypeOf(dog, mammal)

dog.isAnimal //true
dog.isMammal //true
