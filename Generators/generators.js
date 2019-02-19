// Generators are a special kind of function with the ability to pause itself, and resume later, allowing other code to run in the meantime.
const fetch = require("node-fetch");
const co = require("co");

// fetch("http://jsonplaceholder.typicode.com/posts/1")
//     .then(response => response.json())
//     .then(post => post.title)
//     .then((x) => {
//         console.log("Title: ", x);
//     })

// co(function* () {
//     const uri = "http://jsonplaceholder.typicode.com/posts/1";
//     const response = yield fetch(uri);
//     const post = yield response.json();
//     const title = post.title;
//     console.log("Title: ", title);
// })

// OR

ownFunction(function* () {
    const uri = "http://jsonplaceholder.typicode.com/posts/1";
    const response = yield fetch(uri);
    const post = yield response.json();
    const title = post.title;
    console.log("Title: ", title);
})

function ownFunction(generator) {
    const iterator = generator();
    const iteration = iterator.next();
    const promise = iteration.value;
    promise.then(x => {
        const anotherPro = iterator.next(x);
        anotherPro.value.then((x) => iterator.next(x))
    })

    // console.log(iterator.next())

}
