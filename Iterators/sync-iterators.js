const createStore = require("./fake-store-sync");

const store = createStore();

// Iterator

const customers = {
    [Symbol.iterator]: function () {
        let i = 0;
        return {
            next: function () {
                i++;
                const customer = store.get("customer", i);

                if (!customer) {
                    return { done: true }
                }

                customer.foods = store.get("food", i);
                return { value: customer, done: false }
            }
        }
    }
}

for (const cust of customers) {
    console.log(cust);
}
console.log(customers[Symbol.iterator]().next());
// customers.next();
