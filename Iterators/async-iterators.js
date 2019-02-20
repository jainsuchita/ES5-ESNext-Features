const createStore = require("./fake-store-async");

const store = createStore();

// Iterator

const customers = {
    [Symbol.iterator]: function () {
        let i = 0;
        return {
            next: async function () {
                i++;
                const customer = await store.get("customer", i);

                if (!customer) {
                    return { done: true }
                }

                customer.foods = await store.get("food", i);
                return { value: customer, done: false }
            }
        }
    }
}

    ; (async function () {

        let itr = customers[Symbol.iterator]();

        console.log(await itr.next());
        console.log(await itr.next());
        console.log(await itr.next());
        console.log(await itr.next());
        // for await (const cust of customers) { // Node js 9
        //     console.log(cust);
        // }
    })();

// console.log(customers[Symbol.iterator]().next());
// customers.next();
