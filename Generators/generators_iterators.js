const makeDragon = require('../Iterators/make-dragon');

const dragonArmy = {
    [Symbol.iterator]: function* () {
        while (true) {
            const enoughDragonsSpawned = Math.random() > 0.75
            if (enoughDragonsSpawned) return;
            yield makeDragon();
        }
    }
}

for (const dragon of dragonArmy) {
    console.log(dragon);
}

// or 

function* someDragons() {
    while (true) {
        const enoughDragonsSpawned = Math.random() > 0.75;
        if (enoughDragonsSpawned) return;
        yield makeDragon();
    }
}

const dragon_iterator = someDragons();
console.log(dragon_iterator.next());
console.log(dragon_iterator.next());

/* const dragonArmy = {
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
} */




