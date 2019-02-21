// Array.prototype.{ flat, flatMap }

['Dog', ['Sheep', 'Wolf']].flat() //[ 'Dog', 'Sheep', 'Wolf' ]

['Dog', ['Sheep', ['Wolf']]].flat() // Only one level flat
//[ 'Dog', 'Sheep', [ 'Wolf' ] ]

['Dog', ['Sheep', ['Wolf']]].flat(2)
//[ 'Dog', 'Sheep', 'Wolf' ]

['Dog', ['Sheep', ['Wolf']]].flat(Infinity)
//[ 'Dog', 'Sheep', 'Wolf' ]

// Flat Map
['My dog', 'is awesome'].map(words => words.split(' '))
//[ [ 'My', 'dog' ], [ 'is', 'awesome' ] ]

['My dog', 'is awesome'].flatMap(words => words.split(' '))
//[ 'My', 'dog', 'is', 'awesome' ]

// **********************************************************************

// Optional catch binding

try {
    //...
} catch (e) {
    //handle error
}

// Even if we never had to use e to analyze the error.We can now simply omit it:

try {
    //...
} catch {
    //handle error
}



// ****************************Object.fromEntries()******************************************

const person = { name: 'Fred', age: 87 }
const entries = Object.entries(person) // [['name', 'Fred'], ['age', 87]]


// it can create a new object from such array of properties:
const newPerson = Object.fromEntries(entries)

person !== newPerson //true


// ****************************String.prototype.{trimStart,trimEnd}******************************************

/* trimStart()

Return a new string with removed white space from the start of the original string */

'Testing'.trimStart() //'Testing'
' Testing'.trimStart() //'Testing'
' Testing '.trimStart() //'Testing '

/* trimEnd()

Return a new string with removed white space from the end of the original string */

'Testing'.trimEnd() //'Testing'
' Testing'.trimEnd() //' Testing'
' Testing '.trimEnd() //' Testing'
'Testing '.trimEnd() //'Testing'


//*************************Symbol.prototype.description***************************************

// You can now retrieve the description of a symbol by accessing its description property instead of having to use the toString() method:

const testSymbol = Symbol('Test')
testSymbol.description // 'Test'

