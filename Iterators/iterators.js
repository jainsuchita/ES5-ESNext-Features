const dragons = ['cool dragon', 'angry dragon', 'nasty dragon']

const iterator = dragons[Symbol.iterator]()
// console.log(iterator.next()); // { value: 'cool dragon', done: false }
// console.log(iterator.next()); // { value: 'angry dragon', done: false }
// console.log(iterator.next()); // { value: 'nasty dragon', done: false }
// console.log(iterator.next()); // { value: undefined, done: true }

// What we did above is that the for..of loop does under the hood,
// It takes the iterator of an Array and do the iterations
for (const dragon of dragons) {
    // console.log(dragon);

    // cool dragon
    // angry dragon
    // nasty dragon
}

// The reason that this is an interface is so that we can iterate many other things than arrays -
// in JavaScript, Strings, Sets, Maps, the DOM NodeList, all provide iterators so that we can
// loop them in for ... of. However, we can also make our own custom object iterable - let me
// show you how to do that.

const makeDragon = require('./make-dragon');

// let's implement our iterator

const dragonArmy = {
    [Symbol.iterator]: () => {
        return {
            next: () => {
                const enoughDragonsSpawned = Math.random() > 0.75
                if (!enoughDragonsSpawned)
                    return {
                        value: makeDragon(),
                        done: false
                    }
                return { done: true }
            }
        }
    }
}
for (const dragon of dragonArmy) {
    console.log(dragon);
}


