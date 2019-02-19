let done = true

// Create a promise
const isItDoneYet = new Promise((resolve, reject) => {
    if (done) {
        const workDone = 'Here is the thing I built'
        resolve(workDone)
    } else {
        const why = 'Still working on something else'
        reject(why)
    }
})

// Consume a promise
const checkIfItsDone = () => {
    isItDoneYet
        .then(ok => {
            console.log(ok)
        })
        .catch(err => {
            console.error(err)
        })
}


// Fetch API example (chaining)

const status = response => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    }
    return Promise.reject(new Error(response.statusText))
}

const json = response => response.json()

fetch('/todos.json')
    .then(status)
    .then(json)
    .then(data => {
        console.log('Request succeeded with JSON response', data)
    })
    .catch(error => {
        console.log('Request failed', error)
    })


// Promise.all()

// execute something when they are all resolved

const f1 = fetch('/something.json')
const f2 = fetch('/something2.json')

Promise.all([f1, f2])
    .then(res => {
        console.log('Array of results', res)
    })
    .catch(err => {
        console.error(err)
    })


// Promise.race()
// runs as soon as one of the promises you pass to it resolves, and it runs the attached callback just once with the result of the first promise resolved.

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one')
})
const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two')
})

Promise.race([promiseOne, promiseTwo]).then(result => {
    console.log(result) // 'two'
})
