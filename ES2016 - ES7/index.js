// Array.prototype.includes()

// This feature introduces a more readable syntax for checking if an array contains an element.

// ES6
if (![1, 2].indexOf(3)) {
    console.log('Not found')
}

// ES7
if (![1, 2].includes(3)) {
    console.log('Not found')
}


// ************************************************************************

// Exponentiation Operator

// The exponentiation operator ** is the equivalent of Math.pow(), but brought into the language instead of being a library function.

Math.pow(4, 2) == 4 ** 2
