// Instead of doing

const something = 'y'
const x = {
    something: something
}

// you can do

const something = 'y'
const x = {
    something
}

// *************************************
// Prototype

const anObject = { y: 'y' }
const x = {
    __proto__: anObject
}

// *************************************
// super()
const anObject = { y: 'y', test: () => 'zoo' }

const x = {
    __proto__: anObject,
    test() {
        return super.test() + 'x'
    }
}

x.test() //zoox

// *************************************
// Dynamic properties

const x = {
    ['a' + '_' + 'b']: 'z'
}

x.a_b //z

