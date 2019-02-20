
const tables = {
    customer: {
        1: { name: "John" },
        2: { name: "Kim" },
        3: { name: "Blah" }
    },
    food: {
        1: ["cake", "waffle"],
        2: ["coffee"],
        3: ["apple", "grapes"]
    }
}

function createStore() {
    return {
        get: (table, id) => {
            return delay(50).then(() => {
                return tables[table][id]
            })
        }
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

module.exports = createStore;
