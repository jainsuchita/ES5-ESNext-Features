// A class definition

class Person {
    constructor(name) {
        this.name = name
    }

    hello() {
        return 'Hello, I am ' + this.name + '.'
    }
}

const flavio = new Person('Flavio');

console.log(flavio.hello()); //'Hello, I am Flavio.'


// Class inheritance

class Programmer extends Person {
    hello() {

        // Inside a class, you can reference the parent class calling super().
        return super.hello() + ' I am a programmer.'
    }
}

const flavioPro = new Programmer('Flavio');

console.log(flavioPro.hello()); // Hello, I am Flavio. I am a programmer.


// Static methods
// Static methods are executed on the class
class Person {
    static genericHello() {
        return 'Hello'
    }
}

Person.genericHello() //Hello
