// Initialize a Set
const s = new Set()

// Add values
s.add('one')
s.add('two')

// A set only stores unique elements, so calling s.add('one') multiple times won't add new items.

// Check if an item is in the set
s.has('one') //true
s.has('three') //false

// Delete an item from a Set by key
s.delete('one')

// Determine the number of items in a Set
s.size

// Delete all items from a Set
s.clear()

// Iterate the items in a Set
for (const k of s.keys()) {
    console.log(k)
}

for (const k of s.values()) {
    console.log(k)
}

// Convert the Set keys into an array

const a = [...s.keys()] // Array [ "one", "two" ]

// or

const a = [...s.values()] // Array [ "one", "two" ]
