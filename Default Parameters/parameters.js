const doSomething = (param1 = 'test', param2 = 'test2') => {

}

// Once upon a time

let colorize = (options) => {
    if (!options) {
        options = {}
    }

    const color = ('color' in options) ? options.color : 'yellow'

}

// Current World
// destructuring you can provide default values,
colorize = ({ color = 'yellow' }) => {
    return color;
}

console.log(colorize({ name: 'Suchita' }));


// If no object is passed when calling our colorize function, similarly we can assign an empty object by default

const spin = ({ color = 'yellow' } = {}) => {
    return color;
}

console.log(spin());
