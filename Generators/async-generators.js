function randomData() {

    function fetchData() {
        return fetch("http://jsonplaceholder.typicode.com/posts/1")
            .then(response => response.json())
            .then(post => post.title)
            .then((x) => {
                console.log(x);
            })
    }

    return {
        [Symbol.asyncIterator]: async function* () {
            while (true) {
                let data = await fetchData();
                for (const d of data) {
                    yield d;
                }

            }

        }
    }
}

const its = randomData();
console.log(its);
