
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
            return tables[table][id]
        }
    }
}

module.exports = createStore;
