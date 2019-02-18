const car = {
    model: 'Fiesta',
    manufacturer: 'Ford',
    fullName: function () {
        return `${this.manufacturer} ${this.model}`
    }
}

console.log(car.fullName()); // "Ford Fiesta"

// An arrow function does not bind 'this' at all, so its value will be looked up in the call stack.

const car = {
    model: 'Fiesta',
    manufacturer: 'Ford',
    fullName: () => {
        return `${this.manufacturer} ${this.model}`
    }
}

console.log(car.fullName()); // "undefined undefined"

/*
Due to this, arrow functions are not suited as object methods.

Arrow functions cannot be used as constructors either, when instantiating an object will raise a TypeError.

This is where regular functions should be used instead, when dynamic context is not needed.
*/

const link = document.querySelector('#link')
link.addEventListener('click', () => {
    // this === window
})

const link = document.querySelector('#link')
link.addEventListener('click', function () {
    // this === link
})
