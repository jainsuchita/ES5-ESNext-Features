// A Map data structure allows us to associate data to a key.

// Initialize 
const m = new Map();

// Add items to a Map

m.set('color', 'red')
m.set('age', 2)

// Get an item from a map by key

const color = m.get('color')
const age = m.get('age')

// Delete an item from a map by key
m.delete('color')

// Delete all items from a map
m.clear()

// Check if a map contains an item by key
const hasColor = m.has('color')

// Find the number of items in a map
const size = m.size

// Initialize a map with values
const m = new Map([['color', 'red'], ['owner', 'Flavio'], ['age', 2]])


// Iterate over map keys
for (const k of m.keys()) {
    console.log(k)
}

// Iterate over map values
for (const v of m.values()) {
    console.log(v)
}

// Iterate over map key, value pairs
for (const [k, v] of m.entries()) {
    console.log(k, v)
}
